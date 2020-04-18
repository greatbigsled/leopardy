export interface ThemeQuestionsI {
    theme: string,
    id: string,
    questions: Array<QuestionItemI>
}

export interface QuestionItemI {
    price: number,
    q: string,
    a: string
}
