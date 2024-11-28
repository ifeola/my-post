import Post from "../components/Post";
import { Context } from "../hooks/usePost";

const Bookmarks = () => {
  const { state } = Context();

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(min(100%,_240px),_1fr))] gap-6 grid-flow-dense auto-rows-[auto_auto_auto_auto]">
      {state.bookmarks.map((post) => {
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
export default Bookmarks;
