import { createContext, useContext } from "react";

export const PostContext = createContext({
  favourites: [],
});

const PostContextContainer = ({ children }) => {
  return (
    <PostContext.Provider value={{ name: "yomi" }}>
      {children}
    </PostContext.Provider>
  );
};

export const Context = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error("You ought to use the context directly!");
  }

  return context;
};

export default PostContextContainer;
