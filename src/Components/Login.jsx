// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Button } from "flowbite-react";

// const Login = () => {
//   const [data, setData] = useState(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   async function userLogin(event) {
//     event.preventDefault();

//     await axios({
//       method: "POST",
//       baseURL: "http://api.fakeshop-api.com",
//       url: "/users/signup",
//       data: {
//         email,
//         password,
//       },
//     })
//       .then(({ data }) => {
//         setData(data);
//         localStorage.setItem("token", data.token);
//       })
//       .catch((err) => console.dir(err));
//   }

//   return (
//     <>
//       <div className="w-full h-screen flex items-center justify-center ">
//         <div className="w-1/2 py-10 flex flex-col items-center mt-3 rounded-xl shadow-xl">
//           <div className="flex flex-col items-center">
//             <img
//               className="w-1/4"
//               src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?size=626&ext=jpg"
//               alt="Logo"
//             />
//           </div>
//           <div className="flex flex-col items-center gap-2 ">
//             <p className=" capitalize font-semibold text-3xl">Welcome Back !</p>
//           </div>
//           <div className="w-1/2">
//             <form className="flex flex-col gap-2 mt-5" action="">
//               <div className="flex flex-col capitalize">
//                 <label htmlFor="email" className="font-semibold">
//                   Student Mail
//                 </label>
//                 <input
//                   className=" rounded border border-gray-500 p-1 px-2"
//                   type="text"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   id="email"
//                   placeholder="Student@email.com"
//                 />
//               </div>

//               <div className="flex flex-col capitalize">
//                 <label htmlFor="password" className="font-semibold">
//                   Password
//                 </label>
//                 <input
//                   className=" rounded border border-gray-500 p-1 px-2"
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="********"
//                 />
//               </div>

//               <Button
//                 onClick={userLogin}
//                 color="dark"
//                 className="mt-5 capitalize  font-semibold bg-zinc-900 p-2 rounded-lg"
//               >
//                 login
//               </Button>
//             </form>

//             <div className="w-full flex justify-center mt-4">
//               <p
//                 className=" capitalize"
//                 onClick={() => {
//                   navigate("teacherlogin");
//                 }}
//               >
//                 Log in as teacher
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      baseURL: "http://api.fakeshop-api.com",
      url: "/users/signup",
      data: {
        email,
        password,
      },
    })
      .then(({ data }) => {
        setData(data);
        localStorage.setItem("token", data.token);
      })
      .catch((err) => console.dir(err));
  };

  return (
    <section>
      <h1>Create User in "Fake Shop - API":</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>API response with user unique token:</p>
      {JSON.stringify(data)}
    </section>
  );
}

export default Login;
