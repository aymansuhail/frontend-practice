import { BrowserRouter as Router ,Route,Routes } from "react-router-dom"
import Layout from "./component/shared/Layout"
import Dashboard from "./component/Dashboard"
import Products from "./component/Products"
function App() {

  return (
    <Router>
      <Routes>
          {/* this is for including header and sidebar
           with different content to load on click */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products/>} />
          </Route>
           
           {/* outside the Route we take another route iff we do not 
           want the Layout to load with a specific route (header and sidebar)
           eg login page */}
           <Route path="login" element={<div>This is a login page</div>}/>
      </Routes>
    </Router>
  )
}

export default App
