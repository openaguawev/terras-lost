import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

const hostname = 'https://www.dinorex.org';

async function generate() {
  const sitemapStream = new SitemapStream({ hostname });

  // Add Home page
  sitemapStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });

  // Read dinosaurs file to extract slugs dynamically
  const filePath = path.resolve('src/data/dinosaurs.ts');
  const content = fs.readFileSync(filePath, 'utf-8');
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  let match;
  const slugs = [];
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }

  // Add Individual Dinosaur pages
  for (const slug of slugs) {
    sitemapStream.write({ url: `/criaturas/${slug}`, changefreq: 'weekly', priority: 0.8 });
  }

  // Add Era Hub pages
  const eras = ['triasico', 'jurasico', 'cretacico'];
  for (const era of eras) {
    sitemapStream.write({ url: `/eras/${era}`, changefreq: 'weekly', priority: 0.6 });
  }

  // Add Habitat Hub pages
  const habitats = ['jungla', 'oceano', 'desierto', 'volcan'];
  for (const habitat of habitats) {
    sitemapStream.write({ url: `/habitats/${habitat}`, changefreq: 'weekly', priority: 0.6 });
  }

  sitemapStream.end();

  const sitemapXml = await streamToPromise(sitemapStream).then(sm => sm.toString());
  const destPath = path.resolve('public/sitemap.xml');
  fs.writeFileSync(destPath, sitemapXml);
  console.log(`Sitemap generated successfully in public/sitemap.xml! Total URLs: ${1 + slugs.length + eras.length + habitats.length}`);
}

generate().catch(err => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});
