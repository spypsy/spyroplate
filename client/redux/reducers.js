import { combineReducers } from 'redux'
import optimist from 'redux-optimist'
import { routerReducer as routing } from 'react-router-redux'

export default optimist(
  combineReducers({
    routing,
  }),
)
