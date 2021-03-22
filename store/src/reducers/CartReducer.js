


const cartReducer = (state = [], action) => {
    if(action.type === 'ADD') {
        const is = [...state].findIndex(item => item.data.volumeInfo.title === action.payload.data.volumeInfo.title)
        
        if(is > -1) {
            state[is].many = state[is].many + action.payload.many
           
            return state
        }
        else return [...state, action.payload]
    }
    else if(action.type === 'SUB') {
    const newArr = [...state].filter(item => item.id !== action.payload.id)
    return newArr
    }
    else if(action.type === 'MORE') {
        const is = [...state].findIndex(item => item.id === action.payload.data.id)
        if(action.payload.what === 'add') {
         state[is].many = state[is].many + 1
        
        return state
        }
      
        else if(action.payload.what === 'sub') {
            if(state[is].many >= 2) {
               state[is].many = state[is].many - 1
            
            return state
            }
           else return state
        }
        
        }
      
    else return state
}
export default cartReducer