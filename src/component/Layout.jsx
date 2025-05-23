import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase_config_connection from '../assets/util/firebase.config';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const auth = getAuth(firebase_config_connection);

function Layout({ children }) {
  const [email, setEmail] = useState('');
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // navbar toggler

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
        setEmail(user.email);
      } else {
        setSession(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const navitem = [
    { text: 'Home', link: '/' },
    { text: 'Products', link: '/products' },
    { text: 'Payment', link: '/' },
    { text: 'Contact-Us', link: '/contact-us' },
    { text: 'Category', link: '/category' },
  ];

  if (session === null) {
    return (
      <div className="bg-blue-500 h-screen w-screen flex justify-center items-center">
        <p className="text-4xl md:text-6xl font-bold text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-slate-200 sticky top-0 z-50 w-full shadow-md">
        <div className="flex items-center justify-between px-4 md:px-20 py-3">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="shop-logo" className="h-10 w-10 rounded-full" />
            <span className="text-xl md:text-3xl font-bold text-red-900">Shop</span>
          </div>

          {/* Toggler button (visible on mobile) */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </button>

          {/* Navigation items (desktop) */}
          <div className="hidden md:flex gap-4 items-center font-semibold text-lg">
            {navitem.map((item, index) => (
              <div key={index} className='hover:bg-red-300'>
                <Link  to={item.link} className="hover:text-blue-600  md:mx-6">
                {item.text}
              </Link>
              </div>
            ))}
            {!session ? (
              <>
                <Link to="/login" className="hover:text-blue-600 mx-6">Login</Link>
                <Link to="/signup" className="bg-blue-500 px-3 py-1 rounded text-white hover:bg-blue-700">Signup</Link>
              </>
            ) : (
              <div className="relative">
                <button
                  className="bg-rose-700 p-1 rounded-full"
                  onClick={() => setProfile(prev => !prev)}
                >
                  <img src="/images/avt.avif" alt="avatar" className="h-10 w-10 rounded-full border border-black" />
                </button>
                {profile && (
                  <div className="absolute right-0 top-12 w-56 bg-rose-200 shadow-lg rounded-md p-3 flex flex-col gap-2 z-50">
                    <p className="text-sm break-words bg-gray-300 p-1 rounded">Email: {email}</p>
                    <hr className="border border-red-500" />
                    <Link to="/profile" className="bg-rose-400 p-1 rounded hover:bg-red-700">Profile</Link>
                    <Link to="/cart" className="bg-rose-400 p-1 rounded hover:bg-red-700">Cart</Link>
                    <button onClick={() => signOut(auth)} className="bg-rose-400 p-1 rounded hover:bg-red-700">Logout</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col px-4 pb-4 font-semibold text-base gap-2 bg-slate-200">
            {navitem.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
            {!session ? (
              <>
                <Link to="/login"  onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/signup" className="bg-blue-500 px-3 py-1 rounded text-white w-fit" onClick={() => setMenuOpen(false)}>Signup</Link>
              </>
            ) : (
              <>
                <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
                <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
                <button onClick={() => { signOut(auth); setMenuOpen(false); }} className="text-left">Logout</button>
              </>
            )}
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="">{children}</main>

      {/* Footer */}
      <footer className="bg-red-300 w-full px-6 pt-6 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center text-sm md:text-md">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Welcome Message</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolore modi cupiditate alias accusantium.</p>
        </div>
        <div className="flex flex-col md:gap-2">
          <p className="text-xl font-semibold">Main Headings</p>
          <span>Home</span>
          <span>Products</span>
          <span>About Us</span>
          <span>Contact-us</span>
        </div>
        <div className="flex flex-col md:gap-2">
          <p className="text-xl font-semibold">Follow us</p>
          <span>Twitter</span>
          <span>LinkedIn</span>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Youtube</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Have Any Query?</p>
          <form className="flex flex-col gap-2 items-center">
            <input type="text" placeholder="@username" className="p-1 w-full rounded" />
            <input type="number" placeholder="+9129*****54" className="p-1 w-full rounded" />
            <input type="email" placeholder="abc@gmail.com" className="p-1 w-full rounded" />
            <textarea placeholder="Enter your message" rows={3} className="p-1 w-full rounded"></textarea>
            <button className="bg-blue-600 text-white px-4 py-1 rounded">Submit</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
