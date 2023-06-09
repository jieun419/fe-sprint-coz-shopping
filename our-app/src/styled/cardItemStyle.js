import styled from 'styled-components';

export const Section = styled.section`
  width: 24%;
  margin-bottom: 12px;
  >.img-box {
    position: relative;
    height: 0;
    padding-bottom: 90%;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
  }
  >.img-box img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const BookMarkContain = styled.div`
  position: absolute;
  right: 5px;
  bottom: 10px;
`

export const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 5px;

  >.left-area, .right-area{
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }
  >.right-area{
    align-items: flex-end;

    >strong.product{
    color: #452CDD
    }
  }
`
