import React from 'react';
import { TrendingUp } from 'lucide-react';
import Card from './Card';

const WeeklyTracker = () => {
  const data = [
    { day: 'Mon', count: 2 },
    { day: 'Tue', count: 5 },
    { day: 'Wed', count: 3 },
    { day: 'Thu', count: 8 },
    { day: 'Fri', count: 4 },
    { day: 'Sat', count: 1 },
    { day: 'Sun', count: 0 },
  ];
  
  const max = Math.max(...data.map(d => d.count));

  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-slate-800">Weekly Activity</h3>
          <p className="text-sm text-slate-500">Applications sent last 7 days</p>
        </div>
        <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center">
          <TrendingUp size={14} className="mr-1" /> +12%
        </div>
      </div>
      
      <div className="flex-1 flex items-end justify-between gap-2 mt-2">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center w-full group cursor-pointer">

            <div className="relative w-full max-w-[32px] bg-purple-50 rounded-t-md h-32 overflow-hidden flex items-end">

              <div 
                style={{ height: `${(item.count / max) * 100}%` }} 
                className={`w-full rounded-t-md transition-all duration-700 ease-out ${item.count > 0 ? 'bg-purple-500 group-hover:bg-purple-600' : 'bg-transparent'}`}
              />
              
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                {item.count} apps
              </div>
            </div>
            <span className="text-xs font-medium text-slate-400 mt-2">{item.day}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WeeklyTracker;