import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard";
import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeDashboard from "./Home";
import Users from "./User";
import Project from "./Projects";
import Developer from "./Developer";

function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          <Routes>
             <Route path="/" element={<HomeDashboard />} />

             <Route path="/Users" element={<Users />}>
              <Route index element={<TableDashboard name="Add New User" Title="Users"/>} />
              <Route path="add" element={<FormDashboard />} />
            </Route>

             <Route path="/Projects" element={<Project />}>
              <Route index element={<TableDashboard name="Add New Project"  Title="Projects" />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>


       <Route path="/Developer" element={<Developer />}>
              <Route index element={<TableDashboard name="Add Developer"  Title="Developer" />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>



          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;