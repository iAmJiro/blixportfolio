
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route
            path="*"
            element={
              <div className="page-container flex min-h-[60vh] flex-col items-center justify-center text-center">
                <p className="eyebrow mb-5">Error 404</p>

                <h1 className="font-display text-6xl text-cream">
                  Page not found.
                </h1>

                <p className="body-copy mt-6">
                  The page you're looking for doesn't exist.
                </p>

                <a
                  href="/"
                  className="mt-8 border border-gold px-7 py-3 text-xs uppercase tracking-widest text-gold hover:bg-gold hover:text-background"
                >
                  Return Home
                </a>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
