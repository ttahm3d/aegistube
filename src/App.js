import { useState } from "react";
import { Footer, Header, Sidebar } from "./components";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((s) => !s);

  return (
    <div className="page">
      <Header toggleSidebar={toggleSidebar} />
      <div className="container">
        <div className="main-container">
          <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
          <Router />
        </div>
      </div>
      <Footer />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
