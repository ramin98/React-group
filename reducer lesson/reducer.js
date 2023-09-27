export let initialState = {
    usersArray: [{ id: 1, name: 'Ramin' }, { id: 2, name: 'Sam' }]
}

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            let newArr = [...state.usersArray]
            newArr.push(action.payload)
            return { ...state, usersArray: newArr }
            case 'DELETE':
            let deletedArray = [...state.usersArray]
            deletedArray.pop()
            return { ...state, usersArray: deletedArray }
    }
}



