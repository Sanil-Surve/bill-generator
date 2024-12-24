
import React, { useState } from 'react';
import axios from 'axios';

function BillGenerator() {
  const [customerName, setCustomerName] = useState('');
  const [items, setItems] = useState([{ name: '', price: '', quantity: 1 }]);

  const addItem = () => {
    setItems([...items, { name: '', price: '', quantity: 1 }]);
  };

  const handleDownloadPDF = async () => {
    if (!customerName.trim()) {
      alert('Customer Name is required');
      return;
    }

    if (items.some((item) => !item.name || !item.price || item.quantity <= 0)) {
      alert('Please fill out all item fields with valid values.');
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/generate-pdf`,
        { customerName, items },
        { responseType: 'blob' }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'bill.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-5">Bill Generator</h1>

      {/* Customer Name Input */}
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Item List */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center border-b pb-2"
          >
            <input
              type="text"
              placeholder="Item Name"
              value={item.name}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].name = e.target.value;
                setItems(newItems);
              }}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].price = e.target.value;
                setItems(newItems);
              }}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].quantity = e.target.value;
                setItems(newItems);
              }}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <button
          onClick={addItem}
          className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Item
        </button>
        <button
          onClick={handleDownloadPDF}
          disabled={!customerName.trim() || items.some((item) => !item.name || !item.price || item.quantity <= 0)}
          className={`w-full md:w-auto px-4 py-2 rounded-md text-white ${
            !customerName.trim() || items.some((item) => !item.name || !item.price || item.quantity <= 0)
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default BillGenerator;