import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer, Header, Sidebar } from "./components";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/auth";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((s) => !s);

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="page">
          <Header toggleSidebar={toggleSidebar} />
          <div className="container">
            <div className="main-container">
              <Sidebar
                showSidebar={showSidebar}
                toggleSidebar={toggleSidebar}
              />
              <Router />
            </div>
          </div>
          <Footer />
          <ToastContainer theme="dark" />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
