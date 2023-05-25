import { AiOutlineMenu, AiOutlineGift, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../img/logo.svg'
import { HeaderCont, Logo, BurgerBtn } from "../styled/headerStyle"
import Nav from "./Nav"

function Header() {
  return (
    <>
      <HeaderCont>
        <Link to="/">
          <Logo><img src={logo} alt="logo"/>Coz Shopping</Logo>
        </Link>
        <BurgerBtn>
          <AiOutlineMenu />
          <Nav />
        </BurgerBtn>
      </HeaderCont>
    </>
  )
}

export default Header;