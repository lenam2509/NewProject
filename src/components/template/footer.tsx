import React from "react";
import  Image  from "next/image";
function Footer() {
  return (
    <>
      <div className="flex w-full bg-black py-6 mt-10">
        <div className="text-xs mx-auto w-[1200px] text-white">
          <div className="grid grid-cols-6 gap-6 w-full">
            <div>
              <div className="font-bold text-sm mb-[6px]">
                Các thông tin khác
              </div>
              <a
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center"
                href="#"
              >
                Tin tức sự kiện
              </a>
              <a
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center"
                href="#"
              >
                Liên hệ
              </a>
              <a
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center"
                href="#"
              >
                Tuyển dụng
              </a>
            </div>
            <div>
              <div className="font-bold text-sm mb-[6px]">
                Hỗ trợ khách hàng
              </div>
              <a
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center"
                href="#"
              >
                Chính sách đổi hàng
              </a>
              <a
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center"
                href="#"
              >
                Chính sách chất lượng
              </a>
              <a
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center"
                href="#"
              >
                Chính sách bảo mật
              </a>
              <a
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center"
                href="#"
              >
                Biểu phí vận chuyển
              </a>
              <a
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center"
                href="#"
              >
                Trung tâm dịch vụ bảo hành
              </a>
              <a
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center"
                href="#"
              >
                Điều khoản và điều kiện
              </a>
            </div>
            <div>
              <div className="font-bold text-sm mb-[6px]">
                Tổng đài hỗ trợ CSKH
              </div>
              <a
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center"
                href="#"
              >
                Các ngày trong tuần từ 8:00 - 21:00
              </a>
              <a
                href=""
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center text-yellow-300 text-base !text-primary !font-bold"
              >
                <span className="phone-image"></span>
                1900 6099
              </a>
            </div>
            <div>
              <div className="font-bold text-sm mb-[6px]">
                Tổng đài bán hàng Online
              </div>
              <a
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center"
                href="#"
              >
                Các ngày trong tuần từ 8:00 - 21:00
              </a>
              <a
                href=""
                className="text-xs text-neutral-100 py-[6px] cursor-pointer flex items-center text-yellow-300 text-base !text-primary !font-bold"
              >
                <span className="phone-image"></span>
                1900 6091
              </a>
            </div>
            <div className="flex-col col-span-2 bg-white text-black p-3 rounded h-fit">
              <p className="font-bold text-base text-neutral-800">Bản Tin</p>
              <p className="text-sm mb-2 text-neutral-900">
                Đăng kí nhận bản tin để không bỏ lỡ thông tin khuyến mãi, luôn
                nhận được chương trình ưu đãi đặc biệt.
              </p>
              <form id="form-subscribe-news">
                <div className="flex gap-2 mb-3">
                  <div className="ui-textfield flex-1">
                    <div className="ui-textfield_wrapper">
                      <input
                        className="ui-textfield_input !border-neutral-300 flex-1"
                        placeholder="Nhập email của bạn"
                        name="email"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="ui-button text-primary bg-neutral outline-neutral hover:bg-neutral-700 hover:outline-neutral-700 focus:text-primary-900 focus:bg-neutral px-4 py-2.5 text-sm bg-neutral-300 text-neutral-500 pointer-events-none outline-neutral-300 cursor-not-allowed h-10 px-8"
                    disabled
                  >
                    <span className="text-[#9f9f9d]">Đăng Ký</span>
                  </button>
                </div>
                <div className="ui-checkbox">
                  <label className="ui-checkbox_label flex" aria-hidden="true">
                    <input type="checkbox" className="ui-checkbox_input" />
                    <span className="ui-checkbox_checkmark" />
                    <p className="ui-text text-neutral ml-1">
                      Tôi đồng ý với các điều khoản sử dụng
                    </p>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col text-center items-center justify-center mt-10 w-full">
            <a href="#" className="mb-3">
              <img
                alt="Hoàng Phúc Quốc Tế"
                src="https://cdn.hoang-phuc.com/image/logo.png"
                height={28}
                width={113}
                style={{ width: "113px", height: "28px" }}
              />
            </a>
            <div className="flex flex-col mb-3">
              <p className="leading-6">
                CTY CỔ PHẦN - ĐẦU TƯ HOÀNG PHÚC QUỐC TẾ
              </p>
              <p className="leading-6">
                137 NGUYỄN TRÃI, P.BẾN THÀNH, Q.1, TPHCM
              </p>
              <p className="leading-6">
                ĐKKD SỐ 0314718634 DO SỞ KHĐT TP.HCM CẤP NGÀY 06/11/2017
              </p>
              <p className="leading-6">
                <a href="mailto:cskh@hoang-phuc.com">
                  <b>EMAIL:</b> CSKH@HOANG-PHUC.COM
                </a>
              </p>
              <p className="leading-6">
                <a href="tel:1900 6941">
                  <b className="mr-1">TỔNG ĐÀI CSKH:</b>1900 6941
                </a>
              </p>
            </div>
            <div className="flex gap-2 justify-center mb-3">
              <a href="https://www.facebook.com/hoangphucintl">
                <span
                  className="ui-icon"
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundImage:
                      "url(https://cdn.hoang-phuc.com/svg/fbblack.svg)",
                  }}
                  aria-hidden="true"
                />
              </a>
              <a href="https://www.youtube.com/c/hoangphucinternational">
                <span
                  className="ui-icon"
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundImage:
                      "url(https://cdn.hoang-phuc.com/svg/ytb.svg)",
                  }}
                  aria-hidden="true"
                />
              </a>
              <a href="https://www.instagram.com/hoangphucintl/?hl=en">
                <span
                  className="ui-icon"
                  style={{
                    width: "24px",
                    height: "24px",
                    backgroundImage:
                      "url(https://cdn.hoang-phuc.com/svg/insta.svg)",
                  }}
                  aria-hidden="true"
                />
              </a>
            </div>
            <a
              href="http://online.gov.vn/Home/WebDetails/66103?AspxAutoDetectCookieSupport=1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://image.hoang-phuc.com/static/bo-cong-thuong.png"
                alt="BỘ CÔNG THƯƠNG"
                width={135}
                height={51}
                style={{ width: "135px", height: "51px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
