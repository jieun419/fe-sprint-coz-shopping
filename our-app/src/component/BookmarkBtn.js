import { AiFillStar } from "react-icons/ai";
import { BookmarkBtnComponent } from "../styled/bookmarkBtnStyle"

function BookMarkBtn({ handleBookmarkToggle, isBookMark }) {
  return (
    <BookmarkBtnComponent  onClick={handleBookmarkToggle}>
      <AiFillStar className="AiFillStar" color={!isBookMark ? "dfdfdf" : "FFD361"} />
    </BookmarkBtnComponent>
  );
}

export default BookMarkBtn;
