import { atom } from 'recoil'
import { GameConfig } from '../typings'

export const gameConfigState = atom<GameConfig | null>({
  key: 'gameConfigState',
  default: null,
})