import "./App.css";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./context/UserContext";
import CreatePostPage from "./pages/CreatePostPage";
import DetailPage from "./pages/DetailPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/create"} element={<CreatePostPage />} />
          <Route path={"/post/:id"} element={<DetailPage />} />
          <Route path={"/edit/:id"} element={<EditPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
