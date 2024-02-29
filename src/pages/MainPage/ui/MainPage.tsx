import { observer } from "mobx-react-lite"

import { PageLayout } from "../../../shared/ui/display/PageLayout/PageLayout.tsx"
import { GameStatus } from "../../../widgets/GameStatus/ui/GameStatus.tsx"
import classes from './MainPage.module.scss'

export const MainPage = observer(() => {
  return (
    <PageLayout className={classes.page}>
      <GameStatus />
    </PageLayout>
  )
})