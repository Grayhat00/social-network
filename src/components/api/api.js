import * as axios from "axios"

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a200e873-4bda-44d6-96f3-bbbac16f1a1a"
    }
});

export const UsersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) 
        .then(response => {
            return response.data
        });
    },
    getUsersAction (userID) {
        return instance.delete(`follow/${userID}`)
        .then(response => {
            return response.data
        });
    }  
}

export default UsersAPI;