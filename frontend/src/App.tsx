import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { LandingPage } from "./components/LandingPage";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Documentation } from "./components/Documentation";
import { Blog } from "./components/Blog";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";
import { ProjectsList } from "./components/dashboard/ProjectsList";
import { NewProject } from "./components/dashboard/NewProject";
import { DashboardSettings } from "./components/dashboard/DashboardSettings";
import { DashboardBilling } from "./components/dashboard/DashboardBilling";
import { StaticSites } from "./components/services/StaticSites";
import { BackendServices } from "./components/services/BackendServices";
import { CronJobs } from "./components/services/CronJobs";
import { BackgroundWorkers } from "./components/services/BackgroundWorkers";
import { MessageQueue } from "./components/services/MessageQueue";
import { Databases } from "./components/services/Databases";
import { PrivateServices } from "./components/services/PrivateServices";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Public Routes with Header and Footer */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <LandingPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/docs"
            element={
              <>
                <Documentation />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Header />
                <Blog />
                <Footer />
              </>
            }
          />

          {/* Services Pages */}
          <Route
            path="/services/static-sites"
            element={
              <>
                <Header />
                <StaticSites />
                <Footer />
              </>
            }
          />
          <Route
            path="/services/backend"
            element={
              <>
                <Header />
                <BackendServices />
                <Footer />
              </>
            }
          />
          <Route
            path="/services/cron-jobs"
            element={
              <>
                <Header />
                <CronJobs />
                <Footer />
              </>
            }
          />
          <Route
            path="/services/workers"
            element={
              <>
                <Header />
                <BackgroundWorkers />
                <Footer />
              </>
            }
          />
          <Route
            path="/services/queue"
            element={
              <>
                <Header />
                <MessageQueue />
                <Footer />
              </>
            }
          />
          <Route
            path="/services/databases"
            element={
              <>
                <Header />
                <Databases />
                <Footer />
              </>
            }
          />
          <Route
            path="/services/private"
            element={
              <>
                <Header />
                <PrivateServices />
                <Footer />
              </>
            }
          />
          
          {/* Auth routes without header */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<ProjectsList />} />
            <Route path="new-project" element={<NewProject />} />
            <Route path="settings" element={<DashboardSettings />} />
            <Route path="billing" element={<DashboardBilling />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
