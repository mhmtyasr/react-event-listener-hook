import { useEffect, useRef, useState } from 'react';
import { removeEvent, subscribeEvent } from './eventServices';

interface IUsePubSub<T> {
  eventName: string;
  defaultValue: T;
  isSubscribe?: boolean;
  onCallback?: ((param: T, myStateRef: T) => T) | null;
}

export function useEventListener<T>({
  eventName,
  defaultValue,
  isSubscribe = true,
  onCallback = null,
}: IUsePubSub<T>): [T, Function] {
  const [data, setData] = useState<T>(defaultValue);

  const myStateRef = useRef(data);
  const setMyState = (data: T) => {
    myStateRef.current = data;
    setData(data);
  };

  const handleCallback = (param: T) => {
    if (typeof onCallback === 'function') {
      const tempData = onCallback(param, myStateRef.current);
      if (tempData) {
        setMyState(tempData);
      }
    } else {
      setMyState(param);
    }
  };

  useEffect(() => {
    if (isSubscribe) {
      subscribeEvent(eventName, handleCallback);
    }
    return () => {
      removeEvent(eventName, handleCallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventName, isSubscribe]);

  return [data, setData];
}

export default useEventListener;
