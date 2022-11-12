import React from 'react'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

const login = () => {
  return (
    <div className='w-full h-[600px] bg-[#fff] mt-[122px]'>
      <div className='bg-[#f0f2f5] w-[50%] h-full m-auto flex'>
        <div className='bg-[#fff] w-[60%] h-auto m-auto flex-col rounded-md'>
          <form>
            <input type="text" placeholder='Tên đăng nhập hoặc Email' className='bg-[#f0f2f5] w-[90%] h-[40px] rounded-md border-none mt-5 ml-[5%] outline-none pl-[10px] placeholder:text-black'/>
            <input type="password" placeholder='Mật khẩu' className='bg-[#f0f2f5] w-[90%] h-[40px] rounded-md border-none mt-5 ml-[5%] outline-none pl-[10px] placeholder:text-black'/>
            <button type='submit' className='bg-[#f6ce00] h-[40px] text-black rounded-md mt-5 w-[90%] ml-[5%] hover:bg-[#d4b102] cursor-pointer text-[20px] uppercase'>đăng nhập</button>
          </form>
          <div className='w-[120px] mt-2 ml-[5%]'>
            <a href="/forgot" className='text-[#05a]'>Quên mật khẩu</a>
          </div>
          <hr />
          <div className='ml-[50%] uppercase'>hoặc</div>
          <div className='w-[90%] ml-[5%] mt-2 flex justify-between'>
            <button className='bg-[#fff] h-[57%] w-[150px] border border-gray-400 rounded-sm flex'>
              <BsFacebook color='blue' size='40px' className='pt-1'/>
              <p className='pt-2 ml-2'>Facebook</p>
            </button>
            <button className='bg-[#fff] h-[57%] w-[150px] border border-gray-400 rounded-sm flex'>
              <FcGoogle size='40px' className='pt-1'/>
              <p className='pt-2 ml-2'>Google</p>
            </button>
            <button className='bg-[#fff] h-[57%] w-[150px] border border-gray-400 rounded-sm flex'>
              <BsApple size='40px' className='pt-1'/>
              <p className='pt-2 ml-2'>Apple</p>
            </button>
          </div>
          <div className='ml-[5%] mt-2 mb-2'>
            Bạn mới biết đến <a href="/">Hoang Phuc Store?</a>
            <a href="/register" className='capitalize ml-1'>đăng ký</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login
