import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase_config_connection from '../assets/util/firebase.config';
import Layout from './Layout';

const auth = getAuth(firebase_config_connection);

function Login() {
    const navigate = useNavigate();
    const [showpass, setShowpass] = useState('password');
    const [showpass1, setShowpass1] = useState('password');
    const [passError, setPassError] = useState(null);
    const [firebasemsg, setFirebasmsg] = useState('');
    const [loader, setLoader] = useState(false);
    const [session,setSession]=useState()

    const [formvalue, setFormvalue] = useState({
        fullname: '',
        email: '',
        password1: '',
        password2: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormvalue({
            ...formvalue,
            [name]: value,
        });
        setPassError(null);
    };

    const submitdata = async (e) => {
        e.preventDefault();
        setLoader(true);

        const { fullname, email, password1, password2 } = formvalue;

        // Validate password match
        if (password1 !== password2) {
            setPassError('Passwords do not match.');
            setLoader(false);
            return;
        }

        try {
            // Create user with Firebase
            const userCredential = await createUserWithEmailAndPassword(auth, email, password1);
            console.log('User created at login:', userCredential.user);
            userCredential.user.displayName=formvalue.fullname
            setSession(userCredential.user)
            setFirebasmsg('Account created successfully!');
            setTimeout(() => navigate('/'), 2000); // Redirect after a short delay
        } catch (error) {
            console.error('Error creating user:', error.message);
            setFirebasmsg(`Error: ${error.message}`);
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
                    {firebasemsg && (
                        <div className="w-full bg-green-300 text-green-700 p-2 text-center rounded">
                            {firebasemsg}
                        </div>
                    )}
                    <p className="text-3xl font-bold py-2">Enter your details Here to Register!!</p>
                    <form onSubmit={submitdata} className="w-full flex flex-col gap-2">
                        <div className="flex flex-col w-full px-8 gap-2">
                            <label className="pl-1 font-md font-semibold">Enter your Name</label>
                            <input
                                type="text"
                                name="fullname"
                                value={formvalue.fullname}
                                onChange={handleChange}
                                required
                                minLength={6}
                                className="py-2 px-4 border w-full rounded-lg border-2 border-[black]"
                                placeholder="@enter your name"
                            />
                        </div>

                        <div className="flex flex-col w-full px-8 gap-2">
                            <label className="pl-1 font-md font-semibold">Enter your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formvalue.email}
                                onChange={handleChange}
                                required
                                className="py-2 px-4 border w-full rounded-lg border-2 border-[black]"
                                placeholder="enter your email"
                            />
                        </div>

                        <div className="flex flex-col w-full px-8 gap-2 relative">
                            <label className="pl-1 font-md font-semibold">Enter your Password</label>
                            <input
                                type={showpass}
                                name="password1"
                                value={formvalue.password1}
                                onChange={handleChange}
                                required
                                className="py-2 px-4 border w-full rounded-lg border-2 border-[black]"
                                placeholder="@********"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setShowpass(showpass === 'password' ? 'text' : 'password')
                                }
                                className="absolute font-bold text-xl top-10 right-12"
                            >
                                {showpass === 'password' ? (
                                    <i className="ri-eye-line"></i>
                                ) : (
                                    <i className="ri-eye-off-line"></i>
                                )}
                            </button>
                        </div>

                        <div className="flex flex-col w-full px-8 gap-2 relative">
                            <label className="pl-1 font-md font-semibold">Re-enter your Password</label>
                            <input
                                type={showpass1}
                                name="password2"
                                value={formvalue.password2}
                                onChange={handleChange}
                                required
                                className="py-2 px-4 border w-full rounded-lg border-2 border-[black]"
                                placeholder="@********"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setShowpass1(showpass1 === 'password' ? 'text' : 'password')
                                }
                                className="absolute font-bold text-xl top-10 right-12"
                            >
                                {showpass1 === 'password' ? (
                                    <i className="ri-eye-line"></i>
                                ) : (
                                    <i className="ri-eye-off-line"></i>
                                )}
                            </button>
                        </div>

                        {passError && (
                            <div className="w-full bg-rose-400 mt-2 px-4 rounded">
                                <p className="text-lg font-bold text-red-700">{passError}</p>
                            </div>
                        )}

                        <div className="flex flex-col w-full px-8 gap-2">
                            {!loader ? (
                                <button className="rounded mt-4 w-fit py-2 px-8 bg-red-800 hover:bg-rose-400 font-bold text-lg">
                                    Sign-Up
                                </button>
                            ) : (
                                <h1 className="text-xl font-semibold bg-rose-700 px-2 mt-3 py-2 rounded flex justify-between items-center">
                                    Loading...
                                </h1>
                            )}
                        </div>
                    </form>

                    <p className="text-[18px]">
                        <span className="font-semibold">Already have an account!</span>
                        <Link to="/login" className="text-blue-400">
                            Login Now!
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Login;
