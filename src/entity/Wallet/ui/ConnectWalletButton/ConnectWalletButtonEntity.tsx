import { observer } from "mobx-react-lite"
import { FC } from "react"

import WalletImg from '../../../../assets/ConnectWallet.png'
import { Button } from "../../../../shared/ui/control/Button"

interface ConnectWalletButtonEntity {
  onClick?: () => void
}

export const ConnectWalletButtonEntity: FC<ConnectWalletButtonEntity> = observer(({ onClick }) => {
  return (
    <Button
      as={'button'}
      size={'lg'}
      backgroundImage={WalletImg}
      onClick={onClick}
    />
  )
})