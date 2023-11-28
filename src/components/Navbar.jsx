import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Navbar = () => {
  const {user, logOut} = UserAuth ()
  const navigate = useNavigate()

  const handleLogout = async () => {
  try{
    await logOut()
    navigate('/')
  } catch (error){
    console.log(error);
  }
}
  //console.log{user}
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className ='text-red-600 text-4xl font-bold cursor-pointer logo'>
          CINEFLIX
        </h1>
        </Link>
       {user?.email ? (  <div>
          <Link to='/account' id='account'>
            <button className='text-white pr-4'> Conta  </button>
          </Link>
            <button 
              id='signout'
              onClick={handleLogout}
              className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
            >
              Sair
            </button>
        </div> 
       ) : ( 
         <div>
         <Link to='/login' id='login'>
           <button className='text-white pr-4'> Entrar </button>
         </Link>
         <Link to='/signup' id='signup'>
           <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
             Inscreva-se
           </button>
           </Link>
        </div>
       )}
    </div>
  )
}

export default Navbar
