import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header, Sidebar } from "./components";
import Router from "./router/Router";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  console.log(window.innerWidth);

  const toggleSidebar = () => setShowSidebar((s) => !s);

  return (
    <BrowserRouter>
      <div className="page">
        <Header toggleSidebar={toggleSidebar} />
        <div className="container">
          <div className="main-container">
            <Sidebar />
            <Router />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
