// import * as Icons from 'react-feather';
import * as Icons from "react-icons/ai";
import { styled } from 'styled-components';


// 디자인 토큰에 지정된 값을 사용해 스타일을 지정합니다.
export const iconNames = [
  'AiOutlineMenu',
  'AiOutlineGift',
  'AiOutlineStar',
  'AiFillStar',
];

export const Icon = ({ icon, color, size, ...rest }) => {
  // FeatherIcon 컴포넌트를 동적으로 생성하고 스타일링합니다.
  const FeatherIcon = styled(Icons[icon])`
    color: ${(props) => props.color || "#000"};
    font-size: ${(props) => props.size || "2rem" };
  `;
  return <FeatherIcon size={size} color={color} {...rest} />;
};
