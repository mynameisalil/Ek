import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />

            <div className="flex-grow flex items-center justify-center">
                <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md w-80">
                    <h2 className="text-white text-2xl font-bold mb-4 text-center">Login</h2>
                    <div className="mb-4">
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="w-full p-2 rounded bg-gray-700 text-white" 
                            placeholder="Email" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full p-2 rounded bg-gray-700 text-white" 
                            placeholder="Password" 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
                    >
                        Login
                    </button>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default Login;
