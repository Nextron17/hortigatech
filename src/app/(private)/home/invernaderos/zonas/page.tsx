"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ZonasPage() {
  const searchParams = useSearchParams();
  const id_invernadero = searchParams.get("id_invernadero") || "1";

  const [zonas, setZonas] = useState([
    { id: 1, nombre: "Zona Norte", descripciones_add: "Tomates y pimientos" },
    { id: 2, nombre: "Zona Sur", descripciones_add: "Lechugas y espinacas" },
  ]);

  const [form, setForm] = useState({ nombre: "", descripciones_add: "" });
  const [modalOpen, setModalOpen] = useState(false);

  const crearZona = () => {
    const nueva = {
      id: Date.now(),
      ...form,
    };
    setZonas([...zonas, nueva]);
    setForm({ nombre: "", descripciones_add: "" });
    setModalOpen(false);
  };

  const eliminar = (id: number) => {
    setZonas(zonas.filter((z) => z.id !== id));
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen font-body text-body"> {/* Usando bg-gray-50 y añadiendo font-body, text-body */}
      <h1 className="text-2xl font-bold text-darkGreen-700 mb-6"> {/* Usando text-darkGreen-700 */}
        Zonas del Invernadero {id_invernadero}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {zonas.map((zona) => (
          <div key={zona.id} className="bg-white p-4 rounded-md shadow-green border border-gray-800 border-opacity-10"> {/* Usando shadow-green y border-gray-800 con opacidad */}
            <h2 className="text-lg font-semibold text-darkGreen-700">{zona.nombre}</h2> {/* Usando text-darkGreen-700 */}
            <p className="text-gray-800 text-sm">{zona.descripciones_add}</p> {/* Usando text-gray-800 */}
            <div className="flex justify-between mt-4">
              <Link
                href={`/home/invernaderos/zonas/programacion-riego?id=${zona.id}`}
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-darkGreen-700 transition duration-200" // Usando bg-green-500 y hover:bg-darkGreen-700
              >
                Riego
              </Link>
              <Link
                href={`/home/invernaderos/zonas/programacion-iluminacion?id=${zona.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200" // blue-500 y blue-600 no estaban en tu CSS, se mantienen como Tailwind predeterminado
              >
                Iluminación
              </Link>
              <button
                onClick={() => eliminar(zona.id)}
                className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pinkSecondary-900 transition duration-200" // Usando bg-pink-500 y hover:bg-pinkSecondary-900
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="mt-8 bg-green-500 text-white px-6 py-3 rounded-full shadow-green hover:bg-darkGreen-700 transition duration-200" // Usando bg-green-500, shadow-green y hover:bg-darkGreen-700, rounded-full
      >
        Crear Zona
      </button>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"> {/* rounded-lg y shadow-lg no estaban en tu CSS, se mantienen como Tailwind predeterminado */}
            <h2 className="text-xl font-semibold text-darkGreen-700 mb-4">Nueva Zona</h2> {/* Usando text-darkGreen-700 */}

            <input
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full border border-gray-800 border-opacity-20 p-2 rounded-md mb-3 focus:outline-none focus:border-green-500 transition duration-200 placeholder-gray-400" // Usando border-gray-800 y focus:border-green-500, placeholder-gray-400
            />
            <textarea
              placeholder="Descripción"
              value={form.descripciones_add}
              onChange={(e) => setForm({ ...form, descripciones_add: e.target.value })}
              className="w-full border border-gray-800 border-opacity-20 p-2 rounded-md mb-4 focus:outline-none focus:border-green-500 transition duration-200 placeholder-gray-400" // Usando border-gray-800 y focus:border-green-500, placeholder-gray-400
            />

            <div className="flex justify-end gap-2">
              <button onClick={() => setModalOpen(false)} className="bg-gray-400 px-4 py-2 rounded-md hover:bg-gray-500 transition duration-200"> {/* Usando bg-gray-400 y hover:bg-gray-500 */}
                Cancelar
              </button>
              <button onClick={crearZona} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-darkGreen-700 transition duration-200"> {/* Usando bg-green-500 y hover:bg-darkGreen-700 */}
                Crear
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}