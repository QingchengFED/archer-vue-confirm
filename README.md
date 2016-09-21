# archer-vue-confirm
A vue confirm component for qingcheng mobile projects.

![demo](http://zoneke-img.b0.upaiyun.com/e552c553c277569c9e5521e4afcb3735.jpeg)

## Usage

```JavaScript
var VueConfirm = require('archer-vue-confirm');
Vue.use(VueConfirm);
```

### Basic use:

```JavaScript
/* 
* @usage
* vm.$confirm(options).then(confirmCallback);
* 
* @return value
* a ES6 promise that can use promise chains
* 
* @warn
* options.message support raw_html
* it can easily lead to XSS attacks. 
* only use it on trusted content
* on user-provided content
*/

vm.$confirm({
    title: 'confirmTitle',
    message: 'confirmMessage', //message accepts string and raw_html
    confirmTxt: 'confirm btn txt' //default is 'YES',
    cancelTxt: 'cancel btn txt' //default is 'NO'
}).then(function(){
	//do something when confirmed	
});
;
```