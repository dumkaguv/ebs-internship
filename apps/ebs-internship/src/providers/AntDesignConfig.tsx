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
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntDesignConfig;
