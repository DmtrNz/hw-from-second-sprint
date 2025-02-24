import { UserType } from '../HW8'

const initialState: UserType[] = [];

export const homeWorkReducer = (state: UserType[] = initialState, action: ActionType): UserType[] => {

    // need to fix any
    switch (action.type) {

        case 'sort': { // by name

            switch (action.payload) {
                case 'up': {
                    return [...state].sort((a, b) => a.name === b.name ? 0 : a.name > b.name ? 1 : -1); // need to fix
                }
                case 'down': {
                    return [...state].sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? 1 : -1); // need to fix
                }
                default: { return state }
            }

            ///up


            ///down
        }

        case 'check': {

            return state.filter((u) => u.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}

export type DirectionType = 'up' | 'down';

export const sortUsersByDirectionAC = (payload: DirectionType) => ({ type: 'sort', payload } as const);

export const checkUsersAgeAC = (payload: number) => ({ type: 'check', payload } as const);

type ActionType = ReturnType<typeof checkUsersAgeAC> | ReturnType<typeof sortUsersByDirectionAC>;
