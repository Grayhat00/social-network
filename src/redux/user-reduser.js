const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



// let sum = (a, b = 1) => {
//     return a+b;
// }
// sum(2);
// For state should use parameter by default
let initialState =  {
    users: [ ],
    pageSize: 6,
    totalUsersCount: [],
    currentPage: 1,
    isFetching: false
};
const usersReduser = (state = initialState, action) => {
    let followUser = {

    }
    switch (action.type ) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                   return u;
                })
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
            case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
            case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            }
            case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }

}

export const follow = (userId) =>  ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export default usersReduser;
