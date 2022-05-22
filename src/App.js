import Calculator from "./component/Calculator";
import InputSample from "./component/Input";
import Problem from "./component/Problem";

function App() {
  return (
    <>
      <InputSample />
      <Problem />
      <Calculator />
    </>
  );
}

export default App;

/*
import InputSample from "./component/Input";
import Problem from "./component/Problem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
      </button>
      <InputSample />
      <Problem />
    </>
  );
}

export default App;
*/
