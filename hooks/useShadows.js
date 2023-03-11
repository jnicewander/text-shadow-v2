import { useReducer } from 'react'

const ADD = 'ADD'
const UPDATE = 'UPDATE'
const DELETE = 'DELETE'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const CHANGE_COLOR = 'CHANGE_COLOR'

const shadowsReducer = (state, action) => {
  const { shadows } = state
  const { type, payload } = action

  switch (type) {
    case ADD:
      const uniqueId = () => {
        // returns the highest shadow key plus 1
        return Math.max(...shadows.map(({ id }) => id), 0) + 1
      }
      const index = shadows.findIndex(({ id }) => id === payload.id) + 1
      let shadowCopy = [...shadows]
      shadowCopy.splice(index, 0, { id: uniqueId(), ...payload.shadow })
      return {
        ...state,
        shadows: [...shadowCopy],
      }
    case UPDATE:
      return {
        ...state,
        shadows: shadows.map((shadow) =>
          shadow.id === payload.id ? { ...shadow, ...payload } : shadow
        ),
      }
    case DELETE:
      return {
        ...state,
        shadows: shadows.filter((shadow) => shadow.id !== payload.id),
      }
    case INCREMENT:
      return {
        ...state,
        shadows: shadows.map((shadow) =>
          shadow.id === payload.id
            ? { ...shadow, size: shadow.size + 1 }
            : shadow
        ),
      }
    case DECREMENT:
      return {
        ...state,
        shadows: shadows.map((shadow) =>
          shadow.id === payload.id
            ? { ...shadow, size: shadow.size - 1 }
            : shadow
        ),
      }
    case CHANGE_COLOR:
      return {
        ...state,
        shadows: shadows.map((shadow) =>
          shadow.id === payload.id
            ? { ...shadow, color: payload.color }
            : shadow
        ),
      }
    default:
      return state
  }
}

const useShadows = (initialState) => {
  const [state, dispatch] = useReducer(shadowsReducer, initialState)

  const addShadow = (id, shadow) =>
    dispatch({ type: ADD, payload: { id, shadow } })
  const updateShadow = (shadow) => dispatch({ type: UPDATE, payload: shadow })
  const deleteShadow = (id) => dispatch({ type: DELETE, payload: { id } })
  const increaseSize = (id) => dispatch({ type: INCREMENT, payload: { id } })
  const decreaseSize = (id) => dispatch({ type: DECREMENT, payload: { id } })
  const changeColor = (id, color) =>
    dispatch({ type: CHANGE_COLOR, payload: { id, color } })

  return [
    state,
    {
      addShadow,
      updateShadow,
      deleteShadow,
      increaseSize,
      decreaseSize,
      changeColor,
    },
  ]
}

export default useShadows
