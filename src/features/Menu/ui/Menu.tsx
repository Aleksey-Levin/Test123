import { observer } from "mobx-react-lite"
import { useState } from "react"

import { HomeButton } from "../../../entity/Menu/ui/Home/HomeButton.tsx"
import { LeagueButton } from "../../../entity/Menu/ui/League/LeagueButton.tsx"
import { MenuButton } from "../../../entity/Menu/ui/MenuButton/MenuButton.tsx"
import { RecentButton } from "../../../entity/Menu/ui/Recent/RecentButton.tsx"
import { StatsButton } from "../../../entity/Menu/ui/Stats/StatsButton.tsx"
import classes from './Menu.module.scss'

export const Menu = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  return (
    <div className={classes.content}>
      <MenuButton onClick={() => {
        setIsOpen((prev) => !prev)
      }}
      />
      {isOpen && (
        <div className={classes.hiddenContent}>
          <HomeButton />
          <LeagueButton />
          <StatsButton />
          <RecentButton />
        </div>
      )}
    </div>
  )
})