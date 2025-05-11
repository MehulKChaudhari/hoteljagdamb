import { Helmet } from 'react-helmet-async'

const SEO = () => {
  const siteData = {
    title: "Hotel Jagdamb - Best Bokad Mutton Thali & Kala Rassa in Pune | Authentic Maharashtrian Restaurant",
    description: "Experience the best Bokad Mutton Thali in Pune at Hotel Jagdamb. Famous for authentic Maharashtrian cuisine, Kala Rassa, and traditional thalis. Best rated restaurant for mutton dishes in Pune.",
    keywords: "bokad mutton thali pune, best mutton thali pune, kala rassa pune, maharashtrian restaurant pune, traditional thali pune, best mutton in pune, hotel jagdamb pune, authentic maharashtrian food, mutton curry pune, navle bridge restaurant",
    url: "https://hoteljagdamb.com",
    image: "/images/mutton-thali.jpeg",
    type: "Restaurant",
    priceRange: "₹₹",
    cuisine: ["Maharashtrian", "Indian"],
    address: {
      streetAddress: "1st floor, Hotel Jagdamb, Navle Bridge",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411041",
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
    "telephone": "+919356646005",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.459063",
      "longitude": "73.823619"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasMenu": {
      "@type": "Menu",
      "name": "Hotel Jagdamb Menu",
      "description": "Authentic Maharashtrian cuisine featuring special thalis and traditional dishes",
      "offers": [
        {
          "@type": "MenuItem",
          "name": "Bokad Mutton Thali",
          "description": "Authentic Maharashtrian thali with mutton curry, bhakri, rice, and more",
          "offers": {
            "@type": "Offer",
            "price": "350",
            "priceCurrency": "INR"
          }
        },
        {
          "@type": "MenuItem",
          "name": "Kala Rassa",
          "description": "Traditional Maharashtrian mutton curry",
          "offers": {
            "@type": "Offer",
            "price": "300",
            "priceCurrency": "INR"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/hoteljagdamb",
      "https://www.instagram.com/hoteljagdamb"
    ]
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
      <meta property="og:site_name" content="Hotel Jagdamb" />
      <meta property="og:locale" content="en_IN" />

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
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Hotel Jagdamb" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune" />
      <meta name="geo.position" content="18.459063;73.823619" />
      <meta name="ICBM" content="18.459063, 73.823619" />
      <link rel="canonical" href={siteData.url} />
    </Helmet>
  )
}

export default SEO 