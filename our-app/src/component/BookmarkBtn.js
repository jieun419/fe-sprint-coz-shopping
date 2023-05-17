import { AiFillStar } from "react-icons/ai";
import { BookmarkBtn } from "../styled/bookmarkBtnStyle"

function BookMarkBtn({ handleBookmarkToggle, isBookMark }) {
  return (
    <BookmarkBtn onClick={handleBookmarkToggle}>
      {!isBookMark
        ? <AiFillStar color="#dfdfdf" />
        : <AiFillStar color="#FFD361" />
      }
    </BookmarkBtn>
  );
}

export default BookMarkBtn;
