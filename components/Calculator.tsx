import React, { useState } from 'react';
import Section from './Section';
import ApplyLink from './ApplyLink';
import { CalculatorState } from '../types';

const fields: { key: keyof CalculatorState; label: string; help: string; max?: number }[] = [
  { key: 'currentMonthly', label: 'Current monthly appointments', help: 'Booked calls or visits per month today.' },
  { key: 'closeRate', label: 'Your close rate (%)', help: 'Out of every 100 appointments, how many buy.', max: 100 },
  { key: 'avgValue', label: 'Average client value (€)', help: 'What a new client is worth to you.' },
  { key: 'additionalAppointments', label: 'Extra appointments per month', help: 'How many more you want us to book.' },
];

const euro = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

const Calculator: React.FC = () => {
  // Kept as strings so the user can clear a field while typing.
  const [inputs, setInputs] = useState<Record<keyof CalculatorState, string>>({
    currentMonthly: '10',
    closeRate: '30',
    avgValue: '500',
    additionalAppointments: '20',
  });

  const num = (key: keyof CalculatorState, max = Infinity) => Math.min(Math.max(Number(inputs[key]) || 0, 0), max);
  const extraClients = num('additionalAppointments') * (num('closeRate', 100) / 100);
  const extraRevenue = extraClients * num('avgValue');
  const currentRevenue = num('currentMonthly') * (num('closeRate', 100) / 100) * num('avgValue');

  return (
    <Section id="calculator">
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tighter text-balance md:text-5xl">
        See what more appointments are worth
      </h2>
      <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">
        Put in your own numbers. The result updates as you type.
      </p>

      <div className="mt-14 grid overflow-hidden rounded-2xl border border-line lg:grid-cols-[1.2fr_1fr]">
        <form className="grid gap-6 bg-surface p-7 sm:grid-cols-2 md:p-9" onSubmit={(e) => e.preventDefault()}>
          {fields.map((f) => (
            <div key={f.key} className="flex flex-col gap-2">
              <label htmlFor={f.key} className="text-sm font-medium">
                {f.label}
              </label>
              <input
                id={f.key}
                type="number"
                inputMode="numeric"
                min={0}
                max={f.max}
                value={inputs[f.key]}
                onChange={(e) => setInputs({ ...inputs, [f.key]: e.target.value })}
                aria-describedby={`${f.key}-help`}
                className="h-12 rounded-xl border border-white/15 bg-ink px-4 text-lg tabular-nums transition-colors hover:border-white/25 focus:border-accent focus:outline-none"
              />
              <p id={`${f.key}-help`} className="text-sm text-muted">
                {f.help}
              </p>
            </div>
          ))}
        </form>

        <div className="relative flex flex-col justify-between gap-10 overflow-hidden bg-accent-soft p-7 md:p-9">
          <div aria-live="polite">
            <p className="text-sm font-medium text-muted">Extra revenue per month</p>
            <p className="mt-2 text-5xl font-semibold tabular-nums tracking-tight text-accent md:text-6xl">
              {euro.format(extraRevenue)}
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6">
              <div>
                <dt className="text-sm text-muted">New clients per month</dt>
                <dd className="mt-1 text-xl tabular-nums">{extraClients.toLocaleString('en-IE', { maximumFractionDigits: 1 })}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Extra per year</dt>
                <dd className="mt-1 text-xl tabular-nums">{euro.format(extraRevenue * 12)}</dd>
              </div>
            </dl>
            {currentRevenue > 0 && (
              <p className="mt-6 text-sm leading-relaxed text-muted">
                On top of the {euro.format(currentRevenue)} you already make from appointments each month.
              </p>
            )}
          </div>
          <ApplyLink className="self-start" />
        </div>
      </div>
    </Section>
  );
};

export default Calculator;
