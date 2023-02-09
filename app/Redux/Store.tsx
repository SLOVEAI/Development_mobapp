import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AuthReducer from './Reducers'
export const rootReducer = combineReducers({
  Auth: AuthReducer,

})

const initialState = {}

const Store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
)

export default Store