import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Bookmarks from "./pages/Bookmarks";
import History from "./pages/History";
import Leaderboard from "./pages/Leaderboard";
import Tags from "./pages/Tags";
import Sources from "./pages/Sources";
import Discussions from "./pages/Discussions";
import Link from "./pages/Link";
import Explore from "./pages/Explore";
import PostDetails from "./pages/PostDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Explore />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="history" element={<History />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="tags" element={<Tags />} />
            <Route path="sources" element={<Sources />} />
            <Route path="discussions" element={<Discussions />} />
            <Route path="link" element={<Link />} />
            <Route path="posts/:postId" element={<PostDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
