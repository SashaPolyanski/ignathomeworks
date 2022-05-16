import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: any): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = [...state].sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            });

            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            let filteredName = state.filter((f: any) => f.age >= 18)
            return filteredName
        }
        default:
            return state
    }
}