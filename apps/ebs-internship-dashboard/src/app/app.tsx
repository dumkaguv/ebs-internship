import { AntDesignConfig } from "@libs";
import { AppRouter, TanstackQueryClient } from "@/providers";
import "@ant-design/v5-patch-for-react-19";
import { antDesignTheme } from "@/config/antDesignTheme";

function App() {
  return (
    <AntDesignConfig theme={antDesignTheme}>
      <TanstackQueryClient>
        <AppRouter />
      </TanstackQueryClient>
    </AntDesignConfig>
  );
}

export default App;
