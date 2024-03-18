import React, { useState } from 'react';
import Link from 'next/link';
import cart_cross_icon from '../../Assets/cart_cross_icon.png'; // Adjusted path
import Image from "next/image";


interface LoginPageProps {
  onClose: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
   
  };

  return (
    <div className="absolute bottom-1/9 left-1/5 transform -translate-x-1/2 -translate-y-1/2 flex items-col items-center justify-center">
      <div className="bg-white p-20 rounded-lg shadow-md"> {/* Increased padding */}
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <button onClick={onClose} className="absolute top-5 right-5 mt-4">
          <Image src={cart_cross_icon} height={2} width={30} alt="Cart icon" />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-6"> 
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-8"> {/* Increased margin bottom */}
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4 text-black-500 hover:underline text-5xl">
            Don't have an account?{" "}
            <Link href="/register">
              Register now!
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
