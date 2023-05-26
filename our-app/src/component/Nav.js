import { AiOutlineGift, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <span>OOO님, 안녕하세요!</span>
        </li>
        <li>
          <Link to="/Products/list"><AiOutlineGift className="icon" />상품리스트 페이지</Link>
        </li>
        <li>
          <Link to="/Bookmark"><AiOutlineStar className="icon" />북마크 페이지</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;