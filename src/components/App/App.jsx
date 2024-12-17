import "./App.css";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";
import Review from "../Review/Review";
import PageNotFound from "../PageNotFound/PageNotFound";

import AboutUs from "../AboutUs/AboutUs";
import SiteHistory from "../AboutUs/SiteHistory";
import SiteMission from "../AboutUs/SiteMission";

import AboutMe from "../AboutMe/AboutMe";
import Contact from "../AboutMe/Contact";
import Hobbies from "../AboutMe/Hobbies";
import MyStory from "../AboutMe/MyStory";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch the review data from the server.
    fetch("https://api.nomoreparties.co/emoji-critic-ens")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Pass the parsed response body to the setter function.
        setReviews(data);
      })
      .catch(console.error);
    // An empty dependency array means the hook only runs when
    // component launches.
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="site-history" element={<SiteHistory />} />
        <Route path="site-mission" element={<SiteMission />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route
          path="/reviews/:reviewId"
          element={<Review reviews={reviews} />}
        />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="site-history" element={<SiteHistory />} />
          <Route path="site-mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
