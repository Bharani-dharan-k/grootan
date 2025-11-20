export default function LogViewer({ logs }) {
return (
<div className="bg-white w-full rounded-2xl p-6 shadow-md border overflow-y-auto max-h-[400px]">
<h2 className="text-xl font-semibold mb-4">Uploaded Logs</h2>


{logs.length === 0 ? (
<p className="text-gray-500">No logs uploaded yet.</p>
) : (
<ul className="space-y-3">
{logs.map((log) => (
<li key={log._id} className="p-3 border rounded-xl shadow-sm bg-gray-50">
<p className="font-medium">{log.filename}</p>
<p className="text-sm text-gray-500">Uploaded at: {new Date(log.createdAt).toLocaleString()}</p>
</li>
))}
</ul>
)}
</div>
);
}