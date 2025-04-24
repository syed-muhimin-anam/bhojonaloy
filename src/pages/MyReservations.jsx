import React from 'react';

const MyReservations = () => {
  const reservations = [
    { id: 1, date: '2025-04-25', time: '7:00 PM', guests: 4, status: 'Confirmed' },
    { id: 2, date: '2025-04-27', time: '6:30 PM', guests: 2, status: 'Pending' },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">My Reservations</h2>
      <ul className="space-y-4">
        {reservations.map((res) => (
          <li key={res.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <p><strong>Date:</strong> {res.date}</p>
              <p><strong>Time:</strong> {res.time}</p>
              <p><strong>Guests:</strong> {res.guests}</p>
            </div>
            <span
              className={`px-3 py-1 rounded text-sm font-medium ${
                res.status === 'Confirmed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-700'
              }`}
            >
              {res.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyReservations;
