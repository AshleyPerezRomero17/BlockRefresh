import React, { useState } from "react";
import axios from "axios";

export const Register = () => {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [fullnameReg, setFullNameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');


    const register1 = () => {
        axios.post('http://localhost:3001/api/register', {
            username: usernameReg, 
            password: passwordReg,
            fullname: fullnameReg,
            email: emailReg
        }).then((response)=> {
            console.log(response)
        });
    };
  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-[#CCE3DE] text-[#475C54]">
      <div className="w-1/2 px-4 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 text-[#475C54] bg-[#CCE3DE]">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3x text-[#475C54] bg-[#CCE3DE]">
            Register or <a href='/login'>Log in here</a>
          </h1>

          <p className="mt-4 ">
            Please fill out the form
          </p>
        </div>

        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          <div>
            <label htmlFor="Name" className="sr-only">
              Full Name
            </label>

            <div className="relative">
              <input
                type="name"
                onChange={(e) => {
                    setFullNameReg(e.target.value);
                    }}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-[#CCE3DE] focus:bg-[#ffffff] text-[#475C54]"
                placeholder="First & Last Name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input type="email" 
             onChange={(e) => {
                setEmailReg(e.target.value);
                }}
                id="email" name="email" placeholder="Email"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-[#CCE3DE] focus:bg-[#ffffff] text-[#475C54]"></input>
          
          </div>

          <div>
            <label htmlFor="Name" className="sr-only">
              Username
            </label>

            <div className="relative">
              <input
                type="text"
                onChange={(e) => {
                    setUsernameReg(e.target.value);
                    }}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-[#CCE3DE] focus:bg-[#ffffff] text-[#475C54]"
                placeholder="Username"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input type="password" id="password" name="password" placeholder="Password" 
            onChange={(e) => {
                    setPasswordReg(e.target.value);
            }}
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-[#CCE3DE] focus:bg-[#ffffff] text-[#475C54]"></input>
          
          </div>

          <div className="flex items-center justify-between">
            <button onClick={register1}
              type="submit"
              className="ml-3 inline-block rounded-lg  bg-[#475C54] px-5 py-3 text-sm fo  font-medium text-white"
            >
              Sign-Up
            </button>
          </div>
        </form>
      </div>
      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_69881045.jpg?crop=240%2C0%2C2400%2C1320&wid=4000&hei=2200&scl=0.6"
          className="absolute inset-100 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Register;