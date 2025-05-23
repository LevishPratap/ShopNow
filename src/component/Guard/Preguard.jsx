import React from 'react'
import firebase_config_connection from '../../assets/util/firebase.config'
import { getAuth,onAuthStateChanged } from 'firebase/auth'
import { useState ,useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const auth=getAuth(firebase_config_connection)
function Preguard() {
    const [session,setSession]=useState(null)
    useEffect(()=>{
        const usertest = onAuthStateChanged(auth,(user)=>{
           if(user){
            setSession(user)
           }
           else{
            setSession(false)
           }
        })
       
    },[])

    if (session=== null ){
        return(
            <>
              <div className='bg-blue-500 h-screen w-screen flex justify-center items-center'>
                <p className='text-6xl font-bold'>Loading...</p>
              </div>
    
            </>
        )
      }

    if (session){
        return(
            <Navigate to='/'></Navigate>
        )
    }
    else{
        return(
            <Outlet/>
        )
    }
}

export default Preguard

