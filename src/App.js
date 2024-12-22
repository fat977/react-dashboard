import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardIndex from "./pages/Dashboard/Index/DashboardIndex";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Pages/Register&Login";
import Chart from "./pages/Charts/Chart";
import GeneralElements from "./pages/Elements/General/General";



const Buttons = React.lazy(()=> import("./pages/Elements/Buttons/Button"));
const Modals = React.lazy(()=> import("./pages/Elements/Modals&Alerts/Modals&Alerts"));
const NavTabs = React.lazy(()=> import("./pages/Elements/Navbar&Tabs"));

const General = React.lazy(()=> import("./pages/Forms/General"));
const Advanced = React.lazy(()=> import("./pages/Forms/Advanced"));
const Editors = React.lazy(()=> import("./pages/Forms/Editors"));

const BasicTable = React.lazy(()=> import("./pages/Tables/BasicTable"));
const DataTables = React.lazy(()=> import("./pages/Tables/DataTable"));

const Breadcrumbs = React.lazy(()=> import("./components/Breadcrumbs"));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-dashboard"
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <div
          className="d-none d-lg-block my-3"
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
              <Route path="/charts" element={<Chart />} />

              <Route path="/forms/advanced" element={<Advanced />} />
              <Route path="/forms/general" element={<General />} />
              <Route path="/forms/editors" element={<Editors />} />

              <Route path="/elements/buttons" element={<Buttons />} />
              <Route path="/elements/modals" element={<Modals />} />
              <Route path="/elements/navs" element={<NavTabs />} />
              <Route
                path="/elements/general"
                element={<GeneralElements />}
              />

              <Route path="/tables/basic" element={<BasicTable />} />
              <Route
                path="/tables/datatables"
                element={<DataTables />}
              />

              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/pages/register-login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
