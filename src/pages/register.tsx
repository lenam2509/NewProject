import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const register = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showPassword, setShowPassword] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirm = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-full h-[700px] bg-[#fff] mt-[122px]">
      <div className="bg-[#f0f2f5] w-[50%] h-full m-auto flex">
        <div className="bg-[#fff] w-[60%] h-auto m-auto flex-col rounded-md">
          <h2 className="pt-2 pl-[5%] text-[25px]">Đăng ký</h2>
          <form>
            <input
              type="text"
              placeholder="Họ và tên"
              className="bg-[#f0f2f5] w-[90%] h-[40px] rounded-md border-none mt-5 ml-[5%] outline-none pl-[10px] placeholder:text-black"
            />
            <input
              type="text"
              placeholder="Tên đăng nhập"
              className="bg-[#f0f2f5] w-[90%] h-[40px] rounded-md border-none mt-5 ml-[5%] outline-none pl-[10px] placeholder:text-black"
            />
            <input
              type="email"
              placeholder="Email"
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
            <div className="flex relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                className="bg-[#f0f2f5] w-[90%] h-[40px] rounded-md border-none mt-5 ml-[5%] outline-none pl-[10px] placeholder:text-black"
              />
              <span
                className="absolute top-9 cursor-pointer right-16"
                onClick={handleShowConfirm}
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </span>
            </div>
            <div className="w-[60%] ml-[20%] mt-5 text-[13px] text-center">
              Bằng việc đăng ký, bạn đã đồng ý với
              <Link to="/" className="ml-1 hover:underline">
                Hoang Phuc Store
              </Link>{" "}
              về <br />
              <Link to="#" className="text-yellow-600 hover:underline">
                Điều khoản dịch vụ
              </Link>{" "}
              và
              <Link to="#" className="ml-1 text-yellow-600 hover:underline">
                Chính sách bảo mật
              </Link>{" "}
            </div>
            <button
              type="submit"
              className="bg-[#f6ce00] mb-5 h-[40px] text-black rounded-md mt-5 w-[90%] ml-[5%] hover:bg-[#d4b102] cursor-pointer text-[20px] uppercase"
            >
              đăng ký
            </button>
          </form>
          <hr />
          <div className="ml-[50%] uppercase">hoặc</div>
          <div className="w-[90%] ml-[5%] mt-2 flex justify-between mb-5">
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
          <div className="w-[90%] ml-[5%] mb-5">
            Bạn đã có tài khoản?{" "}
            <Link to="/login" className="text-yellow-600 hover:underline">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
