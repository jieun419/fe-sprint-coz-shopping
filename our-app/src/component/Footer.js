import { FooterCont, FooterMenu } from "../styled/footerStyle"

function Footer() {
  return (
    <FooterCont>
      <FooterMenu>
        <li><a href="/" target="" title="바로가기">개인정보 처리방침</a></li>
        <li><a href="/" target="" title="바로가기">이용 약관</a></li>
      </FooterMenu>
      <p>All rights reserved @ Codestates</p>
    </FooterCont>
  )
}

export default Footer