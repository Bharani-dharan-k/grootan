import { useState } from "react";
import { uploadLog } from "../utils/api";


export default function FileUpload({ onUploadSuccess }) {
const [file, setFile] = useState(null);
const [loading, setLoading] = useState(false);


const handleUpload = async () => {
if (!file) return;


setLoading(true);
try {
const res = await uploadLog(file);
onUploadSuccess(res.data);
} catch (err) {
console.error(err);
alert("Upload failed");
}
setLoading(false);
};


return (
<div className="bg-white p-6 rounded-2xl shadow-md border w-full max-w-xl mx-auto">
<h2 className="text-xl font-semibold mb-4">Upload Log File</h2>


<input
type="file"
className="mb-4 w-full border rounded-lg p-2"
onChange={(e) => setFile(e.target.files[0])}
/>


<button
onClick={handleUpload}
disabled={loading}
className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition disabled:bg-gray-400"
>
{loading ? "Uploading..." : "Upload"}
</button>
</div>
);
}