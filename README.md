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

### **responsive**

CSS media query로만 responsive를 구현하려 했는데
하다보니 code내에서도 respoisve를 체크해야되는 경우가 발생하였다.
그래서 viewport를 구해서 breakdown되는지 체크하는 함수를 만들어서 useEffect를 통해 확인하는 식으로 구현함

- `styles/lib/responsive.ts`
- `components/base/Layout.tsx`

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

## CMS

netlify-cms가 적용하기 간편하게 되어있긴 한데 gatsby 영역에서 많이 사용하다보니 reference가 거기 치중되어있었다.
아주 normal하거나 조금 조미료가 가미된 경우에는 nextjs도 reference가 있긴 했는데 많이 없어서 package 뒤져가면서 찾아댕겼다.
styled-component 적용하는 것도 어려웠고(단순 markdown 때문에...)

simple한 ui가 맘에 들긴했는데 markdown preview만 어찌 해볼려다가 시간을 많이 잡아먹었다.
identify page도 고생했었는데 netlify-cms-app 에서 제공되어지는 default login창에서는 oauth 버튼이 나타나질 않아서 헤매다가
그냥 identify-widget v1을 불러다가 쓰는 방식으로 했다.(휴...)

## Markdown

next에서 제공하는 mdx package 중에서 next-mdx-remote package를 이용해서 preview해서 보여준다.
다양한 플러그인이 있고 현재 사용되는 rehype remark 를 대부분 사용할 수 있다.
그 중에서 pre > code 를 syntax highlight 하기 위해서 rehype-highlight
heading link를 위해서 rehype-slug, rehype-toc를 이용해서 toc를 만들고 link를 걸어주었다.(그냥 해볼까하다가 그냥 적용함)

markdown preview 가 live로 반영이 안되네...
registerPreviewTemplate 하면서 widgetFor를 안가져와서 그런가
소스 잠깐 뒤져보니

```js
 /**
   * Only re-render on value change, but always re-render objects and lists.
   * Their child widgets will each also be wrapped with this component, and
   * will only be updated on value change.
   */
  shouldComponentUpdate(nextProps) {
    const isWidgetContainer = ['object', 'list'].includes(nextProps.field.get('widget'));
    return (
      isWidgetContainer ||
      this.props.value !== nextProps.value ||
      this.props.fieldsMetaData !== nextProps.fieldsMetaData ||
      this.props.getAsset !== nextProps.getAsset
    );
  }
```

이렇게 되어있어서 widgetFor를 써야만 rerender가 된다는 뜻인가...

결국 widgetFor를 써야한다.
widgetFor 내용이 scu에 의해 update되기 때문에 저걸 바라봐야 한다.

그리고 next-mdx-remote를 버리고 marked, hljs로 바꿨다.

따라서,
site에서 markdown render시에는 next-mdx-remote에서 제공하는 여러 plugin과 함께 사용하고
cms에서 markdown preview는 marked, hljs로 render하는 방식

toc를 rehype-toc로 plugin 해서 쓰는데 option을 넣으려고 했는데
require 로 쓰다가 import로 바꿨다.
doc상에서는 getStaticProps에서 top-level module을 써도 client단에서는 build되지 않으니
이렇게 바꿔서, options를 넣어줬다. require를 쓰더라도 문제는 없어보이는데 type을 가져오기 위해 import 했다

문제는 toc를 가져오는데 content와 같은 level에 nav tag를 가진 element로 반환된다.
page상에서 fixed로 보여주고 싶었는데 style 작업을 하다보니 고정되어있는 nav를 바꿔서 작업하는게 편했을 텐데
하고 이것저것 찾아봤는데 마땅히 쓸 option이 없었다.
(그 중에서 position이라는 옵션이 있었는데 insertAdjacentElement() 를 쓰는 render함수였는데
동작이 잘 안되는건지...이해를 잘 못한건지 beforebegin을 쓰고 싶었는데 <main> or <body>에 적용된다는데
plugin으로 쓰면 적용이 안되는건지 아니면 html render되면서 안되는건지 source를 보아도 잘 적용이 안되었다.)
그래서 css로만 fixed(나중엔 sticky로 적용함) style을 처리하였다.

heading값도 h1,h2,h3,h4까지만 가져오도록 option 설정을 해놓았다.
option을 어찌 잘 쓰면 더 깔끔하게 적용할 수 있을 것 같은데... 아쉽네

## page size

static page를 generated를 하는데 build 시 용량을 체크할 수가 있다.
admin page가 1.1mb가 넘길래 화들짝 놀라서 알아보니 package가 그대로 static page에 같이 generate 되어서 문제였다.
dynamic을 이용해 runtime import(dynamic import)를 통해 static page size를 줄일 수 있다는게 있었다.
그래서 static page size를 줄이기 위해 dynamic from 'next/dynamic'을 이용해서 runtime시에 불러오도록 수정했다.
