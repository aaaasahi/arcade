import "./App.css";

import { Login } from "./components/auth/Login";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Signup } from "./components/auth/Signup";

const currentUser = () => {
  const user = localStorage.getItem("user");
  console.log(user);
  return user;
};

function App() {
  return (
    <div className="App">
      <Header />
      {currentUser() ? (
        <Home />
      ) : (
        <>
          <Signup />
        </>
      )}
    </div>
  );
}

export default App;
