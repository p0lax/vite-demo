import { useEffect, useState } from 'react';
import classes from './App.module.css';
import { Spinner } from '@chakra-ui/react';
import Document from './components/Document/Document';

const APP_LOADING_TIMEOUT = 2000;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, APP_LOADING_TIMEOUT);
  }, []);

  return <div className={classes.app}>{loading ? <Spinner size="xl" /> : <Document />}</div>;
}

export default App;
