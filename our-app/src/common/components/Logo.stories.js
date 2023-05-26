import LogoComponent from './Logo'

export default {
  title: 'Atoms/Logo', // 스토리 분류 및 컴포넌트 이름
  component: LogoComponent, // 테스트할 컴포넌트(Button)
}

export const Primary = () => <LogoComponent />;
Primary.arg = {
  
}