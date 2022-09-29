import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const index: NextPage = () => {
  const danhmuc1 = [
    ["Áo Khoác Nam", "/images/danhmuc_1.jpg"],
    ["Dép Nam", "/images/danhmuc_2.jpg"],
    ["Áo Thun Nam", "/images/danhmuc_3.jpg"],
    ["Áo Sơ Mi Nam", "/images/danhmuc_4.jpg"],
    ["Giày Nam", "/images/danhmuc_5.jpg"],
    ["Quần Dài Nam", "/images/danhmuc_6.jpg"],
    ["Quần Short Nam", "/images/danhmuc_7.jpg"],
    ["Phụ Kiện Nam", "/images/danhmuc_8.jpg"],
    ["Vớ Nam", "/images/danhmuc_9.jpg"],
    ["Giày Bé Trai ", "/images/danhmuc_10.jpg"],
  ];
  const danhmuc2 = [
    ["Áo Khoác Nữ", "/images/danhmuc_11.jpg"],
    ["Dép Nữ", "/images/danhmuc_12.jpg"],
    ["Áo Thun Nữ", "/images/danhmuc_13.jpg"],
    ["Áo Sơ Mi Nữ", "/images/danhmuc_14.jpg"],
    ["Giày Nữ", "/images/danhmuc_15.jpg"],
    ["Quần Dài Nữ", "/images/danhmuc_16.jpg"],
    ["Quần Short Nữ", "/images/danhmuc_17.jpg"],
    ["Phụ Kiện Nữ", "/images/danhmuc_18.jpg"],
    ["Vớ Nữ", "/images/danhmuc_19.jpg"],
    ["Giày Bé Gái", "/images/danhmuc_20.jpg"],
  ];
  return (
    <div className="w-[1200px] min-h-screen mx-auto pt-[122px]">
      <div className="flex flex-col space-y-2 py-2">
        <a
          href="#"
          className="w-full mt-1.5"
          style={{ width: "1200px", height: "600px" }}
        >
          <Image
            className="indent-[-999px] rounded-md"
            src="/images/slide_1.jpg"
            alt="banner"
            width={1200}
            height={600}
            style={{ width: "1200px", height: "600px" }}
          />
        </a>
        <div className="block overflow-hidden bg-slate-100 mb-8 rounded-xl">
          <strong className="block overflow-hidden py-4 px-6 text-lg text-black">
            DANH MỤC NỔI BẬT
          </strong>
          <div className="block overflow-hidden pt-0 pb-8 px-10">
            <aside className="flex items-start overflow-hidden">
              {danhmuc1.map((item, index) => {
                return (
                  <h3 className="inline-block align-top py-3 px-0" key={index}>
                    <a
                      href="#"
                      className="block overflow-hidden text-black text-center w-[112px]"
                    >
                      <div className="m-auto block overflow-hidden mb-2">
                        <Image
                          src={item[1]}
                          alt={item[0]}
                          width="50px"
                          height="70px"
                          className="m-auto block"
                        />
                      </div>
                      <span className="font-semibold block overflow-hidden text-center px-[5px]">
                        {item[0]}
                      </span>
                    </a>
                  </h3>
                );
              })}
            </aside>
            <aside className="flex items-start overflow-hidden">
            {danhmuc2.map((item, index) => {
                return (
                  <h3 className="inline-block align-top py-3 px-0" key={index}>
                    <a
                      href="#"
                      className="block overflow-hidden text-black text-center w-[112px]"
                    >
                      <div className="m-auto block overflow-hidden mb-2">
                        <Image
                          src={item[1]}
                          alt={item[0]}
                          width="50px"
                          height="70px"
                          className="m-auto block"
                        />
                      </div>
                      <span className="font-semibold block overflow-hidden text-center px-[5px]">
                        {item[0]}
                      </span>
                    </a>
                  </h3>
                );
              })}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
