
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import MilkContainer from "./components/MilkContainer";
import UserList from "./components/UserList";


function App() {
return (
  <Provider store={store}>
    <CakeContainer/>
    <MilkContainer/>
    <hr />
    <UserList/>
  </Provider>
)
}

export default App;
