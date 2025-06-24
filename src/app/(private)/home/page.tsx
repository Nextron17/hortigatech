
import React from "react";
import Link from "next/link";

function DashboardCard({ title, icon: Icon, href }) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl shadow-green p-6 flex flex-col items-center justify-center text-center transition duration-200 ease-in-out hover:bg-sweetGreen-200 hover:shadow-none"
    >
      <div className="mb-4 text-greenSecondary-900 group-hover:text-darkGreen-900 transition duration-200">
        <Icon className="w-16 h-16 sm:w-20 sm:h-20" /> 
      </div>
      <h2 className="text-xl sm:text-2xl font-semibold text-darkGreen-900 group-hover:text-greenSecondary-900 transition duration-200">
        {title}
      </h2>
    </Link>
  );
}

const IconProgramacion = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15m0 0l-3.249 2.871m3.249-2.871V3m0 0l-3.249 2.871m0 0A9.006 9.006 0 013 12.75V15"
    />
  </svg>
);

const IconInvernaderos = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 21v-4.717c0-1.745-.968-3.413-2.614-4.296L4 10.707V15m11.25 6v-4.717c0-1.745.968-3.413 2.614-4.296L20 10.707V15m-11.25 6h6m-12 0H3c-.621 0-1.125-.504-1.125-1.125V18.75c0-.621.504-1.125 1.125-1.125H3.75m0 2.25H21A2.25 2.25 0 0023.25 18v-5.625h-.525C22.376 12.352 22 11.66 22 10.875c0-.784.376-1.476.975-1.993V7.5C22.285 6.47 21.328 5.625 20.25 5.625h-3.75V4.72c0-.546-.388-1.005-.907-1.005-.443 0-.81-.237-.99-.619L14.757 2.25H9.243L8.697 3.106C8.517 3.488 8.15 3.725 7.707 3.725c-.519 0-.907.459-.907 1.005V5.625H3.75c-1.078 0-1.95.845-1.95 1.905V18.75A2.25 2.25 0 003 21h6.75Zm9.375-9c.338 0 .6-.262.6-.6s-.262-.6-.6-.6-.6.262-.6.6.262.6.6.6ZM9.75 9.75c.338 0 .6-.262.6-.6s-.262-.6-.6-.6-.6.262-.6.6.262.6.6.6Z"
    />
  </svg>
);

const IconEstadisticas = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125l6-6 9 9V17.25m0 0a3.75 3.75 0 11.25 3.75a3.75 3.75 0 01-.25-3.75M12 21.75V17.25"
    />
  </svg>
);

const IconAgenda = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
    />
  </svg>
);

const IconConfiguraciones = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17.25 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
    />
  </svg>
);

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-body text-body antialiased">
      {/* Header */}
      <header className="py-6 sm:py-8 bg-gradient-to-br from-green-500 via-emerald-600 to-cyan-700 text-white text-center shadow-lg">
  <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-widest uppercase">
    HortiTech
  </h1>
</header>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center items-start pt-10 pb-20">
        <DashboardCard
          title="Programación"
          icon={IconProgramacion}
          href="/home/programacion" 
        />
        <DashboardCard
          title="Invernaderos"
          icon={IconInvernaderos}
          href="/home/invernaderos"
        />
        <DashboardCard
          title="Estadísticas"
          icon={IconEstadisticas}
          href="/home/estadisticas" 
        />
        <DashboardCard
          title="Agenda"
          icon={IconAgenda}
          href="/home/agenda" 
        />
        <DashboardCard
          title="Configuraciones"
          icon={IconConfiguraciones}
          href="/home/configuraciones" 
        />
      </main>

      <footer className="py-4 bg-darkGreen-900 text-white text-center text-sm">
        <p>© 2025 HortiTech. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}