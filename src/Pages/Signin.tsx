import React, { useState } from 'react'
import image from "../Images/image.png"
import logo from "../Images/logo.png"
import { FaUser, FaRegEyeSlash } from 'react-icons/fa'
import { TfiReload } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';

const Signin: React.FC = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha())
  const [captchaInput, setCaptchaInput] = useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate=useNavigate()

  function generateCaptcha() {
    const char = "0123456789"
    let res = ''
    for (let i = 0; i < 5; i++) {
      res += char.charAt(Math.floor(Math.random() * char.length))
    }
    return res
  }

  const handleLogin = () => {
    if (user === "deek123" && password === "12345" && captchaInput === captcha) {
      alert("Login Successful ✅")
      navigate("/home")
      setError("")
    } else {
      setError("Invalid credentials or captcha ❌")
      setCaptcha(generateCaptcha()) // regenerate captcha
      setCaptchaInput("")
    }
  }

  return (
    <div
      className='gap-2 h-screen w-screen flex justify-center items-center bg-cover'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='bg-white bg-mint-500 rounded shadow-lg w-[600px] h-[450px] text-center'>
        <img className='w-full p-4 h-32 object-contain mb-6' src={logo} alt="" />
        <div className='flex flex-col gap-3'>
          {/* Username */}
          <div className="flex items-center justify-center h-10 ml-8 w-[530px] border-2 border-purple-500 rounded-sm overflow-hidden">
            <div className="bg-yellow-400 rounded-r-full flex items-center justify-center w-12 h-14">
              <FaUser className="text-white " />
            </div>
            <input
              type="text"
              placeholder="Enter ID"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="flex-1 bg-blue-100 text-center font-bold text-lg outline-none h-14"
            />
          </div>

          {/* Password */}
          <div className="flex items-center justify-center h-10 ml-8 w-[530px] border-2 border-purple-500 rounded-sm overflow-hidden">
            <div className="bg-yellow-400 rounded-r-full flex items-center justify-center w-12 h-14">
              <FaRegEyeSlash className="text-white " />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-blue-100 text-center font-bold text-lg outline-none h-14"
            />
          </div>

          {/* Captcha */}
          <div className='flex gap-3'>
            <div className="flex items-center justify-center h-10 ml-8 w-[290px] border-1 border-gray-400 rounded-sm overflow-hidden">
              <div className="bg-yellow-400 rounded-r-full flex items-center justify-center w-12 h-14 cursor-pointer"
                onClick={() => setCaptcha(generateCaptcha())}>
                <TfiReload className="text-white " />
              </div>
              <input
                type="text"
                placeholder="CAPTCHA"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="flex-1 bg-blue-100 text-center text-black font-bold text-lg outline-none h-14"
              />
            </div>
            <div className='bg-yellow-400 p-2 text-white font-bold w-[230px] text-center flex items-center justify-center text-lg'>
              {captcha}
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          onClick={handleLogin}
          className='bg-yellow-400 mt-4 rounded p-2 w-[530px]'
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Signin
