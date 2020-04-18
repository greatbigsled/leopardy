export const testPlayers = [{
  name: 'Жора',
  points: -2300,
  imageUrl: 'https://leonardo.osnova.io/5406aad7-0c88-b00f-7e2f-8c9c5e56f699/-/scale_crop/108x108/center/',
}, {
  name: 'Инокентий',
  points: 14900,
  imageUrl: 'https://leonardo.osnova.io/0af0017b-25f0-306b-63dd-ce846b1c42a0/-/scale_crop/108x108/center/',
}, {
  name: 'Костя',
  points: 1500,
  imageUrl: 'https://leonardo.osnova.io/8769cf2e-070c-59a2-bc6b-89f31a89a9eb/-/scale_crop/108x108/center/',
}
]

export interface PlayerI {
  name: string,
  points: number,
  imageUrl: string
}
