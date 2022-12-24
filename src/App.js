import { colorMode ,ColorModeContext,useMode} from './theme'
import { ThemeProvider , CssBaseline} from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard/Dashboard'
import Team from "./scenes/team/Team"
import Invoices from "./scenes/invoices/Invoices"
import Contacts from "./scenes/contacts/Contacts"
import Form from "./scenes/form/Form"
import Calendar from "./scenes/calendar/Calendar"
// import Bar from "./scenes/bar"
// import Line from "./scenes/line"
// import Pie from "./scenes/pie"
import FAQ from "./scenes/faq/FAQ"
// import Geography from "./scenes/geography"


function App() {

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider  ider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main  className='content'>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
               <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
             {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              <Route path="/calendar" element={<Calendar />} /> 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  )
}

export default App;
