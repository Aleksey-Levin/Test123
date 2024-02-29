import { enableStaticRendering } from "mobx-react-lite"

import { GameStatusStore } from "../../widgets/GameStatus/model/GameStatusStore.ts"
import { DialogStore } from "./Dialog/DialogStore.ts"
import { ErrorStore } from "./Error/ErrorStore.ts"

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
enableStaticRendering(typeof window === "undefined")

export class RootStore {
  errorStore: ErrorStore
  dialogStore: DialogStore
  gameStatusStore: GameStatusStore


  constructor() {
    this.dialogStore = new DialogStore()
    this.errorStore = new ErrorStore(this)
    this.gameStatusStore = new GameStatusStore()
  }
}

export const rootStore = new RootStore()
