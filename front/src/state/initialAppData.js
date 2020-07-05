import gameTexts from '../other/gameTexts'
import question from '../other/questions'

export const appData = {
  isLoading: true,
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
