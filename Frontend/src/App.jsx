import StartingPage from "./components/StartingPage";
import MainRoutes from "./routes/MainRoutes";
import Login from "./pages/Login";
import Live from "./components/Live";

const App = () => {
  return (
    <div className="h-screen ">
      {/* <StartingPage /> */}
      {/* <MainRoutes /> */}
      {/* <Login /> */}
      <Live />
    </div>
  );
};

export default App;
