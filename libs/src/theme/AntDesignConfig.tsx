import { globalStyles as GlobalStyles } from "../styles";
import { ConfigProvider, ConfigProviderProps, ThemeConfig } from "antd";
import { StyleProvider } from "antd-style";
import { ReactNode } from "react";
import { defaultTheme } from "./defaultTheme";
import merge from "lodash.merge";

interface Props extends Omit<ConfigProviderProps, "theme"> {
  children: ReactNode;
  theme?: ThemeConfig;
}

export const AntDesignConfig = ({ children, theme, ...config }: Props) => {
  const mergedTheme = merge({}, defaultTheme, theme);

  return (
    <ConfigProvider
      theme={mergedTheme}
      {...config}
    >
      <StyleProvider hashPriority="high">
        <>
          <GlobalStyles />
          {children}
        </>
      </StyleProvider>
    </ConfigProvider>
  );
};
