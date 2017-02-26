layout: post
title: hexo-next主题如何引入js教程
comment: true
tags: [hexo,next主题]
date: 2017-02-26 10:40:19
updated: 2017-02-26 10:40:19
---
最近有些网友问到我网站页面的三维动画是怎样实现的~其实很简单只要引入一个js就行啦。
![此处输入图片的描述][1]


js地址：`http://codeliker.com/js/src/particle.js`
当然不是引用我的，以为我网站速度不怎么快~你最好复制代码放到你自己的网站。下面具体说说通过hexo如何引入这个js~


----------

准备工具
----

sublime代码编辑器、hexo的一些基础知识
## 步骤 ##

 - 复制js文件
 将`http://codeliker.com/js/src/particle.js`这个文件复制你hexo对应的文件夹里面，也就是`你的博客\themes\next\source\js\src`
 ![此处输入图片的描述][2]
 - 修改引入配置
 然后打开sublime编辑器，找到下面图片的这个vendors.swing 这个文件，位置：`你的博客\themes\next\layout\_scripts\vendors.swing`在最后加上这段代码：`<script type="text/javascript" src="/js/src/love.js"></script>`。
![此处输入图片的描述][3]
 - hexo编译，发布
重新编译你的网站，发布，就大功告成啦！！！




  [1]: http://o8oseymkx.bkt.clouddn.com/2016-12-22-1.png
  [2]: http://o8oseymkx.bkt.clouddn.com/images/hexo-issue/2017-02-26-1.png
  [3]: http://o8oseymkx.bkt.clouddn.com/images/hexo-issue/2017-02-26-2.png

