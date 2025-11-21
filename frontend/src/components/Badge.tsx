import React from 'react'

interface BadeProps{
    status: string
}

const Badge = ({status}: BadeProps) => {

    const styles : Record<string, string> = {
        Applied: "bg-blue-50 text-blue-700 border-blue-100",
        Interview: "bg-amber-50 text-amber-700 border-amber-100",
        Offer: "bg-emerald-50 text-emerald-700 border-emerald-100",
        Rejected: "bg-slate-50 text-slate-600 border-slate-100", 
    }
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${styles[status] || styles.Applied}`}>
      {status}
    </span>
  )
}

export default Badge