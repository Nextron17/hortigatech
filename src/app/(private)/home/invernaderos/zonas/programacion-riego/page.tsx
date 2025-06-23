"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function ProgramacionRiego() {
  const searchParams = useSearchParams();
  const zonaId = searchParams.get("id");

  const [programaciones, setProgramaciones] = useState([
    {
      id: 1,
      activacion: "2025-06-22T06:00",
      desactivacion: "2025-06-22T07:00",
      descripcion: "Riego de la mañana",
      tipo_riego: "aspersión",
      zona_id: zonaId,
    },
  ]);

  const [form, setForm] = useState({
    activacion: "",
    desactivacion: "",
    descripcion: "",
    tipo_riego: "",
  });

  const agregar = () => {
    // Simple validation for required fields
    if (!form.activacion || !form.desactivacion || !form.descripcion || !form.tipo_riego) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    setProgramaciones([
      ...programaciones,
      { id: Date.now(), ...form, zona_id: zonaId },
    ]);
    setForm({ activacion: "", desactivacion: "", descripcion: "", tipo_riego: "" });
  };

  const eliminar = (id: number) => {
    setProgramaciones(programaciones.filter((p) => p.id !== id));
  };

  return (
    <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen font-body text-body antialiased">
      <h1 className="text-5xl font-bold text-darkGreen-900 mb-8 text-center md:text-left">
        Programación de Riego - Zona {zonaId}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {programaciones
          .filter((p) => p.zona_id === zonaId)
          .map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-green p-6 flex flex-col gap-4"
            >
              <p className="text-lg font-semibold text-greenSecondary-900">
                Activación: <span className="font-normal text-darkGreen-700">{p.activacion.replace('T', ' ')}</span> {/* Format datetime */}
              </p>
              <p className="text-lg font-semibold text-greenSecondary-900">
                Desactivación: <span className="font-normal text-darkGreen-700">{p.desactivacion.replace('T', ' ')}</span> {/* Format datetime */}
              </p>
              <p className="text-gray-400">
                Descripción: <span className="text-gray-800">{p.descripcion}</span>
              </p>
              <p className="text-sm text-darkGreen-900 font-medium">
                Tipo: <span className="text-darkGreen-700">{p.tipo_riego}</span>
              </p>
              <div className="flex justify-end mt-4 pt-4 border-t border-gray-800 border-opacity-10">
                <button
                  onClick={() => eliminar(p.id)}
                  className="bg-pink-500 hover:bg-pinkSecondary-900 text-white font-bold py-2 px-5 rounded-full transition duration-200 ease-in-out"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="bg-white rounded-3xl shadow-green p-8 w-full max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-darkGreen-900 mb-6 text-center">
          Agregar Programación
        </h2>
        <input
          type="datetime-local"
          value={form.activacion}
          onChange={(e) => setForm({ ...form, activacion: e.target.value })}
          className="w-full p-3 mb-4 border border-gray-800 border-opacity-20 rounded-md focus:outline-none focus:border-green-500 transition duration-200 placeholder-gray-400"
        />
        <input
          type="datetime-local"
          value={form.desactivacion}
          onChange={(e) => setForm({ ...form, desactivacion: e.target.value })}
          className="w-full p-3 mb-4 border border-gray-800 border-opacity-20 rounded-md focus:outline-none focus:border-green-500 transition duration-200 placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
          className="w-full p-3 mb-4 border border-gray-800 border-opacity-20 rounded-md focus:outline-none focus:border-green-500 transition duration-200 placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="Tipo de riego"
          value={form.tipo_riego}
          onChange={(e) => setForm({ ...form, tipo_riego: e.target.value })}
          className="w-full p-3 mb-6 border border-gray-800 border-opacity-20 rounded-md focus:outline-none focus:border-green-500 transition duration-200 placeholder-gray-400"
        />
        <div className="flex justify-end">
          <button
            onClick={agregar}
            className="bg-green-500 hover:bg-darkGreen-700 text-white font-bold py-3 px-6 rounded-full transition duration-200 ease-in-out shadow-green"
          >
            Agregar
          </button>
        </div>
      </div>
    </main>
  );
}