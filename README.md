
# React Event Listener Hook

A simple React hook for adding and removing event listeners on DOM nodes.


## Installation

Install your-project with npm

```bash
 npm install react-event-listener-hook
 yarn add react-event-listener-hook
```
    
## Parameter


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `eventName` | `string` | **Required**. A string representing the event to listen for, such as node event. |
| `defaultValue` | `any` | **Required**. the default value to use for the event listener. This can be any type, such as a function or an object. |
| `isSubscribe` | `boolean` | (optional) a boolean indicating whether to add or remove the event listener.<br/> The default value is true, which means the event listener will be added. If set to false, the event listener will be removed. |
| `onCallback` | `function` | (optional) a  function to be called when the event listener is triggered.<br/> This function takes two parameters: param, which is the value passed to the event listener, and myStateRef, which is the current state of the hook. The function should update the state using the state updater function provided by the hook. If the function does not return a value, the state will not be updated. This parameter can be set to null or undefined if not needed.|





## Usage/Examples

```javascript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useEventListener } from '../src/index';

const App = () => {
  const [example, setExample] = useEventListener<any[]>({
    eventName: 'test',
    defaultValue: [],
  });

  const [example1, setExample1] = useEventListener<any[]>({
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
```

