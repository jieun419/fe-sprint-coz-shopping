import { AiOutlineMenu, AiOutlineGift, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../img/logo.svg'
import { HeaderCont, Logo, BurgerBtn } from "../styled/headerStyle"

function Header() {
  return (
    <>
      <HeaderCont>
        <Link to="/">
          <Logo><img src={logo} alt="logo"/>Coz Shopping</Logo>
        </Link>
        <BurgerBtn>
          <AiOutlineMenu />
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
        </BurgerBtn>
      </HeaderCont>
    </>
  )
}

export default Header;