import React from 'react'
import Arrow1 from '../assets/arrow1.png';
import Arrow2 from '../assets/arrow2.png';


export default function WhatsTheFunction() {
  const steps = [
    {
      step: '01',
      title: 'Set disbursement Instructions',
      desc: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
    },
    {
      step: '02',
      title: 'Assembly retrieves funds from your account',
      desc: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
    },
    {
      step: '03',
      title: 'Assembly initiates disbursement',
      desc: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
    },
    {
      step: '04',
      title: 'Customer receives funds payment',
      desc: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
    }
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-white text-center">
      <h2 className="text-sm font-semibold text-[#EF9E48] mb-2 uppercase">What's the function</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-[#0F2137] mb-10">Let’s see how it works</h3>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 text-left max-w-7xl  mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            {/* Step Number */}
            <div className="text-black font-regular text-3xl mb-2 w-max p-3 bg-white rounded-full shadow-2xl ">{step.step}</div>
            {/* Title */}
            <div className="text-2xl font-semibold text-gray-800 mb-1">{step.title}</div>
            {/* Description */}
            <p className="text-;g text-gray-600">{step.desc}</p>

            {/* Arrow placeholder */}
            {idx < steps.length - 1 && (
            <img
              src={
              idx === 0
                ? Arrow1
                : idx === 1
                ? Arrow2
                : idx === 2
                ? Arrow1
                : ''
            }
              alt="Arrow"
              className="hidden md:block absolute top-10 right-[22px] transform -translate-y-1/2 w-[200px]"
            />
          )}
          </div>
        ))}
      </div>
    </section>
  );
}
