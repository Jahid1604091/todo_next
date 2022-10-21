import { BiEditAlt, BiTrashAlt } from "react-icons/bi";
import data from '../database/data.json'
export default function Table() {
    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr>
                    <th className="px-10 py-2">Name</th>
                    <th className="px-10 py-2">Email</th>
                    <th className="px-10 py-2">Joining Date</th>
                    <th className="px-10 py-2">Salary</th>
                    <th className="px-10 py-2">Status</th>
                    <th className="px-10 py-2"></th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {
                    data?.map(d=><Tr key={d.id} {...d}/>)
                }
                
            </tbody>
        </table>
    )
}

function Tr({name,avatar,email,salary,joining_date, status}) {
    return(<>
        <tr className="text-center">
        <td className="px-10 py-2 flex flex-row items-center">
            <img src={avatar} alt={name} className='w-10 h-8 rounded-xl' />
            <span className="text-center ml-2 font-semibold">{name}</span>
        </td>
        <td className="px-10 py-2">{email}</td>
        <td className="px-10 py-2">{joining_date}</td>
        <td className="px-10 py-2">{salary}</td>
        <td className="px-10 py-2"><button><span className={`bg-${status === 0 ? 'red' : 'green'}-500 px-4 py-1 rounded-xl text-white`}></span></button></td>
        <td className="px-10 py-2 flex justify-around gap-1">
            <button>
                <span className="text-green-500" ><BiEditAlt size={23} /></span>
            </button>
            <button>
                <span className="text-red-500"><BiTrashAlt size={23} /></span>
            </button>
        </td>
    </tr>
    
    </>
    )
}