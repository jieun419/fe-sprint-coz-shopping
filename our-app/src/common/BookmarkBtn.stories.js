import BookmarkBtn from './BookmarkBtn';
export default {
  title: 'Atoms/BookmarkBtn', // 스토리 분류 및 컴포넌트 이름
  component: BookmarkBtn, // 테스트할 컴포넌트(Button)
}

export const Primary = {
  args: {
    primary: true,
  },
};

export const Secondary = {
  args: {
    primary: false,
  },
};