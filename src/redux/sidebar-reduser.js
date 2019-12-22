
let initialState =  {
    friends: [
        {id: '1', name: 'Andres'},
        {id: '2', name: 'Sasha'},
        {id: '3', name: 'Sveta'},
    ],
    digit: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you'},
    ]
};
const sidebarReduser = (state = initialState, action) => {
    return state;
}

export default sidebarReduser;
