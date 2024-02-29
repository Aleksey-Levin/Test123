
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react"
import { observer } from "mobx-react-lite"
import { useCallback } from "react"

import { WalletButtonEntity } from "../../entity/Wallet/ui/WalletButton/WalletButtonEntity.tsx"
import { useStores } from "../../shared/store/StoreProvider.tsx"

export const WalletButton = observer(() => {
  const [tonConnectUI] = useTonConnectUI()
  const walletAddress = useTonAddress()

  const { gameStatusStore } = useStores()

  const onClick = useCallback(async () => {
    if (walletAddress) {
      await tonConnectUI.disconnect()
      gameStatusStore.restore()
    }
  }, [tonConnectUI, walletAddress, gameStatusStore])
  
  return (
    <WalletButtonEntity onClick={onClick} />
  )
})