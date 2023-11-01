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
      <div className="relative overflow-x-auto pt-4">
        <table className="w-full text-sm text-left text-gray-800">
          <thead className="text-gray-700 text-md uppercase">
            <tr className="bg-violet-50 rounded-lg">
              <th className="p-2">Date</th>
              <th className="p-2">Description</th>
              <th className="p-2">Category</th>
              <th className="p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((bank) => (
              <tr
                key={bank.id}
                className="even:bg-violet-50 text-sm rounded-lg"
              >
                <td className="p-2">{bank.date}</td>
                <td className="p-2">{bank.description}</td>
                <td className="p-2">{bank.category}</td>
                <td className="p-2">{bank.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FlatironBank;
