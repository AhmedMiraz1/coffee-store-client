
import Swal from 'sweetalert2'

const AddCoffee = () => {


    const handelAddCoffee = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = {name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'Coffee added successfully ',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
  return (
    <div className=" space-y-6 bg-[#F4F3F0] rounded-md my-12 py-8 px-4">
      <h1 className="text-center">Add New Coffee</h1>
      <p className="text-center">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>

      <form onSubmit={handelAddCoffee}>
        <div className="flex flex-row justify-between w-full gap-6">
          <div  className="w-full">
          <p className="text-2xl ">Name</p>
           <input type="text" name="name"  placeholder="Enter coffee name" className="w-full p-2 rounded-lg"/>
            
          </div>
          <div className="w-full" >
          <p className="text-2xl ">Available quantity</p>
          <input type="number" name="quantity"  placeholder="Enter coffee quantity" className="w-full p-2 rounded-lg"/>
            
          </div>
        </div>
        <div className="flex flex-row justify-between w-full gap-6">
          <div  className="w-full">
          <p className="text-2xl ">Supplier</p>
           <input type="text" name="supplier"  placeholder="Enter coffee supplier" className="w-full p-2 rounded-lg"/>
            
          </div>
          <div className="w-full" >
          <p className="text-2xl ">Taste</p>
          <input type="text" name="taste"  placeholder="Enter coffee taste" className="w-full p-2 rounded-lg"/>
            
          </div>
        </div>
        <div className="flex flex-row justify-between w-full gap-6">
          <div  className="w-full">
          <p className="text-2xl ">Category</p>
           <input type="text" name="category"  placeholder="Enter coffee category" className="w-full p-2 rounded-lg"/>
            
          </div>
          <div className="w-full" >
          <p className="text-2xl ">Details</p>
          <input type="text" name="details"  placeholder="Enter coffee details" className="w-full p-2 rounded-lg"/>
            
          </div>
        </div>
        <div className="w-full" >
          <p className="text-2xl ">Photo</p>
          <input type="text" name="photo"  placeholder="Enter coffee photo" className="w-full p-2 rounded-lg"/>
            
          </div>

          <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] my-6" />
      </form>
    </div>
  );
};

export default AddCoffee;
