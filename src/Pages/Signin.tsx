import React, { useState } from "react";
import image from "../Images/image.png";
import logo from "../Images/logo.png";
import { FaUser, FaRegEyeSlash } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const Signin: React.FC = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function generateCaptcha() {
    const char = "0123456789";
    let res = "";
    for (let i = 0; i < 5; i++) {
      res += char.charAt(Math.floor(Math.random() * char.length));
    }
    return res;
  }

  const handleLogin = () => {
    if (user === "deek123" && password === "123456" && captchaInput === captcha) {
      alert("Login Successful ✅");
      navigate("/home");
      setError("");
    } else {
      setError("Invalid credentials or captcha ❌");
      setCaptcha(generateCaptcha()); // regenerate captcha
      setCaptchaInput("");
    }
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-cover p-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-white rounded shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl p-2 sm:p-6">
        <img
          className="w-full h-20 sm:h-28 object-contain mb-2"
          src={logo}
          alt="logo"
        />

        <div className="flex flex-col gap-3">
          {/* Username */}
          <div className="flex items-center border-2 border-purple-500 rounded-sm overflow-hidden">
            <div className="bg-yellow-400 flex items-center justify-center w-12 h-12">
              <FaUser className="text-white" />
            </div>
            <input
              type="text"
              placeholder="Enter ID"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="flex-1 bg-blue-100 text-center font-bold text-base sm:text-lg outline-none h-12"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-2 border-purple-500 rounded-sm overflow-hidden">
            <div className="bg-yellow-400 flex items-center justify-center w-12 h-12">
              <FaRegEyeSlash className="text-white" />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-blue-100 text-center font-bold text-base sm:text-lg outline-none h-12"
            />
          </div>

          {/* Captcha */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center border border-gray-400 rounded-sm overflow-hidden flex-1">
              <div
                className="bg-yellow-400 flex items-center justify-center w-12 h-12 cursor-pointer"
                onClick={() => setCaptcha(generateCaptcha())}
              >
                <TfiReload className="text-white" />
              </div>
              <input
                type="text"
                placeholder="CAPTCHA"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="flex-1 bg-blue-100 text-center text-black font-bold text-base sm:text-lg outline-none h-12"
              />
            </div>
            <div className="bg-yellow-400 text-white font-bold flex items-center justify-center text-base sm:text-lg px-4 py-2 sm:w-40">
              {captcha}
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          onClick={handleLogin}
          className="bg-yellow-400 mt-4 rounded p-2 w-full text-white font-bold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signin;
