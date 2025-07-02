import "./App.css";
import Background from "./components/Background";
import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const date = new Date();
  const [showTicket, setShowTicket] = useState(false);

  const [userData, setUserData] = useState({
    userInfo: "",
    githubInfo: "",
    fileInfo: "",
    emailInfo: "",
    date: date.toLocaleDateString(),
  });

  const handleTicket = (event) => {
    event.preventDefault();
    setShowTicket(true);
  };
  return (
    <>
      <Background>
        {<Header userData={userData} showTicket={showTicket} />}
        <Form
          userData={userData}
          setUserData={setUserData}
          showTicket={showTicket}
          generateTicket={handleTicket}
        />
      </Background>
    </>
  );
}

export default App;
