import AddUserForm from "./addUser";
import UpdateUserForm from "./updateUser";

export default function Form() {
    const isUpdate = false;
    return (
        <div className="container mx-auto px-4">

            {!isUpdate ? <AddUserForm /> : <UpdateUserForm />}

        </div>
    )

}
