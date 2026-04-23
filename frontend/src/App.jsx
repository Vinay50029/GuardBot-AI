import React, { useState } from 'react';
import axios from 'axios';
import { Shield, Search, CheckCircle, AlertTriangle, Github, Loader2 } from 'lucide-react';

function App() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAudit = async () => {
    if (!url) return;
    setLoading(true);
    try {
      // Connecting to our Spring Boot Backend
      const response = await axios.post('http://localhost:8080/api/audit', { repoUrl: url });
      setResult(response.data);
    } catch (error) {
      console.error("Error auditing repo", error);
      alert("Make sure your Spring Boot backend is running on port 8080!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="text-emerald-400 w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-tight">GuardBot <span className="text-emerald-400">AI</span></h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 text-sm">DevSecOps Auditor v1.0</span>
          <Github className="text-slate-400 w-5 h-5 cursor-pointer hover:text-white transition-colors" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-8">
        {/* Search Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Audit Your Repository for Vulnerabilities</h2>
          <p className="text-slate-400 text-lg mb-8">Enter a public GitHub URL to perform an AI-powered security scan.</p>
          
          <div className="flex gap-2 max-w-2xl mx-auto bg-slate-800 p-2 rounded-xl border border-slate-700 shadow-2xl">
            <input 
              type="text" 
              placeholder="https://github.com/username/repo"
              className="flex-1 bg-transparent border-none outline-none px-4 text-white"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button 
              onClick={handleAudit}
              disabled={loading}
              className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Search className="w-5 h-5" />}
              {loading ? "Scanning..." : "Scan Repo"}
            </button>
          </div>
        </section>

        {/* Results Section */}
        {result && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Summary Card */}
            <div className="md:col-span-1 bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="text-emerald-400 w-5 h-5" /> Summary
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-900 rounded-xl">
                  <p className="text-slate-400 text-sm">Repository</p>
                  <p className="font-mono text-emerald-400">{result.repoName}</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-xl">
                  <p className="text-slate-400 text-sm">Status</p>
                  <p className="font-bold">{result.status}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-2">Key Risks Found</p>
                  <div className="flex flex-wrap gap-2">
                    {result.identifiedRisks.map((risk, i) => (
                      <span key={i} className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs border border-red-500/30">
                        {risk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Report Card */}
            <div className="md:col-span-2 bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="text-amber-400 w-5 h-5" /> AI Security Report
              </h3>
              <div className="prose prose-invert max-w-none bg-slate-900 p-6 rounded-xl border border-slate-700 h-[400px] overflow-y-auto">
                <pre className="whitespace-pre-wrap font-sans text-slate-300 leading-relaxed">
                  {result.aiReport}
                </pre>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
