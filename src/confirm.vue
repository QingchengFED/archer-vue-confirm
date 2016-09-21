<template>
	<div class="g-layerWrap">
		<div class="m-confirm">
			<div class="confirm-mainWrap">
				<div class="confirm-titleWrap" v-show="title">
					<h3 class="title f-bw">{{title}}</h3>
				</div>
				<div class="confirm-ctnWrap" v-show="message">
					<p class="ctn f-bw">
						{{{message}}}
					</p>
				</div>
			</div>
			<div class="confirm-btnWrap retainbt">
				<button class="btn btn-half retainbr" @click="onCancel()" type="button">{{cancelTxt}}</button>
				<button class="btn btn-half" @click="onConfirm()" type="button">{{confirmTxt}}</button>
			</div>
		</div>
	</div>
</template>
<style>
	@import "media_query.less";
</style>
<style lang="less" scoped>
	@import "1px_border.less";
	@import "confirm.less";
</style>
<script>
	export default{

	}
</script>
