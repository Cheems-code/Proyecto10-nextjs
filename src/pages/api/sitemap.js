async function getAllBlogPosts() {
  return [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];
}

export default async function handler(req, res) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://proyecto10-nextjs.onrender.com';
    const posts = await getAllBlogPosts();
    const staticPages = ['', 'about', 'contact'];

    let urls = staticPages
      .map((page) => `<url><loc>${baseUrl}/${page}</loc></url>`)
      .join('');

    let blogUrls = posts
      .map((post) => `<url><loc>${baseUrl}/blog/${post.id}</loc></url>`)
      .join('');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
      ${blogUrls}
    </urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemap);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}