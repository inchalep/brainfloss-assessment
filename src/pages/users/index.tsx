import { FaPlus, FaEdit, FaEye, FaTrash, FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { usersData } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { changeUserRole } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
  const state = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserRole = () => {
    if (state.data?.role === "admin") {
      dispatch(changeUserRole("user"));
    } else {
      dispatch(changeUserRole("admin"));
    }
    navigate("/");
  };
  return (
    <div className='wrapper p-6 text-white'>
      <div className='flex justify-between items-center pb-8'>
        <h2 className='text-xl text-textPrimary'>User Management</h2>
        <div>
          <button
            className='flex items-center text-white gap-x-1 bg-darkYelow px-3 mb-3'
            onClick={handleUserRole}
          >
            <span>
              Change role to {state.data?.role === "admin" ? "User" : "Admin"}
            </span>
          </button>
          <button className='flex items-center text-white gap-x-1 bg-darkYelow px-3'>
            <FaPlus color='green' /> <span>Add New User</span>
          </button>
        </div>
      </div>
      <div className='bg-sky-950 p-3 min-h-[calc(100vh-230px)]'>
        <div className='flex p-2 bg-sky-900'>
          <div className='w-2/12'>
            <span>Name</span>
          </div>
          <div className='w-2/12 text-center'>
            <span>Edit</span>
          </div>
          <div className='w-2/12 text-center'>
            <span>Delete</span>
          </div>
          <div className='w-2/12 text-center'>
            <span>Create</span>
          </div>
          <div className='w-2/12 text-center'>
            <span>Read</span>
          </div>
          <div className='w-2/12 text-center'>
            <span>Actions</span>
          </div>
        </div>
        <div className='px-2'>
          {usersData.map((user, index) => {
            return (
              <div key={index} className='flex items-center py-3'>
                <p className='w-2/12'>{user.name}</p>
                <div className='w-2/12 flex justify-center'>
                  {user.edit ? (
                    <FaCheckCircle color='green' />
                  ) : (
                    <MdCancel color='red' />
                  )}
                </div>
                <div className='w-2/12 flex justify-center'>
                  {user.delete ? (
                    <FaCheckCircle color='green' />
                  ) : (
                    <MdCancel color='red' />
                  )}
                </div>
                <div className='w-2/12 flex justify-center'>
                  {user.create ? (
                    <FaCheckCircle color='green' />
                  ) : (
                    <MdCancel color='red' />
                  )}
                </div>
                <div className='w-2/12 flex justify-center'>
                  {user.read ? (
                    <FaCheckCircle color='green' />
                  ) : (
                    <MdCancel color='red' />
                  )}
                </div>
                <div className='w-2/12 flex justify-center gap-x-3'>
                  <button>
                    <FaEdit color='green' />
                  </button>
                  <button>
                    <FaTrash color='red' />
                  </button>
                  <button>
                    <FaEye color='yellow' />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
