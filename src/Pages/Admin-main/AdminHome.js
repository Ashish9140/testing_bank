import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "Pages/Admin-main/Main";
import { Sidebar } from "components/admin-sidebar/Sidebar";
function AdminHome() {
  return (
    <div id="user-home-page-wrapper">
      <Router>
        <Sidebar />
        <Main />
      </Router>
    </div>
  );
}

export default AdminHome;
