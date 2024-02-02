import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Header from "./components/Header"
import FooterCom from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
import CreatePost from "./pages/CreatePost"
import AdminPrivateRoute from "./components/AdminPrivateRoute"
import UpdatePost from "./pages/UpdatePost"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<AdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <FooterCom />
    </>
  )
}

export default App
