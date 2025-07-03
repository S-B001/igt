// src/components/FAQ.jsx
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How to contact with riders emergency?',
    answer: 'You can contact a rider in case of emergency by using the emergency contact button in your app profile or calling the support hotline.'
  },
  {
    question: 'App installation failed, how to update system information?',
    answer: 'Ensure your device software is updated. Restart your device and try reinstalling the app from the official store.'
  },
  {
    question: 'Website response taking time, how to improve?',
    answer: 'An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic. The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally to provide information.'
  },
  {
    question: 'New update fixed all bug and issues',
    answer: 'Yes, the recent update addresses all known bugs and improves performance. Make sure you are using the latest version for the best experience.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-12 text-center">
      <h2 className="uppercase text-sm tracking-widest text-orange-500 font-medium mb-2">Frequent Question</h2>
      <h3 className="text-3xl md:text-4xl font-bold text-[#0F2137] mb-10">Do you have any question</h3>

      <div className="max-w-3xl mx-auto text-left">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded p-4 ">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center text-left text-gray-900 font-medium gap-3"
            >
              <div className="bg-[#3fdbb1] p-1 rounded-full">
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-white" />
                ) : (
                  <Plus className="w-5 h-5 text-white" />
                )}
              </div>
              <span>{faq.question}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 text-sm ml-8">{faq.answer}</p>
            )}
            <hr className="mt-4 border-gray-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
