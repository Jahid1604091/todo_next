import { BiEditAlt, BiTrashAlt } from "react-icons/bi";

export default function Table() {
    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr>
                    <th className="px-10 py-2">Name</th>
                    <th className="px-10 py-2">Email</th>
                    <th className="px-10 py-2">Status</th>
                    <th className="px-10 py-2"></th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                <tr className="text-center">
                    <td className="px-10 py-2 flex flex-row items-center">
                        <img src="" alt="" />
                        <span className="text-center ml-2 font-semibold"> Mr. Bones</span>
                    </td>
                    <td className="px-10 py-2">bondex@gmail.com</td>
                    <td className="px-10 py-2"><button><span className="bg-red-500 px-4 py-1 rounded-xl text-white"></span></button></td>
                    <td className="px-10 py-2 flex justify-around gap-1">
                        <button>
                            <span className="text-green-500" ><BiEditAlt size={23}/></span>
                        </button>
                        <button>
                            <span className="text-red-500"><BiTrashAlt size={23} /></span>
                        </button>
                    </td>
                </tr>

            </tbody>
        </table>
    )
}