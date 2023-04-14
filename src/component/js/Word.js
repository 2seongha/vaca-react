import { useState } from "react";

export default function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function del() {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      fetch("http://localhost:3001/words/" + word.id, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({...word,delete: true });
          setTimeout(() => {
            setWord({ id: 0});
          }, 900);
        }
      });
    }
  }
  if (word.id === 0) {
    return null;
  }
  return (
      <tr className={`${isDone ? 'off' : ''} ${word.delete ? "delete" : ""}`}>
        <td>
          <div>
            <input className="checkbox" type="checkbox" checked={isDone} onChange={() => {
              fetch("http://localhost:3001/words/" + word.id, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  isDone: !isDone,
                }),
              }).then((res) => {
                if (res.ok) {
                  setIsDone(!isDone);
                }
              });
            }}></input>
          </div>
        </td>
        <td>
          <div>
            {word.eng}
          </div>
        </td>
        <td className="word-kor">
          <div>
            {isShow && word.kor}
          </div>
        </td>
        <td>
          <div>
            <button onClick={() => {
              isShow === true ? setIsShow(false) : setIsShow(true);
            }}>{isShow === true ? "뜻 숨기기" : `뜻  보기`}</button>
          </div>
        </td>
        <td>
          <div>
            <button className="delete-button" onClick={del}>삭제</button>
          </div>
        </td>
      </tr>
  );
}