// tailwind.config.js
module.exports = {
  content: [
    './_layouts/**/*.{html,html}',
    './_includes/**/*.{html,html}',
    './_posts/**/*.{markdown,md}',
    './assets/css/main.css', //  path to your main CSS file
  ],
  plugins: [
    require('daisyui'),
  ],
}
