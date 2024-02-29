import { observer } from "mobx-react-lite"
import { FC } from "react"

import {
  DoubleOrNothingGameStatusButton,
} from "../../../../../entity/GameStatusButton/ui/DobuleOrNothing/DoubleOrNothingGameStatusButton.tsx"
import {
  PickColorGameStatusesRobot,
} from "../../../../../entity/GameStatusRobot/ui/PickColor/PickColorGameStatusesRobot.tsx"
import {
  BluePickColorButton,
} from "../../../../../entity/PickColorButton/ui/BluePickColorButton/BluePickColorButton.tsx"
import { RedPickColorButton } from "../../../../../entity/PickColorButton/ui/RedPickColorButton/RedPickColorButton.tsx"
import { useStores } from "../../../../../shared/store/StoreProvider.tsx"
import statusClasses from '../../GameStatus.module.scss'

interface ChoseColorWidgetProps {
  deposit?: (bet: string) => Promise<boolean | undefined>
}

export const ChoseColorWidget: FC<ChoseColorWidgetProps> = observer(({ deposit }) => {
  const { gameStatusStore } = useStores()

  return (
    <div className={statusClasses.statusContainer}>
      <div className={statusClasses.robotAndColor}>
        <div className={statusClasses.colorPickContainer}>
          <RedPickColorButton
            type={'circle'}
            isChoosen={gameStatusStore.color === 'red'}
            onChose={(color) => {
              gameStatusStore.setColor(color)
            }}
          />
          <PickColorGameStatusesRobot />
          <BluePickColorButton
            type={'circle'}
            isChoosen={gameStatusStore.color === 'blue'}
            onChose={(color) => {
              gameStatusStore.setColor(color)
            }}
          />
        </div>
        <div className={statusClasses.colorPickContainer}>
          <RedPickColorButton
            type={'rectangle'}
            isChoosen={gameStatusStore.color === 'red'}
            onChose={(color) => {
              gameStatusStore.setColor(color)
            }}
          />
          <BluePickColorButton
            type={'rectangle'}
            isChoosen={gameStatusStore.color === 'blue'}
            onChose={(color) => {
              gameStatusStore.setColor(color)
            }}
          />
        </div>
      </div>
      <DoubleOrNothingGameStatusButton onClick={() => {
        if (!gameStatusStore.color) return

        void deposit?.(gameStatusStore.value ?? '0')
      }}
      />
    </div>
  )
})