const patients = [
  {
    id: "P-00421",
    name: "Sarah Mitchell",
    age: 34,
    dob: "Mar 12, 1992",
    condition: "Hypertension",
    doctor: "Dr. Anaya Patel",
    status: "Active",
    lastVisit: "Jun 3, 2026",
  },
  {
    id: "P-00420",
    name: "Marcus Thompson",
    age: 47,
    dob: "Jan 5, 1979",
    condition: "Coronary Artery Disease",
    doctor: "Dr. Lior Ben-David",
    status: "Active",
    lastVisit: "Jun 2, 2026",
  },
  {
    id: "P-00419",
    name: "Fatima Al-Rashidi",
    age: 55,
    dob: "Sep 22, 1970",
    condition: "Osteoporosis",
    doctor: "Dr. Anaya Patel",
    status: "Active",
    lastVisit: "Jun 2, 2026",
  },
  {
    id: "P-00418",
    name: "James Okonkwo",
    age: 61,
    dob: "Feb 17, 1965",
    condition: "Type 2 Diabetes",
    doctor: "Dr. Hiroshi Tanaka",
    status: "Follow-up",
    lastVisit: "Jun 2, 2026",
  },
  {
    id: "P-00417",
    name: "Chloe Beaumont",
    age: 22,
    dob: "Nov 30, 2003",
    condition: "Asthma",
    doctor: "Dr. Hiroshi Tanaka",
    status: "Active",
    lastVisit: "May 30, 2026",
  },
  {
    id: "P-00416",
    name: "Ravi Sharma",
    age: 39,
    dob: "Jul 8, 1986",
    condition: "Migraine",
    doctor: "Dr. Lior Ben-David",
    status: "Inactive",
    lastVisit: "May 28, 2026",
  },
  {
    id: "P-00415",
    name: "Lin Wei",
    age: 28,
    dob: "Apr 14, 1998",
    condition: "Acute Bronchitis",
    doctor: "Dr. Anaya Patel",
    status: "Recovering",
    lastVisit: "Jun 1, 2026",
  },
];

const statusClasses: Record<string, string> = {
  Active:
    "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Follow-up":
    "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-900/30 dark:text-amber-400",
  Inactive:
    "bg-gray-100 text-gray-600 ring-gray-500/20 dark:bg-gray-800 dark:text-gray-400",
  Recovering:
    "bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-400",
};

export default function PatientsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Patients
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {patients.length} patients registered
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          New Patient
        </button>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center gap-4 border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <div className="relative flex-1 max-w-sm">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search patients..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  DOB / Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Condition
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Assigned Doctor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Last Visit
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {patients.map((patient) => (
                <tr
                  key={patient.id}
                  className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                        {patient.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {patient.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {patient.id}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    <span>{patient.dob}</span>
                    <span className="ml-1 text-xs text-gray-400">
                      ({patient.age} yrs)
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    {patient.condition}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    {patient.doctor}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusClasses[patient.status]}`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {patient.lastVisit}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing <span className="font-medium">{patients.length}</span> of{" "}
            <span className="font-medium">1,284</span> patients
          </p>
          <div className="flex gap-2">
            <button
              disabled
              className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-400 dark:border-gray-700"
            >
              Previous
            </button>
            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
