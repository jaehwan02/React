import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSlice.js'

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})


let cart = createSlice({
  name: 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    changeCount(state, action) {
      let findState = state.find((x) => x.id == action.payload)
      findState.count += 1
    },
    changeCount2(state, action) {
      let findState = state.find((x) => x.id == action.payload)
      findState.count <= 1 ? state.pop(action.payload) : findState.count -= 1
    },
    addItem(state, action) {
      let 상태 = false
      state.map(function(a,i) {
        return(
          a.id == action.payload.id ? (a.count++, 상태 = true) : null
        )
      })
      if(!상태) {
        state.push({id : `${action.payload.id}`, name : `${action.payload.title}` , count : 1})
      }
    }
  }
})

export let {changeCount, addItem, changeCount2} = cart.actions


export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
})