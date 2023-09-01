import React from "react";
import { FaCheck } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Page2 = () => {
  const { state } = useLocation();
  const [name, setName] = React.useState("Oscar");
  const [cin, setCin] = React.useState("12341234");
  const [address, setAddress] = React.useState("Tizeti Lekki");

  return (
    <div className="h-full p-4">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-xl font-semibold">Insurance Application Form</h3>
      </div>

      {/* Selected Plan */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold">Selected Plan:</h4>
        <p>{state?.plan?.name}</p>
        <p>{state?.plan?.price}</p>
        <ul className="mt-2 space-y-1">
          {state?.plan?.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="w-4 h-4 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <div className="mt-6">
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="border rounded-lg p-2 w-full"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="cin"
            >
              Customer Identification Number (CIN):
            </label>
            <input
              className="border rounded-lg p-2 w-full"
              type="text"
              id="cin"
              value={cin}
              onChange={(e) => setCin(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="address"
            >
              Address:
            </label>
            <textarea
              className="border rounded-lg p-2 w-full"
              id="address"
              rows="4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
              type="submit"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page2;
