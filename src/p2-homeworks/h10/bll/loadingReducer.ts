export type initType = {
    loading: boolean

}
// type themeType = 'dark'| 'red'| 'some'

const initState: initType = {
    loading: false,

}

export const loadingReducer = (state = initState, action: ActionsType):initType => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {

            return {...state, loading: action.isLoading}
        }

        default:
            return state
    }
}
type ActionsType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'IS-LOADING',
        isLoading
    } as const
}
