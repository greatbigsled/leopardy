import faker from 'faker'

const gamesList = []
const gamesQty = 20

function generateFakeGame() {
  const game = {
    id: faker.random.uuid(),
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    createdAt: faker.date.past()
  }

  return game
}

for (let i = 0; i < gamesQty; i++) {
  gamesList.push(generateFakeGame())
}

export default gamesList
