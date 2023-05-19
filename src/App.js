import { useEffect, useState } from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import { FeedbackProvider } from "./Components/FeedbackProvider";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setIsLoading(false), []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <Header />
          <FeedbackProvider>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <FeedbackForm />
                      <FeedbackStats />
                      <FeedbackList />
                    </>
                  }
                />
                <Route path="/about" element={<About />}></Route>
              </Routes>
            </Router>
          </FeedbackProvider>
        </div>
      )}
    </>
  );
}

export default App;
