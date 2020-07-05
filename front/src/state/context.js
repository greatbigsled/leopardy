import React, { createContext, useContext, useReducer } from 'react'

import { AppStateReducer } from './reducer'
import { appData } from './initialAppData'

const AppStateContext = createContext({})

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
