	<!-- vue单组件 -->
	<template>
		  <div>
			<h1>这是 App 根组件</h1>
		  </div>
	</template>

	<script>
		export default {//向外暴露这些内容
		  data() {
			return {};
		  },
		  methods: {}
		};
	</script>

	<style scoped>
		/* scopde防止组件样式之间冲突   样式私有，不影响其他组件*/
		h1 {
		  color: red;
		}	
	</style>