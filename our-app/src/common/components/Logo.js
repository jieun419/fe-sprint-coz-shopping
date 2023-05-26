// import { Link } from "react-router-dom";
import logoimg from '../../img/logo.svg'
import { Logo } from "../../styled/headerStyle"

export function LogoComponent() {
  return (
      <Logo><img src={logoimg} alt="logo" />Coz Shopping</Logo>

  )
}

export default LogoComponent;