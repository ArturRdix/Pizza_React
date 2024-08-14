import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainPizza from "./pages/MainPizza";
import SushiPage from "./pages/SushiPage";
import Layout from "./components/Layout";
import BurgersPage from "./pages/BurgersPage";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements([
            <Route path="/" element={<Layout />}>
              <Route path="" element={<MainPizza />} > </Route>
              <Route path="sushi" element={<SushiPage />}></Route>,
              <Route path="burger" element={<BurgersPage />}></Route>,
              <Route path="chekout" element={<Checkout />}></Route>,
            </Route>,
            
          ])
        )}
      />
    </>
  );
}

export default App;
