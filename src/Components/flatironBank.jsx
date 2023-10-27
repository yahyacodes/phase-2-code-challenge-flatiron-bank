import React from "react";

const FlatironBank = ({ description, category, date, amount }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs">
          <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default FlatironBank;
