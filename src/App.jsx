
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import HomeWrapper from "./pages/HomeWrapper";
import PageNotFound from "./lib/PageNotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>


    </Router>
  );
}

export default App;