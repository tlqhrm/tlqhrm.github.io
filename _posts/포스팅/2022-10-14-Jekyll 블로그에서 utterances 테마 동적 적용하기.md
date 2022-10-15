---
title: Jekyll 블로그에서 utterances 댓글 테마 동적 적용하기 
date: 2022-10-15-22:38:36
categories: [Jekyll, comment]
tags: ['#utterances']
---

### 기존 utterances 적용 스크립트
```html
<script src="https://utteranc.es/client.js"
 repo="[ENTER REPO HERE]"
 issue-term="pathname"
 theme="boxy-light"
 crossorigin="anonymous"
 async>
</script>
```


### 블로그 테마에 맞게 변경 
```html
<div class="comments">
    <script>
        // load utteranc comment
        let html = document.querySelector('html');
        var getTheme = html.dataset['mode'];
        getTheme = getTheme == null ? 'light' : getTheme;

        let theme = getTheme === 'dark' ? 'github-dark' : 'github-light';
        let s = document.createElement('script');
        s.src = 'https://utteranc.es/client.js';
        s.setAttribute('repo', 'tlqhrm/tlqhrm.github.io'); // 저장소 이름
        s.setAttribute('issue-term', 'title');
        s.setAttribute('theme', theme);
        s.setAttribute('crossorigin', 'anonymous');
        s.setAttribute('async', '');
        document.querySelector('div.comments').innerHTML = '';
        document.querySelector('div.comments').appendChild(s);
    </script>
</div>
```
<br>
라이트/다크 모드를 변경할 때 즉시 변경되지 않고 변경 후 다음 게시물에 접근할 때 설정된 테마에 맞게 적용됩니다.

[참조](https://github.com/utterance/utterances/issues/549#issuecomment-1075835596 "참조")

