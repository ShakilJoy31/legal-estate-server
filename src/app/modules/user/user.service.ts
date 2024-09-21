import { IUser } from "./user.interface";
import User from "./user.model";
import bcrypt from 'bcrypt';

export const createUserToDB = async (data: IUser) => {
    try{
        const user = await User.create(data); 
        return user;
    }catch(error){
        return error; 
    }
}




export const getUserForLogin = async (data: IUser) => {
  const { email, password } = data;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return { error: "User not found" };
    }
    if (password !== user.password) {
      return { error: "Invalid password" };
    }
    return user;
  } catch (error) {
    return error;
  }
};



// export const getUserForLogin = async (data: IUser) => {
//     const {email, password} = data
//     try{
//         const user = await User.findOne({email: email});
//         if(user){
//             const
//         } 
//         return user;
//     }catch(error){
//         return error; 
//     }
// }