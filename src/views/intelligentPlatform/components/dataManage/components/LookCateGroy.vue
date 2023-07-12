<template>
	<div class="view-container">
		<div class="top-container">
			<h1>查看目录</h1>
			<el-button
				class="close-button"
				round
				size="small"
				type="primary"
				@click="handleClick"
				>关闭</el-button
			>
		</div>
		<hr />
		<div class="view-main-container">
			<h3>目录分类</h3>
			<div class="content">
				{{ selfData[0].classification }}
			</div>
			<h3>目录名称</h3>
			<div class="content">
				{{ selfData[0].name }}
			</div>
			<h3>目录代码</h3>
			<div class="content">
				{{ selfData[0].ID }}
			</div>
			<h3>目录摘要</h3>
			<div class="content">
				{{ selfData[0].abstract }}
			</div>
			<h3>目录状态</h3>
			<div class="content">
				{{ selfData[0].states }}
			</div>
		</div>
	</div>
</template>

<script setup>
	import { onMounted, ref, reactive } from "vue";

	//踩到一个坑,就是数据必须是数组形式,不然会报错,data.includes is not a function
	const selfData = reactive([
		{
			classification: "基础目录>人口库>其他>目录名称4",
			ID: "4563223568",
			name: "目录名称4",
			abstract:
				"这里是目录摘要这里是目录摘要这里是目录摘要这里是目录摘要这里是目录摘要这里是目录摘要这里是目录摘要",
			states: "已发布",
		},
	]);
	// 声明触发的事件
	const emit = defineEmits(["closeModal"]);
	//关闭模态框
	const handleClick = () => {
		emit("closeModal", false);
	};
</script>

<style lang="scss" scoped>
	$h3-color: #7e8989;
	.view-container {
		width: 540px;
		height: 90vh;
		min-height: 550px;
		padding: 20px;
		background: #ffffff;
	}
	.top-container {
		display: flex;
		justify-content: space-between;
		h1 {
			margin-top: -5px;
			margin-bottom: 5px;
			font-size: 18px;
		}
		.close-button {
			margin-top: -5px;
			margin-bottom: 5px;
		}
	}
	.view-main-container {
		padding: 20px 0 0 30px;
		h3 {
			font-size: 16px;
			color: $h3-color;
		}
	}
	.content {
		padding: 10px 0 15px 0;
		font-size: 15px;
		font-weight: 700;
	}
</style>
