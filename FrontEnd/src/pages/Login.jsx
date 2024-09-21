import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../Redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loggedInUser } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { password, confirmPassword } = user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signinHandler = (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
    dispatch(signin(user));
    } else {
      toast.error("Passwords are not matching");
    }
  };


  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser]);

  return (
    <div>
<div class="h-full bg-gray-400 dark:bg-gray-900">
   
   <div class="mx-auto">
     <div class="flex justify-center px-6 py-12">
    
       <div class="w-full xl:w-3/4 lg:w-11/12 flex">
         
         <div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"></div>
        
         <div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
           <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">welcome Back !</h3>
               
               <form  class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={signinHandler}>
              
             <div class="mb-4">
               <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                                 Email
                             </label>
               <input  onChange={handleChange}
                                 class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                 name="email"
                                 type="email"
                                 placeholder="Email"
                             />
             </div>
             <div class="mb-4 md:flex md:justify-between">
               <div class="mb-4 md:mr-2 md:mb-0">
                 <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                     Password
                                 </label>
                 <input onChange={handleChange}
                                     class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                     name="password"
                                     type="password"
                                     placeholder="******************"
                                 />
                 <p class="text-xs italic text-red-500"></p>
               </div>
               <div class="md:ml-2">
                  <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                                      Confirm Password
                                  </label>
                  <input  onChange={handleChange}
                                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                      name="confirmPassword"
                                      type="password"
                                      placeholder="******************"
                                  />
                </div>
               
             </div>
             <div class="mb-6 text-center">
               <button
                                 class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                 type="submit"
                             >
                                Login!
                             </button>
             </div>
             <hr class="mb-6 border-t" />
             <div class="text-center">
              
             </div>
             <div class="text-center">
               <Link class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                 to="/signup">
                 You don't have an account? Let's get started !
               </Link>
             </div>
           </form>
         </div>
       </div>
     </div>
   </div>

</div>
</div>
 )
}
    
  export default Login
  
