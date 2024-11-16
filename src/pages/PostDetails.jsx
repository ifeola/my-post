import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

const PostDetails = () => {
  const { postId } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://dummyjson.com/posts/${postId}`
  );

  if (isLoading)
    return (
      <div className="w-full mt-48 flex items-center justify-center">
        <Loading />
      </div>
    );
  if (error) return <h2>There was an error!</h2>;

  return <div>PostDetails</div>;
};
export default PostDetails;
