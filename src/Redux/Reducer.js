

const initialState = {
    data: [],
    newData: [],
    uptData:[]
}
export const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case "LOAD_DATA":
            return {
                ...state,
                data: action.payload
            }

        case "CREATE_NEW_DATA":
            return {
                ...state,
                data: state.data.concat(action.payload)
            }

        case "DELETE_DATA":
            const newdat = [...state.data]
            newdat.splice(action.payload, 1)
            return {
                data: newdat
            }

        case "UPDATE_DATA":
            const update = [...state.data]
            update.splice(action.payload, 1)
            return {
                uptData: update
            }
        default: return state



    }
}