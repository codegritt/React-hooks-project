import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import ClassCounterOne from "./components/useEffect/components/ClassCounterOne.js";
import HookCounterOne from "./components/useEffect/components/HookCounterOne.js";
import ClassMouse from "./components/useEffect/components/ClassMouse.js";
import HookMouse from "./components/useEffect/components/HookMouse.js";
import MouseContainer from "./components/useEffect/components/MouseContainer.js";
import IntervalClassCounter from "./components/useEffect/components/IntervalClassCounter.js";
import IntervalHookCounter from "./components/useEffect/components/IntervalHookCounter.js";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <hr></hr>
      <HookCounter />
      <hr></hr>
      <HookCounterTwo />
      <hr></hr>
      <HookCounterThree />
      <hr></hr>
      <HookCounterFour />
      <hr></hr>
      <ClassCounterOne />
      <hr></hr>
      <HookCounterOne />
      <hr></hr>
      <ClassMouse></ClassMouse>
      <hr></hr>
      <HookMouse></HookMouse>
      <hr></hr>
      <MouseContainer />
      <hr></hr>
      <IntervalClassCounter></IntervalClassCounter>
      <hr></hr>
      <IntervalHookCounter></IntervalHookCounter>
      <hr></hr>
    </div>
  );
}

export default App;
