
import React, { useState } from 'react';
import Section from './Section';

const Calculator: React.FC = () => {
  const [inputs, setInputs] = useState({
    currentMonthly: 10,
    closeRate: 30,
    avgValue: 500,
    additionalAppointments: 20
  });

  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const { currentMonthly, closeRate, avgValue, additionalAppointments } = inputs;
    const currentRevenue = currentMonthly * (closeRate / 100) * avgValue;
    const newRevenue = (currentMonthly + additionalAppointments) * (closeRate / 100) * avgValue;
    const extraRevenue = newRevenue - currentRevenue;
    setResult(extraRevenue);
  };

  return (
    <Section id="calculator" className="bg-light-bg">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">See what more appointments mean for your revenue</h2>
        <p className="text-gray-600">Calculate your potential ROI with our AI appointment setting system.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Current monthly appointments</label>
            <input
              type="number"
              value={inputs.currentMonthly}
              onChange={(e) => setInputs({ ...inputs, currentMonthly: Number(e.target.value) })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-warm/50"
              placeholder="10"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Your close rate (%)</label>
            <input
              type="number"
              value={inputs.closeRate}
              onChange={(e) => setInputs({ ...inputs, closeRate: Number(e.target.value) })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-warm/50"
              placeholder="30"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Average client value (€)</label>
            <input
              type="number"
              value={inputs.avgValue}
              onChange={(e) => setInputs({ ...inputs, avgValue: Number(e.target.value) })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-warm/50"
              placeholder="500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">How many more appointments do you want?</label>
            <input
              type="number"
              value={inputs.additionalAppointments}
              onChange={(e) => setInputs({ ...inputs, additionalAppointments: Number(e.target.value) })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-warm/50"
              placeholder="20"
            />
          </div>
          <button
            onClick={handleCalculate}
            className="w-full bg-accent-warm text-white py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02]"
          >
            Calculate
          </button>
        </div>

        <div className="flex flex-col justify-center">
          {result !== null ? (
            <div className="glass-card bg-white/70 p-10 rounded-[2.5rem] border border-black/5 shadow-xl text-center animate-in fade-in zoom-in duration-300">
              <p className="text-gray-500 mb-2 uppercase tracking-widest text-sm font-bold">Additional Revenue</p>
              <h3 className="text-6xl font-black text-accent-warm mb-4">
                €{result.toLocaleString()}
              </h3>
              <p className="text-xl text-gray-700 mb-8 font-medium">
                That's €{result.toLocaleString()} extra per month in revenue.
              </p>
              <a
                href="https://tally.so/r/RGMKQv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-black"
              >
                Apply now
              </a>
            </div>
          ) : (
            <div className="text-center p-10 bg-gray-100/50 border-2 border-dashed border-gray-200 rounded-[2.5rem]">
              <p className="text-gray-400">Enter your numbers to see your revenue potential.</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Calculator;
