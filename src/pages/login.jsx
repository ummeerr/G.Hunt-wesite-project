import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Login= () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
                      e.preventDefault();

  try {const response = await fetch('http://localhost:5000/api/auth/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  console.log('Login Response:', data);

  if (response.ok)
     {localStorage.setItem("token", data.token ) 
     {localStorage.setItem("username", data.username);}; navigate("/");}
  else {alert(data.message || "Login failed");}
                       
  }

  catch (err) {console.error('Login error:', err);alert("Something went wrong!");

  }
};


return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800">
      <div className="rounded-3xl bg-white dark:bg-zinc-800 p-8 rounded-1g w-full sm:w-96">
        <h2 className="text-2x1 font-bold text-center text-black dark:text-white mb-6">Login</h2>

          <form onSubmit= {handleLogin}>
            <div className="mb-4 text-black dark:text-white">
                <label htmlFor="email" classname="block">Email</label>
                <input type="email" id="email" 
                       className="w-full p-3 mt-2 border border-gray-300 rounded -1g focus:outline-none focus:ring-2 focus:ring-violet-700"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                />
            </div>

            <div className="mb-6 text-black dark:text-white">
                <label htmlFor="password" classname="block text-gray-600">Password</label>
                <input type="password" id="password"
                       className="w-full p-3 mt-2 border border-gray-300 rounded -1g focus:outline-none focus:ring-2 focus:ring-violet-700"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                />
            </div>

            <button type="submit"
                    className="w-full bg-violet-700 text-white py-3 rounded-lg border border-black hover:border-black hover:bg-violet-800 
                               transition duration-300">Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-black dark:text-white">Don't have an account?
              <a href="/signup" className="text-violet-700 hover:underline"> Sign up</a>
            </p>
          </div>
      </div>   
    </div>

  );
};



export default Login