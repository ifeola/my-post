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

const Post = ({ title, body, tags, reactions, views, fullname, id }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [likeCount, setLikeCount] = useState(reactions.likes);
  const [dislikeCount, setDislikeCount] = useState(reactions.dislikes);

  function handleLike() {
    setLike((prev) => {
      return !prev;
    });
  }

  function handleDislike() {
    setDislike(!dislike);
  }

  const productId = useParams();
  console.log(productId);

  return (
    <li className="border border-gray-800 p-4 rounded-lg">
      <Link to={`/posts/${id}`}>
        <div className="grid-cols-[subgrid]">
          <div className="grid grid-cols-[auto_1fr] gap-3 items-center mb-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
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
          <h4 className="font-semibold text-lg mb-2">{title}</h4>
          <p className="text-truncate text-pretty leading-7 text-ellipsis text-white/80">
            {body}
          </p>
          <div className="post-links flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1" onClick={handleLike}>
                <ThumbsUp
                  className={like ? "fill-red-600 stroke-red-600" : ""}
                />
                <span className="text-sm">{likeCount}</span>
              </button>
              <button
                className="flex items-center gap-1"
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
              <div className="flex items-center gap-3 border border-teal-100/20 px-3 p-1 rounded-full">
                <button>
                  <Bookmark />
                </button>
                <button>
                  <LinkIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default Post;
