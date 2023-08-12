import React from "react";
import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

import Todo1 from "./components/Todo1";
import Modal1 from "./components/Modal1";
import Backdrop1 from "./components/Backdrop1";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <h1>To Do </h1>
      <Todo1 text="Your Meeting" />
      <Todo1 text="Co-worker Meeting" />
      <Todo1 text="Events" />
      <Todo1 text="Nearby Meetings" />

      {/* Wrap your Route components inside the Routes component */}
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
