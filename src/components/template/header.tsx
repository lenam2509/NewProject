import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <div className="flex bg-black">
        <div
          className="flex items-center m-auto gap-4 py-2"
          style={{ width: "min(100% - 2rem, 1200px)" }}
        >
          <Link href="/">
            <img
              className="indent-[-999px] cursor-pointer"
              src="https://cdn.hoang-phuc.com/image/logo.png"
              alt="logo"
              height="32px"
              width="130px"
              style={{ width: "130px", height: "32px" }}
            />
          </Link>
          <div className="relative flex-1">
            <div className="ui-search-input outline rounded w-fit overflow-hidden m-search-input h-8 flex-1 !w-full">
              <div className="ui-textfield flex-1 prefixright">
                <div className="ui-textfield_wrapper">
                  <input
                    className="ui-textfield_input !pr-10 !border-none !rounded-none"
                    placeholder="Bạn đang tìm..."
                    
                  />
                  <div className="ui-textfield_prefixright">
                    <span
                      className="ui-icon ui-icon-search"
                      style={{ width: "24px", height: "24px" }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col top-full left-0 mt-1 w-[592px] max-h-[700px] min-h-[150px] overflow-hidden bg-white transition-all duration-300 ease-in-out z-[100] shadow-dropdown rounded opacity-0 translate-x-full invisible">
              <div className="border-t-4 border-solid border-neutral-300">
                <p className="ui-text text-neutral text-sm font-bold uppercase p-3 ">
                  Tìm kiếm phổ biến
                </p>
              </div>
            </div>
          </div>
          <div className="text-white text-xs cursor-pointer">
            <a href="https://tintuc.hoang-phuc.com/">Thời trang 24/7</a>
          </div>
          <div className="flex items-center">
            <a href="/account?active=my-order">
              <button
                type="button"
                className="ui-button outline hover:bg-neutral-200 focus:bg-white px-4 py-2.5  border-white outline-1 text-white hover:!bg-transparent focus:!bg-transparent h-8 text-xs"
              >
                Quản lý đơn hàng
              </button>
            </a>
            <span className="border-l-[.5px] border-solid border-white h-6 mx-4 opacity-60" />
            <a href="/cart" className="relative z-10">
              <div className="px-4 outline outline-1 outline-white text-xs text-white flex items-center rounded h-8">
                <span
                  className="ui-icon mr-2 relative"
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundImage:
                      "url(https://cdn.hoang-phuc.com/svg/cart.svg)",
                  }}
                  aria-hidden="true"
                />
                Giỏ hàng
              </div>
            </a>
          </div>
          <a href="/sign-in">
            <button
              type="button"
              className="ui-button outline hover:bg-neutral-200 focus:bg-white px-4 py-2.5  border-white outline-1 text-white hover:!bg-transparent focus:!bg-transparent h-8 text-xs ml-6"
            >
              <span
                className="ui-icon mr-2"
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundImage:
                    "url(https://cdn.hoang-phuc.com/svg/user.svg)",
                }}
                aria-hidden="true"
              />
              Đăng nhập / Đăng ký
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
