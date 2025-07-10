import { AntDesignConfig } from "@libs";
import { AppRouter, TanstackQueryClient } from "@/providers";
import { AntDesignTheme } from "@/providers";
import "@ant-design/v5-patch-for-react-19";

export function App() {
  return (
    <AntDesignConfig theme={AntDesignTheme}>
      <TanstackQueryClient>
        <AppRouter />
      </TanstackQueryClient>
    </AntDesignConfig>
  );
}

export default App;
