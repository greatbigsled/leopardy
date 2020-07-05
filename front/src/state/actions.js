import {
  SET_ACTIVE_QUESTION,
  SET_SELECTED_CELL,
  SET_USER,
  SET_IS_LOADING
} from './actionTypes'


export const setActiveQuestion = ({ question, answer }) => ({
  payload: { question, answer },
  type: SET_ACTIVE_QUESTION
})

export const selectCell = ({ selectedCellIdx, selectedRowIdx }) => ({
  payload: { selectedCellIdx, selectedRowIdx },
  type: SET_SELECTED_CELL
})

export const setUser = (user) => {
  if (!user) {
    return {
      payload: null,
      type: SET_USER
    }
  }

  const { id, name } = user
  return {
    payload: { id, name },
    type: SET_USER
  }
}

export const setLoading = (isLoading) => ({
  payload: isLoading,
  type: SET_IS_LOADING
})
