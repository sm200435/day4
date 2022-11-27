- vue2

  - 官网

    - \1.  英文官网: https://vuejs.org/

    - \2.  中文官网: https://cn.vuejs.org/

  - 介绍与描述

    - Vue是一套用来动态构建用户界面的渐进式JavaScript 框架

      - 构建用户界面: 把数据通过某种办法变成用户界面.

      - 渐进式: Vue可以自底向上逐层的应用,简单应用只需要一个轻量小巧的核心库,复杂应用可以引入各式各样的Vue插件.

    - 作者: 尤雨溪
      - ![img](https://api2.mubu.com/v3/document_image/3f337d86-48db-4522-8020-78b7a79e4108-22187535.jpg)

  - Vue的特点

    - \1.  遵循 MVVM 模式

    - \2.  编码简洁 , 体积小 , 运行效率高 . 适合移动/PC 端开发

    - \3.  它本身只关注 Ul . 也可以引入其它第三方库开发项目

    - \4.  采用组件化模式 , 提高代码复用率,且代码更好的维护

    - \5.  声明式编码 , 让编码人员无需直接操作DOM , 提高效率

    - ![img](https://api2.mubu.com/v3/document_image/4df40320-bb1a-4b89-a23f-ce27a774d7d0-22187535.jpg)

    - \6.  使用虚拟DOM和Diff算法 , 尽量复用DOM节点

    - ![img](https://api2.mubu.com/v3/document_image/fa735a08-c421-419d-9d23-79bbe9c95964-22187535.jpg)

  - 与其它JS 框架的关联

    - 1.借鉴 Angular 的模板和数据绑定技术

    - 2.借鉴 React 的组件化和虚拟 DOM 技术

  - 和市场上和vue并行的三大语言框架为

    - React : 它也有一定程度的主张 , 主要是函数式编程的理念 , 列如 : 需要知道什么是副作用、什么是纯函数 , 如何隔离副作用 . 它的侵入性看似没有Angular那么强 , 主要因为它是软性侵入.

    - Angular : 它两个版本都是强主张的 , 如果用它 , 必须接受以下东西 : 

      - 必须使用它的模块机制

      - 必须使用它的依赖注入

      - 必须使用它的特殊形式定义组件 (这一点每个视图框架都有，难以避免)

      - 所以Angular是带有比较强的排它性的 , 如果你的应用不是从头开始 , 而是要不断考虑是否跟其他东西集成 , 这些主张会带来一些困扰 .

    - Vue : 渐进式框架 , 主张就是只负责自己的事情 , Vue 被设计为可以自底向上逐层应用 . Vue 的核心库只关注视图层 , 不仅易于上手 , 还便于与第三方库或既有项目整合 ,  在不同层次可以使用不同的概念 .

  - Vue 周边库

    - vue-cli          vue 脚手架

    - vue-resource

    - axios

    - vue-router        路由

    - vuex         状态管理

    - element-ui        基于 vue 的 UI 组件库(PC 端

  - 对于pwa的解释
    - ![img](https://api2.mubu.com/v3/document_image/1685ab32-c200-4c36-939a-9d4b8c32b724-22187535.jpg)

  - 目录简介

    - vue.config.js
      - 配置webpack文件(包括配置跨域,请求接口,第三插件配置,rule配置)

    - Package.json

      - scripts : 配置启动命令,打包命令,eslint校验代码命令

      - browserslist : 浏览器适配配置

      - devDependencies , dependencies : 项目node-modules大版本的限制

      - node-modules大版本的限制

      - ^: 最大兼容版本

      - ~:大约在这个版本上下就行

    - package-lockjson
      - 约束每个node-modules版本下的其他依赖的固定版本

    - babel.config.js : babel 插值设置

    - .gitignore : 忽略文件

    - Public : 公共入口文件和公共配置配置

    - src  放置组件和axios配置

      - Assets -- 放置图片.img,css,js

      - components -- 放置其他组件所需要的公共组件

      - router -- 配置路由表 . ( 动态路由 , 静态路由 , 权限路由 )

      - store -- 存放vuex的仓库

      - Views -- 放置页面的地方

        - Home

        - ......

        - App.vue   入口的总文件

        - main . js 实例化vue挂载

    - Utils -- 所有封装axios , 封装token , 封装公共方法 -----工具类文件

  - vue的语法

    - 1 . 插值语法{{}}
    - 2 . 动态绑定 v-bind

      - v-bind绑定的是动态的表达式 , 而非固定的字符串 , 在v-bind后 , 就可以动态获取数据 . 可以将v-bind理解为 : 被v-bind修饰的都是动态获取的值 . 而非被v-bind修饰的 , 仅仅是一个字符串 .

      - v-bind指令的作用:

        - 绑定标签的属性，如src，title等，元素的属性在标签的内部 .

        - 完整写法为v-bind:属性名 .

        - 简写方式为:属性名 .
    - 3 . 条件渲染: v-if      v-else

      - 概念 :
        - 控制dom元素的创建和销毁,实现渲染和更新页面 .

      - 特点 :
        - 如果没有v-else的存在,会在dom元素被删除的地方,添加一个标识,在下次进行重新渲染的时候,优先寻找有标识的地方,尽量减少dom的循环和查找.
    - 4 . v-show

      - 1.通过添加或者移除 display: none样式进行控制dom元素的显示与隐藏

      - 2.diff算法对比节点: 级节点对比,确认和获取每个节点通过kev标识来进行对比
    - 5 . v-for

      - 1.Key: 作用为了防止Dom元素的重复渲染 , 如果以index为key的话 , 会造成页面的多次渲染和渲染不同 . 
    - 2.diff算法对比节点: 同级节点对比 , 确认和获取每个节点 , 通过key标识来进行对比 .

- vue3

  - 了解vue的mvvm架构

    - MWM是Model-View-VewModel的简称，是目前非常流行的架构模式。下面是vue的一个比较官方的关于mwm关系图的描述.

    - ![img](https://api2.mubu.com/v3/document_image/7bb1dda5-828a-42e8-bb19-c12fc7e6d220-22187535.jpg)

  - Vue3简介

    - 2020年9月18日，Vue.js发布3.0版本，代号: One Piece (海贼王)

    - 耗时2年多、2600+次提交、30+个RFC、600+次PR、99位贡献者

    - github上的tags地址: https://github.com/vueis/vue-next/releases/tag/v3.0.0