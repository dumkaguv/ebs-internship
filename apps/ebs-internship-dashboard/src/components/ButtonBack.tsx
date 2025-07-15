import { RoutesEnum } from "@/config/routesEnum";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface Props {
  title?: string;
  showIcon?: boolean;
}

export const ButtonBack = ({ title = "Back", showIcon = true }: Props) => {
  const navigate = useNavigate();

  const goBack = () => {
    const hasHistory = window.history.state?.idx > 0;

    if (hasHistory) {
      navigate(-1);
    } else {
      navigate(RoutesEnum.DASHBOARD);
    }
  };

  return (
    <Button
      variant="outlined"
      icon={showIcon && <ArrowLeftOutlined />}
      onClick={goBack}
    >
      {title}
    </Button>
  );
};
