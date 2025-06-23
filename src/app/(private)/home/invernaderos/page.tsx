"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function InvernaderosPage() {
  const [invernaderos, setInvernaderos] = useState([
    { id: 1, nombre: "Invernadero A", descripcion: "Cultivo de tomate", responsable_id: "101" },
    { id: 2, nombre: "Invernadero B", descripcion: "Cultivo de lechuga", responsable_id: "102" },
  ]);

  const [form, setForm] = useState({ nombre: "", descripcion: "", responsable_id: "" });
  const [modalOpen, setModalOpen] = useState(false);

  const crearInvernadero = () => {
    if (!form.nombre || !form.descripcion || !form.responsable_id) return;
    const nuevo = {
      id: Date.now(),
      nombre: form.nombre,
      descripcion: form.descripcion,
      responsable_id: form.responsable_id,
    };
    setInvernaderos([...invernaderos, nuevo]);
    setForm({ nombre: "", descripcion: "", responsable_id: "" });
    setModalOpen(false);
  };

  const eliminarInvernadero = (id: number) => {
    setInvernaderos(invernaderos.filter((inv) => inv.id !== id));
  };

  return (
    <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <h1 className="text-5xl font-bold text-darkGreen-900 mb-8 text-center md:text-left">
        Invernaderos
      </h1>

      {/* Invernaderos List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {invernaderos.map((inv) => (
          <div
            key={inv.id}
            className="bg-white rounded-2xl shadow-green p-6 flex flex-col gap-4"
          >
            <h2 className="text-2xl font-semibold text-greenSecondary-900">
              {inv.nombre}
            </h2>
            <p className="text-gray-400">{inv.descripcion}</p>
            <p className="text-sm text-darkGreen-900 font-medium">
              ID Responsable: {inv.responsable_id}
            </p>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800 border-opacity-10">
              <Link
                href={`/home/invernaderos/zonas?id_invernadero=${inv.id}`}
                className="text-green-500 hover:text-darkGreen-700 transition duration-200"
              >
                Ver zonas
              </Link>
              <button
                onClick={() => eliminarInvernadero(inv.id)}
                className="text-pink-500 hover:text-pinkSecondary-900 transition duration-200"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="bg-green-500 hover:bg-darkGreen-700 text-white font-bold py-3 px-6 rounded-full transition duration-200 ease-in-out shadow-green"
      >
        Crear Invernadero
      </button>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-green p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-darkGreen-900 mb-6 text-center">
              Nuevo Invernadero
            </h2>
            <input
              className="w-full p-3 mb-4 border border-gray-800 border-opacity-20 rounded-md focus:outline-none focus:border-green-500 transition duration-200 placeholder-gray-400"
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            />
            <input
              className="w-full p-3 mb-4 border border-gray-800 border-opacity-20 rounded-md focus:outline-none focus:border-green-500 transition duration-200 placeholder-gray-400"
              placeholder="Descripción"
              value={form.descripcion}
              onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
            />
            <input
              className="w-full p-3 mb-6 border border-gray-800 border-opacity-20 rounded-md focus:outline-none focus:border-green-500 transition duration-200 placeholder-gray-400"
              placeholder="ID Responsable"
              value={form.responsable_id}
              onChange={(e) => setForm({ ...form, responsable_id: e.target.value })}
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-5 rounded-full transition duration-200 ease-in-out"
              >
                Cancelar
              </button>
              <button
                onClick={crearInvernadero}
                className="bg-green-500 hover:bg-darkGreen-700 text-white font-bold py-2 px-5 rounded-full transition duration-200 ease-in-out"
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}