import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common.components/Header/store'
import { reducer as homeReducer } from '../pages/Home/store'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
})

export default reducer
