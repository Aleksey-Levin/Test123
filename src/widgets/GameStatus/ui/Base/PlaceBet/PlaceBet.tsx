import { observer } from "mobx-react-lite"
import { useCallback } from "react"
import { useForm } from "react-hook-form"

import InputIcon from '../../../../../assets/Number box.png'
import { EnterAmount } from "../../../../../entity/EnterAmount/EnterAmount.tsx"
import {
  DoubleOrNothingGameStatusButton,
} from "../../../../../entity/GameStatusButton/ui/DobuleOrNothing/DoubleOrNothingGameStatusButton.tsx"
import { InitGameStatusesRobot } from "../../../../../entity/GameStatusRobot/ui/Init/InitGameStatusesRobot.tsx"
import { useStores } from "../../../../../shared/store/StoreProvider.tsx"
import { Input } from "../../../../../shared/ui/control/Form"
import statusClasses from '../../GameStatus.module.scss'

export interface PlaceBetValues {
  value: string
}

export const PlaceBet = observer(() => {

  const { gameStatusStore } = useStores()

  const { control,
    handleSubmit,
    formState: { isValid },
    setValue,
  } = useForm<PlaceBetValues>({
    mode: "all",
    defaultValues: {
      value: '',
    },
  })

  const onSubmit = useCallback((data: PlaceBetValues) => {
    gameStatusStore.setValue((BigInt(data.value) * BigInt(Math.pow(10, 9))).toString())
  }, [gameStatusStore])

  return (
    <form
      className={statusClasses.statusContainer}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InitGameStatusesRobot />
      <div className={statusClasses.enterAmountContainer}>
        <EnterAmount />
        <Input<PlaceBetValues>
          background={InputIcon}
          controlledInputProps={{
            name: 'value',
            control,
            setValue,
            validateParams: {
              isOnlyNumbers: true,
              notGreatSymbol: 5,
            },
            rules: {
              required: 'Bet is required',
            },
          }}
        />
      </div>

      <DoubleOrNothingGameStatusButton isSubmit isDisabled={!isValid} />
    </form>
  )
})