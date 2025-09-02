import styles from "./Main.module.css";
import Aside from "./Aside";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
import Dashboard from "./Dashboard/Dashboard";
import Users from "./Users/Users";
import Coaches from "./Coaches/Coaches";
import AdsManager from "./AdsManager/AdsManager";
import Questionaire from "./Questionaire/Questionaire";
import Connection from "./Connection/Connection";
import Reflection from "./Reflection/Reflection";
import Setting from "./Settings/Settings";
import Admin from "./Admin/Admin";
import Transactions from "./Transaction/Transaction";
import Profile from "./Profile/Profile";
import Events from "./Events/Events";
import Journal from "./Journal/Journal";
import Shop from "./Shop/Shop";
import App from "./App/App";
import CoachesProfile from "./Coaches/CoachProfile";
import AdsProfile from "./AdsManager/AdsProfile";
import ShopProfile from "./Shop/ShopProfile";
import Chat from "./Chat/Chat";
import EventProfile from "./AdsManager/EventProfile";

export default function Main() {
  return (
    // <Router>
    <main className={styles.main}>
      <header className={styles.header}>Cue Wellness</header>
      <div className={styles.main_section}>
        <Aside />
        <main className={styles.main_main}>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/coaches/coach-profile" element={<CoachesProfile />} />
            <Route path="/ads-manager" element={<AdsManager />} />
            <Route path="/ads-manager/ad-profile" element={<AdsProfile />} />
            <Route
              path="/ads-manager/event-profile"
              element={<EventProfile />}
            />
            <Route path="/questionnaire" element={<Questionaire />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/reflection" element={<Reflection />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/transaction" element={<Transactions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/events" element={<Events />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/shop-profile" element={<ShopProfile />} />
            <Route path="/app" element={<App />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>
      </div>
    </main>
    // </Router>
  );
}
