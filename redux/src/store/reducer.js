let initialState = {
    arr:[]
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'add':
            let newarr = [...state.arr]
            newarr.push(action.payload)
            return {...state, arr: newarr}
    }

    return {...state}
}

