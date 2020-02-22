import {CounterAction, INCREMENT_ACTION_TYPE} from '../actions/counter'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export function countReducer(
  state = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREMENT_ACTION_TYPE:
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}
