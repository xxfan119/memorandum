import { createStore } from 'redux'


// 开发者工具
// import {composeWithDevTools} from 'redux-devtools-extension'

// 引入汇总后的reducers
import allReducers from './reducers/index'

// const store = createStore(allReducers,applyMiddleware(thunk))
const store = createStore(allReducers)


export default store