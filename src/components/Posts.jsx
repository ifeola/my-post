import Post from "./Post";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
// import posts from "../../public/posts.json";

const Posts = () => {
  const { data, isLoading, error } = useFetch("https://dummyjson.com/posts");

  if (isLoading)
    return (
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(100%,_240px),_1fr))] gap-6 grid-flow-dense">
        {[...Array(9)].map((_, index) => {
          return <Loading />;
        })}
      </div>
    );
  if (error) return <h2>There was an error!</h2>;
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(100%,_240px),_1fr))] gap-6 grid-flow-dense auto-rows-[auto_auto_auto_auto]">
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
