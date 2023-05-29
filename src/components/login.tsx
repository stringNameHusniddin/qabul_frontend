import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bg_image1 from '../util/assets/bg_image1.jpg'
import axios from 'axios'

const Login = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate()

    const login = ()=>{
        axios.post('http://localhost:8000/login', {
            username, password
        }).then(res=>{
            localStorage.setItem('user', username)
            navigate('/')
        }).catch(err=>{
            console.log(err);
            alert('Ismingiz yoki parolingiz xato')
        })
    }

    return (
        <div className='bg-white w-8/12 flex flex-col items-center rounded-lg shadow-2xl'>
            <div className='w-full bg-blue-500 rounded-t-lg text-[30px] text-center text-white py-2'>
                <p>Oilaviy poliklinika</p>
            </div>
            <div className='flex h-[600px]'>
                <div className='w-6/12 relative'>
                    <img src={bg_image1} alt="" className='rounded-bl-lg h-full object-cover' />
                    <div className='absolute top-0 w-full h-full bg-[#00000049] rounded-bl-lg text-white text-2xl flex flex-col items-center justify-center gap-10'>
                        <p className='w-11/12 text-center'>Eng yaxshi shifokor bu kopgina dori-darmonning foydasizligini biladigan kishi.</p>
                        <p className='w-11/12 text-right text-yellow-400'>Benjamin Franklin.</p>
                    </div>
                </div>
                <div className='w-6/12 flex flex-col items-center justify-center gap-5'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="username" className='text-2xl w-11/12 mx-auto'>Ismingiz</label>
                        <input type="text" name='username' id='username' className='w-11/12 border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-blue-300 mx-auto' onChange={e=>setUsername(e.target.value)}/>
                    </div>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="parol" className='text-2xl w-11/12 mx-auto'>Parolingiz</label>
                        <input type="password" name='parol' id='parol' className='w-11/12 border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-yellow-300 mx-auto' onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div className='w-11/12'>
                        <button className='bg-blue-400 h-[45px] rounded-l-md text-white w-4/12 hover:text-blue-400 hover:border-blue-400 hover:border-2 hover:bg-white' onClick={login}>Kirish</button>
                        <button className='border-2 border-gray-600 h-[45px] rounded-r-md w-8/12 text-gray-600 hover:text-white hover:border-0 hover:bg-gray-600'>Admin sifatida kirish</button>
                    </div>
                    <Link to='/signup' className='text-blue-500' >Ro'yxatdan o'tish</Link>
                </div>
            </div>
        </div>
    )
}

export default Login