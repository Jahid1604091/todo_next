const MONGO_URI = 'mongodb://localhost:27017/nextTodo'
import mongoose from 'mongoose';
const connectDB = async ()=>{
    try {
        const {connection} = await mongoose.connect(MONGO_URI);
        if(connection.readyState === 1){
            console.log('DB connected...')
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectDB;