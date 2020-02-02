import * as axios from "axios"

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "72902493-11e3-4350-9c8f-843c43e2d662"
    }
});

export const UsersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) 
        .then(response => {
            return response.data
        });
    },
    // getUsersAction (userID) {
    //     return instance.delete(`follow/${userID}`)
    //     .then(response => {
    //         return response.data
    //     });
    // }  
}

export default UsersAPI;