import Spinner from "../Utils/Spinner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      <div style={{ minHeight: "75vh" }}>
        {navigation.state === "loading" ? <Spinner /> : <Outlet />}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
}
