import "./App.css";
import Dashboard from "./pages/DashboardPages/Dashboard";
import { FormStatusProvider } from "./context/FormStatusContext"; // 1. استدعاء الـ Provider

function App() {
  return (
    <>
       <FormStatusProvider>
        <Dashboard />
      </FormStatusProvider>
    </>
  );
}

export default App;