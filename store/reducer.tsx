import { Action } from '../interfaces/action.interface'
import { State } from '../interfaces/state.interface'

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action
  return state
}
