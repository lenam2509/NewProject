import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const index: NextPage = () => {
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
      </div>
    </div>
  );
};

export default index;
