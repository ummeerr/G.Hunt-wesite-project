import React, { useState} from "react";

const Signup = () => { 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
                       e.preventDefault();

  if (password !== confirmPassword) {alert("Passwords do not match!");
    return;
  }

  try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
                       method: 'POST', headers: { 'Content-Type': 'application/json' },
                       body: JSON.stringify({ username, email, password }),
    });

  const data = await response.json();
  console.log('Signup Response:', data);

  if (response.ok) {alert("Signup successful");} 
  else {alert(data.message || "Signup failed");}

  }

  catch (err) {console.error('Signup error:', err);
    alert("Something went wrong!");
  }
};



return (
    <div className="flex mt-20 mb-20 items-center justify-center min-h-screen bg-zinc-800">
      <div className="rounded-3x1 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-1g w-full sm:w-96 h-full">
        <h2 className="text-2x1 font-bold text-center text-black dark:text-white mb-6">Signup</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-black dark:text-white">Username</label>
                    <input type="text" id="username"
                           className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           required/>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-black dark:text-white">Email</label>
                    <input type="email" id="email"
                           className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-black dark:text-white">Password</label>
                    <input type="password" id="password"
                           className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-black dark:text-white">Confirm Password</label>
                    <input type="password" id="confirmPassword"
                           className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700"
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                           required
                    />
                </div>

                <button type="submit"
                        className="w-full bg-violet-700 text-white py-3 rounded-lg hover:bg-violet-800 transition duration-300">Signup
                </button>
            </form>

            <div className="mt-4 text-center">
                <p className="text-black dark:text-white">Already have an account?/ <a href="/login" className="text-violet-700 hover:underline">Login</a>
                </p>
            </div>
        </div>
    </div>
  );
};

export default Signup