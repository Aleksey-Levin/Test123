import { observer } from "mobx-react-lite"

import { MainPage } from "./pages/MainPage/ui/MainPage.tsx"
import { TonConnectUiProvider } from "./shared/providers/Ton/TonConnectUIProvider/TonConnectUIProvider.tsx"
import { StoreProvider } from "./shared/store/StoreProvider.tsx"

const App = observer(function App() {



  return (
    <TonConnectUiProvider>
      <StoreProvider>
        <MainPage />
      </StoreProvider>
    </TonConnectUiProvider>
  )
})

export default App
