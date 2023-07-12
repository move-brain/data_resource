<template>
	<div>
		<el-table
			:data="tableData"
			style="width: 100%"
			:row-class-name="tableRowClassName">
			<el-table-column
				prop="ID"
				label="目录代码"
				width="180" />
			<el-table-column
				prop="name"
				label="目录名称"
				width="180" />
			<el-table-column
				prop="abstract"
				label="目录摘要" />
			<el-table-column
				prop="states"
				label="目录状态" />
			<el-table-column
				fixed="right"
				label="操作">
				<template #default>
					<el-button
						link
						type="primary"
						size="large"
						@click="handleClick"
						>查看</el-button
					>
					<el-button
						link
						type="primary"
						size="large"
						>编辑</el-button
					>
					<el-button
						link
						type="primary"
						size="small"
						>送审</el-button
					>
					<!-- 大概写一些v-if即可 -->
				</template>
			</el-table-column>
		</el-table>
		<!-- 使用传送框内置组件,将这个模态框送到body标签,防止父组件的影响 -->
		<Teleport to="body">
			<LookCateGroy
				class="view-modal"
				v-if="open"
				@close-modal="handleClose"></LookCateGroy>
		</Teleport>
	</div>
</template>

<script lang="ts" setup>
	import { onMounted, ref, reactive } from "vue";
	import LookCateGroy from "./LookCateGroy.vue";

	const open = ref(false);

	const handleClick = () => {
		open.value = true;
	};
	const handleClose = (msg) => {
		open.value = msg; //接收到子组件的消息
	};
	interface cateGory {
		ID: string; //目录代码
		name: string; //目录名称
		abstract: string; //目录摘要
		states: string; //目录状态
		actions: string; //操作
	}

	const tableRowClassName = ({
		row,
		rowIndex,
	}: {
		row: cateGory;
		rowIndex: number;
	}) => {
		if (rowIndex === 1) {
			return "warning-row";
		} else if (rowIndex === 3) {
			return "success-row";
		}
		return "";
	};
	//状态有已送审,审核未通过,已发布,待送审
	//操作有,查看,送审,编辑,作废

	const tableData: cateGory[] = [
		{
			ID: "4563223568",
			name: "目录名称1",
			abstract: "信息资源",
			states: "已送审",
			actions: "查看",
		},
		{
			ID: "4563223568",
			name: "目录名称2",
			abstract: "信息资源",
			states: "审核未通过",
			actions: "送审",
		},
		{
			ID: "4563223568",
			name: "目录名称3",
			abstract: "信息资源",
			states: "已发布",
			actions: "编辑",
		},
		{
			ID: "4563223568",
			name: "目录名称4",
			abstract: "信息资源",
			states: "待送审",
			actions: "作废",
		},
	];
</script>

<style>
	.el-table .warning-row {
		--el-table-tr-bg-color: var(--el-color-warning-light-9);
	}

	.el-table .success-row {
		--el-table-tr-bg-color: var(--el-color-success-light-9);
	}
	.view-modal {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 999;
	}
</style>
