import {
  Bookmark,
  LinkIcon,
  ThumbsDown,
  ThumbsUp,
  MessageCircle,
  Eye,
} from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../hooks/usePost";

const Post = ({ title, body, tags, reactions, views, fullname, id }) => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [likeCount, setLikeCount] = useState(reactions.likes);
  const [dislikeCount, setDislikeCount] = useState(reactions.dislikes);
  const { state, dispatch } = Context();

  function handleLike() {
    setLike(!like);
  }

  function handleDislike() {
    setDislike(!dislike);
  }

  // function handleBookmark() {
  //   setBookmark(!bookmark);
  // }

  const productId = useParams();

  return (
    <li
      className="relative p-4 border border-gray-800 rounded grid-rows-[subgrid] grid row-[span_4] gap-1"
      key={id}>
      <Link
        to={`/posts/${id}`}
        className="absolute inset-0 z-0 w-full h-full"></Link>
      <div className="grid grid-cols-[auto_1fr] gap-3 items-center mb-4">
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <img
            src="/assets/images/twitterLogo.png"
            alt={fullname}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h3>Arogunmasa Abayomi</h3>
          <Link to="">
            <h3 className="text-white/40">@Abdulwaheed</h3>
          </Link>
        </div>
      </div>
      <h4 className="mb-1 text-lg font-semibold">{title}</h4>
      <p className="leading-7 text-truncate text-pretty text-ellipsis text-white/80">
        {body}
      </p>
      <div className="z-10 flex items-center justify-between mt-4 post-links">
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-1 p-1 hover:bg-red-600/30 rounded-xl"
            onClick={handleLike}>
            <ThumbsUp className={like ? "fill-red-600 stroke-red-600" : ""} />
            <span className="text-sm">{likeCount}</span>
          </button>
          <button
            className="flex items-center gap-1 p-1 hover:bg-blue-600/30 rounded-xl"
            onClick={handleDislike}>
            <ThumbsDown
              className={dislike ? "fill-blue-600 stroke-blue-600" : ""}
            />
            <span className="text-sm">{reactions.dislikes}</span>
          </button>
          <button className="flex items-center gap-1">
            <MessageCircle />
            <span className="text-sm">{reactions.dislikes}</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1">
            <Eye />
            <span className="text-sm">{views}</span>
          </button>
          <div className="flex items-center gap-3 p-1 px-3 border rounded-full border-teal-100/20">
            <button
              onClick={() => {
                setBookmark(!bookmark);
                dispatch({
                  type: "ADD_TO_BOOKMARKS",
                  payload: {
                    title,
                    body,
                    tags,
                    reactions,
                    views,
                    fullname,
                    id,
                  },
                });
              }}>
              <Bookmark
                className={bookmark ? "fill-purple-600 stroke-purple-600" : ""}
              />
            </button>
            <button>
              <LinkIcon />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Post;
