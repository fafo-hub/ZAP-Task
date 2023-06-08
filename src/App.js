import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import { Contact } from "./Pages/Contact";
import { Education } from "./Pages/Education";
import { About } from "./Pages/About";
import { Confirm } from "./Pages/Confirm";
import { Success } from "./Pages/Success";
import { NotFound } from "./Pages/NotFound";
import './index.css'

export const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};
