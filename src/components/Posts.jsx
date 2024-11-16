import Post from "./Post";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
// import posts from "../../public/posts.json";

const Posts = () => {
  const { data, isLoading, error } = useFetch("https://dummyjson.com/posts");

  if (isLoading)
    return (
      <div className="w-full mt-48 flex items-center justify-center">
        <Loading />
      </div>
    );
  if (error) return <h2>There was an error!</h2>;
  return (
    <ul className="grid grid-cols-3 gap-6">
      {data.posts.map((post) => {
        return (
          <Post
            id={post.id}
            title={post.title}
            body={post.body}
            tags={post.tags}
            reactions={post.reactions}
            key={post.id}
            views={post.views}
            image={post.image}
            username={post.username}
            fullname={post.fullname}
          />
        );
      })}
    </ul>
  );
};
export default Posts;
