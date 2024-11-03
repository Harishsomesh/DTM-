// PaymentPage.js
import React, { useState } from 'react';
import Bottom from '../componets/Bottom';

const PaymentPage = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !cardNumber || !expiryDate || !cvv) {
      setError('Please fill in all fields.');
      return;
    }

   
    setSuccess('Payment successful! Thank you for your purchase.');
  };

  return (
    <div>
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Payment Page</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handlePayment}>
        <div>
          <label>Name on Card:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{ width: '100%', margin: '8px 0', padding: '8px' }} 
          />
        </div>
        <div>
          <label>Card Number:</label>
          <input 
            type="text" 
            value={cardNumber} 
            onChange={(e) => setCardNumber(e.target.value)} 
            required 
            style={{ width: '100%', margin: '8px 0', padding: '8px' }} 
          />
        </div>
        <div>
          <label>Expiry Date (MM/YY):</label>
          <input 
            type="text" 
            value={expiryDate} 
            onChange={(e) => setExpiryDate(e.target.value)} 
            required 
            style={{ width: '100%', margin: '8px 0', padding: '8px' }} 
          />
        </div>
        <div>
          <label>CVV:</label>
          <input 
            type="text" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value)} 
            required 
            style={{ width: '100%', margin: '8px 0', padding: '8px' }} 
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
          Pay Now
        </button>
      </form>
    </div>
    <Bottom/>
    </div>
  );
};

export default PaymentPage;
