import combineRouters from '../utils/combineRouters'

import imageRouter from './image'
import userRouter from './user'

const router = combineRouters([
  imageRouter,
  userRouter
])

export default router
