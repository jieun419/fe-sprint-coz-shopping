import { Icon } from './Icon';
import { iconNames } from './Icon';

export default {
  title: 'Atoms/Icons', // 스토리 분류 및 컴포넌트 이름
  component: Icon, // 테스트할 컴포넌트(Icon)
  parameters: {
    backgrounds: { default: { value: 'light' } }, // 스토리의 배경색 설정
    controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
  },
};

// 사용하는 아이콘을 볼 수 있는 All 스토리 정의
export const All = () => (
  <div
    style={{ display: 'grid', gridTemplateColumns: '3rem 3rem 3rem 3rem', gridAutoRows: '3rem' }}
  >
    {iconNames.map((icon) => (
      <Icon icon={icon} key={icon} />
    ))}
  </div>
);

// Item 스토리 정의
// export const Item = (args) => <Icon {...args} />; 
// Item.argTypes = {
//   icon: {
//     options: iconNames, 
//     control: { type: 'select' }, 
//   },
//   size: {
//     options: [16, 24, 48],
//     control: { type: 'radio' }, 
//   },
// };
// Item.args = {
//   icon: 'Plus', 
//   size: 24, 
// };
