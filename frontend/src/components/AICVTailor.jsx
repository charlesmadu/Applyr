import React from 'react';
import { Sparkles, FileText } from 'lucide-react';
import Card from './Card';

const AICVTailor = () => {
  return (
    <Card className="p-0 overflow-hidden h-full flex flex-col">
      {/* Header with Gradient */}
      <div className="p-6 bg-gradient-to-br from-purple-700 to-indigo-800 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={20} className="text-yellow-300" />
          <h3 className="font-bold text-lg">AI CV Optimizer</h3>
        </div>
        <p className="text-purple-100 text-sm">Paste a job description to tailor your CV instantly.</p>
      </div>
      
      <div className="p-6 flex-1 flex flex-col gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-500 uppercase">Job Description</label>
          <textarea 
            placeholder="Paste the job description here..." 
            className="w-full h-24 p-3 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none bg-slate-50 outline-none transition-all"
          />
        </div>
        
        <div className="flex items-center justify-between p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 hover:bg-purple-50 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-md border border-slate-200 text-purple-600 group-hover:border-purple-200">
              <FileText size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">My_Resume_v1.pdf</p>
              <p className="text-xs text-slate-400">1.2 MB • PDF</p>
            </div>
          </div>
          <button className="text-xs font-medium text-slate-400 hover:text-purple-600 transition-colors">Change</button>
        </div>

        <button className="w-full mt-auto inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-purple-700 hover:bg-purple-800 text-white shadow-sm shadow-purple-200 transition-colors">
          <Sparkles size={16} className="mr-2" />
          Generate Tailored CV
        </button>
      </div>
    </Card>
  );
};

export default AICVTailor;