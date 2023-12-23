import Spinner from "../Utils/Spinner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";


export default function Layout() {
  const navigation = useNavigation();

  return (
    <div>
      <Header />
      <div style={{ minHeight: "75vh" }}>
        {navigation.state === "loading" ? <Spinner /> : <Outlet />}
      </div>

      <Footer />
    </div>
  );
}
