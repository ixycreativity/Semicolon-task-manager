import { Routes, Route } from "react-router-dom";
import "./App.css";
import Test from "./pages/TestPage";
import TasksList from "./pages/TasksList";
import Tabs from "./pages/Tabs";
import { CreateAccount } from "./pages/CreateAccount";
import LoginPage from "./pages/Login";
import Avatars from "./pages/Avatars";
import { Alerts } from "./pages/Alerts";
import { Inputs } from "./pages/Inputs";
import { Modals } from "./pages/Modals";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { RecoverPasswordPage } from "./pages/RecoverPasswordPage";
import { TaskDetailsCardPage } from "./pages/TaskDetailsCardPage";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Tasks from "./pages/Tasks";

import Users from "./pages/Users";
import Badges from "./pages/Badges";
import TasksBoard from "./pages/TasksBoard";
import { SidebarPage } from "./pages/SidebarPage";
import { PageLayoutPage } from "./pages/PageLayout";
import { Checkboxes } from "./pages/Checkboxes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/test" element={<Test />} />

        <Route path="/tabs" element={<Tabs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/recover" element={<RecoverPasswordPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/modals" element={<Modals />} />

        <Route path="/users" element={<Users />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/avatars" element={<Avatars />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/tasks-board/:id" element={<TasksBoard />} />
        <Route path="/taskdetails" element={<TaskDetailsCardPage />} />
        <Route path="/sidebarleft" element={<SidebarPage />} />
        <Route path="/pagelayout" element={<PageLayoutPage />} />
        <Route path="/checkboxes" element={<Checkboxes />} />
      </Routes>
    </div>
  );
};

export default App;
