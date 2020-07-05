import {
  SET_ACTIVE_QUESTION,
  SET_SELECTED_CELL,
  SET_USER,
  SET_IS_LOADING
} from './actionTypes'

export const AppStateReducer = (state, action) => {
  switch(action.type) {
    case SET_ACTIVE_QUESTION: {
      return { ...state, activeQuestion: action.payload }
    }
    case SET_USER: {
      return { ...state, user: action.payload }
    }
    case SET_SELECTED_CELL: {
      return {
        ...state,
        board: {
          ...state.board,
          selectedCell: action.payload
        }
      }
    }
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.payload }
    }

    default: {
      return state
    }
  }
}
