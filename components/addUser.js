import { useReducer } from "react"
import {BiPlus} from 'react-icons/bi'
import Error from "./shared/error"
import Success from "./shared/success"
const formReducer = (state, e) => {
    return {
        ...state,
        [e.target.name]: e.target.value
    }
}

export default function AddUserForm() {
    const initialState = {}
    const [formData, dispatch] = useReducer(formReducer, initialState)
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(Object.values(formData).length ===0){
            return console.table('No Data Given')
        }
       
    }
    // if(Object.keys(formData).length > 0){
    //     return  <Success message='Success'/>
    // }
    // if(Object.keys(formData).length == 0){
    //     return  <Error message='Error'/>
    // }
    return (
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 w-5/6 gap-4">
            <div className="input-type">
                <input type="text" onChange={dispatch} name="name" placeholder="Name" className="p-1 my-2 border w-full focus:outline-none" />
            </div>
            <div className="input-type">
                <input type="text" onChange={dispatch} name="email" placeholder="Email" className="p-1 my-2 border w-full focus:outline-none" />
            </div>
            <div className="input-type">
                <input type="date" onChange={dispatch} name="date" placeholder="Joining Date" className="p-1 my-2 border w-full focus:outline-none" />
            </div>
            <div className="input-type">
                <input type="text" onChange={dispatch} name="salary" placeholder="Salary" className="p-1 my-2 border w-full focus:outline-none" />
            </div>

            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio" onChange={dispatch} name="status" value="Active" id="radioDefault1"
                        className="form-check-input appearance-none border rounded-full h-4 w-4 border-gray-400 bg-white checked:bg-green-400 focus:outline-none transition duration-300 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault1" className="inline-block text-gray-700">Active</label>
                </div>
                <div className="form-check">
                    <input type="radio"  onChange={dispatch} name="status" value="Inactive" id="radioDefault2"
                        className="form-check-input appearance-none border rounded-full h-4 w-4 border-gray-400 bg-white checked:bg-green-400 focus:outline-none transition duration-300 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault2" className="inline-block text-gray-700">Inactive</label>
                </div>

            </div>
            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white p-1 rounded-md "><BiPlus size={23}/> Add</button>
        </form>
    )
}
