import { Flex, Typography } from "antd";
import { useLogoStyles } from "./LogoStyles";
import logo from "@/assets/logo.png";

export const Logo = () => {
  const { styles } = useLogoStyles();

  return (
    <Flex
      align="center"
      gap={5}
    >
      <img
        src={logo}
        width={40}
        height={40}
        alt="Logo"
      />
      <Typography.Title className={styles.title}>Byway</Typography.Title>
    </Flex>
  );
};
