import User from "./user.model";

export const createUserToDB = async () => {
    const user = new User({
        name: 'Rohim uddin',
        role: 'admin',
        password: '12345'
    })
    await user.save(); 
    return user;
}