// HelpPage.js
import React, { useState } from 'react';
import Bottom from './Bottom';

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const helpData = [
    {
      id: 1,
      question: "How can I book a tour?",
      answer: "You can book a tour by selecting a destination and choosing your preferred dates."
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, debit cards, and PayPal."
    },
    {
      id: 3,
      question: "Can I cancel my booking?",
      answer: "Yes, you can cancel your booking up to 24 hours in advance for a full refund."
    },
    {
      id: 4,
      question: "Do you offer group discounts?",
      answer: "Yes, we offer discounts for groups of 10 or more people. Please contact us for more information."
    },
    {
      id: 5,
      question: "What should I do if my tour is canceled?",
      answer: "If your tour is canceled, we will notify you via email and provide options for rescheduling or a full refund."
    },
    {
      id: 6,
      question: "Are there age restrictions for tours?",
      answer: "Some tours have age restrictions. Please check the specific tour details for more information."
    },
    {
      id: 7,
      question: "What if I have dietary restrictions?",
      answer: "Please inform us of any dietary restrictions at the time of booking, and we will do our best to accommodate your needs."
    },
    {
      id: 8,
      question: "Can I change my booking details?",
      answer: "Yes, you can change your booking details up to 48 hours before your scheduled tour."
    },
    {
      id: 9,
      question: "Do you provide transportation during the tours?",
      answer: "Yes, transportation is included in most of our tours. Check the tour details for specifics."
    },
    {
      id: 10,
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team via email at support@tourismapp.com or call us at (123) 456-7890."
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
        <div>
               <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Help & Support</h2>
      {helpData.map((item, index) => (
        <div key={item.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ddd' }}>
          <h4 onClick={() => toggleAnswer(index)} style={{ cursor: 'pointer', color: '#007bff' }}>
            {item.question}
          </h4>
          {openIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
    <Bottom/>
        </div>
  );
};

export default Help;
