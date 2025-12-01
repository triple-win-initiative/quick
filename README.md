# TWI

## Introduction

This website made by [Jekyll](https://jekyllrb.com/). 

For customising used [Tailwind.css](https://tailwindcss.com/docs/installation/using-vite), components [FlyonUI](https://flyonui.com/docs/getting-started/quick-start/) and [Tailwind-tipography](https://flyonui.com/docs/getting-started/quick-start/)

Used plugins:

* [Jekyll Picture Tag](https://github.com/rbuchberger/jekyll_picture_ta) - images optimisation
* [Jekyll Sitemap Generator Plugin
](https://github.com/jekyll/jekyll-sitemap)
* [Jekyll Seo Tag](https://github.com/jekyll/jekyll-seo-tag)



## Using locally

- [install Jekyll](https://jekyllrb.com/docs/installation/#requirements)
- copy files to local folder
  ```
  git clone git@github.com:gridatek/tailwind-typography.git
  ```
- `cd <folder with website>`
- run `yarn install`
- run `yarn buildcss`
- run `jekyll s -l`
- open local website at `http://localhost:4000`

## Folders

**_data**  - site data in [YAML](https://spacelift.io/blog/yaml) format

**_images** - large raw images that can significantly slow down the site, so they should be included on the site via a plugin [Jekyll Picture Tag](https://github.com/rbuchberger/jekyll_picture_ta)

**_includes** - repetative code blocs

**_layouts** - pages templates

**_pages** - the website pages

**_posts** - blog posts in Markdown format

**_site** - generated website after compilation

**_team** - team's members pages in Markdown format

**assets** - CSS, JS, images and PDF

File **_config.yml** - site configuration file