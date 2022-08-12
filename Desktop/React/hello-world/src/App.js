import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/greet";
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Message from "./components/message";
import Counter from "./components/counter";
import FunctionClick from "./components/functionClick";
import ClassClick from "./components/classClick";
import EventBind from "./components/eventBind";
import ParentComponent from "./components/parentComponent";
import UserGreeting from "./components/userGreeting";
import NameList from "./components/nameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css"; //NOTE:can be used in children comp without being imported there separately
import style from "./appStyles.module.css"; //NOTE:cannot be used in children components like INLINE comp

import Form from "./components/form";
import LifecycleA from "./components/lifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";

import FocusInput from "./components/FocusInput";
import FRparentInput from "./components/FRparentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClckCounterTwo from "./components/ClckCounterTwo";
import HoverCountTwo from "./components/HoverCountTwo";
import User from "./components/User";
import WidthCounterTwo from "./components/WidthCounterTwo";
import ComponentA from "./components/ComponentA";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="ANAM">
        <ComponentA />
      </UserProvider>

      {/* <WidthCounterTwo>
        {(count, incrementCount) => (
          <ClckCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></ClckCounterTwo>
        )}
      </WidthCounterTwo>
      <WidthCounterTwo>
        {(count, incrementCount) => (
          <HoverCountTwo
            count={count}
            incrementCount={incrementCount}
          ></HoverCountTwo>
        )}
      </WidthCounterTwo> */}
      {/* <ClckCounterTwo />
      <HoverCountTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Anam" : "Guest")} /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRparentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={style.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Jack" job="Manager">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Clark" job="Cop">
        <button>press me</button>
      </Greet> */}
      {/* <Greet name="Diana" job="Author" /> */}
      {/* <Welcome name="Bruce" heroName="Superman" /> */}
      {/* <Welcome name="David" heroName="Batman" /> */}
      {/* <Welcome name="Jane" heroName="Spiderman" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
