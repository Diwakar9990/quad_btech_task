// src/App.jsx
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import AuthComponent from "../src/components/AuthComponent";
import WeatherComponent from "../src/components/WeatherComponent";

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div>
      <Navbar />
      <AuthComponent />
      {isAuthenticated ? (
        <div className="">
          <div>
            <TaskInput />
            <TaskList />
          </div>
          <WeatherComponent />
        </div>
      ) : (
        <p className="m-6 text-xl font-semibold text-[#489c4b]">Please log in to access your tasks.</p>
      )}
    </div>
  );
};

export default App;
