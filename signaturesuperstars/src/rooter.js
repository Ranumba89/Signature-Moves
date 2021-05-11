import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";

const Rooter =()=>{
    return<div>
    <Router>
        <Route exact path="/" component={Home}/>
        
        </Router>        
    </div>
}
export default Rooter;