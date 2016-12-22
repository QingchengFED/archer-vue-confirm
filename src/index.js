/**
 * User: yxp-qingcheng
 * Date: 16/9/21
 * Time: 下午1:16
 */

import confirmOptions from './confirm.vue'

export default {
    install (Vue, options = {}) {

        var confirmConstructor = Vue.extend(confirmOptions),
            confirmInstance = null;

        Vue.prototype.$confirm = function (config) {

            return new Promise(function (resolve, reject) {
                if (confirmInstance) return;

                confirmInstance = new confirmConstructor({
                    el: document.createElement('div'),
                    data () {
                        return {
                            title: config.title || options.title || '',
                            message: config.message || options.message || '',
                            confirmTxt: config.confirmTxt || options.confirmTxt || 'YES',
                            cancelTxt: config.cancelTxt || options.cancelTxt || 'NO'
                        }
                    },
                    methods: {
                        onConfirm () {
                            confirmInstance.$remove();
                            confirmInstance = null;
                            resolve();
                        },
                        onCancel () {
                            confirmInstance.$remove();
                            confirmInstance = null;
                            reject && reject();
                        }
                    }
                });

                confirmInstance.$appendTo(document.body);
            });

        }
    }
}
