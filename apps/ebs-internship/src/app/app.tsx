import { AntDesignConfig, AppRouter, TanstackQueryClient } from "@/providers";

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
