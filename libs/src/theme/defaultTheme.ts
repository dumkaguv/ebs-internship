import { customThemePalette } from "../styles";
import { ThemeConfig } from "antd";

export const defaultTheme: ThemeConfig = {
  token: {
    fontFamily: "Inter",
    fontSize: 16,
    borderRadius: 8,
    boxShadow: "0px 0px 8px 0px rgba(59, 130, 246, 0.12)",
    ...customThemePalette,
  },
  components: {
    Layout: {
      headerPadding: "0 0",
    },
    Button: {
      colorPrimary: "rgb(2,6,23)",
      colorPrimaryHover: "rgba(2, 6, 23, 0.82)",
      colorPrimaryActive: "rgba(2, 6, 23, 0.69)",
      controlHeightLG: 48,
      contentFontSize: 14,
      fontWeight: 500,
      controlHeight: 48,
      paddingInline: 24,
      paddingInlineLG: 24,
      boxShadow: "0",
    },
    Collapse: {
      headerPadding: "24px",
      colorBorder: "rgb(203,213,225)",
    },
    Divider: {
      lineWidth: 4,
      colorSplit: "rgb(226,232,240)",
    },
    Typography: {
      colorTextHeading: "rgb(15,23,42)",
      fontSizeHeading1: 40,
      fontSizeHeading2: 32,
      fontSizeHeading4: 20,
      fontSizeHeading3: 26,
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
    Card: {
      bodyPadding: 16,
      borderRadiusLG: 16,
      boxShadowTertiary: "0px 0px 8px 0px rgba(59, 130, 246, 0.12)",
    },
    List: {
      margin: 0,
      marginLG: 0,
      marginSM: 0,
      marginXXL: 0,
      marginXXS: 0,
      itemPadding: "0",
    },
    Pagination: {
      colorText: "rgba(41,39,39,0.88)",
    },
    Checkbox: {
      controlInteractiveSize: 24,
      lineWidthBold: 2.5,
      colorPrimary: "rgb(59,130,246)",
      paddingXS: 12,
    },
  },
};
