https://seo-cms-nextjs.netlify.app/

# Practice for nextjs

- nextjs
- react
- netlify-cms
- typescript
- styled-components

# Point

## design

post영역에 theme으로는 material ui를 많이 참고해서 반영하였고
cms영역은 template은 post template만 custom하여 preview markdown highlight되도록 진행하였다.(by hljs + github md style)

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

- /posts : all list
- /posts/categories/[...slug] :all list by category
- /post/[...slug] : post file = [...slug].mdx

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

### **로그인 영역이 말썽... component가 바뀌질 않음**

https://community.netlify.com/t/user-invitation-through-mail-opens-index-page-instead-of-login-form-asking-a-password/10684/17

<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

그냥 <Head> 통해서 위 script 가져다가 넣음
custom 하기에는 소스 분석하다가 며칠째 답을 못찾아서
그냥 위 v1 버전으로 넣어서 동작함

# 주절주절

## concept

gitbook (legacy 버전)이 deprecated 되면서
특정 카데리고리에 대해 공부하던 내용을 올리려던 계획에 차질이 생김.
그래서 그냥 이참에 nextjs 공부할겸 (gitbook스러운)blog + CMS site를 만들어보자 생각하여 만들었음
무엇보다 csr+ssr+ssg를 통한 super fast render여서 슥슥 보기 좋을 것 같아서 진행해봄.

우선, CMS을 통해서 content를 관리할 생각이었음
후보로 생각하던게 vuepress, netlify-cms, wordpress, jekyll admin 등이 있었는데
netlify-cms가 간단한 design에 netlify 를 통한 간편함까지 있어서 선택하였다.
(vercel을 써볼까 하다가 이번엔 그냥 netlify로 선택함)

## 반응형

1.  반응형을 위한 미디어 쿼리를 작성하는데
    desktop first로 항상 시작해서 max-width를 사용하게 되는데
    mobile first로 하는게 훨씬 더 사용자 반응형에 적용하는게 효율적이라고 하는데
    항상 생각하면서 desktop first로 진행하게 되는 것 같다...
    mobile app이라고 생각하고 진행하면 좀 나을려나

2.  styled-component를 통해 미디어 쿼리를 작성하는 방식이 많긴 한데
    뭐가 더 효율적이고 사용하기 편할까 찾아보는 시간이 더 걸리는 것 같다.
    그냥 막 짜고 나중에 더 좋은 걸 찾으면 적용하는 방식으로 진행해야 될 것 같다.
