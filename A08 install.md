# A08 install
### Install Sveltekit
```bash
npm create svelte@latest A08
cd A08
npm install
```
### Install Tailwind
```bash
npx svelte-add@latest tailwindcss
npm install
```
### Init Git
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
```
### Add remote repo
```bash
git remote add origin git@github.com:fg5002/A08.git
```
### Upload to Github Pages
```bash
git commit -a -m "commit..."
npm run build
git push -u origin main
```
## Adapter-static
### Install
```bash
npm install -D @sveltejs/adapter-static
```
### svelte.config.js
```js
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		})
	},

	preprocess: [vitePreprocess({})]
};

export default config;
```
## Main page
### +layout.js
```js
export const prerender = true;
export const ssr = false;
```
## Map
### Install
```bash
npm install leaflet
```
### +page.js
```js
export const prerender = false;
```
## PWA
### manifest.json to static folder
```json
{
	"id": "ffd-A08-pwa App",
	"short_name": "A08",
	"start_url": "/",
	"scope": "/",
	"display": "standalone",
	"orientation": "portrait",
	"theme_color": "#A3E635",
	"background_color": "#ffffff",
	"dir": "ltr",
	"lang": "en",
	"icons": [
		{
			"src": "icons/icon192.png",
			"sizes": "192x192",
			"type": "image/png"
		},
		{
			"src": "icons/icon512.png",
			"sizes": "512x512",
			"type": "image/png"
		}
	]
}
```
### app.html insert link
```html
<head>
		<meta charset="utf-8" />
		<link rel="manifest" href="%sveltekit.assets%/manifest.json" />
		<title>A08</title>
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		%sveltekit.head%
	</head>
```
### add service-worker.js to scr folder
