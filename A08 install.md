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
			fallback: '200.html'
		})
	},

	preprocess: [vitePreprocess({})]
};

export default config;
```
## Main +layout.js
```js
export const prerender = true;
export const ssr = false;
```
## Map +page.js
```js
export const prerender = false;
```
