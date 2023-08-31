import React from "react";
import { FaCheck } from "react-icons/fa";

const Page1 = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "N1900.99/month",
      features: ["Coverage: N100,000", "Deductible: N500"],
    },
    {
      name: "Standard Plan",
      price: "N3900.99/month",
      features: ["Coverage: N250,000", "Deductible: N300"],
    },
    {
      name: "Premium Plan",
      price: "N5900.99/month",
      features: ["Coverage: N500,000", "Deductible: N200"],
    },
  ];

  return (
    <div className="h-full flex flex-col p-4">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-xl font-semibold">Avalable Plans</h3>
      </div>

      {/* Plans */}
      <div className="mt-6 space-y-4">
        {plans.map((plan, index) => (
          <div>
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <h4 className="text-lg font-semibold">{plan.name}</h4>
              <p className="text-gray-600">{plan.price}</p>
              <ul className="mt-2 space-y-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="rounded-lg p-2 bg-green-500  mt-2 text-white hover:bg-opacity-40 ">
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 font-semibold text-sm">Have a question? Visit our T-CHANNELS FAQ</div>
    </div>
  );
};

export default Page1;
