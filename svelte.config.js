import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify'
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: netlify(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "src/variables.scss";'
          }
        }
      }
    }
  },

  preprocess: [
    preprocess({
      postcss: true,

      scss: {
        prependData: '@import "src/variables.scss";'
      }
    })
  ]
};

export default config;
