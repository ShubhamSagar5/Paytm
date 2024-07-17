import { atom, selector } from "recoil";
import axios from 'axios'


export const getAllUserData = atom({
    key:'allUserAtom',
    default:selector({
        key:"allUserSelector",
        get: async() => {
            const res = await axios.get('http://localhost:3000/api/v1/user/findUser?filter=')
            return res.data.userList
        }
    })
})

export const isSignIn = atom({
    key:"isSignKey",
    default:false

})


export const userDataLogin = atom({
    key:'userData',
    default:{
       
    }
})
