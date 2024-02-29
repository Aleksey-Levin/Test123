import { observer } from "mobx-react-lite"
import { FC } from "react"

import Double from "../../../../assets/Double or nothing.png"
import { Button } from "../../../../shared/ui/control/Button"

interface DoubleOrNothingGameStatusButtonProps {
  isDisabled?: boolean
  onClick?: () => void
  isSubmit?: boolean
}

export const DoubleOrNothingGameStatusButton:FC<DoubleOrNothingGameStatusButtonProps> = observer(({
  isDisabled,
  onClick,
  isSubmit,
}) => {
  return (
    <Button
      as={'button'}
      backgroundImage={Double}
      size={'lg'}
      isDisabled={isDisabled}
      type={isSubmit ? 'submit' : undefined}
      onClick={onClick}
    />
  )
})