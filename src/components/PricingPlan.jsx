import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const plans = {
  monthly: [
    {
      title: 'Free Plan',
      description: 'For Small teams or office',
      price: '$0',
      features: [
        { text: 'Ultimate access to all course, exercises and assessments', included: true },
        { text: 'Free acess for all kind of exercise corrections with downloads.', included: true },
        { text: 'Total assessment corrections with free download access system', included: true },
        { text: 'Unlimited download of courses on the mobile app contents', included: false },
        { text: 'Download and print courses and exercises in PDF', included: false },
      ],
      button: 'Start Free Trial',
      recommended: false,
    },
    {
      title: 'Premium Plan',
      description: 'For teams and enterprise',
      price: '$49',
      features: [
        { text: 'Ultimate access to all course, exercises and assessments', included: true },
        { text: 'Free acess for all kind of exercise corrections with downloads.', included: true },
        { text: 'Total assessment corrections with free download access system', included: true },
        { text: 'Unlimited download of courses on the mobile app contents', included: true },
        { text: 'Download and print courses and exercises in PDF', included: true },
      ],
      button: 'Subscribe Now',
      recommended: true,
    },
  ],
  annually: [
    {
      title: 'Standard Plan',
      description: 'For individuals and freelancers',
      price: '$299',
      features: [
        { text: 'Ultimate access to all course, exercises and assessments', included: true },
        { text: 'Free acess for all kind of exercise corrections with downloads.', included: true },
        { text: 'Total assessment corrections with free download access system', included: true },
        { text: 'Unlimited download of courses on the mobile app contents', included: false },
        { text: 'Download and print courses and exercises in PDF', included: false },
      ],
      button: 'Subscribe Now',
      recommended: false,
    },
    {
      title: 'Premium Plan',
      description: 'For teams and enterprise',
      price: '$499',
      features: [
        { text: 'Ultimate access to all course, exercises and assessments', included: true },
        { text: 'Free acess for all kind of exercise corrections with downloads.', included: true },
        { text: 'Total assessment corrections with free download access system', included: true },
        { text: 'Unlimited download of courses on the mobile app contents', included: false },
        { text: 'Download and print courses and exercises in PDF', included: false },
      ],
      button: 'Subscribe Now',
      recommended: true,
    },
  ],
};

export default function PricingPlan() {
  const [activeTab, setActiveTab] = useState('monthly');

  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto text-center">
      <h2 className="text-sm font-semibold text-[#EF9E48] uppercase mb-2">Pricing Plan</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-[#0F2137] mb-8">Choose your pricing policy</h3>

      {/* Tabs */}
      <div className="inline-flex items-center bg-gray-100 rounded-md mb-12 p-2 overflow-hidden">
        <button
          onClick={() => setActiveTab('monthly')}
          className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
            activeTab === 'monthly' ? 'bg-white shadow text-[#0F2137]' : 'text-gray-600'
          }`}
        >
          Monthly Plan
        </button>
        <button
          onClick={() => setActiveTab('annually')}
          className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
            activeTab === 'annually' ? 'bg-white shadow text-[#0F2137]' : 'text-gray-600'
          }`}
        >
          Annually Plan
        </button>
      </div>

      <div >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
        {plans[activeTab].map((plan, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-xl shadow-md border transition-all duration-300 relative ${
              plan.recommended ? 'border-[#3FDBB1]' : 'border-gray-200'
            }`}
          >
            {plan.recommended && (
              <span className="absolute top-4 left-4 bg-[#EF9E48] text-white text-xs font-semibold px-3 py-1 mb-2 rounded">
                Recommended
              </span>
            )}

            <div className="flex items-start justify-between mb-4 mt-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">{plan.title}</h4>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-400 block">Starting from</span>
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
              </div>
            </div>

            <ul className="mb-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  {feature.included ? (
                    <CheckCircle className="text-green-500 w-5 h-5" />
                  ) : (
                    <XCircle className="text-gray-300 w-5 h-5" />
                  )}
                  <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>{feature.text}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 text-sm font-semibold rounded ${
                plan.recommended
                  ? 'bg-[#FCF2E8] text-[#EF9E48] hover:bg-orange-200'
                  : 'bg-[#FCF2E8] text-[#EF9E48] hover:bg-orange-200'
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}