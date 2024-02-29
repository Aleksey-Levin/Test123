import { observer } from "mobx-react-lite"

import MenuIcon from '../../../../assets/Home.png'
import { Button } from "../../../../shared/ui/control/Button"

export const HomeButton = observer(() => {
  return (
    <Button as={'button'} backgroundImage={MenuIcon} size={'xsm'} />
  )
})