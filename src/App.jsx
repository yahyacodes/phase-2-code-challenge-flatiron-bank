import React, { useEffect, useState } from "react";
import FlatironBank from "./Components/flatironBank";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      {data.map((bank) => (
        <FlatironBank
          description={bank.description}
          category={bank.category}
          date={bank.date}
          amount={bank.amount}
          key={bank.id}
        />
      ))}
    </>
  );
}

export default App;
