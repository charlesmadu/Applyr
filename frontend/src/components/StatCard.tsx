import React from 'react'
import Card from './Card';

interface StatCardProps {
    title: string;
    value: string;
    icon: React.ElementType;
    colorClass: string;
    trend?: string;
}

const StatCard = ({ title, value, icon: Icon, colorClass, trend }: StatCardProps) => (
  <Card className="p-4 flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
    <div className="flex items-start justify-between">
      <div className={`p-2 rounded-lg ${colorClass}`}>
        <Icon size={20} />
      </div>
      {trend && (
        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
          {trend}
        </span>
      )}
    </div>
    <div className="mt-3">
      <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{title}</p>
    </div>
  </Card>
);

export default StatCard;
