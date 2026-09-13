import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  customSchema?: Record<string, unknown> | Record<string, unknown>[]
}

export default function SEO({
  title = 'DinoRex — Descubre el Mundo de los Dinosaurios',
  description = 'Explora los dinosaurios más fascinantes que jamás existieron. T-Rex, Velociraptor, Brachiosaurus y más. Historia, hábitats y datos increíbles.',
  keywords = 'dinosaurios, tyrannosaurus rex, velociraptor, brachiosaurus, dinosaurios carnivoros, dinosaurios herbivoros, criaturas prehistoricas, animales extintos',
  image = 'https://www.dinorex.org/og-image.jpg',
  url = 'https://www.dinorex.org',
  customSchema,
}: SEOProps) {
  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', description)
    }
  }, [description])

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content="DinoRex" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org */}
      {customSchema ? (
        Array.isArray(customSchema) ? (
          customSchema.map((schema, idx) => (
            <script
              key={idx}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))
        ) : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(customSchema) }}
          />
        )
      ) : (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "DinoRex",
              "url": "https://www.dinorex.org",
              "description": description,
              "inLanguage": "es"
            })
          }}
        />
      )}
    </>
  )
}

