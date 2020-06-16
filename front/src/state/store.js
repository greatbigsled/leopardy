import {
  SET_ACTIVE_QUESTION,
  SET_SELECTED_CELL,
  SET_USER
} from './actionTypes'

import gameTexts from "../other/gameTexts";
import question from '../other/questions'

export const initialState = {
  user: null,
  info: {
    title: "Вступление",
    description: gameTexts.intro_players,
  },
  board: {
    activeQuestion: null,
    questions: question,
    selectedCell: null
  },
}

// редьюсер точно такой же, как в прошлый раз
export const reducer = (state, action) => {
  switch(action.type) {
    case SET_ACTIVE_QUESTION:
      return { ...state, activeQuestion: action.payload }

    case SET_USER:
      return { ...state, user: action.payload }

    case SET_SELECTED_CELL:
      return {
        ...state,
        board: {
          ...state.board,
          selectedCell: action.payload
        }
      }

    case 'RESET':
      return {...initialState}

    default:
      return state
  }
}
