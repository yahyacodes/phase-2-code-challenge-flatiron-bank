import React, { useState, useEffect } from "react";

const FlatironBank = () => {
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
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
        </table>

        {data.map((bank) => (
          <table key={bank.id}>
            <tbody>
              <tr>
                <td>{bank.date}</td>
                <td>{bank.description}</td>
                <td>{bank.category}</td>
                <td>{bank.amount}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
};

export default FlatironBank;
