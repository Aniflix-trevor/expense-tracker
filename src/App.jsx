import React, { useState } from "react";
import Header from "./components/Header";
import AddExpense from "./components/AddExpense";
import Table from "./components/Table";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredExpenses = expenses.filter((expense) =>
    `${expense.name} ${expense.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <Header
        title="Expense Tracker"
        description="Track your spending easily."
      />

      <div className="my-4">
        <input
          type="text"
          placeholder="Search by name or description"
          value={search}
          onChange={handleSearchChange}
          className="w-full md:w-1/2 border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <AddExpense onAdd={addExpense} />
        <Table
          columns={[
            { id: "name", label: "Name" },
            { id: "description", label: "Description" },
            { id: "category", label: "Category" },
            { id: "amount", label: "Amount" },
            { id: "date", label: "Date" },
          ]}
          data={filteredExpenses}
        />
      </div>
    </div>
  );
}

export default App;
