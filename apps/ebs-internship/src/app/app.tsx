import { AntDesignConfig, AppRouter, TanstackQueryClient } from "@/providers";
import "@ant-design/v5-patch-for-react-19";

export function App() {
  return (
    <AntDesignConfig>
      <TanstackQueryClient>
        <AppRouter />
      </TanstackQueryClient>
    </AntDesignConfig>
  );
}

export default App;
