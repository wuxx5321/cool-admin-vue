import type { Merge, ModuleConfig } from "/@/cool";

// npm
import Crud, { locale, setFocus } from "@cool-vue/crud";
import "@cool-vue/crud/dist/index.css";

// 调试、自定义crud
// import Crud, { locale, setFocus } from "../../../packages/crud/src";
// import "../../../packages/crud/src/static/index.scss";

export default (): Merge<ModuleConfig, CrudOptions> => {
	return {
		label: "CRUD",
		description: "快速增删改查及一系列辅助组件",
		author: "COOL",
		version: "1.0.5",
		updateTime: "2024-02-28",
		demo: "/demo/crud",

		// 组件全注册
		components: Object.values(import.meta.glob("./components/**/*.{vue,tsx}")),

		// 配置参数，具体配置点 CrudOptions 查看
		options: {
			style: {
				table: {
					// 插件列表
					plugins: []
					// contextMenu: [], 是否关闭表格右键菜单
				},
				form: {
					// 插件列表
					plugins: [
						// 自动聚焦插件
						setFocus()
					]
				}
			},
			dict: {
				// 排序字段
				sort: {
					prop: "order",
					order: "sort"
				},
				// 按钮及提示文案
				label: locale.zhCn
			}
		},

		// 安装
		install: Crud.install
	};
};
