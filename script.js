const bookmarksImages = ["img/bookmarkON.svg", "img/bookmark_OFF.svg"];

const bookmark = document.getElementById("bookmark1");

let toggle = false;

bookmark.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    bookmark.src = bookmarksImages[1];
  } else {
    bookmark.src = bookmarksImages[0];
  }
});
