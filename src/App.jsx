import "./App.css";

import Routing from "./components/routing/Routing";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <Routing />
          <Contactus />
        </div>
      </div>
    </>
  );
}

export default App;
