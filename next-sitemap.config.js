/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://saikarthikketha.tech', // Change to your domain
  generateRobotsTxt: true, // Generate robots.txt file
  exclude: ['/404', '/admin'], // Exclude unnecessary pages
  sitemapSize: 5000,
};