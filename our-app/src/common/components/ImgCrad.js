import { Section } from "../../styled/cardItemStyle";
import * as pruductData from "../../api/pruductData"


export const imgSrcNames = [
  'AiOutlineMenu',
  'AiOutlineGift',
  'AiOutlineStar',
  'AiFillStar',
];

export function ImgCard({}) {
  return (
    <Section>
      <div className="img-box">
        <img src='https://images.unsplash.com/photo-1617363020293-62faac14783d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' />
      </div>
    </Section>
  )
}

export default ImgCard;