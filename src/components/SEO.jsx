import { Helmet } from 'react-helmet-async'

const SEO = () => {
  const siteData = {
    title: "Hotel Jagdamb - Best Mutton Thali & Kala Rassa in Pune",
    description: "Experience authentic Maharashtrian cuisine at Hotel Jagdamb. Famous for our signature Mutton Thali, Bokad Mutton Thali, and Kala Rassa. Best traditional food in Pune.",
    keywords: "mutton thali, bokad mutton thali, kala rassa, pune restaurants, maharashtrian food, traditional thali, best mutton in pune, hotel jagdamb",
    url: "https://hoteljagdamb.com",
    image: "/images/mutton-thali.jpeg",
    type: "Restaurant",
    priceRange: "₹₹",
    cuisine: "Maharashtrian",
    address: {
      streetAddress: "Hotel Jagdamb",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411001",
      addressCountry: "IN"
    }
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Hotel Jagdamb",
    "image": siteData.image,
    "description": siteData.description,
    "address": {
      "@type": "PostalAddress",
      ...siteData.address
    },
    "priceRange": siteData.priceRange,
    "servesCuisine": siteData.cuisine,
    "menu": "https://hoteljagdamb.com/menu",
    "openingHours": "Mo-Su 11:00-23:00",
    "telephone": "+91-XXXXXXXXXX",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "500"
    }
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteData.title}</title>
      <meta name="title" content={siteData.title} />
      <meta name="description" content={siteData.description} />
      <meta name="keywords" content={siteData.keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteData.url} />
      <meta property="og:title" content={siteData.title} />
      <meta property="og:description" content={siteData.description} />
      <meta property="og:image" content={siteData.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteData.url} />
      <meta property="twitter:title" content={siteData.title} />
      <meta property="twitter:description" content={siteData.description} />
      <meta property="twitter:image" content={siteData.image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Hotel Jagdamb" />
      <link rel="canonical" href={siteData.url} />
    </Helmet>
  )
}

export default SEO 