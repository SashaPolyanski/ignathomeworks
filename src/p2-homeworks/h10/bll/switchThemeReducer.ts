export type initType = {
    theme: Array<themeType>
    defaultTheme: themeType
}
export type themeType = 'dark' | 'red'| 'some'

const initState: initType = {
    theme: ['dark', 'red', 'some'],
    defaultTheme: 'some'
}

export const switchThemeReducer = (state = initState, action: ActionsType):initType => { // fix any
    switch (action.type) {
        case 'SWITCH-THEME': {
            return {...state, defaultTheme: action.theme}
        }
        default:
            return state
    }
}
type ActionsType =  ReturnType<typeof switchTheme>


export const switchTheme = (theme: themeType) => {
    return{
        type: 'SWITCH-THEME',
        theme
    } as const
}