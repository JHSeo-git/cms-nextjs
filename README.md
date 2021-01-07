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

### **webpack 'fs' not found error. feature babel**

nextjs webpack 실행 시 'fs' error 떨어질 수 있는데 client 실행 시에는 node 가 없어 막아야 한다.
webpack에서 config.node: { fs: 'empty' } 로 넣어준다.

### **Netlify-CMS + NEXTJS Markdown Preview Styling**

수많은 삽질을 통해서 파악을 그나마 조금 하여 적용함
간단히 설명하자면
admin.html을 과감히 버리고
/pages/admin.tsx 을 바라보게 한 다음에
CMS init을 통해 styling 진행
styled-component를 적용하기 위해 작업도 진행하였음(PreviewTemplate.tsx 참고)

> - /pages/admin.tsx
> - /components/mdx/HighlightWrapper.tsx
> - /templates/\*
