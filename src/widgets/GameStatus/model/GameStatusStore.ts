import { makeAutoObservable } from "mobx"

export class GameStatusStore {
  value: string | undefined = undefined
  color?: 'red' | 'blue' = undefined
  constructor() {
    makeAutoObservable(this)
  }

  setValue(value: string) {
    this.value = value
  }

  setColor(color: 'red' | 'blue') {
    this.color = color
  }

  restore() {
    this.value = undefined
    this.color = undefined
  }
}
