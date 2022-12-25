import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { usePubSub } from '../src/index';

const App = () => {
  const [example, setExample] = usePubSub<any[]>({
    eventName: 'test',
    defaultValue: [],
  });

  const [example1, setExample1] = usePubSub<any[]>({
    eventName: 'test1',
    defaultValue: [],
    isSubscribe: false, // if you don't want to subscribe to the event
    onCallback: (param, myStateRef) => {
      // if you want to do something with the data before it is set
      // if you return a value, it will be set as the new state
      return param;
    },
  });

  return <div>{example}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
