import { createContext, useContext, useReducer } from "react";

export const PostContext = createContext({
  bookmarks: [],
});

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BOOKMARKS":
      return [...state.bookmarks, action.payload];
  }
}

const PostContextContainer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    bookmarks: [],
  });

  return (
    <PostContext.Provider value={{ state, dispatch }}>
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
