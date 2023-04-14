import { useRef, useState } from "react";
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
  const days = useFetch('http://localhost:3001/days');

  const korRef = useRef(null);
  const engRef = useRef(null);
  const dayRef = useRef(null);

  const history = useNavigate();
  const [isLoading, setIstLoading] = useState(false);
  const [content, setContent] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    if(!isLoading){
      setIstLoading(true);
      fetch("http://localhost:3001/words/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false
        }),
      }).then(res => {
        history(`/day/${dayRef.current.value}`)
        setIstLoading(false);
        setContent(null);
      })
    }else{
      setContent(<div style={{color: "Red"}}>잠시후 시도해주세요</div>);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="create-word">
        <label htmlFor="eng">Eng</label>
        <input type="text" placeholder="computer" id="eng"  ref={engRef} />
      </div>
      <div className="create-word">
        <label htmlFor="kor">Kor</label>
        <input type="text" placeholder="컴퓨터" id="kor"  ref={korRef} />
      </div>
      <div className="create-word">
        <label htmlFor="day">Day</label>
        <select id="day" ref={dayRef}>
          {days.map((day) => {
            return (
              <option key={day.id} value={day.day}>{day.day}</option>
            )
          })}
        </select>
      </div>
      <button style={{opacity:isLoading?0.3:1}}
      >{isLoading?"저장중":"저장하기"}</button>
      {content}
    </form>
  )
}