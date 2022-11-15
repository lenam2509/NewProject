import { useState } from "react";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPassword, setShowPassword] = useState(false);
  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-[500px] bg-[#fff] mt-[122px]">
      <div className="bg-[#f0f2f5] w-[50%] h-full m-auto flex">
        <div className="bg-[#fff] w-[60%] h-auto m-auto flex-col rounded-md">
          <h2 className="pt-2 pl-[5%] text-[25px]">Đăng nhập</h2>
          <form>
            <input
              type="text"
              placeholder="Tên đăng nhập hoặc Email"
              className="bg-[#f0f2f5] w-[90%] h-[40px] rounded-md border-none mt-5 ml-[5%] outline-none pl-[10px] placeholder:text-black"
            />
            <div className="flex relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                className="bg-[#f0f2f5] w-[90%] h-[40px] rounded-md border-none mt-5 ml-[5%] outline-none pl-[10px] placeholder:text-black"
              />
              <span
                className="absolute top-9 cursor-pointer right-16"
                onClick={handleShow}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#f6ce00] h-[40px] text-black rounded-md mt-5 w-[90%] ml-[5%] hover:bg-[#d4b102] cursor-pointer text-[20px] uppercase"
            >
              đăng nhập
            </button>
          </form>
          <div className="w-[120px] mt-2 ml-[5%]">
            <a href="/forgot" className="text-[#05a]">
              Quên mật khẩu
            </a>
          </div>
          <hr />
          <div className="ml-[50%] uppercase">hoặc</div>
          <div className="w-[90%] ml-[5%] mt-2 flex justify-between">
            <button className="bg-[#fff] h-[57%] w-[150px] border border-gray-400 rounded-sm flex">
              <BsFacebook color="blue" size="40px" className="pt-1" />
              <p className="pt-2 ml-2">Facebook</p>
            </button>
            <button className="bg-[#fff] h-[57%] w-[150px] border border-gray-400 rounded-sm flex">
              <FcGoogle size="40px" className="pt-1" />
              <p className="pt-2 ml-2">Google</p>
            </button>
            <button className="bg-[#fff] h-[57%] w-[150px] border border-gray-400 rounded-sm flex">
              <BsApple size="40px" className="pt-1" />
              <p className="pt-2 ml-2">Apple</p>
            </button>
          </div>
          <div className="ml-[5%] mt-2 mb-2">
            Bạn mới biết đến{" "}
            <a href="/" className="hover:underline">
              Hoang Phuc Store?
            </a>
            <a
              href="/register"
              className="capitalize ml-1 text-yellow-600 hover:underline"
            >
              đăng ký
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
