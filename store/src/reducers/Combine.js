import {combineReducers} from 'redux'
import cartReducer from './CartReducer'
const Combine = combineReducers({
    cart: cartReducer
})
export default Combine