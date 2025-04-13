import { useState } from "react";

function AddExpense({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm bg-white p-4 rounded-lg shadow-md flex flex-col gap-4"
    >
      <h2 className="text-xl font-semibold">Add Expense</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="border px-2 py-1 rounded"
        required
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="border px-2 py-1 rounded"
        required
      />
      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className="border px-2 py-1 rounded"
        required
      />
      <input
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
        type="number"
        className="border px-2 py-1 rounded"
        required
      />
      <input
        name="date"
        value={form.date}
        onChange={handleChange}
        type="date"
        className="border px-2 py-1 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Expense
      </button>
    </form>
  );
}

export default AddExpense;
