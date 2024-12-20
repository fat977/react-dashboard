import { HashRouter , Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardIndex from "./pages/Dashboard/Index/DashboardIndex";



const Buttons = React.lazy(()=> import("./pages/Elements/Buttons/Button"));
const Modals = React.lazy(()=> import("./pages/Elements/Modals&Alerts/Modals&Alerts"));
const NavTabs = React.lazy(()=> import("./pages/Elements/Navbar&Tabs"));
const GeneralElements = React.lazy(()=> import("./pages/Elements/General/General"));

const General = React.lazy(()=> import("./pages/Forms/General"));
const Advanced = React.lazy(()=> import("./pages/Forms/Advanced"));
const Editors = React.lazy(()=> import("./pages/Forms/Editors"));

const BasicTable = React.lazy(()=> import("./pages/Tables/BasicTable"));
const DataTables = React.lazy(()=> import("./pages/Tables/DataTable"));

const Chart = React.lazy(()=> import("./pages/Charts/Chart"));

const Login = React.lazy(()=> import("./pages/Pages/Register&Login"));

const Profile = React.lazy(()=> import("./pages/Profile/Profile"));


const Breadcrumbs = React.lazy(()=> import("./components/Breadcrumbs"));

function App() {
  return (
    <div className="App">
      <HashRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "50px",
            zIndex: 3,
            top: "115px",
          }}
        >
          <Breadcrumbs />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<DashboardIndex />} />
              <Route path="dashboard/charts" element={<Chart />} />

              <Route path="dashboard/forms/advanced" element={<Advanced />} />
              <Route path="dashboard/forms/general" element={<General />} />
              <Route path="dashboard/forms/editors" element={<Editors />} />

              <Route path="dashboard/elements/buttons" element={<Buttons />} />
              <Route path="dashboard/elements/modals" element={<Modals />} />
              <Route path="dashboard/elements/navs" element={<NavTabs />} />
              <Route
                path="dashboard/elements/general"
                element={<GeneralElements />}
              />

              <Route path="dashboard/tables/basic" element={<BasicTable />} />
              <Route
                path="dashboard/tables/datatables"
                element={<DataTables />}
              />

              <Route path="dashboard/profile" element={<Profile />} />
            </Route>
            <Route path="dashboard/pages/register-login" element={<Login />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
