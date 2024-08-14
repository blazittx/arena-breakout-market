const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/items', changefreq: 'weekly', priority: 0.8 },
  { url: '/maps', changefreq: 'weekly', priority: 0.8 },
  { url: '/progression', changefreq: 'weekly', priority: 0.8 },
  { url: '/more', changefreq: 'weekly', priority: 0.8 },
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://arena-breakout-market.com' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  const promise = streamToPromise(
    SitemapStream({ hostname: 'https://arena-breakout-market.com' })
      .pipe(createWriteStream('./public/sitemap.xml'))
  );

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  try {
    await promise;
    console.log('Sitemap written successfully');
  } catch (error) {
    console.error('Error writing sitemap:', error);
  }
};

generateSitemap();
