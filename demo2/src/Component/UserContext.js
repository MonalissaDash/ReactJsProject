import React  from 'react'

// const UserContext=React.createContext(); // 1 approach
const UserContext=React.createContext('Monika');
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export { UserProvider,UserConsumer }
export default UserContext