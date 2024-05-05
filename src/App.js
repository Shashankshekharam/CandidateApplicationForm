import "./App.css";
import Jobs from "./pages/jobs";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Jobs />
    </Provider>
  );
}

export default App;