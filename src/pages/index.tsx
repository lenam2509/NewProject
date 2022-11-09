import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
const index: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<any[]>([]);
  // eslint-disable-next-line
  // useEffect(() => {
  //   axios.get("https://api.trungthanhweb.com/api/allProduct").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  // if (data.length > 0) {
  //   console.log("data:", data);
  // }

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

  const aothun = [
    ["KAPPA ÁO THUN TAY NGẮN MEN 341E69W", "/images/ao_thun1.jpg"],
    ["KAPPA ÁO THUN TAY NGẮN MEN 351E69W", "/images/ao_thun2.jpg"],
    ["KAPPA ÁO THUN TAY NGẮN MEN 341E69W", "/images/ao_thun1.jpg"],
    ["KAPPA ÁO THUN TAY NGẮN MEN 351E69W", "/images/ao_thun2.jpg"],
    ["KAPPA ÁO THUN TAY NGẮN MEN 341E69W", "/images/ao_thun1.jpg"],
    ["KAPPA ÁO THUN TAY NGẮN MEN 351E69W", "/images/ao_thun2.jpg"],
  ];

  const giay = data;
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
        <div className="rounded-md shadow mt-1">
          <a href="#">
            <Image
              src="/images/baner_giay.jpg"
              width="1200px"
              height="45px"
              alt="banner"
            ></Image>
          </a>
          <div className="grid grid-cols-5 gap-3.5 min-h-[430px]">
            {giay.slice(0, 5).map((item, index) => {
              return (
                <div className="w-full flex" key={index}>
                  <div
                    className="flex flex-col h-full pb-[10px] mx-auto space-y-1 styles_product-item-container__Ff05D"
                    style={{ width: "216px" }}
                  >
                    <div className="flex items-center justify-center w-full rounded-[4px] cursor-pointer">
                      <div className="relative w-full rounded cursor-pointer h-[288px]">
                        <div className="absolute top-0 left-0 z-[3]" style={{}}>
                          <Image
                            src="/images/sale.png"
                            alt="sale"
                            width={35}
                            height={35}
                            className="indent-[-999px]"
                          />
                        </div>
                        <Link href={"/products/" + item.idProd}>
                          <a className="w-full h-[288px] cursor-pointer relative flex items-center">
                            <Image
                              src={item.image}
                              alt="product item"
                              width={300}
                              height={288}
                              className="indent-[-999px]"
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <span className="flex gap-x-4 line-clamp-2 h-[40px]">
                      <Link href={"/products/" + item.idProd}>
                        <a>
                          <p className="text-[13px] max-h-full line-clamp-2">
                            {item.prodName}
                          </p>
                        </a>
                      </Link>
                    </span>
                    <div className="flex flex-wrap items-center">
                      <div className="flex font-bold text-[#F63B3B] mr-2 text-[16px]">
                        {(item.price - (item.price * 33) / 100).toLocaleString(
                          "vi-VN"
                        )}
                        đ
                      </div>
                      <div className="flex font-normal text-neutral-500 text-[14px]">
                        <p className="line-through">
                          {item.price.toLocaleString("vi-VN")}đ
                        </p>
                        <div className="flex flex-wrap">
                          <p className="text-neutral pl-2 font-normal text-[14px]">
                            -33%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <span className="ui-divider block w-full h-[1px] bg-[#00000026]"></span>
          <div className="w-full flex justify-center items-center text-blue-500 py-2">
            <div className="w-max cursor-pointer">
              <a href="" className="text-[14px] leading-[20px] font-normal">
                Xem thêm <span className="font-bold">{giay.length}</span> sản
                phẩm
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-md shadow mt-1">
          <a href="#">
            <Image
              src="/images/baner_ao_thun.jpg"
              width="1200px"
              height="45px"
              alt="banner"
            ></Image>
          </a>
          <div className="grid grid-cols-5 gap-3.5 min-h-[430px]">
            {aothun.map((item, index) => {
              return (
                <div className="w-full flex" key={index}>
                  <div
                    className="flex flex-col h-full pb-[10px] mx-auto space-y-1 styles_product-item-container__Ff05D"
                    style={{ width: "216px" }}
                  >
                    <div className="flex items-center justify-center w-full rounded-[4px] cursor-pointer">
                      <div className="relative w-full rounded cursor-pointer h-[288px]">
                        <div className="absolute top-0 left-0 z-[3]" style={{}}>
                          <Image
                            src="/images/sale.png"
                            alt="sale"
                            width={35}
                            height={35}
                            className="indent-[-999px]"
                          />
                        </div>
                        <a
                          href=""
                          className="w-full h-[288px] cursor-pointer relative flex items-center"
                        >
                          <Image
                            src={item[1]}
                            alt="product item"
                            width={216}
                            height={288}
                            className="indent-[-999px]"
                          />
                        </a>
                      </div>
                    </div>
                    <span className="flex gap-x-4 line-clamp-2 h-[40px]">
                      <a href="">
                        <p className="text-[13px] max-h-full line-clamp-2">
                          {item[0]}
                        </p>
                      </a>
                    </span>
                    <div className="flex flex-wrap items-center">
                      <div className="flex font-bold text-[#F63B3B] mr-2 text-[16px]">
                        199.000 ₫
                      </div>
                      <div className="flex font-normal text-neutral-500 text-[14px]">
                        <p className="line-through">299.000 ₫</p>
                        <div className="flex flex-wrap">
                          <p className="text-neutral pl-2 font-normal text-[14px]">
                            -33%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <span className="ui-divider block w-full h-[1px] bg-[#00000026]"></span>
          <div className="w-full flex justify-center items-center text-blue-500 py-2">
            <div className="w-max cursor-pointer">
              <a href="" className="text-[14px] leading-[20px] font-normal">
                Xem thêm <span className="font-bold">196</span> sản phẩm
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-md shadow mt-1">
          <a href="#">
            <Image
              src="/images/baner_ao_polo.jpg"
              width="1200px"
              height="45px"
              alt="banner"
            ></Image>
          </a>
          <div className="grid grid-cols-5 gap-3.5 min-h-[430px]">
            {aothun.map((item, index) => {
              return (
                <div className="w-full flex" key={index}>
                  <div
                    className="flex flex-col h-full pb-[10px] mx-auto space-y-1 styles_product-item-container__Ff05D"
                    style={{ width: "216px" }}
                  >
                    <div className="flex items-center justify-center w-full rounded-[4px] cursor-pointer">
                      <div className="relative w-full rounded cursor-pointer h-[288px]">
                        <div className="absolute top-0 left-0 z-[3]" style={{}}>
                          <Image
                            src="/images/sale.png"
                            alt="sale"
                            width={35}
                            height={35}
                            className="indent-[-999px]"
                          />
                        </div>
                        <a
                          href=""
                          className="w-full h-[288px] cursor-pointer relative flex items-center"
                        >
                          <Image
                            src={item[1]}
                            alt="product item"
                            width={216}
                            height={288}
                            className="indent-[-999px]"
                          />
                        </a>
                      </div>
                    </div>
                    <span className="flex gap-x-4 line-clamp-2 h-[40px]">
                      <a href="">
                        <p className="text-[13px] max-h-full line-clamp-2">
                          {item[0]}
                        </p>
                      </a>
                    </span>
                    <div className="flex flex-wrap items-center">
                      <div className="flex font-bold text-[#F63B3B] mr-2 text-[16px]">
                        199.000 ₫
                      </div>
                      <div className="flex font-normal text-neutral-500 text-[14px]">
                        <p className="line-through">299.000 ₫</p>
                        <div className="flex flex-wrap">
                          <p className="text-neutral pl-2 font-normal text-[14px]">
                            -33%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <span className="ui-divider block w-full h-[1px] bg-[#00000026]"></span>
          <div className="w-full flex justify-center items-center text-blue-500 py-2">
            <div className="w-max cursor-pointer">
              <a href="" className="text-[14px] leading-[20px] font-normal">
                Xem thêm <span className="font-bold">196</span> sản phẩm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
