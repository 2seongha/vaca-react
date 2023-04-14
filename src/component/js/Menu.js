import {Link} from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/create_day" className="link">Day 추가</Link>
      <Link to="/create_word" className="link">단어추가</Link>
    </div>
  );
}