import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import CreatePost from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import Projects from "./pages/Projects";
import Search from "./pages/Search";
import UpdatePost from "./pages/UpdatePost";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route index element={<Home />} />
        <Route path="/post-page" element={<PostPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/search" element={<Search />} />
        <Route path="/update-post" element={<UpdatePost />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
