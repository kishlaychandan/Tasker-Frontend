import { useState, useEffect } from 'react';
import FilterBar from './FilterBar';

function SMSList() {
    const [smsList, setSmsList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const limit = 8;
    const [total, setTotal] = useState(0);
    const [error, setError] = useState('');
    const [filters, setFilters] = useState({ sender: '', receiver: '', message: '' });

    // useEffect(() => {
    //     setLoading(true);
    //     setError('');

    //     // const dummyMessages = Array.from({ length: 33 }, (_, i) => ({
    //     //     id: i + 1,
    //     //     sender: `Sender ${i + 1}`,
    //     //     receiver: `Receiver ${i + 1}`,
    //     //     message: `This is message number ${i + 1} for board ${i % 3 === 0 ? 'Alpha' : 'Beta'}`,
    //     //     timestamp: new Date().toISOString()
    //     // }));

    //     // setTimeout(() => {
    //     //     const start = (page - 1) * limit;
    //     //     const end = start + limit;
    //     //     const paginated = dummyMessages.slice(start, end);

    //     //     setSmsList(paginated);
    //     //     setTotal(dummyMessages.length);
    //     //     setLoading(false);
    //     // }, 500); // simulate a small loading delay

    //     fetch(`https://tasker-backend-2hgl.onrender.com/api/sms?page=${page}&limit=${limit}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data && Array.isArray(data.messages)) {
    //                 setSmsList(data.messages);
    //                 setTotal(data.total || 0);
    //             } else {
    //                 setError("Unexpected response from server.");
    //                 setSmsList([]);
    //                 setTotal(0);
    //             }
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             console.error('Error fetching SMS:', err);
    //             setError("Failed to load data.");
    //             setLoading(false);
    //         });
    // }, [page]);

    useEffect(() => {
  setLoading(true);
  setError('');

  const params = new URLSearchParams({
    page,
    limit,
    sender: filters.sender,
    receiver: filters.receiver,
    message: filters.message,
  });

  fetch(`https://tasker-backend-2hgl.onrender.com/api/sms?${params.toString()}`)
    .then((res) => res.json())
    .then((data) => {
      if (data && Array.isArray(data.messages)) {
        setSmsList(data.messages);
        setTotal(data.total || 0);
      } else {
        setError("Unexpected response from server.");
        setSmsList([]);
        setTotal(0);
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error('Error fetching SMS:', err);
      setError("Failed to load data.");
      setLoading(false);
    });
}, [page, filters]);


    useEffect(() => {
        const filtered = smsList.filter(sms => {
            return (
                sms.sender.toLowerCase().includes(filters.sender.toLowerCase()) &&
                sms.receiver.toLowerCase().includes(filters.receiver.toLowerCase()) &&
                sms.message.toLowerCase().includes(filters.message.toLowerCase())
            );
        });
        setFilteredList(filtered);
    }, [filters, smsList]);

    const totalPages = Math.ceil(total / limit);

    return (
  <div className="min-h-screen w-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 py-10 px-6">
    <h2 className="text-3xl font-bold mb-8 text-emerald-700 text-center">📩 Received SMS Messages</h2>

    <FilterBar filters={filters} setFilters={setFilters} />

    <div className="min-h-[400px] max-w-screen-xl mx-auto">
      {loading ? (
        <p className="text-center text-gray-500 text-lg mt-10">Loading messages...</p>
      ) : error ? (
        <p className="text-red-500 text-center mt-10">{error}</p>
      ) : filteredList.length === 0 ? (
        <p className="text-center text-gray-600 mt-10">No messages found.</p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredList.map((sms) => (
            <div
              key={sms.id || sms._id}
              className="bg-white border border-emerald-100 p-4 rounded-xl shadow w-full sm:w-[45%] md:w-[30%] lg:w-[22%] h-60 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                <p className="mb-1 text-sm">
                  <strong className="text-emerald-600">From:</strong> {sms.sender}
                </p>
                <p className="mb-1 text-sm">
                  <strong className="text-emerald-600">To:</strong> {sms.receiver}
                </p>
                <p className="text-sm text-gray-700 mt-2 line-clamp-4">
                  <strong className="text-emerald-600">Message:</strong> {sms.message}
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-2">{new Date(sms.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Pagination */}
    {totalPages > 0 && (
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1 || loading}
          className="px-4 cursor-pointer py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 disabled:bg-gray-300 transition-all duration-300"
        >
        ⬅️
        </button>
        <span className="text-lg font-medium text-emerald-700">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages || loading}
          className="px-4 py-2 cursor-pointer bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 disabled:bg-gray-300 transition-all duration-300"
        >
        ➡️
        </button>
      </div>
    )}
  </div>
);


}

export default SMSList;
