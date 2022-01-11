import copy from 'fast-copy'

export interface Action<T, P> {
  type: T
  payload: P
}

export enum DropdownActions {
  OPTION_ADD = 'OPTION_ADD',
  OPTION_REMOVE = 'OPTION_REMOVE',
  OPTION_SELECT = 'OPTION_SELECT'
}

export interface Option {
  id: string | number
  value: string | number
  children: JSX.Element
}

export interface DropdownProviderState {
  options: Option[]
  selected: Option
}

const dropdownReducer = (state: DropdownProviderState, action: Action<DropdownActions, any>) => {
  switch (action.type) {
  case DropdownActions.OPTION_ADD: {
    const copiedArr = copy(state)
    copiedArr.options.push(action.payload)

    return copiedArr
  }
  case DropdownActions.OPTION_REMOVE: {
    const copiedArr = copy(state)
    copiedArr.options = copiedArr.options.filter((option) => option.id !== action.payload)

    return copiedArr
  }
  case DropdownActions.OPTION_SELECT: {
    const copiedArr = copy(state)
    copiedArr.selected = action.payload

    return copiedArr
  }
  default:
    return state
  }
}

export default dropdownReducer
