import { routes as authentication } from '../modules/authentication'
import { routes as app } from '../modules/app'

export default [
    ...authentication,
    ...app
]