import React, { useEffect, useState } from "react";
function App() {
  const [traffic, setTraffic] = useState({});
  useEffect(() => {
    fetch("/api/traffic")
      .then(res => res.json())
      .then(setTraffic);
  }, []);
  return (
    <div>
      <h1>Traffic Monitor</h1>
      <p>Status: {traffic.status}</p>
      <p>Location: {traffic.location}</p>
    </div>
  );
}
export default App;