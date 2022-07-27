// import SignIn from "./signIn/SigIn";
// import SignUp from "../comp/signUp/SignUp";
import ApplicationRoutes from "../routes/Routes";
import Dashbord from "./dashboard/Dashbord";
import CurrentUser from "../redux/user";


function App() {
  return (
    <>
       {/* <SignUp/> */}
      <ApplicationRoutes />
      <CurrentUser />
      {/* <Dashbord/>   */}
       {/* <SignIn/> */}
    </>
  );
}

export default App;
