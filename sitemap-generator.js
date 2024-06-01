const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { pipeline } = require('stream');
const { promisify } = require('util');

const pipelineAsync = promisify(pipeline);

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/items', changefreq: 'weekly', priority: 0.8 },
  // Add more routes here
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://arena-breakout-market.com' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  try {
    await pipelineAsync(
      sitemap,
      writeStream
    );

    links.forEach(link => sitemap.write(link));
    sitemap.end();
  } catch (error) {
    console.error('Pipeline failed', error);
  }
};

generateSitemap().catch(console.error);
