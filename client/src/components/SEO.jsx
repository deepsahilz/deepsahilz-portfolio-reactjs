import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Reusable SEO component for single page application SEO management.
 * Dynamically updates document title, meta tags, and appends JSON-LD structured data.
 */
const SEO = ({
  title,
  description = "Portfolio of Sahil Singh (@deepsahilz), a developer and designer focused on building fast, functional, and visually rich web applications.",
  ogImage = "https://deepsahilz.vercel.app/deepcodes4.png",
  schema = null,
  noIndex = false
}) => {
  const location = useLocation();
  const currentUrl = `https://deepsahilz.vercel.app${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title ? `${title} | Sahil Singh` : "Sahil Singh | Full Stack Developer";
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attributeName, attributeValue, contentValue) => {
      if (contentValue === undefined || contentValue === null) return;
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (element) {
        element.setAttribute('content', contentValue);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        element.setAttribute('content', contentValue);
        document.head.appendChild(element);
      }
    };

    // Helper to set or create link tag
    const setLinkTag = (relValue, hrefValue) => {
      if (!hrefValue) return;
      let element = document.querySelector(`link[rel="${relValue}"]`);
      if (element) {
        element.setAttribute('href', hrefValue);
      } else {
        element = document.createElement('link');
        element.setAttribute('rel', relValue);
        element.setAttribute('href', hrefValue);
        document.head.appendChild(element);
      }
    };

    // 2. Set Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    setLinkTag('canonical', currentUrl);

    // Open Graph
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:url', currentUrl);

    // Twitter
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:url', currentUrl);

    // 3. Structured Data (JSON-LD)
    if (schema) {
      let schemaScript = document.getElementById('json-ld-schema');
      if (schemaScript) {
        schemaScript.textContent = JSON.stringify(schema);
      } else {
        schemaScript = document.createElement('script');
        schemaScript.id = 'json-ld-schema';
        schemaScript.type = 'application/ld+json';
        schemaScript.textContent = JSON.stringify(schema);
        document.head.appendChild(schemaScript);
      }
    } else {
      // If no custom schema is provided, remove any existing custom schema to avoid stale structures
      const schemaScript = document.getElementById('json-ld-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
    }
  }, [title, description, ogImage, currentUrl, schema, noIndex]);

  return null;
};

export default SEO;
