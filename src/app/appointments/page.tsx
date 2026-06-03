const appointments = [
  {
    id: "APT-0091",
    date: "Jun 3, 2026",
    time: "09:00 AM",
    patient: "Sarah Mitchell",
    patientId: "P-00421",
    doctor: "Dr. Anaya Patel",
    type: "Follow-up",
    status: "Confirmed",
  },
  {
    id: "APT-0090",
    date: "Jun 3, 2026",
    time: "10:30 AM",
    patient: "James Okonkwo",
    patientId: "P-00418",
    doctor: "Dr. Hiroshi Tanaka",
    type: "Consultation",
    status: "Confirmed",
  },
  {
    id: "APT-0089",
    date: "Jun 3, 2026",
    time: "11:00 AM",
    patient: "Chloe Beaumont",
    patientId: "P-00417",
    doctor: "Dr. Hiroshi Tanaka",
    type: "Check-up",
    status: "In Progress",
  },
  {
    id: "APT-0088",
    date: "Jun 3, 2026",
    time: "01:15 PM",
    patient: "Marcus Thompson",
    patientId: "P-00420",
    doctor: "Dr. Lior Ben-David",
    type: "Procedure",
    status: "Confirmed",
  },
  {
    id: "APT-0087",
    date: "Jun 3, 2026",
    time: "02:00 PM",
    patient: "Fatima Al-Rashidi",
    patientId: "P-00419",
    doctor: "Dr. Anaya Patel",
    type: "Follow-up",
    status: "Confirmed",
  },
  {
    id: "APT-0086",
    date: "Jun 3, 2026",
    time: "03:30 PM",
    patient: "Ravi Sharma",
    patientId: "P-00416",
    doctor: "Dr. Lior Ben-David",
    type: "Consultation",
    status: "Cancelled",
  },
  {
    id: "APT-0085",
    date: "Jun 4, 2026",
    time: "09:30 AM",
    patient: "Lin Wei",
    patientId: "P-00415",
    doctor: "Dr. Anaya Patel",
    type: "Check-up",
    status: "Scheduled",
  },
];

const statusClasses: Record<string, string> = {
  Confirmed:
    "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-900/30 dark:text-emerald-400",
  "In Progress":
    "bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-400",
  Scheduled:
    "bg-gray-100 text-gray-600 ring-gray-500/20 dark:bg-gray-800 dark:text-gray-400",
  Cancelled:
    "bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-900/30 dark:text-red-400",
};

const typeClasses: Record<string, string> = {
  "Follow-up": "text-violet-700 bg-violet-50 dark:text-violet-400 dark:bg-violet-900/30",
  Consultation: "text-sky-700 bg-sky-50 dark:text-sky-400 dark:bg-sky-900/30",
  "Check-up": "text-teal-700 bg-teal-50 dark:text-teal-400 dark:bg-teal-900/30",
  Procedure: "text-orange-700 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/30",
};

export default function AppointmentsPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Appointments
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {appointments.length} appointments scheduled
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
          New Appointment
        </button>
      </div>

      <div className="flex gap-3">
        {["All", "Today", "Tomorrow", "This Week"].map((filter) => (
          <button
            key={filter}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              filter === "Today"
                ? "bg-blue-600 text-white"
                : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
            }`}
          >
            {filter}
          </button>
        ))}
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
              placeholder="Search appointments..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Date &amp; Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Doctor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Status
                </th>
                <th className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {appointments.map((apt) => (
                <tr
                  key={apt.id}
                  className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                >
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {apt.date}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {apt.time}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                        {apt.patient
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {apt.patient}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {apt.patientId}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                    {apt.doctor}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${typeClasses[apt.type] ?? ""}`}
                    >
                      {apt.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusClasses[apt.status]}`}
                    >
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing <span className="font-medium">{appointments.length}</span> appointments
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
