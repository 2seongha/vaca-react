import { useParams } from "react-router-dom";
import Word from "./Word";
import { useState,useEffect } from "react";

export default function Day() {
  const day = Number(useParams().day);
  const [wordList,setData] = useState([]);
  // useEffect(()=>{
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //   .then(res=>{
  //     return res.json();
  //   })
  //   .then(res => {
  //     if(res.length===0){
  //       res= [{nodata:true}];
  //     }
  //     setData(res);
  //   })
  // },[day])
  useEffect(()=>{
    console.log("서버로 요청보냄");
    fetch(`http://localhost:8080/words/day/${day}`)
    .then(res=>{
      return res.json();
    })
    .then(res => {
      if(res.length===0){
        res= [{nodata:true}];
      }
      setData(res);
    })
  },[day])
  

  if(wordList.length===0){
    return <h2>Loading...</h2>;
  }
  
  if (!wordList[0].nodata) {
    return (
      <>
        <h2>Day {day}</h2>
        <div className="table">
          <table>
            <tbody>
              {wordList.map((word) => {
                return (
                  <Word key={word.id} word={word}/>
                )
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  return <h2>단어를 추가해 주세요</h2>;
}