const stats = [
  {
    label: "Total Patients",
    value: "1,284",
    change: "+12 this month",
    positive: true,
    icon: (
      <svg
        className="h-5 w-5 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: "Appointments Today",
    value: "38",
    change: "4 remaining",
    positive: true,
    icon: (
      <svg
        className="h-5 w-5 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Pending Reports",
    value: "17",
    change: "3 urgent",
    positive: false,
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    label: "Active Staff",
    value: "52",
    change: "On shift now",
    positive: true,
    icon: (
      <svg
        className="h-5 w-5 text-violet-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
];

const recentPatients = [
  {
    id: "P-00421",
    name: "Sarah Mitchell",
    age: 34,
    condition: "Hypertension",
    status: "Stable",
    statusColor: "emerald",
    lastVisit: "Jun 3, 2026",
  },
  {
    id: "P-00418",
    name: "James Okonkwo",
    age: 61,
    condition: "Type 2 Diabetes",
    status: "Follow-up",
    statusColor: "amber",
    lastVisit: "Jun 2, 2026",
  },
  {
    id: "P-00415",
    name: "Lin Wei",
    age: 28,
    condition: "Acute Bronchitis",
    status: "Recovering",
    statusColor: "blue",
    lastVisit: "Jun 1, 2026",
  },
];

const statusClasses: Record<string, string> = {
  emerald:
    "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-900/30 dark:text-emerald-400",
  amber:
    "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-900/30 dark:text-amber-400",
  blue: "bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-400",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Overview of your practice — Tuesday, June 3, 2026
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.label}
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800">
                {stat.icon}
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {stat.value}
              </p>
              <p
                className={`mt-1 text-xs font-medium ${
                  stat.positive
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-amber-600 dark:text-amber-400"
                }`}
              >
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              Recent Patients
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Latest activity across all wards
            </p>
          </div>
          <a
            href="/patients"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View all
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Condition
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Last Visit
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {recentPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
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
                    {patient.age}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    {patient.condition}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusClasses[patient.statusColor]}`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {patient.lastVisit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
