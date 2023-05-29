import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
interface dataI {
  id: number
  bulim: number
  name: string
  xona: number
}

interface userI {
  born_at: string
  email: string
  fatherName: string
  id: number
  mahalla: string
  polikilinika: number
  surname: string
  tel: string
  tuman: string
  username: string
  uy: number
  viloyat: string
}

const Home = () => {
  const [bulim, setBulim] = useState<number>(1)
  const [data, setData] = useState<dataI[]>()
  const [doctor, setDoctor] = useState<string>('')
  const [xona, setXona] = useState<number>(0)
  const [userId, setUserId] = useState<number>()
  const [body, setBody] = useState<string>('')
  const [holat, setHolat] = useState<string>('')
  const [bulimName, setBulimName] = useState<string>('')

  const user = localStorage.getItem('user')

  useEffect(() => {
    axios.get('http://localhost:8000/api/doktor/').then(res => {
      setData(res.data)
    })
    axios.get('http://localhost:8000/api/user/').then(res => {
      const users: userI[] = res.data
      users.map(mal => {
        if (mal.username === user) {
          setUserId(mal.id)
          console.log(mal.id);

        }
      })
    })
  }, [])

  const send = () => {

    console.log({
      user: userId,
      body,
      holat,
      doktor: doctor,
      xona,
      bulim: bulimName
    });

    axios.post('http://localhost:8000/api/post/', {
      user: userId,
      body,
      holat,
      doktor: doctor,
      xona,
      bulim: bulimName
    }).catch(err => console.log(err)
    )
  }


  return (
    <>
      <div className='absolute top-[50px] left-[50px] text-white bg-blue-600 w-[120px] h-[45px] flex items-center justify-center rounded-md'>
        <Link to={'/login'}>Login</Link>
      </div>
      <div className='bg-white w-8/12 flex flex-col items-center rounded-lg shadow-2xl pb-[25px]'>
        <div className='w-full bg-blue-500 rounded-t-lg h-[15px]'></div>
        <div className='flex flex-col w-full min-h-[700px] px-[15px] justify-around'>
          <div className='w-full flex flex-col items-center justify-center gap-12'>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="holat" className='text-2xl w-11/12 mx-auto'>Bemorni birlamchi holati haqida</label>
              <textarea onChange={e => setBody(e.target.value)} name='holat' id='holat' className='pt-2 w-11/12 resize-none border-2 border-gray-600 h-[100px] rounded-md pl-[15px] focus:outline-blue-300 mx-auto' />
            </div>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="tarix" className='text-2xl w-11/12 mx-auto'>Kasallik tarixi</label>
              <textarea onChange={e => setHolat(e.target.value)} name='tarix' id='tarix' className='pt-2 w-11/12 resize-none border-2 border-gray-600 h-[100px] rounded-md pl-[15px] focus:outline-yellow-300 mx-auto' />
            </div>
          </div>
          <div className='flex justify-around'>
            <div className='w-[320px] flex flex-col gap-2'>
              <label className='text-2xl w-[320px] mx-auto'>Bo'limlar</label>
              <select name="" onChange={e => {
                setBulim(parseInt(e.target.value))
                if (bulim === 1) {
                  setBulimName('Lor')
                } else if (bulim === 2) {
                  setBulimName('Xirurgiya')
                } else if (bulim === 3) {
                  setBulimName('Terepeft')
                } else if (bulim === 4) {
                  setBulimName('Tamagrafiya')
                } else if (bulim === 5) {
                  setBulimName('Pediator')
                }
              }} id="viloyat" className='w-[320px] border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-orange-300 mx-auto'>
                <option value="1">Lor</option>
                <option value="2">Xirurgiya</option>
                <option value="3">Terepeft</option>
                <option value="4">Tamagrafiya</option>
                <option value="5">Pediator</option>
              </select>
            </div>
            <div className='w-[320px] flex flex-col gap-2'>
              <label className='text-2xl w-[320px] mx-auto'>Doktorlar</label>
              <select name="" id="viloyat" className='w-[320px] border-2 border-gray-600 h-[45px] rounded-md pl-[15px] focus:outline-orange-300 mx-auto' onChange={e => {
                setDoctor(e.target.value)
                data?.map(mal => {
                  if (mal.name === doctor) {
                    setXona(mal.xona)
                  }
                })
              }}>
                {
                  data?.map(mal => (
                    mal.bulim === bulim ? <option key={mal.id} value={mal.name}>{mal.name}</option> : null
                  ))
                }
              </select>
            </div>
            <div className='w-[140px] flex flex-col justify-start gap-2'>
              <label htmlFor="xona" className='text-2xl w-[320px] mx-auto'>Xona</label>
              <input type="number" value={xona} disabled name='xona' id='xona' className='w-[60px] pl-[6px] border-2 border-gray-600 h-[45px] rounded-md focus:outline-green-300 ' />
            </div>
          </div>
        </div>
        <button className='w-11/12 mb-[25px] bg-blue-500 h-[45px] rounded-md text-white hover:text-blue-400 hover:border-blue-400 hover:border-2 hover:bg-white' onClick={send}>Yuborish</button>
      </div>
    </>
  )
}

export default Home