import { Navigate, useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const history = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://reactpractice101inyoface-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        history("/");

        console.log("Meetup added successfully:", data);
        // Do something with the response data, if needed
      })
      .catch((error) => {
        console.error("Error adding meetup:", error);
        // Handle the error, if needed
      });
  }

  return (
    <section>
      <h1>New Meetups Page</h1>
      <div>
        <h1>Add New Meetups</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </div>
    </section>
  );
};

export default NewMeetupPage;
