import { Context } from "../hooks/usePost";

const Bookmarks = () => {
  const { state } = Context();
  console.log(state);

  return <section>Hello</section>;
};
export default Bookmarks;
