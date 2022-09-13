import About from "./About";
import Location from "./Location";
import Reviews from "./Reviews";
import Secrets from "./Secrets";
// import Header from "./Header";
import Footer from "./Footer";
import { React, useState, useEffect } from "react";
import Quiz from "./Quiz";
import ContactHook from "./ContactHook";
import BerriesHook from "./BerriesHook";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import ThankYouPage from "./ThankYouPage";
import JustBerry from "./JustBerry";

const sections = [
  {
    title: "About",
    url: "about",
  },
  {
    title: "Location",
    url: "location",
  },
  {
    title: "Reviews",
    url: "reviews",
  },
  {
    title: "Secrets",
    url: "secrets",
  },
  {
    title: "Would you like to know your fate?",
    url: "quiz",
  },
  {
    title: "🍓Berries🫐",
    url: "berries",
  },
  {
    title: "Contact",
    url: "contact",
  },
];
function LoadingPage() {
  return <h1>Loading... 🔮</h1>;
}

function MainPage() {
  return (
    <div className="App">
      {/* <nav>
      <Link to="/">Home</Link>|{" "}
        <Link to="/about">About</Link>|{" "}
        <Link to="/location">Location</Link>|{" "}
        <Link to="/reviews">Reviews</Link>|{" "}
        <Link to="/secrets">Secrets</Link>|{" "}
        <Link to="/quiz">Quiz</Link>|{" "}
        <Link to="/berries">Berries</Link>|{" "}
        <Link to="/contact">Contact</Link>
      </nav> */}

      <Container maxWidth="lg">
        <NavBar
          title="Fateen's Fortune-Telling Chamber"
          sections={sections}
        ></NavBar>
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="location" element={<Location />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="secrets" element={<Secrets />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="berries" element={<BerriesHook />} />
        <Route path="contact" element={<ContactHook />} />
        <Route path="thanks" element={<ThankYouPage />} />
        <Route path="berries/:name" element={<JustBerry />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer
        title={"Visit again."}
        description={
          "Whatever your problem may be, my fortune-telling shall lead to the solution."
        }
      />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect Hook is like componentDidMount, componentDidUpdate
  // we use it so that when page is updated we can load for 2 secs
  useEffect(() => {
    if (isLoading) {
      // setTimeout for about 2 seconds then let isLoading to false
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
  });

  return isLoading ? <LoadingPage /> : <MainPage />;
}

export default App;
