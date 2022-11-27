import Image from "next/image";
import aothun1 from "../assets/ao_thun1.jpg";
import { BsTrash } from "react-icons/bs";
import Link from "next/link";
import { useState, useEffect } from "react";
 
const cart = ({ cart, setCart, handleChange }) => {
 
 const [price, setPrice] = useState(0)
 
 const handleRemove = (id) => {
   const arr = cart.filter((item) => item.id !== id)
   setCart(arr)
   handlePrice()
 }
 
 const handlePrice = () => {
   let ans = 0
   cart.map((item) => (ans += item.amount * item.price))
   setPrice(ans)
 }
 
 
 useEffect(() => {
   handlePrice()
 })
 
 return (
   <div className="w-full h-auto bg-[#fff] mt-[122px]">
     <div className="bg-[#f0f2f5] w-[50%] h-full m-auto">
       <h2 className="pt-2 pl-[5%] text-[25px]">Giỏ hàng</h2>
       {/* Row */}
       {cart.map((item) => (
         <div className="bg-[#fff] w-[90%] h-[100px] flex ml-[5%] mt-3 rounded-sm">
         <div className="w-[80px] h-[80px] ml-[5%] my-[10px]">
           <a href="#">
             <Image src={aothun1} alt="" width="80" height="80" />
           </a>
         </div>
         <div className="w-[370px] h-[80px] my-[10px]">
           <div className="w-full h-[50%]">
             <Link href="#" className="text-[12px] ml-[10px] hover:underline">
               KAPPA ÁO THUN TAY NGẮN MEN 341E69W
             </Link>
           </div>
           <div className="w-full h-[50%] flex flex-col justify-center">
             <p className="text-[12px] ml-[10px]">199.000 ₫</p>
           </div>
         </div>
         <div className="w-[180px] h-[80px] my-[10px] flex flex-col justify-center">
           <div className="ml-[25%] flex flex-row">
             <button
               className="w-6 border-gray-400 border-[1px] rounded-sm h-6 cursor-pointer"
               value="-"
             >
               -
             </button>
             <input
               type="tel"
               value={2}
               readOnly
               className="w-[50px] h-6 text-center bg-transparent border-gray-400 border-[1px] outline-none"
             />
             <button
               className="w-6 border-gray-400 border-[1px] rounded-sm h-6 cursor-pointer"
               value="+"
             >
               +
             </button>
           </div>
         </div>
         <div className="flex flex-col justify-center h-[80px] my-[10px] w-[17%]">
           <BsTrash className="ml-[50%] cursor-pointer" />
         </div>
       </div>
       ))}
       {/* !Row */}
       <div className="mr-[5%] my-6 text-right">Tổng tiền: 199.000 ₫</div>
       <button className="mb-[15px] ml-[76%] bg-yellow-300 w-auto h-auto px-10 py-2 rounded-sm hover:bg-yellow-500">
         Thanh toán (1)
       </button>
     </div>
   </div>
 );
};
 
export default cart;
 

