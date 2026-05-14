import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Layout from "./Layout";
import Home from "./pages/Home";
import NoteDetail from "./pages/NoteDetail";
import { useSetAtom } from "jotai";
import { authRepository } from "./modules/auth/auth.repository";
import { useEffect, useState } from "react";
import { currentUserAtom } from "./modules/auth/current-user.state";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const setCurrentUser = useSetAtom(currentUserAtom);

  useEffect(()=> {
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = async () => {
    try{
      const user = await authRepository.getCurrentUser();
      setCurrentUser(user);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <BrowserRouter>
    <div className="app-container">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/note/:id" element={<NoteDetail />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
}
