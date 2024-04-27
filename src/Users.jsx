import { useState } from "react";
import { MdDelete } from "react-icons/md";

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers]= useState(loadedUsers)

  const handelDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${_id}`, {
            method: "DELETE",
            // headers: {
            //     'content-type': 'application/json'
            // }, 
            // body: JSON.stringify()
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your user has been deleted.",
                  icon: "success"
                });
                // eslint-disable-next-line react/prop-types
                const remaining = users.filter(user => user._id !== _id)
                setUsers(remaining)
            }
          });
      }
    });
  };
  return (
    <div className="my-24">
      <h1>Users: {loadedUsers.length} </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>last Logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map((user, idx) => <tr key={user._id}>
                    <th>{idx+1}</th>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.lastLoggedAt}</td>
                    <td>
                        <button onClick={()=> handelDelete(user._id)}  className="btn  text-red-600 text-3xl"><MdDelete /></button>
                    </td>
                  </tr>)
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
