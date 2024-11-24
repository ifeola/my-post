import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Comments = () => {
  const { postId } = useParams();

  const { data, isLoading, error } = useFetch(`https://dummyjson.com/comments`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h4 className="mb-3 text-lg font-medium">Comments</h4>

      <ul className="divide-y divide-gray-800">
        {data.comments.map((comment) => {
          return (
            <li key={comment.id} className="py-6 space-y-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 overflow-hidden border border-gray-900 rounded-full">
                  <img
                    src="/public/assets/images/LOGO33.png"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <Link className="text-sm">
                  <h5>{comment.user.fullName}</h5>
                  <span className="text-gray-400 capitalize ">
                    @{comment.user.username}
                  </span>
                </Link>
              </div>
              <p className="pl-16">{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Comments;
