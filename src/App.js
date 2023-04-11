import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Transaction from "./scenes/transactionorg";
import Form from "./scenes/form";
import Formrem from "./scenes/formrem";
import Loginorg from "./scenes/loginorg";
import Money from "./scenes/moneylaundering";
import ViewOfficer from "./scenes/viewOfficer";
import Suspectorg from "./scenes/suspectorg";
import Geography from "./scenes/geography";
import Customer from "./scenes/customer";
import ViewCustomer from "./scenes/viewCus";
import SuslistOfr from "./scenes/SuspectListOfficer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import NewTransaction from "./scenes/newTransaction";
import Allkyc from "./scenes/allkyc";
import Kyc from "./scenes/addkyc";
import Apporg from "./Apporg";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/" element={<Form />} />
              <Route path="/formrem" element={<Formrem />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/org" element={<Apporg />} />
              <Route path="/loginorg" element={<Loginorg />} />
              <Route path="/money" element={<Money />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/susorg" element={<Suspectorg/>} />
              <Route path="/customer" element={<Customer/>} />
              <Route path="/viewCus" element={<ViewCustomer/>} />
              <Route path="/Suslistofr" element={<SuslistOfr/>} />
              <Route path="/NewTran" element={<NewTransaction/>} />
              <Route path="/viewofficer" element={<ViewOfficer/>} />
              <Route path="/kyc" element={<Kyc/>} />
              <Route path="/allkyc" element={<Allkyc/>} />

              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
