const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return({
                ...state,
                entries: [...state.entries, action.payload]
            })
            break;
        case 'DELETE_ENTRY':
            return({
                ...state,
                entries: state.entries.filter(items => items.id !== action.payload)
            })
        default:
            return state
            break;
    }
}

export default reducer