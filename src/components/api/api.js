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
    follow (userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile (userId) {
        return instance.get(`profile/` + userId);
    }
}

export const AuthAPI = {
    logIn () {
        return instance.get(`auth/me?`);
    },
}

// export default UsersAPI;

