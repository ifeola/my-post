import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import {
  Bookmark,
  Eye,
  LinkIcon,
  MessageCircle,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Comments from "../components/Comments";

const PostDetails = () => {
  const { postId } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/posts/${postId}`
  );

  if (isLoading)
    return (
      <div className="grid grid-cols-[1fr_auto] divide-x divide-gray-700 animate-pulse">
        <div className="pt-16 pr-6">
          <div className="flex items-center gap-1 mb-6 space-x-1 ">
            {[...Array(4)].map((_, index) => {
              return (
                <div
                  key={index}
                  className="w-24 h-6 px-6 py-2 text-sm capitalize bg-gray-700 rounded-md"
                />
              );
            })}
          </div>
          <div className="mb-6">
            <div className="grid grid-cols-[auto_1fr] gap-3 items-center mb-4">
              <div className="flex items-center my-4">
                <svg
                  className="w-10 h-10 text-gray-200 me-3 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-3"></div>
                  <div className="h-2 bg-gray-200 rounded-full 16 dark:bg-gray-700"></div>
                </div>
              </div>
            </div>
            <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-center w-full overflow-hidden bg-gray-300 rounded h-80 dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
              <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
              <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
              <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
              <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
            </div>
          </div>
          <div className="z-10 mt-4 space-y-4 text-sm text-gray-400 divide-y divide-gray-700">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-10 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="h-2 bg-gray-200 rounded-full 16 dark:bg-gray-700"></div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-10 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="h-2 bg-gray-200 rounded-full 16 dark:bg-gray-700"></div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-10 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="w-10 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="h-2 bg-gray-200 rounded-full 16 dark:bg-gray-700"></div>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b post-links border-b-gray-700">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 p-1 hover:bg-red-600/30 rounded-xl">
                  <div className="w-10 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="h-2 bg-gray-200 rounded-full 16 dark:bg-gray-700"></div>
                </button>
                <button className="flex items-center gap-1 p-1 hover:bg-blue-600/30 rounded-xl">
                  <div className="w-10 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="h-2 bg-gray-200 rounded-full 16 dark:bg-gray-700"></div>
                </button>
                <button className="flex items-center gap-1">
                  <div className="w-10 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="h-2 bg-gray-200 rounded-full 16 dark:bg-gray-700"></div>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 p-1 px-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="h-2 bg-gray-200 rounded-full 16 dark:bg-gray-700" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="h-2 bg-gray-200 rounded-full 16 dark:bg-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-80" />
        </div>
      </div>
    );

  if (error) return <h2>There was an error!</h2>;

  return (
    <article className="grid grid-cols-[1fr_auto] divide-x divide-gray-700">
      <div className="pt-16 pr-6">
        <div className="mb-6 space-x-1">
          {data.tags.map((tag, index) => {
            return (
              <button
                key={index}
                className="px-6 py-2 text-sm capitalize border border-gray-700 rounded-md">
                {tag}
              </button>
            );
          })}
        </div>
        <header className="mb-6">
          <div className="grid grid-cols-[auto_1fr] gap-3 items-center mb-4">
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <img
                src="/assets/images/twitterLogo.png"
                alt="avatar"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3>Arogunmasa Abayomi</h3>
              <Link to="" className="flex items-center gap-2 text-white/40">
                <h3>@Abdulwaheed</h3>
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                <span>Nov 23</span>
              </Link>
            </div>
          </div>
          <h2 className="text-4xl font-bold">{data.title}</h2>
        </header>
        <div className="space-y-6">
          <div className="w-full overflow-hidden h-80">
            <img
              src="/public/assets/images/twitterLogo.png"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-lg leading-8 text-white">{data.body}</p>
        </div>
        <div className="z-10 mt-4 text-sm text-gray-400">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-sm">{data.reactions.likes}</span>
                <span>Likes</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm">{data.comments}</span>
                <span>Comments</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Eye />
              <span className="text-sm">{data.views}</span>
              <span>Views</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-2 border-y border-y-gray-700">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 p-1 hover:bg-red-600/30 rounded-xl">
                <ThumbsUp />
                <span className="text-sm">{data.reactions.likes}</span>
              </button>
              <button className="flex items-center gap-1 p-1 hover:bg-blue-600/30 rounded-xl">
                <ThumbsDown />
                <span className="text-sm">{data.reactions.dislikes}</span>
              </button>
              <button className="flex items-center gap-1">
                <MessageCircle />
                <span className="text-sm">Comment</span>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 py-1">
                <button className="flex items-center gap-2">
                  <Bookmark />
                  <span>Bookmark</span>
                </button>
                <button className="flex items-center gap-2">
                  <LinkIcon />
                  <span>Copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Comments />
        </div>
      </div>
      <aside>
        <div className="w-80" />
      </aside>
    </article>
  );
};
export default PostDetails;
