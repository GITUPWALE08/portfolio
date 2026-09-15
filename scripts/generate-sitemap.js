import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsFile = fs.readFileSync(path.join(__dirname, '../src/data/projects.ts'), 'utf-8');
const slugs = [];
const slugRegex = /slug:\s*["']([^"']+)["']/g;
let match;
while ((match = slugRegex.exec(projectsFile)) !== null) {
  slugs.push(match[1]);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://adegoke-adewale.me/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://adegoke-adewale.me/resume</loc><changefreq>monthly</changefreq></url>
${slugs.map(slug => `  <url><loc>https://adegoke-adewale.me/projects/${slug}</loc><changefreq>monthly</changefreq></url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
