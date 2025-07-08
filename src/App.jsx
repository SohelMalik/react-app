import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import ViewPage from "./Pages/ViewPage";
import CategoryViewPage from "./Pages/CategoryViewPage";
import ProfilePage from "./Pages/ProfilePage";
const App=()=>{
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/:ProductId/view" element={<ViewPage />} />
      <Route path="/category" element={<CategoryViewPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<p>OOps ... page not found</p>} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
