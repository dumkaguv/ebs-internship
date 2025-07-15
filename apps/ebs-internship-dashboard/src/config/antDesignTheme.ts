import { ThemeConfig } from "antd";

export const antDesignTheme: ThemeConfig = {
  components: {
    Layout: {
      siderBg: "#0F172A",
      headerBg: "#F8FAFC",
      bodyBg: "#F8FAFC",
      headerHeight: 48,
    },
    Button: {
      colorPrimary: "rgba(59, 130, 246, 1)",
      colorPrimaryHover: "rgba(59, 131, 246, 0.89)",
      colorPrimaryActive: "rgba(59, 131, 246, 0.78)",
    },
    Input: {
      paddingInline: 16,
      paddingInlineLG: 20,
      controlHeight: 50,
    },
    InputNumber: {
      paddingInline: 16,
      paddingInlineLG: 20,
    },
    Select: {
      paddingSM: 16,
    },
  },
};
