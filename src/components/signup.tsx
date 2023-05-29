import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

    const [username, setUsername] = useState<string>()
    const [fatherName, setFatherName] = useState<string>()
    const [viloyatName, setViloyat] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [mahalla, setMahalla] = useState<string>()
    const [surname, setSurname] = useState<string>()
    const [tel, setTel] = useState<string>()
    const [tuman, setTuman] = useState<string>()
    const [born_at, setBorn_at] = useState<string>()
    const [uy, setUy] = useState<number>()
    const [polikilinika, setPolikilinika] = useState<number>()
    const [password, setPassword] = useState<string>()

    const send = ()=>{
        axios.post('http://localhost:8000/api/user/', {
            username, fatherName, viloyat:viloyatName, email, mahalla, surname, tel, tuman, born_at, uy, polikilinika, password
        })
    }

    return (
        <div className='bg-white w-8/12 flex flex-col items-center rounded-lg shadow-2xl'>
            <div className='w-full bg-blue-500 rounded-t-lg h-[15px]'></div>
            <div className='flex min-h-[700px] px-[15px]'>
                <div className='w-full flex flex-wrap items-center justify-center gap-x-3'>
                    <div className='w-[320px] flex flex-col gap-2'>
                        <label htmlFor="username" className='text-2xl w-[320px] mx-auto'>Ismingiz</label>
                        <input onChange={e=>setUsername(e.target.value)} type="text" name='username' id='username' className='w-[320px] border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-blue-300 mx-auto' />
                    </div>
                    <div className='w-[320px] flex flex-col gap-2'>
                        <label htmlFor="email" className='text-2xl w-[320px] mx-auto'>Email</label>
                        <input onChange={e=>setEmail(e.target.value)} type="email" name='email' id='email' className='w-[320px] border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-blue-600 mx-auto' />
                    </div>
                    <div className='w-[320px] flex flex-col gap-2'>
                        <label htmlFor="familiya" className='text-2xl w-[320px] mx-auto'>Familiyangiz</label>
                        <input onChange={e=>setSurname(e.target.value)} type="text" name='familiya' id='familiya' className='w-[320px] border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-yellow-300 mx-auto' />
                    </div>
                    <div className='w-[320px] flex flex-col gap-2'>
                        <label htmlFor="otaIsm" className='text-2xl w-[320px] mx-auto'>Otangizni ismi</label>
                        <input onChange={e=>setFatherName(e.target.value)} type="text" name='otaIsm' id='otaIsm' className='w-[320px] border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-green-300 mx-auto' />
                    </div>
                    <div className='w-[320px] flex flex-col gap-2'>
                        <label htmlFor="t_yil" className='text-2xl w-[320px] mx-auto'>Tug'ilgan sanagiz</label>
                        <input onChange={e=>setBorn_at(e.target.value)} type="date" name='t_yil' id='t_yil' className='w-[320px] border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-pink-300 mx-auto' />
                    </div>
                    <div className='w-[320px] flex flex-col gap-2'>
                        <label className='text-2xl w-[320px] mx-auto'>Viloyatlar</label>
                        <select onChange={e=>setViloyat(e.target.value)} name="" id="viloyat" className='w-[320px] border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-orange-300 mx-auto'>
                            <option value="Samarkand">Samarkand</option>
                            <option value="Toshkent">Toshkent</option>
                            <option value="Sirdaryo">Sirdaryo</option>
                            <option value="Surxandaryo">Surxandaryo</option>
                            <option value="Jizzax">Jizzax</option>
                            <option value="Navoi">Navoi</option>
                            <option value="Buxoro">Buxoro</option>
                            <option value="Andijon">Andijon</option>
                            <option value="Xorazm">Xorazm</option>
                            <option value="Farg'ona">Farg'ona</option>
                            <option value="Namangan">Namangan</option>
                        </select>
                    </div>
                    <div className='w-[320px] flex flex-col gap-2'>
                        <label htmlFor="tuman" className='text-2xl w-[320px] mx-auto'>Tuman</label>
                        <input onChange={e=>setTuman(e.target.value)} type="text" name='tuman' id='tuman' className='w-[320px] border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-pink-300 mx-auto' />
                    </div>
                    <div className='w-[320px] flex flex-col gap-2'>
                        <label htmlFor="mahalla" className='text-2xl w-[320px] mx-auto'>Mahalla</label>
                        <input onChange={e=>setMahalla(e.target.value)} type="text" name='mahalla' id='mahalla' className='w-[320px] border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-blue-300 mx-auto' />
                    </div>
                    <div className='w-[140px] flex flex-col justify-start gap-2'>
                        <label htmlFor="uyR" className='text-2xl w-[320px] mx-auto'>Uy raqami</label>
                        <input onChange={e=>setUy(parseInt(e.target.value))} type="number" name='uyR' id='uyR' className='w-[60px] pl-[6px] border-2 border-gray-600 h-[45px] rounded-md focus:outline-orange-300 ' />
                    </div>
                    <div className='w-[140px] flex flex-col justify-start gap-2'>
                        <label htmlFor="poliklinika" className='text-2xl w-[320px] mx-auto'>Poliklinika</label>
                        <input onChange={e=>setPolikilinika(parseInt(e.target.value))} type="number" name='poliklinika' id='poliklinika' className='w-[60px] pl-[6px] border-2 border-gray-600 h-[45px] rounded-md focus:outline-green-300 ' />
                    </div>
                    <div className='w-[320px] flex flex-col gap-2'>
                        <label htmlFor="tel" className='text-2xl w-[320px] mx-auto'>Telefon raqamingiz</label>
                        <input onChange={e=>setTel(e.target.value)} type="tel" name='tel' id='tel' className='w-[320px] border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-red-300 mx-auto' />
                    </div>
                    <div className='w-[320px] flex flex-col gap-2'>
                        <label htmlFor="parol" className='text-2xl w-[320px] mx-auto'>Parolingiz</label>
                        <input onChange={e=>setPassword(e.target.value)} type="password" name='parol' id='parol' className='w-[320px] border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-red-300 mx-auto' />
                    </div>
                </div>
            </div>
            <button className='w-8/12 mb-[25px] bg-blue-500 h-[45px] rounded-md text-white hover:text-blue-400 hover:border-blue-400 hover:border-2 hover:bg-white' onClick={send}>Ro'yxatdan o'tish</button>
        </div>
    )
}

export default Signup