/* eslint-disable eqeqeq */
import { createContext, FunctionComponent, useContext, useEffect, useReducer, useRef } from 'react'
import compare from 'react-fast-compare'
import dropdownReducer, { DropdownActions, DropdownProviderState, Option } from './reducer'

export interface DropdownProviderValue {
  state: DropdownProviderState
  addOption: (option: Option) => void
  removeOption: (id: Option['id']) => void
  selectOption: (option: Option) => void
}

type UseDropdownStateResult = [DropdownProviderState, Omit<DropdownProviderValue, 'state'>]

const DropdownContext = createContext({} as DropdownProviderValue)

export const DropdownProvider: FunctionComponent<{ selected?: string }> = ({ children, selected }) => {
  const initialState = useRef({
    options: [],
    selected: undefined
  })

  const [state, dispatch] = useReducer(dropdownReducer, initialState.current)

  const selectOption = (option: Option) => dispatch({ type: DropdownActions.OPTION_SELECT, payload: option })
  const addOption = (option: Option) => dispatch({ type: DropdownActions.OPTION_ADD, payload: option })
  const removeOption = (id: Option['id']) => dispatch({ type: DropdownActions.OPTION_REMOVE, payload: id })

  useEffect(() => {
    const selectedValue = state.options.find((option) => option.value == selected)

    if (selectedValue && !compare(selectedValue, state.selected)) {
      selectOption(selectedValue)
    }
  }, [selected, state.options])

  const value = {
    state,
    removeOption,
    addOption,
    selectOption
  }

  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}

export const useDropdownState = () => {
  const { state, addOption, removeOption, selectOption } = useContext(DropdownContext)

  const result = [state, { addOption, removeOption, selectOption }] as UseDropdownStateResult

  return result
}
