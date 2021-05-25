import Home from "./home"
import Weekly from "./weekly"
import Monthly from "./monthly"
import Yearly from "./yearly"
import { Switch, Route} from "react-router-dom";

function ContentPage(){
    return<>
    <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/weekly" component={Weekly} exact={true}/>
        <Route path="/monthly" component={Monthly} exact={true}/>
        <Route path="/yearly" component={Yearly} exact={true}/>
    </Switch>
    </>;
}
export default ContentPage;