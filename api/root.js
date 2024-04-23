import { dirname } from 'path'
import { fileURLToPath } from 'url'

export const root = dirname(fileURLToPath(import.meta.url)).split('/').slice(0, -1).join('/')
