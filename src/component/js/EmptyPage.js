import { Link } from "react-router-dom";

export default function EmptyPage(){
  return(
    <div className="emptypage">
      잘못된 주소
      <Link to="/">돌아가기
    </Link></div>
  );
}
