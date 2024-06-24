import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddPost from "./pages/AddPost.jsx";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;
