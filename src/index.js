/**
 * User: yxp-qingcheng
 * Date: 16/9/21
 * Time: 下午1:16
 */

import confirmOptions from './confirm.vue'

export default {
    install (Vue, options) {

        var confirmConstructor = Vue.extend(confirmOptions),
            confirmInstance = null;

        Vue.prototype.$confirm = function (config) {

            return new Promise(function (resolve, reject) {
                if (confirmInstance) resolve();

                confirmInstance = new confirmConstructor({
                    el: document.createElement('div'),
                    data () {
                        return {
                            title: config.title,
                            message: config.message,
                            confirmTxt: config.confirmTxt || 'YES',
                            cancelTxt: config.cancelTxt || 'NO'
                        }
                    },
                    methods: {
                        onConfirm () {
                            confirmInstance.$remove();
                            confirmInstance = null;
                            resolve({status: 200});
                        },
                        onCancel () {
                            confirmInstance.$remove();
                            confirmInstance = null;
                            reject();
                        }
                    }
                });

                confirmInstance.$appendTo(document.body);
            });

        }
    }
}