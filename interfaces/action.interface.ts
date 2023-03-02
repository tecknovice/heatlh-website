import { ActionTypes } from './actionType.enum'

export interface Action {
  type: ActionTypes
  payload?: any
}
