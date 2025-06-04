import { mashData } from '@/data'
import React from 'react'

const Mashes = () => {
  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--blue)] mb-8">
        Animal Feed Mashes
      </h2>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white text-sm text-left text-gray-700">
          <thead className="bg-[var(--blue)] text-white text-sm uppercase tracking-wide">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Age Range</th>
              <th className="px-6 py-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {mashData.map((mash, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">{mash.name}</td>
                <td className="px-6 py-4">{mash.age_range}</td>
                <td className="px-6 py-4">{mash.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Mashes