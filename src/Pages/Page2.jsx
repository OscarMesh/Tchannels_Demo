/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [name, setName] = React.useState("Oscar");
  const [email, setEmail] = React.useState("oscar@tizeti.com");
  const [address, setAddress] = React.useState("Lekki Phase 1");
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    if (!state.plan) {
      navigate("/");
    }
    if (window.myAppData) {
      setEmail(window.myAppData.email);
      setName(window.myAppData.accountName);
    }
  }, [state, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.success("Succesfull");
    setTimeout(() => {
      navigate("/");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="h-full p-4">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-xl font-semibold">Insurance Application Form</h3>
        </div>

        {/* Selected Plan */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold">Selected Plan:</h4>
          <p>{state.plan.name}</p>
          <p>{state.plan.price}</p>
          <ul className="mt-2 space-y-1">
            {state.plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <FaCheck className="w-4 h-4 text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="mt-6">
          <form onSubmit={handleSubmit}>
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
                // onChange={(e) => setName(e.target.value)}
                disabled
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-600 font-semibold mb-2"
                htmlFor="email"
              >
                Customer's Email Address
              </label>
              <input
                className="border rounded-lg p-2 w-full"
                type="text"
                id="email"
                value={email}
                disabled
                // onChange={(e) => setEmail(e.target.value)}
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
                disabled={isLoading}
                className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                type="submit"
              >
                {isLoading ? "loading..." : "Proceed"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Page2;
