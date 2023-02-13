import { useState } from 'react';
import reactLogo from './assets/react.svg';
import clsx from 'clsx';
import classes from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.app}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className={classes.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className={clsx(classes.logo, classes.react)} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={classes.card}>
        <button onClick={() => setCount((count) => count + 100)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
