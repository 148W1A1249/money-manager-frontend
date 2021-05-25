import "./style.css"
import Navbar from "./navbar"
import Sidebar from './sidebar'
import ContentPage from './content_page'
import { BrowserRouter as Router} from "react-router-dom";

function App() {
return <>
 <Router>
 <Navbar></Navbar>
  <div id="layoutSidenav">
    <Sidebar></Sidebar>
    <div id="layoutSidenav_content">
       <ContentPage></ContentPage>
    </div>
  </div>
 </Router>

 </>;
}

export default App;
