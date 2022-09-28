export interface Game {
  title: string
  id: number
  players: number
  gameImageUrl: string
  tags: string[]
}

export interface GameConfig {
  id: number
  settings: any[]
}

