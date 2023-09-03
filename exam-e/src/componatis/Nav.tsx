import React from 'react'

const nav = () => {
  return (
    <div><nav className="flex sm:justify-center space-x-4">
    {[
      ['Home', '/dashboard'],
      ['Team', '/team'],
      ['Login', '/Login'],
     

    ].map(([title, url]) => (
      <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
    ))}

    
  </nav></div>
  )
}

export default nav