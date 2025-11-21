import React from 'react';
import { Building2, MapPin, DollarSign } from 'lucide-react';
import Card from './Card';

const JobBoardWidget = () => {
  const jobs = [
    { id: 1, role: 'Frontend Developer', company: 'TechFlow', logo: 'TF', salary: '$90k - $120k', type: 'Remote' },
    { id: 2, role: 'Product Designer', company: 'Creatives Inc', logo: 'CI', salary: '$100k - $140k', type: 'Hybrid' },
    { id: 3, role: 'React Engineer', company: 'WebScale', logo: 'WS', salary: '$110k - $130k', type: 'Remote' },
  ];

  return (
    <Card className="h-full">
      <div className="p-6 border-b border-purple-50 flex justify-between items-center">
        <h3 className="font-bold text-slate-800">Recommended Jobs</h3>
        <a href="#" className="text-sm text-purple-600 hover:text-purple-800 font-medium">View All</a>
      </div>
      <div className="divide-y divide-slate-50">
        {jobs.map(job => (
          <div key={job.id} className="p-4 hover:bg-purple-50/50 transition-colors flex items-start justify-between group cursor-pointer">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs">
                {job.logo}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 group-hover:text-purple-700 transition-colors">{job.role}</h4>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <Building2 size={10} /> {job.company}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><MapPin size={10} /> {job.type}</span>
                  <span className="flex items-center gap-1"><DollarSign size={10} /> {job.salary}</span>
                </div>
              </div>
            </div>
            <button className="text-xs font-medium px-3 py-1.5 rounded-md border border-purple-200 text-purple-700 hover:bg-purple-600 hover:text-white transition-all">
              Apply
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default JobBoardWidget;