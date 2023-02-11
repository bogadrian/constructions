import { useState, useRef, memo } from 'react';

import './App.css';

import { useInterval } from './hooks/useInterval';

const Parent = ({ children }: { children: React.ReactNode }) => {
  const internalRender = useRef(0);
  internalRender.current = ++internalRender.current;

  const [rerender, setRerender] = useState(0);

  useInterval(() => {
    setRerender(rerender + 1);
  }, 3000);

  return (
    <>
      <h2 style={{ color: 'red' }}>
        Internal Render Parent {internalRender.current}
      </h2>
      {children}
    </>
  );
};

const ComponentA = ({ firstCount }: { firstCount: { count: number } }) => {
  const internalRender = useRef(0);
  internalRender.current = ++internalRender.current;
  return (
    <>
      <h2 style={{ color: 'pink' }}>
        Internal Render Component A {internalRender.current}
      </h2>
      <h1>first count {firstCount.count}</h1>
    </>
  );
};

const ComponentB = ({ secondCount }: { secondCount: { count: number } }) => {
  const internalRender = useRef(0);
  internalRender.current = ++internalRender.current;
  return (
    <>
      <h2 style={{ color: 'yellow' }}>
        Internal Render Component B {internalRender.current}
      </h2>
      <h1>second count {secondCount.count}</h1>
    </>
  );
};

function App() {
  const [firstCount, setFirstCount] = useState({ count: 0 });
  const [secondCount, setSecondCount] = useState({ count: 0 });

  return (
    <div className="App">
      <Parent>
        <ComponentA firstCount={firstCount} />
        <ComponentB secondCount={secondCount} />
      </Parent>
      <button
        onClick={() =>
          setFirstCount(prevCount => ({
            count: prevCount.count + 1
          }))
        }
      >
        Increase first count
      </button>
      <button
        onClick={() =>
          setSecondCount(prevCount => ({
            count: prevCount.count + 1
          }))
        }
      >
        Increase second count
      </button>
    </div>
  );
}

export default App;
