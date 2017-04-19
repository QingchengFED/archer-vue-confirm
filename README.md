# archer-vue-confirm
A vue confirm component for qingcheng mobile projects.

![demo](http://zoneke-img.b0.upaiyun.com/e552c553c277569c9e5521e4afcb3735.jpeg)

## Install

```JavaScript
/**
 * @param {Object} [options={}] options globally
 * @param {string} options.title The default title of the confirm
 * @param {string} options.message The default message of the confirm
 * @param {string} options.confirmTxt The default words of the confirm button, 'YES' as default
 * @param {string} options.cancelTxt The default words of the cancel button, 'NO' as default
 * @param {string} options.confirmColor The default color of the confirm button
 * @param {string} options.cancelColor The default color of the cancel button
 * @param {string} options.icon The default icon class of the confirm
 * @param {string} options.confirmWidth The default width of the confirm
 * @param {string} options.marginTop The default marginTop of the confirm
 */

 // Install in the entry file
 import Vue form 'vue'
 import VueArcherConfirm form 'vue-archer-confirm'

 // Config the style of the buttons
 Vue.use(VueArcherConfirm, {
     confirmTxt: 'Confirm',
     cancelTxt: 'Cancel',
     confirmColor: '#00BFBF',
     cancelColor: '#333',
     icon: 'iconWarning', // Add a warning icon in the confirm
     confirmWidth: '325px', // Config the width of confirm
     marginTop: '20%', // Config the position of confirm
  });
```

### Basic use:

```JavaScript
/**
* @usage
* vm.$confirm(options).then(confirmCallback).catch(cancelCallback);
*
* @param {Object} [config={}] config locally
* @param {string} config.title The title of the confirm
* @param {string} config.message The message of the confirm
* @param {string} config.confirmTxt The words of the confirm button
* @param {string} config.cancelTxt The words of the cancel button
* @param {string} config.confirmColor The color of the confirm button
* @param {string} config.cancelColor The color of the cancel button
* @param {string} config.icon The icon class of the confirm
* @param {string} config.confirmWidth The width of the confirm
* @param {string} config.marginTop The marginTop of the confirm
*
* @return
* A ES6 promise that can use promise chains
*
* @warn
* options.message support raw_html
* it can easily lead to XSS attacks.
* only use it on trusted content
* on user-provided content
*/

vm.$confirm({
    title: 'confirmTitle',
    message: 'confirmMessage' //message accepts string and raw_html
}).then(function(){
	//do something when confirmed
}).catch(function () {
    // do something when canceled
});
```
