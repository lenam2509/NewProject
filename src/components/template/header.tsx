/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import React from "react";

function Header() {
  const thuonghieu: string[] = [
    "NUNI&NICK",
    "Kappa",
    "Ecko Unltd",
    "Superga",
    "Staple",
  ];
  const nam: string[] = [
    "Giày",
    "Dép",
    "Áo Thun",
    "Áo Khoác",
    "Áo sơ mi",
    "Quần dài",
    "Quần short",
    "Đồ lót nam",
    "Phụ kiện nam",
  ];
  const nu: string[] = [
    "Giày",
    "Dép",
    "Áo Thun",
    "Áo Khoác",
    "Áo sơ mi",
    "Quần dài",
    "Quần short",
    "Đồ lót nữ",
    "Váy đầm",
    "Phụ kiện nữ",
  ];
  const treem: string[] = ["Bé trai", "Bé gái", "Giày đi học"];
  const allproduct: string[] = [
    "Giày thời trang",
    "Áo thun thời trang",
    "Quần dài thời trang",
    "Nón mũ thời trang",
    "Balo túi xách thời trang",
    "Quần jean thời trang",
    "Dép thời trang",
    "Váy đầm thời trang",
    "Áo polo thời trang",
    "Phụ kiện thời trang",
    "Quần short thời trang",
    "Vớ thời trang",
    "Đồ lót thời trang",
    "Áo khoác thời trang",
    "Giày trẻ em thời trang",
  ];
  const sansale: string[] = [
    "Áo thun sale",
    "Giày sale",
    "Quần dài sale",
    "Dép sale",
  ];
  return (
    <header className="fixed z-50 w-screen top-0 left-0 bg-primary-900 h-[48px]">
      <a href="#" className="relative flex w-screen h-[38px] justify-center">
        <img
          src="https://cdn.tgdd.vn/2022/09/banner/1200-44-1200x44-7.png"
          height={38}
          width={1200}
          alt="banner"
          className="indent-[-999px] object-contain"
          style={{ width: "100%", height: "38px", background: "orange" }}
        />
      </a>
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
            <div className="ui-search-input outline rounded  overflow-hidden m-search-input h-8 flex-1 !w-full">
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

      {/* menu */}
      <div className="m-menu flex bg-[#f6ce00] relative">
        <div className="flex m-auto w-full max-w-[1200px] h-[36px]">
          <div className="group-one flex items-center transition-color duration-300 ease-in-out cursor-pointer hover:bg-amber-200">
            <a href="#" className="px-3 py-2 flex items-center">
              <span className="text-sm font-semibold">Thương Hiệu</span>
              <span
                className="ui-icon ml-2"
                aria-hidden="true"
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundImage:
                    'url("https://cdn.hoang-phuc.com/svg/arrow-down.svg")',
                }}
              />
            </a>

            <div className="bg-amber-200 absolute w-full top-full left-0 hidden min-h-[36px] group-one-hover:flex z-50">
              <div className="flex m-auto w-[1200px] max-w-[1200px] h-full">
                {thuonghieu.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group-one flex items-center  transition-color duration-300 ease-in-out cursor-pointer hover:!bg-white group-two relative"
                    >
                      <a href="#" className="px-3 py-2 flex items-center">
                        <span className="text-sm font-semibold">{item}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="group-one flex items-center transition-color duration-300 ease-in-out cursor-pointer hover:bg-amber-200">
            <a href="#" className="px-3 py-2 flex items-center">
              <span className="text-sm font-semibold">Nam</span>
              <span
                className="ui-icon ml-2"
                aria-hidden="true"
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundImage:
                    'url("https://cdn.hoang-phuc.com/svg/arrow-down.svg")',
                }}
              />
            </a>
            <div className="bg-amber-200 absolute w-full top-full left-0 hidden min-h-[36px] group-one-hover:flex z-50">
              <div className="flex m-auto w-[1200px] max-w-[1200px] h-full">
                {nam.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group-one flex items-center  transition-color duration-300 ease-in-out cursor-pointer hover:!bg-white group-two relative"
                    >
                      <a href="#" className="px-3 py-2 flex items-center">
                        <span className="text-sm font-semibold">{item}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="group-one flex items-center transition-color duration-300 ease-in-out cursor-pointer hover:bg-amber-200">
            <a href="#" className="px-3 py-2 flex items-center">
              <span className="text-sm font-semibold">Nữ</span>
              <span
                className="ui-icon ml-2"
                aria-hidden="true"
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundImage:
                    'url("https://cdn.hoang-phuc.com/svg/arrow-down.svg")',
                }}
              />
            </a>
            <div className="bg-amber-200 absolute w-full top-full left-0 hidden min-h-[36px] group-one-hover:flex z-50">
              <div className="flex m-auto w-[1200px] max-w-[1200px] h-full">
                {nu.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group-one flex items-center  transition-color duration-300 ease-in-out cursor-pointer hover:!bg-white group-two relative"
                    >
                      <a href="#" className="px-3 py-2 flex items-center">
                        <span className="text-sm font-semibold">{item}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="group-one flex items-center transition-color duration-300 ease-in-out cursor-pointer hover:bg-amber-200">
            <a href="#" className="px-3 py-2 flex items-center">
              <span className="text-sm font-semibold">Trẻ em</span>
              <span
                className="ui-icon ml-2"
                aria-hidden="true"
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundImage:
                    'url("https://cdn.hoang-phuc.com/svg/arrow-down.svg")',
                }}
              />
            </a>
            <div className="bg-amber-200 absolute w-full top-full left-0 hidden min-h-[36px] group-one-hover:flex z-50">
              <div className="flex m-auto w-[1200px] max-w-[1200px] h-full">
                {treem.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group-one flex items-center  transition-color duration-300 ease-in-out cursor-pointer hover:!bg-white group-two relative"
                    >
                      <a href="#" className="px-3 py-2 flex items-center">
                        <span className="text-sm font-semibold">{item}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="group-one flex items-center transition-color duration-300 ease-in-out cursor-pointer hover:bg-amber-200">
           <Link href="/products">
            <a  className="px-3 py-2 flex items-center">
              <span className="text-sm font-semibold">Tất cả sản phẩm</span>
              <span
                className="ui-icon ml-2"
                aria-hidden="true"
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundImage:
                    'url("https://cdn.hoang-phuc.com/svg/arrow-down.svg")',
                }}
              />
            </a>
            </Link>
            <div className="bg-amber-200 absolute w-full top-full left-0 hidden min-h-[36px] group-one-hover:flex z-50">
              <div className="flex m-auto w-[1200px] max-w-[1200px] h-full">
                {allproduct.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group-one flex items-center  transition-color duration-300 ease-in-out cursor-pointer hover:!bg-white group-two relative"
                    >
                      <a href="#" className="px-3 py-2 flex items-center">
                        <span className="text-sm font-semibold">{item}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="group-one flex items-center transition-color duration-300 ease-in-out cursor-pointer hover:bg-amber-200">
            <a href="#" className="px-3 py-2 flex items-center">
              <span className="text-sm font-semibold">Mới về tuần này</span>
            </a>
          </div>
          <div className="group-one flex items-center transition-color duration-300 ease-in-out cursor-pointer hover:bg-amber-200">
            <a href="#" className="px-3 py-2 flex items-center">
              <span className="text-sm font-semibold">Phụ kiện hàng hiệu</span>
            </a>
          </div>
          <div className="group-one flex items-center transition-color duration-300 ease-in-out cursor-pointer hover:bg-amber-200">
            <a href="#" className="px-3 py-2 flex items-center">
              <span className="text-sm font-semibold">Săn SALE</span>
              <span
                className="ui-icon ml-2"
                aria-hidden="true"
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundImage:
                    'url("https://cdn.hoang-phuc.com/svg/arrow-down.svg")',
                }}
              />
            </a>
            <div className="bg-amber-200 absolute w-full top-full left-0 hidden min-h-[36px] group-one-hover:flex z-50">
              <div className="flex m-auto w-[1200px] max-w-[1200px] h-full">
                {sansale.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group-one flex items-center  transition-color duration-300 ease-in-out cursor-pointer hover:!bg-white group-two relative"
                    >
                      <a href="#" className="px-3 py-2 flex items-center">
                        <span className="text-sm font-semibold">{item}</span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
