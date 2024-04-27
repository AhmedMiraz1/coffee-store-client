import { FaEdit, FaEye } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ coffee , coffees, setCoffees}) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, quantity,  taste,  photo } =
    coffee;

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
        fetch(`http://localhost:5000/coffee/${_id}`, {
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
                  text: "Your coffee has been deleted.",
                  icon: "success"
                });
                // eslint-disable-next-line react/prop-types
                const remaining = coffees.filter(cof => cof._id !== _id)
                setCoffees(remaining)
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl p-9">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between gap-8 items-center w-full">
        <div className=" ">
          <h2 className=""> name : {name}</h2>
          <p> Price : {quantity}</p>
          <p> Taste : {taste}</p>
        </div>
        <div className=" flex flex-col space-y-4 ">
          <button className="btn join-item bg-[#D2B48C] text-white">
            <FaEye />
          </button>
          <Link to ={`/updateCoffee/${_id}`} className="btn join-item bg-[#3C393B] text-white">
            <FaEdit />
          </Link>
          <button
            onClick={() => handelDelete(_id)}
            className="btn join-item bg-[#EA4744] text-white"
          >
            <FaDeleteLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
