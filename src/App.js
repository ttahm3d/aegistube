import { useState } from "react";
import { Footer, Header, ScrollToTop, Sidebar } from "./components";
import Router from "./router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((s) => !s);

  return (
    <div className="page">
      <ScrollToTop />
      <Header toggleSidebar={toggleSidebar} />
      <div className="container">
        <div className="main-container">
          <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
          <Router />
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
