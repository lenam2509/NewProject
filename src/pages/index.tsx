import { NextPage } from "next";
import React, { useEffect, useState } from "react";

const index: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState<string>("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [arr, setArr] = useState<string[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   console.log("name:", name);
  // }, [name]);

  function changeName(name: string) {
    setName(name);
  }
  function addName() {
    setArr([...arr, name]);
    setName("");
  }

  function removeName(index: number) {
    arr.splice(index, 1);
    setArr([...arr]);
  }

  function editArr(index: number) {
    arr[index] = name;
    setArr([...arr]);
    console.log(arr);
    
  }


  return (
    <>
      <div className="center">
        <h1>Name:{name}</h1>
        <table>
          <tbody>
            {arr.map((item, index) => (
              <tr key={index}>
                <td>
                  {item}
                  <button onClick={(e)=>removeName(index)}>Xóa</button>
                  <button onClick={(e)=>editArr(index)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input type="text" value={name} onChange={(e) => changeName(e.target.value)} />
        <button onClick={addName}>push</button>
      </div>
    </>
  );
};

export default index;
