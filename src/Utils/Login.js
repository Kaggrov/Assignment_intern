import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from '../images/spinner.png'


const Login = () => {

    // <-------- DUMMY API ----------->

    // useEffect(() => {
    //     fetch(
    //       "www.google.com",
    //       {
    //     
    //         method: "POST",
    //         mode: "cors",
    //         body: JSON.stringify(str),
    //       }
    //     );
    //     
    //   }, [API_HANDLER]);

    let email;
    const navigate = useNavigate();

    const [content, setContent] = useState("Test Your Luck Now");

    const validate = (email) => {

        const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g;
        const check = pattern.test(email);
        return check;
    }


    const handleSubmit = (event) => {

        event.preventDefault();

        email = document.getElementById("email").value;

        let valid = validate(email);

        if (valid === false) {
            alert("Wrong Email");
            navigate("/");
        } 
        else {
            setContent("Please Wait...");
            setTimeout(() => {
                navigate("/Spinner");
            }, 1000);
        }
    }



  return (
        <div class='flex lg:flex-row md:flex-col sm:flex-col'>
        <img src={img} style={{height:"70vh",width:"40vw",marginTop:"60px",marginRight:'60px',marginLeft:'0'}}></img><div class=" flex flex-col justify-center align-middle w-full max-w-xs">
          <h1 style={{ fontWeight: "700", fontFamily: "Poppins", fontSize: "25px" }}>This is how EngageBud looks like in action!</h1>
          <form class="bg-cust-green shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-3">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Email</label>
                  <input
                      type="email"
                      id="email"
                      placeholder="user@mail.com"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required />
              </div>
              <div class="mb-3">
                  <label class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                  <input
                      type="phone number"
                      placeholder="xxxx..."
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      required />
              </div>
              <div className="mb-3">
                  <input type="checkbox" className="form-check-input m-1" required />
                  <label className="from-label">
                      I agree to the terms and conditions
                  </label>
              </div>
              <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
              >
                  {content}
              </button>
          </form>
      </div>
      </div>






  )
}

export default Login