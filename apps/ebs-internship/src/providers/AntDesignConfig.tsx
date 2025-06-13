import { ConfigProvider } from "antd";
import { FC, PropsWithChildren } from "react";

const AntDesignConfig: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Inter",
          fontSize: 16,
          borderRadius: 8,
        },
        components: {
          Layout: {
            headerBg: "rgb(255,255,255)",
            bodyBg: "rgb(255,255,255)",
            headerPadding: "0 80px",
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
          },
          Card: {
            bodyPadding: 16,
            borderRadiusLG: 16,
            boxShadowTertiary: "0px 0px 8px 0px rgba(59, 130, 246, 0.12)",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntDesignConfig;
