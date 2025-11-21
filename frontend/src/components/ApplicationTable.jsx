import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';

const ApplicationTable = () => {
  const apps = [
    { id: 1, role: 'Senior Frontend Dev', company: 'Google', date: 'Oct 24', status: 'Interview' },
    { id: 2, role: 'UI Engineer', company: 'Netflix', date: 'Oct 22', status: 'Applied' },
    { id: 3, role: 'Full Stack Dev', company: 'Amazon', date: 'Oct 20', status: 'Rejected' },
    { id: 4, role: 'React Developer', company: 'Meta', date: 'Oct 18', status: 'Offer' },
  ];

  return (
    <Card className="overflow-hidden h-full">
      <div className="p-6 border-b border-purple-50 flex justify-between items-center">
        <h3 className="font-bold text-slate-800">Recent Applications</h3>
        <div className="flex gap-2">
          <button className="text-xs px-3 py-1.5 h-auto bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors font-medium">
            Filter
          </button>
          <button className="text-xs px-3 py-1.5 h-auto bg-purple-700 hover:bg-purple-800 text-white shadow-sm shadow-purple-200 rounded-lg transition-colors font-medium inline-flex items-center">
            <Plus size={14} className="mr-1" /> Add New
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
            <tr>
              <th className="px-6 py-3 font-medium">Role & Company</th>
              <th className="px-6 py-3 font-medium">Date Applied</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {apps.map((app) => (
              <tr key={app.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <p className="font-semibold text-slate-800 group-hover:text-purple-700 transition-colors">{app.role}</p>
                  <p className="text-xs text-slate-500">{app.company}</p>
                </td>
                <td className="px-6 py-4 text-slate-500">{app.date}</td>
                <td className="px-6 py-4">
                  <Badge status={app.status} />
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-purple-600 transition-colors p-1 rounded-md hover:bg-slate-100">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ApplicationTable;