import { createGlobalStyle } from "antd-style";

const GlobalStyles = createGlobalStyle(
  ({ theme: token }) => `
  html {
    scroll-padding-top: var(--header-height);
  }

  body {
    display: flex;
    flex-direction: column;
    background-color: ${token.colorWhite};
  }

  .w-full {
    width: 100%;
  }

  .ant-card {
    box-shadow: 0px 0px 8px 0px rgba(59, 130, 246, 0.12) !important;
  }
    
  .ant-btn {
    box-shadow: 0 !important;
  }

  .ant-card-body {
    height: 100% !important;
  }

  .ant-card-hoverable {
    transition: transform 0.3s ease, box-shadow 0.3s ease !important;
  }

  .ant-card-hoverable:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2) !important;
    transform: scale(1.015);
  }

  .ant-image-img {
    border-radius: ${token.borderRadiusLG}px;
  }

  .ant-typography {
    margin-bottom: 0 !important;
  }

  .ant-col {
    height: 100% !important;
  }

  .ant-list-item {
    height: 100% !important;
  }
`
);

export default GlobalStyles;
