const initState = [
    { password: "something" },
    { password: "12345" },
    { password: "hello" }

]
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return [...state, action.payload]
        default:
            return state
    }
}

export default reducer;