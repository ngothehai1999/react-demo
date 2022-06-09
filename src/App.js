import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
// import Contact from "./components/Contact.js";
// import Product from "./components/Product.js";
const App = () => {
  return (
    <div className="">
      <nav>
        
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/login" replace/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
// const App = () => {
//   const [showModeratorBoard, setShowModeratorBoard] = useState(false);
//   const [showAdminBoard, setShowAdminBoard] = useState(false);
//   const { user: currentUser } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     history.listen((location) => {
//       dispatch(clearMessage()); // clear message when changing location
//     });
//   }, [dispatch]);
//   useEffect(() => {
//     if (currentUser) {
//       setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
//       setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
//     }
//   }, [currentUser]);
//   const logOut = () => {
//     dispatch(logout());
//   };
//   return (
//     <Router history={history}>
//       <div>
//         <nav className="navbar navbar-expand navbar-dark bg-dark">
//           <Link to={"/"} className="navbar-brand">
//             bezKoder
//           </Link>
//           <div className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to={"/home"} className="nav-link">
//                 Home
//               </Link>
//             </li>
//             {showModeratorBoard && (
//               <li className="nav-item">
//                 <Link to={"/mod"} className="nav-link">
//                   Moderator Board
//                 </Link>
//               </li>
//             )}
//             {showAdminBoard && (
//               <li className="nav-item">
//                 <Link to={"/admin"} className="nav-link">
//                   Admin Board
//                 </Link>
//               </li>
//             )}
//             {currentUser && (
//               <li className="nav-item">
//                 <Link to={"/user"} className="nav-link">
//                   User
//                 </Link>
//               </li>
//             )}
//           </div>
//           {currentUser ? (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/profile"} className="nav-link">
//                   {currentUser.username}
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <a href="/login" className="nav-link" onClick={logOut}>
//                   LogOut
//                 </a>
//               </li>
//             </div>
//           ) : (
//             <div className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to={"/login"} className="nav-link">
//                   Login
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to={"/register"} className="nav-link">
//                   Sign Up
//                 </Link>
//               </li>
//             </div>
//           )}
//         </nav>
//         <div className="container mt-3">
//           <Switch>
//             <Route exact path={["/", "/home"]} component={Home} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/register" component={Register} />
//             <Route exact path="/profile" component={Profile} />
//             <Route path="/user" component={BoardUser} />
//             <Route path="/mod" component={BoardModerator} />
//             <Route path="/admin" component={BoardAdmin} />
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// };
// export default App;