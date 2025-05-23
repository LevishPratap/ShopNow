import React from 'react';
import { useEffect,useState } from 'react';
import Layout from './Layout';
import firebase_config_connection from '../assets/util/firebase.config';
import { getFirestore,collection,addDoc, query, where, getDocs} from "firebase/firestore";
import { getAuth,onAuthStateChanged, updateProfile } from 'firebase/auth';
import swal from 'sweetalert';

const auth=getAuth(firebase_config_connection)
const db=getFirestore(firebase_config_connection)
function Profile() {
    const [session,setSession]=useState(null)
    useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                // check user is logged or not
                if (user) { 
                     setSession(user)
                     setupadateProfile({
                     ...updateProfile,
                     email:user.email,
                     userId:user.uid,
                  })
                } 
                else {
                  setSession(false);
                }
              }); 
      }, []);

      useEffect(()=>{
        if(session){
          const req=async()=>{
                // if user is logged the fetch their adddress field details 
                const q =query(collection(db, "addresses"), where("userId", "==", user.uid))
                const snapshot=await getDocs(q);
                snapshot.forEach((doc)=>{
                  console.log(doc)
                }) ; 
          }
          req()
        }
        },[])

        const[updateProfile,setupadateProfile]=useState({
            // profile data field with primary keys like userId and email
            state:'',
            country:'',
            pincode:'',
            address:'',
            district:'',
            email:'',
            userId:''
        }) 

    const updateImage=(e)=>{
        // for profile updation 
        const input=e.target
        const file=input.files[0]
        console.log(file)
        
    }

    const handleformValue=(e)=>{
        // collection of user address field 
        const input=e.target
        const name=input.name
        const value=input.value
        
        setupadateProfile({
            ...updateProfile,
            [name]:value
        })
        // console.log(updateProfile)
    }
     
    const handleAddressDetails= async (e)=>{
        // store address details into firestone database
        e.preventDefault();
        try{
        const x = await addDoc(collection(db,'addresses'),updateProfile)
        
        new swal({
            icon:'success',
            title:'Address'
        })
        }
        catch(err){
            new swal({
                icon:'error',
                title:'Address',
                text:err.message,
            })

        }

    }

    if (session=== null ){
        return(
            <>
              <div className='bg-blue-500 h-screen w-screen flex justify-center items-center'>
                <p className='text-6xl font-bold'>Loading...</p>
              </div>
    
            </>
        )
      }

  return (
    <Layout>
      <form className='w-9/12 bg-rose-50 px-4 py-4 flex flex-col gap-3 min-h-48 mx-auto'        onSubmit={handleAddressDetails}>
        <div className='w-full relative mt-2 grid  '>
          <div className="relative w-20 h-20 mx-auto ">
            <img 
              src="/images/avt.avif" 
              className="h-20 w-20 rounded-full" 
              alt="Avatar" 
            />
            <input 
              className="absolute top-0 left-0 h-20 w-20 opacity-0 cursor-pointer" 
              type="file" 
              accept="image/*" 
              name='profilephoto'
              onChange={updateImage}
            />
            {/* <div className="absolute top-0 left-0 h-20 w-20 flex items-center justify-center   bg-black bg-opacity-30 rounded-full">
              <span className="text-white text-sm font-semibold">Upload</span>
            </div> */}
          </div>
        </div>

        <div className='flex gap-1 flex-col mx-auto w-full '>
          <label className='font-bold text-lg px-1'>Username</label>
          <input 
            // readOnly
            disabled
            name='username'
            className='py-1 w-full px-2 rounded text-semibold border-2'
            
            // value={session.displayName}
          />
        </div>

        <div className='flex gap-1 flex-col'>
          <label className='font-bold text-lg px-1'>Email</label>
          <input 
            type="email" 
            disabled
            readOnly
            name='email'
            className='px-2 py-1 rounded text-semibold border'
            placeholder='you@example.com'
            // value={session.email}
          />
        </div>

        <div className='flex gap-1 flex-col'>
          <label className='font-bold text-lg px-1'>Mo. Number</label>
          <input 
            type="number"
            name='moNumber'
            className='px-2 py-1 rounded text-semibold border'
            placeholder='Enter your mobile number'
          />
        </div>
         <p className='text-3xl font-bold text-center mt-12'>Update Your Profile </p>
         <div className='grid grid-cols-2 gap-3 m-3 border shadow-lg p-4'>
            <div className='flex gap-1 flex-col'>
            <label className='font-bold text-lg px-1'>State</label>
            <input 
              type="text" 
               name='state'
               onChange={handleformValue}
              className='px-2 py-1 rounded text-semibold border'
              placeholder='Your state name'
              // value={session.uid
             // }
             />
            </div>

            <div className='flex gap-1 flex-col'>
                  <label className='font-bold text-lg px-1'>Country</label>
                  <input 
                     type="text" 
                     onChange={handleformValue}
                     name='country'
                    className='px-2 py-1 rounded text-semibold border'
                   placeholder='Your country name'
                  // value={session.uid
                  // }
               />
            </div>

            <div className='flex gap-1 flex-col'>
                  <label className='font-bold text-lg px-1'>District</label>
                  <input 
                     type="text" 
                     name='district'
                     onChange={handleformValue}
                    className='px-2 py-1 rounded text-semibold border'
                   placeholder='Your district name'
                  // value={session.uid
                  // }
               />
            </div>

            <div className='flex gap-1 flex-col'>
                  <label className='font-bold text-lg px-1'>Pincode</label>
                  <input 
                     type="number" 
                     name='pincode'
                     onChange={handleformValue}
                    className='px-2 py-1 rounded text-semibold border'
                   placeholder='Your Pnicode'
                  // value={session.uid
                  // }
               />
            </div>

            <div className='flex gap-1 flex-col '>
                  <label className='font-bold text-lg px-1'>Address</label>
                  <textarea
                     type="text" 
                     name='address'
                     onChange={handleformValue}
                    className='px-2 py-1 rounded text-semibold border'
                   placeholder='HouseNo/street/area/village'
                  // value={session.uid
                  // }
               />
            </div>

         </div>

        <button 
          type="submit" 
          className="bg-rose-500 text-white py-2 px-4 rounded hover:bg-rose-600"
        >
          Save Profile
        </button>
      </form>
    </Layout>
  );
}

export default Profile;
