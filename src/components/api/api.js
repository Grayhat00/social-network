import * as axios from "axios"

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a200e873-4bda-44d6-96f3-bbbac16f1a1a"
    }
});
// export const UsersAPI = {
//     getUsers (currentPage, pageSize) {
//         return instance.get(`users?page=${currentPage}&count=${pageSize}`) 
//         .then(response => {
//             return response.data
//         });
//     }
    
// }

const getUsers =  (currentPage, pageSize) =>  {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`) 
    .then(response => {
        return response.data
    });
}

export const getUsers2 = (id = 3) => {
    return instance.delete(`follow/${id}`)
    .then(response => {
        return response.data
    });
}

export default getUsers;