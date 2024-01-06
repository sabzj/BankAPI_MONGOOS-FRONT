import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserDetails from "./components/UserDetails";
import Transactions from "./components/Transactions";
import Home from "./components/Home";
import Header from "./components/Header";
import { BankProvider } from "./context/BankContext";

function App() {
  return (
    <BrowserRouter>
      <BankProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
      </BankProvider>
    </BrowserRouter>
  );
}

export default App;
