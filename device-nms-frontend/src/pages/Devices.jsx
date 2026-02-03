import { useEffect, useState } from "react";
import api from "../services/api";

export default function Devices() {
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    api
      .get("/devices", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDevices(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Cannot fetch devices. Make sure backend is running and authorized.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            📡 Device Monitor
          </h1>
          <span className="mt-2 sm:mt-0 text-sm text-gray-500">
            Total Devices: {devices.length}
          </span>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-100 text-red-700 p-3">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-10 text-gray-500 text-lg">
            Loading devices...
          </div>
        )}

        {/* Table */}
        {!loading && devices.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-left">
                  <th className="p-3">Name</th>
                  <th className="p-3">IP Address</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Last Checked</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((d) => (
                  <tr
                    key={d.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-3 font-medium">{d.name}</td>
                    <td className="p-3 text-gray-600">{d.ip}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold
                          ${
                            d.status === "UP"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                      >
                        {d.status}
                      </span>
                    </td>
                    <td className="p-3 text-gray-500 text-sm">
                      {new Date(d.lastChecked).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {!loading && devices.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No devices found 🚫
          </div>
        )}
      </div>
    </div>
  );
}
