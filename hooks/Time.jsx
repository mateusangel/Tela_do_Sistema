import { useEffect, useState } from "react";

export const TimeShowMessage = (init = false, daley = 1500) => {
  const [showMessage, setshowMessage] = useState(init);
  const [trueorfalse, settrueorfalse] = useState(false);

  useEffect(() => {
    if (trueorfalse) {
      setTimeout(() => {
        setshowMessage(true);
        setTimeout(() => {
          setshowMessage(false);
        }, daley);
      }, 200);
      settrueorfalse(false);
    }
  }, [showMessage, daley, trueorfalse]);

  const start = () => {
    settrueorfalse(true);
  };

  return [showMessage, start];
};
