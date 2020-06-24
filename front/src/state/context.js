import { createContext, useContext, useReducer } from 'react'
import { AppStateReducer } from './reducer'

import gameTexts from '../other/gameTexts'
import question from '../other/questions'

const AppStateContext = createContext({})

const appData = {
  user: null,
  info: {
    title: 'Вступление',
    description: gameTexts.intro_players,
  },
  board: {
    activeQuestion: null,
    questions: question,
    selectedCell: null,
  },
}

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppStateReducer, appData)

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext)
}
