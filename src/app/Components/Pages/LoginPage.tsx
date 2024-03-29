import React, { useState } from 'react';
import Link from 'next/link';
import cart_cross_icon from '../Assets/cart_cross_icon.png'; // Adjusted path
import Image from 'next/image';


interface LoginPageProps {
  onClose: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerMode, setRegisterMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    console.log('Email:', email);
    console.log('Password:', password);
  };

  //Password and confirm password check
  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }
   
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="absolute bottom-1/9 left-1/5 transform -translate-x-1/2 -translate-y-1/2 flex items-col items-center justify-center">
      <div className="bg-white p-20 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">{registerMode ? 'Register' : 'Login'}</h2>
        <button onClick={onClose} className="absolute top-5 right-5 mt-4">
          <Image src={cart_cross_icon} height={2} width={30} alt="Cart icon" />
        </button>

        {/* Conditional Rendering of the Login Page */}
        {!registerMode ? (
          <form onSubmit={handleLoginSubmit}>
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
            <div className="mb-8">
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
            <div className="flex items-center justify-between mb-10">
              <button
                type="submit"
                className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full max-w-xs h-16 rounded-2xl"
              >
                Login
              </button>
            </div>
            <div className="mb-4 text-black-500  text-2xl font-semibold">
              Don't have an account? <br />
              <a
                href="#"
                className="text-xl text-blue-500 hover:text-blue-800 hover:underline"
                onClick={() => setRegisterMode(true)}
              >
                Register Now!
              </a>
            </div>
          </form>

  //Conditional rendering of the register button      
  

        ) : (
          <RegisterForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword} 
            setRegisterMode={setRegisterMode}
            handleSubmit={handleRegisterSubmit}
            errorMessage={errorMessage}
          />
        )}
      </div>
    </div>
  );
};


// Defining the interface of the elements that belong to registration component
const RegisterForm: React.FC<{
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  setRegisterMode: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errorMessage: string;
 }> = ({ email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, setRegisterMode, handleSubmit, errorMessage }) => {
  return (
    <form onSubmit={handleSubmit}>

       {/* Email  */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      {/* Password   */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      {/* Confirm Password   */}
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />

        {/* Displaying an error message when the required fields are not filled  */}
        {errorMessage && <p className="text-red-500 text-md font-semibold mt-1">{errorMessage}</p>}
      </div>

      {/*  Register Button */}
      <div className="flex flex-col items-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>

        {/* Directing to Login Page if user already has a website */}
        <a
          href="#"
          className="mt-2 inline-block align-baseline font-bold text-2xl text-black-500"
          onClick={() => setRegisterMode(false)}
        >
          Already have an account? <br /> 
          <div className='text-xl text-blue-500 hover:text-blue-800 hover:underline'>  
          Login
           </div> 
        </a>
      </div>
    </form>
  );
};

export default LoginPage;
