/**
 * User: yxp-qingcheng
 * Date: 16/9/20
 * Time: 下午3:50
 */
import confirm from '../dist/index'

Vue.use(confirm);

new Vue({
    el: 'body',
    data () {
        return {
            txt: ''
        }
    },
    methods: {
        showTitleConfirm () {
            var _self = this;
            this.$confirm({title: 'Only Title'}).then(function () {
                _self.txt = 'I say yes!';
            })
        }, showMessageConfirm () {
            var _self = this;
            this.$confirm({title: 'Title & Message', message: 'Are you sure?'}).then(function () {
                _self.txt = 'I am sure!';
            })
        }, showRawHtmlConfirm () {
            var _self = this;
            this.$confirm({title: 'Raw Html', message: 'Wanna Call <a href="tel: 1122112222">1122112222</a> ?'}).then(function () {
                _self.txt = 'Called!';
            })
        }
    }
});