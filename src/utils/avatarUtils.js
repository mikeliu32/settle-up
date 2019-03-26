import MikeAvatar from "../assets/avatar_mike.jpg";
import MarkAvatar from "../assets/avatar_mark.jpg";

const getAvatar = (key = "") =>
  key.toLowerCase() === "mike" ? MikeAvatar : MarkAvatar;

export default getAvatar;
