import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("useeffect");
    const intervalId = setInterval(() => {
      //   console.log("setinterval");
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <h4>
        This is the current time:{time.toLocaleDateString()}-{" "}
        {time.toLocaleTimeString()};
      </h4>
    </>
  );
};
export default CurrentTime;
