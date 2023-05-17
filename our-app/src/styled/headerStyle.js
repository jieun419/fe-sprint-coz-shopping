import styled from "styled-components"

export const HeaderCont = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 75px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 1;
`;

export const Logo = styled.h1`
  display: flex;
  align-items: center;
  color: #000;
  gap: 10px;
`

export const BurgerBtn = styled.button`
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
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
    display: none;
    cursor: auto;
    border-radius: 20px;

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
    }

    > ul {
      position: relative;
      border-radius: 20px;

      > li {
        display: flex;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
        font-size: 1rem;
        overflow: hidden;
      }

      > li:hover{
        background-color: #f8f8f8;
      }

      > li:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px 25px;
      }

      > li:first-child:hover{ background-color: transparent }

      > li:last-child{
        border-bottom: 0;
      }

      > li > a {
        display: flex;
        align-items: center;
        color: #000;
        padding: 15px 25px;
      }

      > li > a > .icon {
        font-size: 1.4rem;
        margin-right: 5px;
      }
    }
  }
`