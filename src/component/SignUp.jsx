import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase_config_connection from '../assets/util/firebase.config';
import Layout from './Layout';

const auth = getAuth(firebase_config_connection);

function SignUp() {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });
    const [showPass, setShowPass] = useState('password');
    const [loader, setLoader] = useState(false);
    const [firebaseMsg, setFirebaseMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        });
        setFirebaseMsg(''); // Clear any existing error message
    };

    const loginUser = async (e) => {
        e.preventDefault();
        setLoader(true);

        const { email, password } = loginForm;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in:', userCredential.user);
            setFirebaseMsg('Logged in successfully!');
            setTimeout(() => navigate('/'), 2000); // Redirect after a short delay
        } catch (error) {
            console.error('Login error:', error.message);
            setFirebaseMsg(`Error: ${error.message}`);
        } finally {
            setLoader(false);
        }
    };

    return (
        <Layout>
            <div className="grid md:grid-cols-2 mb-1">
                <div>
                    <img
                        src="/images/signup.jpg"
                        alt=""
                        className="object-cover h-[550px] text-center mx-auto"
                    />
                </div>
                <div className="flex flex-col justify-center bg-red-300 items-center gap-2">
                    {firebaseMsg && (
                        <div className="w-full bg-green-300 text-green-700 p-2 text-center rounded">
                            {firebaseMsg}
                        </div>
                    )}
                    <p className="text-3xl font-bold py-2">Enter your details to Login!!</p>
                    <form onSubmit={loginUser} className="w-full flex flex-col gap-2">
                        <div className="flex flex-col w-full px-8 gap-2">
                            <label htmlFor="email" className="pl-1 font-md font-semibold">
                                Enter your Email
                            </label>
                            <input
                                name="email"
                                onChange={handleChange}
                                type="email"
                                value={loginForm.email}
                                required
                                className="py-2 px-4 border w-full rounded-lg border-2 border-black"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="flex flex-col w-full px-8 gap-2 relative">
                            <label htmlFor="password" className="pl-1 font-md font-semibold">
                                Enter your Password
                            </label>
                            <input
                                type={showPass}
                                onChange={handleChange}
                                name="password"
                                value={loginForm.password}
                                required
                                className="py-2 px-4 border w-full rounded-lg border-2 border-black"
                                placeholder="********"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPass(showPass === 'password' ? 'text' : 'password')}
                                className="absolute font-bold text-xl top-10 right-12"
                            >
                                {showPass === 'password' ? (
                                    <i className="ri-eye-line"></i>
                                ) : (
                                    <i className="ri-eye-off-line"></i>
                                )}
                            </button>
                        </div>

                        <div className="flex flex-col w-full px-8 gap-2">
                            {!loader ? (
                                <button
                                    type="submit"
                                    className="rounded mt-4 w-fit py-2 px-8 bg-red-800 hover:bg-rose-400 font-bold text-lg"
                                >
                                    Login
                                </button>
                            ) : (
                                <p className="w-full text-xl font-bold bg-rose-600 px-4 py-2">
                                    Logging in... Please wait
                                </p>
                            )}
                        </div>
                    </form>

                    <p className="text-[18px]">
                        <span className="font-semibold">Don't have an account?</span>
                        <Link to="/signup" className="text-blue-400">
                            Register Here!
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default SignUp;
