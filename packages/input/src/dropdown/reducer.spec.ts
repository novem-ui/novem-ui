import reducer, { DropdownActions, DropdownProviderState } from './reducer'

let defaultState: DropdownProviderState = {
  selected: undefined,
  options: []
}

describe('input/dropdown/reducer', () => {
  test('should return the default state by default', () => {
    const action = {
      type: 'a'
    }
    const reducerResult = reducer(defaultState, action as any)

    expect(reducerResult).toBe(defaultState)
  })

  test('should set the given option', () => {
    const action = {
      type: DropdownActions.OPTION_ADD,
      payload: { value: '1', children: 'One opt', id: '1' }
    }
    defaultState = reducer(defaultState, action)

    expect(defaultState.options[0]).toEqual(action.payload)
  })

  test('should select the given option', () => {
    const action = {
      type: DropdownActions.OPTION_SELECT,
      payload: { value: '1', children: 'One opt', id: '1' }
    }

    defaultState = reducer(defaultState, action)

    expect(defaultState.selected).toEqual(action.payload)
  })

  test('should remove the given option', () => {
    const action = {
      type: DropdownActions.OPTION_REMOVE,
      payload: '1'
    }

    defaultState = reducer(defaultState, action)

    expect(defaultState.options.length).toBe(0)
  })
})
