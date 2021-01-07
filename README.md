https://seo-cms-nextjs.netlify.app/

# Practice for nextjs

- nextjs
- react
- typescript
- styled-components

## webpack

`next.config.js`를 통해 webpack override

## MDX

### rehype-highlight

@mapbox/rehype-prism -> rehype-highlight로 변경

### syntax style

github style
`highlight.js/styles/github.css`

## Context API

- side menu toggle 관리

## Pages

- / : home
- /about : about

### /posts

all list

### /posts/categories/[...slug]

all list by category

### /post/[...slug]

post file : [...slug].mdx

## tips?

nextjs webpack 실행 시 'fs' error 떨어질 수 있는데 client 실행 시에는 node 가 없어 막아야 한다.
webpack에서 config.node: { fs: 'empty' } 로 넣어준다.
