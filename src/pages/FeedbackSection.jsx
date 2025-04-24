import React, { useState } from 'react';
import Swal from 'sweetalert2';

const FeedbackSection = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Fake feedback submission
    Swal.fire({
      title: 'Thank You!',
      text: 'Thanks for your feedback!',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    });

    setMessage('');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 mt-16 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your feedback..."
          rows="5"
          className="w-full border p-2 rounded"
        ></textarea>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackSection;
