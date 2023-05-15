import { AiOutlineMenu, AiOutlineGift, AiOutlineStar } from "react-icons/ai";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "../pages/Products";
import Bookmark from "../pages/Bookmark";
import logo from '../img/logo.svg'
import styled from "styled-components"

const HeaderCont = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 75px;
  box-shadow: 0 8px 8px rgba(0, 0, 0,0.1);
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  color: #000;
  gap: 10px;
`

const BurgerBtn = styled.button`
  font-size: 2.1rem;
  display: flex;
  align-items: center;

  &:hover nav{
    display: block;
  }

  > nav{
    position: absolute;
    background-color: #fff;
    top: 75px;
    right: 38px;
    border-radius: 20px;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
    display: none;
    cursor: auto;

    &::before{
      content: '';
      border-bottom: 20px solid #fff;
      border-top: 10px solid transparent;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      position: absolute;
      top: -28px;
      right: 50px;
    }

    &::after{
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      /* box-shadow: 0 0 8px rgba(0, 0, 0,0.1); */
    }

    > ul {
      position: relative;

      > li {
        display: flex;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
        padding: 15px 25px;
        font-size: 1rem;
      }

      > li:hover{
        background-color: #f8f8f8;
      }

      > li:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
      }

      > li:first-child:hover{ background-color: transparent }

      > li:last-child{
        border-bottom: 0;
      }

      > li > a {
        display: flex;
        align-items: center;
        color: #000;
      }

      > li > a > .icon {
        font-size: 1.4rem;
        margin-right: 5px;
      }
    }
  }
`

function Header() {
  return (
    <BrowserRouter>
      <HeaderCont>
        <Link to="/">
          <Logo><img src={logo} alt="logo"></img>Coz Shopping</Logo>
        </Link>
        <BurgerBtn>
          <AiOutlineMenu />
          <nav>
            <ul>
              <li>
                <span>OOO님, 안녕하세요!</span>
              </li>
              <li>
                <Link to="/pages/Products"><AiOutlineGift className="icon" />상품리스트 페이지</Link>
              </li>
              <li>
                <Link to="/pages/Bookmark"><AiOutlineStar className="icon" />북마크 페이지</Link>
              </li>
            </ul>
          </nav>
        </BurgerBtn>
      </HeaderCont>
      <Routes>
        {/* 경로는 path로 컴포넌트는 element로 연결해 줍니다. */}
        <Route path="/pages/Products" element={<Products />} />
        <Route path="/pages/Bookmark" element={<Bookmark />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Header;