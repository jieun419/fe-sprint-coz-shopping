import styled from 'styled-components';

export const TabBtn = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  >span{
    position: relative;
    font-size: 1.2rem;
  }

  &.active span{
    color: #412DD4;
    font-weight: bold;
  }
  &.active span::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #412DD4;
    bottom: -2px;
    left: 0;
  }
`

export const Imgbox = styled.img`
  margin-bottom: 5px;
`