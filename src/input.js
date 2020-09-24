import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
let number = 0;
function Inputfields() {
  const [array, setArray] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.id = number;
    number++;

    array.push(data);
    setArray(array);
    console.log(array);
  };
  // const handleDelete = (props) => {
  //   array.splice(props.number, 1);
  //   let myobj = document.getElementById(props.number);
  //   myobj.remove();
  // };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name
          <input ref={register} name="firstName" />
        </label>
        <label>
          Last Name
          <input ref={register} name="lastName" />
        </label>

        <button>Submit</button>
      </form>

      <h1>
        <ul>
          {array.map((item) => (
            <li key={'obj-' + item.id}>
              {item.firstName}
              {' ' + item.lastName}
              <button
                onClick={() => {
                  const arraydelete = array.filter(
                    (guest) => guest.id !== item.id,
                  );
                  // array.splice(index, 1);
                  setArray(arraydelete);
                  // const myobj = document.getElementById(index);
                  // myobj.remove();
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </h1>
    </>
  );
}
export default Inputfields;
