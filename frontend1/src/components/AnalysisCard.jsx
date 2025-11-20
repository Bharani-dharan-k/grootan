export default function AnalysisCard({ result }) {
if (!result) return null;


return (
<div className="bg-white rounded-2xl p-6 shadow-md border mt-6">
<h2 className="text-xl font-semibold mb-3">AI Analysis Result</h2>


<p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
{result.analysis}
</p>
</div>
);
}