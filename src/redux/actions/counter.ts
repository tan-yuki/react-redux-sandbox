export const INCREMENT_ACTION_TYPE = 'increment';

export interface IncrementAction {
  type: typeof INCREMENT_ACTION_TYPE
}

export function increment(): CounterAction {
  return {
    type: INCREMENT_ACTION_TYPE
  };
}

export type CounterAction = IncrementAction;
