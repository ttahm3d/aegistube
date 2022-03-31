import { BrowserRouter } from "react-router-dom";
import { Footer, Header, Sidebar } from "./components";
import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
