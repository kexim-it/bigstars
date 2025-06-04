import { concentratesPercentData } from '@/data'
import React from 'react'

const ConcentratePercent = () => {
  return (
    <section aria-labelledby="concentrates-table-title" className="p-4">
      <h2 id="concentrates-table-title" className="text-2xl font-semibold mb-4">
        Poultry Feed Concentrates
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-[var(--deep-blue)] divide-y divide-[var(--deep-blue)]">
          <caption className="sr-only">
            Table showing different poultry feed concentrates, their percentile inclusion, and descriptions.
          </caption>
          <thead className="bg-[var(--blue)] text-white">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider border border-gray-300"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider border border-gray-300"
              >
                Percentile
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider border border-gray-300"
              >
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {concentratesPercentData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                  {item.percentile}
                </td>
                <td className="px-6 py-4 border border-gray-300">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ConcentratePercent