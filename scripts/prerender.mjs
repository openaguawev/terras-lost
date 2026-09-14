import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

async function prerender() {
  const distPath = path.resolve('dist');
  const templatePath = path.join(distPath, 'index.html');

  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Run "vite build" first.');
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  // Load the SSR entry
  const ssrEntryPath = path.resolve('dist-ssr/entry-prerender.js');
  if (!fs.existsSync(ssrEntryPath)) {
    throw new Error('dist-ssr/entry-prerender.js not found. Run "vite build --ssr" first.');
  }

  const { render } = await import(pathToFileURL(ssrEntryPath).href);

  // Extract dinosaur slugs dynamically from src/data/dinosaurs.ts
  const dinosFile = path.resolve('src/data/dinosaurs.ts');
  const dinosContent = fs.readFileSync(dinosFile, 'utf-8');
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  let match;
  const dinoSlugs = [];
  while ((match = slugRegex.exec(dinosContent)) !== null) {
    dinoSlugs.push(match[1]);
  }

  const eras = ['triasico', 'jurasico', 'cretacico'];
  const habitats = ['jungla', 'oceano', 'desierto', 'volcan'];

  const routes = [
    '/',
    '/dinosaurios-argentinos',
    ...dinoSlugs.map(slug => `/criaturas/${slug}`),
    ...eras.map(era => `/eras/${era}`),
    ...habitats.map(habitat => `/habitats/${habitat}`)
  ];

  console.log(`Prerendering ${routes.length} routes...`);

  const assetFiles = fs.existsSync(path.join(distPath, 'assets'))
    ? fs.readdirSync(path.join(distPath, 'assets'))
    : [];
  const dinoCss = assetFiles.find(f => f.startsWith('DinosaurPage-') && f.endsWith('.css'));
  const eraCss = assetFiles.find(f => f.startsWith('EraHubPage-') && f.endsWith('.css'));
  const habitatCss = assetFiles.find(f => f.startsWith('HabitatHubPage-') && f.endsWith('.css'));
  const argentineCss = assetFiles.find(f => f.startsWith('ArgentineDinosaursHubPage-') && f.endsWith('.css'));

  let renderedCount = 0;

  for (const url of routes) {
    try {
      const { html: rawHtml } = render(url);

      // Extract title
      const titleMatch = rawHtml.match(/<title[^>]*>(.*?)<\/title>/);
      const title = titleMatch ? titleMatch[1] : 'DinoRex — Descubre el Mundo de los Dinosaurios';

      // Extract meta description
      const descMatch = rawHtml.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*\/?>/i);
      const description = descMatch ? descMatch[1] : '';

      // Extract all meta tags
      const metaTags = rawHtml.match(/<meta[^>]*\/?>/gi) || [];
      // Filter out description since we replace it directly
      const extraMetas = metaTags.filter(m => !m.includes('name="description"') && !m.includes("name='description'"));

      // Extract canonical link
      const canonicalMatch = rawHtml.match(/<link[^>]*rel=["']canonical["'][^>]*\/?>/i);
      const canonicalTag = canonicalMatch ? canonicalMatch[0] : '';

      // Extract JSON-LD scripts
      const schemaScripts = rawHtml.match(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi) || [];

      // Clean up body HTML: strip hoisted head elements
      let bodyHtml = rawHtml
        .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
        .replace(/<meta[^>]*\/?>/gi, '')
        .replace(/<link[^>]*rel=["']canonical["'][^>]*\/?>/gi, '')
        .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, '');

      // Match route-specific CSS chunk
      let routeCss = null;
      if (url.startsWith('/criaturas/')) routeCss = dinoCss;
      else if (url.startsWith('/eras/')) routeCss = eraCss;
      else if (url.startsWith('/habitats/')) routeCss = habitatCss;
      else if (url === '/dinosaurios-argentinos') routeCss = argentineCss;

      const routeCssTag = routeCss ? `<link rel="stylesheet" crossorigin href="/assets/${routeCss}">` : '';

      // Build head additions
      const headAdditions = [
        routeCssTag,
        ...extraMetas,
        canonicalTag,
        ...schemaScripts
      ].filter(Boolean).join('\n    ');

      // Replace in template
      let outputHtml = template;

      // Replace title
      if (outputHtml.includes('<title data-rh="true">')) {
        outputHtml = outputHtml.replace(/<title data-rh="true">.*?<\/title>/, `<title>${title}</title>`);
      } else {
        outputHtml = outputHtml.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
      }

      // Replace meta description
      if (description) {
        if (outputHtml.includes('name="description"')) {
          outputHtml = outputHtml.replace(
            /<meta[^>]*name=["']description["'][^>]*content=["'][^"']*["'][^>]*\/?>/i,
            `<meta name="description" content="${description.replace(/"/g, '&quot;')}" />`
          );
        }
      }

      // Insert extra head tags right before </head>
      if (headAdditions) {
        outputHtml = outputHtml.replace('</head>', `  ${headAdditions}\n  </head>`);
      }

      // Insert rendered app markup into #root
      outputHtml = outputHtml.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

      // Determine output filepath
      const filePath = url === '/'
        ? path.join(distPath, 'index.html')
        : path.join(distPath, url.replace(/^\//, ''), 'index.html');

      const fileDir = path.dirname(filePath);
      if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir, { recursive: true });
      }

      fs.writeFileSync(filePath, outputHtml, 'utf-8');
      renderedCount++;
      console.log(`✓ Prerendered [${renderedCount}/${routes.length}]: ${url} -> ${path.relative(distPath, filePath)}`);
    } catch (err) {
      console.error(`✗ Error prerendering route "${url}":`, err);
    }
  }

  // Clean up dist-ssr directory
  const ssrDir = path.resolve('dist-ssr');
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }

  console.log(`\n🎉 Prerendering complete! Successfully generated ${renderedCount} static HTML pages.`);
}

prerender().catch(err => {
  console.error('Fatal prerender error:', err);
  process.exit(1);
});
