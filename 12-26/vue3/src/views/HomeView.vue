<template>
	<div>
		<h1>博主的信息</h1>
		<h2>姓名：{{ name }}</h2>
		<h2>姓名：{{ name1 }}</h2>
		<h2>年龄：{{ age }}</h2>
		<h2>性别：{{ gender }}</h2>
		<button @click="sayInfo">显示信息</button>
	</div>
</template>

<script>
	import { ref,reactive } from 'vue';
	export default {
		setup(props, ctx) {
			// 数据
			let name = '小陈';
			let age = ref(28);
			let gender = '男';
			let name1 = ref('决绝走');
			// 方法
			function sayInfo() {
				alert(`你好${name}，你真6`);
				age.value++
				console.log(props);
				console.log(ctx);
			}
			return { name, age, gender, sayInfo };
		},
	};
</script>
