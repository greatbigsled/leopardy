import { SET_ACTIVE_QUESTION, SET_SELECTED_CELL } from './actionTypes'


export const setActiveQuestion = ({ question, answer }) => ({
  payload: { question, answer },
  type: SET_ACTIVE_QUESTION
})

export const selectCell = ({ selectedCellIdx, selectedRowIdx }) => ({
  payload: { selectedCellIdx, selectedRowIdx },
  type: SET_SELECTED_CELL
})
