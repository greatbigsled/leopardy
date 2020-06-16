import {
  SET_ACTIVE_QUESTION,
  SET_SELECTED_CELL,
  SET_USER
} from './actionTypes'


export const setActiveQuestion = ({ question, answer }) => ({
  payload: { question, answer },
  type: SET_ACTIVE_QUESTION
})

export const selectCell = ({ selectedCellIdx, selectedRowIdx }) => ({
  payload: { selectedCellIdx, selectedRowIdx },
  type: SET_SELECTED_CELL
})

export const setUser = ({ id, name }) => ({
  payload: { id, name },
  type: SET_USER
})
