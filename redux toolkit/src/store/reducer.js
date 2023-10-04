import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      return data
    }
  )

const objectSlice = createSlice({
    name:'objects',
    initialState: {
         getArr:[],
         arr:[],
         isLoading:false,
         error:null

    },
    reducers:{
        addObject: (state, action) => {
            let newarr = [...state.arr]
            newarr.push(action.payload)
            return {...state, arr: newarr}
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
          state.getArr = action.payload
          state.isLoading = false
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
          state.isLoading = false
          state.error = true
        })
      },
    
})

export const {addObject, getApi} =  objectSlice.actions

export default objectSlice.reducer



