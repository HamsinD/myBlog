(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{289:function(t,i,l){"use strict";l.r(i),i.default=[{title:"前端面试重点——居中问题",path:"/posts/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%87%8D%E7%82%B9%E4%B9%8B--%E5%B1%85%E4%B8%AD%E9%97%AE%E9%A2%98.html",strippedContent:' # 前端面试重点——居中问题     > 在页面布局开发中，居中问题是我们经常碰到的问题，掌握居中问题对于解决页面布局非常重要，同时它也是常见的面试重点。本文汇总一些常见的居中方式以及一些注意点，权当学习笔记。     ## 一、水平居中  ### 1. inline-block  +  text-align  >确保子元素是行内块级元素后，给父元素 text-align: center; 这种情况对于子元素定宽或者不定宽都生效。  ```javascript <div class="parent">     <div class="child">child</div> </div> ```  ```css .parent {     text-align: center; } .child {     display: inline-block; } ```  ### 2. table  +  margin  > 此时利用table的宽度是内容的宽度，且table可以使用margin  ```javascript <div class="parent">     <div class="child">child</div> </div> ```  ```css .child {     display: table;     margin: 0 auto; } ```  ### 3. absolute  + transform  > 确定父元素 相对定位后，将子元素通过绝对定位在父元素内实现居中。该方法适用于子元素定宽或者不定宽，万能方法。  ```javascript <div class="parent">     <div class="child">child</div> </div> ```  ```css .parent {     position: relative; } .child {     position: absolute;     left: 50%;     top: translateX(-50%); } ```  ### 4. flex  +  justify-content  > 弹性布局（flex布局）也是常用来居中的方式，只需要给父级元素添加弹性布局格式，同时设置横轴对齐方式justiify-content来设置居中。  ```javascript <div class="parent">     <div class="child">child</div> </div> ```  ```css .parent {     display: flex;     justify-content: center; } ```  ###   > 在选择居中对齐的时候，也可以通过考虑子元素的宽度是否确定，如果宽度确定，也可通过：margin: 0 auto;实现水平居中。    > 注意点： > > * text-align用来设置元素中的的文本行内元素的对齐方式； > * text-align只对行内元素有效，对块元素无效，不能设置块元素的对齐方式；    ## 二、垂直居中  ### 1. line-height = height （只适用于单行内行内元素）  > 这种方法在设置单行块的时候特别有效，需要知道父元素高度。  ```javascript <div class="parent">     <div class="child">child</div> </div> ```  ```css .parent {     height: 100px; } .child {     line-height: 100px; } ```  ### 2. table-cell  +  vertical-align（单行，多行都可居中）  > 利用表格单元格的特性，单元格内支持居中。  ```javascript <div class="parent">     <div class="child">child</div> </div> ```  ```css .parent {     display: table-cell;     vertical-align: middle; } ```  ### 3. absolute  +  transform  > 父元素相对布局，子元素绝对布局，适用很多场景。  ```javascript <div class="parent">     <div class="child">child</div> </div> ```  ```css .parent {     position: relative; } .child {     position: absolute;     top: 50%;     transfrom: translateY(-50%); } ```  ### 4. flex +  align-item  > flex布局，通过纵向对齐align-item设置交叉轴对齐。  ```javascript <div class="parent">     <div class="child">child</div> </div> ```  ```css .parent {     display: flex;     align-items: center; } ```    ## 三、水平垂直居中  > 将上面的水平居中方法和垂直居中方法结合起来就可以实现水平垂直居中。  ### 1. inline-block + text-align + table-cell + vertical-align  ```javascript <div class="parent">     <div class="child">child</div> </div> ```  ```css .parent {     diaplay: teable-cell;     text-align: center;     vertical-align: middle; } .child {     display: inline-block; } ```  ### 2. margin: auto  > 已知宽高的元素父元素相对定位，子元素绝对定位。  ```javascript <div class="parent">     <div class="child">child</div> </div> ```  ```css .parent {     positon: relative; } .child {     position: absolute;     top: 0;     right: 0;     left: 0;     bottom: 0;     margin: auto; } ```  ### 3. transform  +  translate  不管宽高是否给定，都可以使用父元素相对定位，子元素绝对定位。（未知宽高可能是行内元素）  ```javascript <div class="parent">     <div class="child">child</div> </div> ```  ```css .parent {     positon: relative; } .child {     position: absolute;     top: 50%;     left: 50%;     transform: translate(-50%, -50%); } ```  ### 4. flex  > flex布局，设置主轴和交叉轴的对齐方式。  ```javascript <div class="parent">     <div class="child">child</div> </div> ```  ```css .parent {     display: flex;     justify-content: center;     align-items: center; } ```    > 注意点： > > 1. 行内元素设置宽高是无效的，可以通过设置line-height实现行内元素高度的设置，行内元素设置margin或者padding只有左右有效，上下无效。 > 2. flex(ie 9以上才支持)的兼容性写法：    ```css {     display: -webkit-box;     display: -webkit-flex;  \tdisplay: -moz-flex;    \tdisplay: -ms-flexbox;    \tdisplay: flex; } ```    （完）'},{title:"前端面试重点之——多列布局",path:"/posts/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%87%8D%E7%82%B9%E4%B9%8B--%E5%A4%9A%E5%88%97%E5%B8%83%E5%B1%80.html",strippedContent:' # 前端面试重点之——多列布局    `\t   在页面开发中，当我们拿到设计师给出的UI图后，首先考虑的就是布局问题，而多列布局会是我们碰到最多的布局问题，个人就汇总了开发中常见多列布局问题的解决方法。一般，按列数分的可以分为两列布局，三列布局，多列布局，其中布局方法中的原理都有类似之处。`    目录  > 一、**定宽+自适应**两列布局 > > 二、两列定宽，一列自适应布局 > > 三、左边不定宽，右边自适应布局 > > 四、多列不定宽，一列自适应 > > 五、等宽布局解决方案 > > 六、等高布局解决方案  (文中Css代码中颜色需自行添加)  ## 一、**定宽+自适应**两列布局  ```html <div class="parent">     <div class="left"><p>left</p></div> \t<div class="right"><p>right</p></div> </div> ```  * 需求：实现左侧100px，右侧自适应，且间距20px  ![image-20190623235624776](./img/image-20190623235624776.png)  > **方法一：左侧浮动，右侧宽度通过margin调整**  ```css .left {     float: left;     width: 100px; } .right {     margin-left: 120px; //相差的20px是左右之间的间距 } ```  > **方法二：左侧浮动，右侧BFC**  ```css .left {     float: left;     width: 100px;     margin-right: 20px; } .right {     overflow: hidden; } ```  > **方法三：table** > > 单元格默认会等宽，但是table-layout: fixed能够让table元素布局优先，。  ```css .parent {     display: table;     width: 100%;     table-layout: fixed; } .left, .right {     display: table-cell; } .left {     width: 100px;     padding-right: 20px; } ```  > **方法四：flex**  ```css .parent {     display: flex; } .left {     width: 100px;     margin-right: 20px; } .right {     flex: 1 } ```  > **方法五：css3 calc()计算属性**  ```css .left {     display: inline-block;     width: 100px;     margin-right: 20px; } .right {     display: inline-block;     width: calc(100% - 120px); } ```    ## 二、两列定宽，一列自适应布局  多列布局用到的属性原理基本都一样，上面的方法也同样适用于此。  ```html <div class="parent">    <div class="left"><p>left</p></div>    <div class="center"><p>center</p></div>    <div class="right"><p>right</p></div> </div> ```  ![image-20190623235324720](./img/image-20190623235324720.png)  * 需求1：left和center定宽100px，right自适应。  * 需求2：left和right定宽100px，center自适应。  **需求1使用的方法跟上面有相同之处，不做赘述。重点以需求2为例说明。**  > **方法一：父元素相对布局，子元素绝对布局**  ```css .parent {     position: relative; } .left{     position: absolute;     left: 0px;     top: 0px;     width: 100px; } .right {     position: absolute;     right: 0px;     top: 0px;     width: 100px; } .center {     margin: 0 120px; } ```  > **方法二：flex布局**  ```css .parent {     display: flex; } .left, .right {     width: 100px; } .left {     margin-right: 20px; } .right {     margin-left: 20px; } .center {     flex: 1; } ```  > **方法三：双飞翼布局**   双飞翼布局需要将center块提前，并且需要在center的内嵌包裹块，方便设置间距，注意在设置center宽度为100%的时候，要将center的盒模型转换为IE盒模型，这样它的宽度就包含了padding。  ```html <div class="parent">     <div class="center">         <div class="content">             <p>center</p>         </div>     </div>     <div class="left"><p>left</p></div>     <div class="right"><p>right</p></div> </div> ```  ```css .center, .left, .right {     float: left; } .left {     width: 100px;     margin-left: -100%; } .right {     width: 100px;     margin-left: -100px; } .center {     box-sizing: border-box;     width: 100%;     padding-left: 120px;     padding-right: 120px; } .content {     height: 100%; } ```    ## 三、左边不定宽，右边自适应布局  ```html <div class="parent">    <div class="left"><p>left</p></div>    <div class="right"><p>right</p></div> </div> ```  ![image-20190624233637505](./img/image-20190624233637505.png)  * 需求：左侧不定宽，右侧自适应，间距20px。  > **方法一：float +  overflow**  ```css .left {     float: left;     margin-right: 20px; } .right {     overflow: hidden; }  ```  > **方法二：table布局**  由内容决定宽度，不由布局决定宽度，取消table-layout：fixed的作用  ```css .parent {     display: table;     width: 100%; } .left, .right {     display: table-cell; } .left {     width: 0.1% //取最小宽度，实际宽度由内容决定     padding-right: 20px; } ```  > **方法三：flex**  ```css .parent {     diaplay: flex; } .left {     margin-right: 20px; } .right {     flex: 1; }  ```    ## 四、多列不定宽，一列自适应  同   **三、左边不定宽，右边自适应布局 **  方法相同。  ## 五、等宽布局解决方案  ```html <div class="parent"> \t<div class="column"><p>column1</p></div>     <div class="column"><p>column2</p></div>     <div class="column"><p>column3</p></div>     <div class="column"><p>column4</p></div> </div> ```  ![image-20190624235549824](./img/image-20190624235549824.png)  * 需求：多列等宽，并保留20px间距。  > **方法一：margin  +  float**  此时需要考虑多个间距的问题，缺点：需要提前知道有多少列计算好每列宽度占比+间距，具体就是让父元素多拥有20px的宽度。  ```css .parent {     margin-left: -20px; } .column {     float: left;     width: 25%;     padding-left: 20px;     box-sizing: border-box; } ```  > **方法二：table**  此时需要在parent元素外层再添加一层盒子parent-layout，并设置宽度使得宽度再增加20px。  ```html <div class="parent-layout">     <div class="parent">         <div class="column"><p>column1</p></div>         <div class="column"><p>column2</p></div>         <div class="column"><p>column3</p></div>         <div class="column"><p>column4</p></div>     </div> </div> ```  ```css .parent-layout {     margin-left: -20px; } .parent {     display: table;     width: 100%;     table-layout: fixed; } .column {     display: table-cell;     padding-left: 20px; } ```  **方法三：flex**  ```css .parent {     display: flex; } .column {     flex: 1; } .column + .column {     margin-left: 20px; } ```  ## 六、等高布局解决方案  除了解决分栏的问题之外，我们同时需要解决分列后等高布局的解决方法：  > **方法一：table**  利用table单元格本身具有等高特性  ```css .parent {     display: table;     width: 100%;     table-layout: fixed; } .left, .right  {     display: table-cell; } .left {     widht: 100px;     border-right: 20px solid transparent;     background-clip: padding-box; //由于是border-box，需要把背景颜色去掉 } ```  > **方法二：flex**  ```css .parent {     display: flex; } .left {     width: 100px;     margin-right: 20px; } .right {     flex: 1; } ```  > **方法三：float**   伪等高  ```css .left, .right  {     flex: left;     width: 100%;     margin-right: 20px; } .right {     overflow: hidden; } .left, .right {     padding-bottom:9999px;     margin-bottom: -9999px; } .parent {     overflow: hidden; } ```  (文中样式代码中的背景颜色可自行添加)    > 说明： > > 1. BFC（块级格式上下文），可以实现和浮动元素共存，且不会遮挡浮动元素，通过overflow:hidden, >    作用：避免边距折叠，不被浮动元素遮盖。且BFC能够将内容元素浮动清除，避免高度塌陷。    喜欢那就点个赞吧😝  （完） '},{title:"MarkDown常用语法介绍",path:"/posts/MarkDown%E5%B8%B8%E7%94%A8%E8%AF%AD%E6%B3%95%E4%BB%8B%E7%BB%8D.html",strippedContent:' # MarkDown常用语法介绍  学习过的内容总要不断的强化，之前只是看过一些markdown的写法，并未真正写过md文档。最近，需要写一些GitHub文档，就深入学习MarkDown的写法，并汇总了这一份文档，且用MarkDown编辑。本文将会介绍一些MarkDown的基本标记语法以及一些常用图形的绘制，包括流程图、甘特图。 MarkDown是一种轻量级标记语言，以一种纯文本的形式编辑，最终可转化为HTML格式发布，能够让编写者沉浸其中，享受文档编写的快乐。 ------------ ## 本文目录 ### [一、基本用法](#一、基本用法) > * [标题](##标题) > * [区块引用](##区块引用) > * [列表](##列表) > * [粗体和斜体](##粗体和斜体) > * [代码引用](##代码引用) > * [链接与图片](##链接与图片) > * [表格](##表格) ----  # 一、基本用法  ## 标题 加在文本前面，将`#`后的文本作为标题。可实现h1-h6六级标题，按照#的个数区分标题等级。   例如： >\t\\# 一级标题   >\t\\## 二级标题   >\t\\### 三级标题   >\t\\#### 四级标题   >\t\\##### 五级标题   >\t\\###### 六级标题    显示效果： >\t# 一级标题 >\t## 二级标题 >\t### 三级标题 >\t#### 四级标题 >\t##### 五级标题 >\t###### 六级标题  ## 区块引用 当你想要单独引用某一段落，就要用到MarkDown中的区块应用`>`符号，并且可以叠加多个`>`嵌套使用。   例如：   > \\>  曾经有一份真挚的爱情摆在我面前，我没有珍惜，等到失去了才后悔莫及。（区块引用）   > \\>> 如果再给我一次机会，我想对那个女孩子说三个字。。。 （嵌套引用）  显示效果： > \\>  曾经有一份真挚的爱情摆在我面前，我没有珍惜，等到失去了才后悔莫及。 >> \\>> 如果再给我一次机会，我想对那个女孩子说三个字。。。     > *注意：*   &nbsp; > 和 文本之前记得保留一个空格。 ## 列表   这里的列表是指分条列举，在编辑时，只需要将`-`加在每行的前面即可，   例如：   > \\- 例子1，我说。。。   > \\- 例子2，我说。。。   > \\- 例子3，我说。。。   > \\- 例子4，我说。。。 >> \t\\- 例子4的介绍。。。。   显示效果：   - 例子1，我说。。。   - 例子2，我说。。。   - 例子3，我说。。。   - 例子4，我说。。。 \t- 例子4的介绍。。。。      如果想要将前面的原点换成数字，变成有序列表，那就在每行前面加 1.&nbsp; 2.&nbsp; 3.&nbsp;&nbsp;即可。    例如：   1\\. 例子1，我说。。。   2\\. 例子2，我说。。。   3\\. 例子3，我说。。。   4\\. 例子4，我说。。。   &nbsp;&nbsp;4\\.1 例子4的介绍。。。    显示效果： 1. 例子1，我说。。。   2. 例子2，我说。。。   3. 例子3，我说。。。   4. 例子4，我说。。。   \t4.1 例子4的介绍。。。  ## 粗体和斜体 粗体或者斜体的使用就更简单了，只需要在需要强调的文本左右加上`*`或者`_`。    例如： > \\*我是谁\\*（`斜体`）   > \\_我在哪儿\\_ （`斜体`）   > \\**我是谁\\*\\*（`粗体`）   > \\__我在哪儿\\_\\_ （`粗体`）    显示效果：   > *我是谁*（`斜体`）   > _我在哪儿_ （`斜体`）   > **我是谁**（`粗体`）   > __我在哪儿__ （`粗体`）  ## 代码引用 代码引用的时候，需要在每个代码行前面加一个Tab或者4个空格，也可以使用` ` `, 单行使用` ` `包裹，多行使用` ``` `包裹代码，效果与tab相同。   例如：   普通段落  function add (x, y) {   \treturn x + y;   }   代码块：  \tfunction add (x, y) { \t\treturn x + y;  \t}  ``` function () {  } ``` ## 链接与图片 链接和图片的添加方法类似，方法有两种**行内式和参数式**。（也可使用html的方法，通过\\<a\\>\\<\\/a>添加）   _链接_: > \\[我是Github，请点我\\]\\(https://github.com/HamsinD/MarkDown_summary\\) (`行内式`)   > **效果**：[我是Github，请点我](https://github.com/HamsinD/MarkDown_summary)   > \\[我是Github，请点我\\]\\(Github\\)  (`参数式`)  > \\[Github\\](https://github.com/HamsinD/MarkDown_summary)    > **效果**： > [我是Github，请点我][github]    [github]: https://github.com/HamsinD/MarkDown_summary "Github"  添加图片只需要在链接的格式前面加`!`。   _图片_:   > \\![gugong]\\(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539059811385&di=9902f126f1b4cf55c41ecedc46140998&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fcc11728b4710b912fcc749f6c9fdfc03924522b7.jpg)   > **效果：** ![gugong](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539059811385&di=9902f126f1b4cf55c41ecedc46140998&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fcc11728b4710b912fcc749f6c9fdfc03924522b7.jpg)     ## 表格 表格的写法比较有意思，通过`|`和`-`来绘制表格，具体看写法：   ``` | tab1       | tab2     | tab3    | | ---------- |:--------:| -------:| | xxxxxxx    | xxxxxxx  | xxxxxxx | | xxxxxxx    | xxxxxxx  | xxxxxxx | ``` 显示效果:  | tab1       | tab2     | tab3    | | ---------- |:--------:| -------:| | xxxxxxx    | xxxxxxx  | xxxxxxx | | xxxxxxx    | xxxxxxx  | xxxxxxx |  **注意：** 表头线`-`两侧的`:`用来设置居中方式。  >注意点：    1. 段落的前后要有空行，所谓的空行是指没有文字内容。若想在段内强制换行的方式是使用两个以上空格加上回车（引用中换行省略回车）。 2. 一个空格输入`&nbsp;`即可  '}]}}]);