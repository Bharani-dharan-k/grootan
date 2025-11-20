import { useEffect, useState } from "react";
import FileUpload from "../components/FileUpload";
import LogViewer from "../components/LogViewer";
import AnalysisCard from "../components/AnalysisCard";
import { getAllLogs, analyzeLog } from "../utils/api";


export default function Dashboard() {
const [logs, setLogs] = useState([]);
const [analysis, setAnalysis] = useState(null);


const fetchLogs = async () => {
try {
const res = await getAllLogs();
setLogs(res.data);
} catch (err) {
console.error(err);
}
};


useEffect(() => {
fetchLogs();
}, []);


const handleUploadSuccess = async (data) => {
await fetchLogs();


const res = await analyzeLog(data.logId);
setAnalysis(res.data);
};


return (
<div className="p-8 bg-gray-100 min-h-screen space-y-6">
<h1 className="text-3xl font-bold text-center mb-6">AI Bug Tracker Dashboard</h1>


<FileUpload onUploadSuccess={handleUploadSuccess} />


<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<LogViewer logs={logs} />
<AnalysisCard result={analysis} />
</div>
</div>
);
}