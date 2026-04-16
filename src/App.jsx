import React, { Suspense, useEffect, useState } from "react";
import Bottles from "./components/bottles/Bottles";

const App = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("./bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  return (
    <>
      <h3>Buy Awesome Water Bottles</h3>
      {/* bottles container */}

      <Bottles bottlesData={bottles} />
    </>
  );
};

export default App;
