import { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [smsList, setSmsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


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
        setError(err.message);
      });
  }, []);

 return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Received SMS Messages</h1>

      {loading ? (
        <p>
          Loading messages, please wait...<br />
          <small style={{ color: '#777' }}>
            Server is hosted on <strong>Render (Free Tier)</strong>. It may take up to 2 minutes to wake up after inactivity.
          </small>
        </p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : smsList.length === 0 ? (
        <p>No SMS messages received yet.</p>
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
