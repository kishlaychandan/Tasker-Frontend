import { useState, useEffect } from 'react';

function App() {
  const [smsList, setSmsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://tasker-backend-2hgl.onrender.com/api/sms')
      .then((res) => res.json())
      .then((data) => {
        setSmsList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching SMS:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Received SMS Messages</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {smsList.map((sms) => (
            <li key={sms._id} style={{ marginBottom: '1rem' }}>
              <strong>From:</strong> {sms.sender}<br />
              <strong>Message:</strong> {sms.message}<br />
              <small>{new Date(sms.timestamp).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
