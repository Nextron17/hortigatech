"use client";

import React, { useState } from "react";

export default function CultivosPage() {
  const [cultivos, setCultivos] = useState([
    {
      id: 1,
      nombre_cultivo: "Tomate",
      descripcion: "Cultivo de tomate cherry",
      temp_min: 18.5,
      temp_max: 28.0,
      humedad_min: 50.0,
      humedad_max: 80.0,
      id_zona: 1,
      id_invernadero: 1,
      fecha_inicio: "2025-06-29",
      estado: "activo",
    },
  ]);

  const [form, setForm] = useState({
    nombre_cultivo: "",
    descripcion: "",
    temp_min: "",
    temp_max: "",
    humedad_min: "",
    humedad_max: "",
    id_zona: "",
    id_invernadero: "",
    fecha_inicio: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const agregarCultivo = () => {
    if (
      !form.nombre_cultivo ||
      !form.descripcion ||
      !form.temp_min ||
      !form.temp_max ||
      !form.humedad_min ||
      !form.humedad_max ||
      !form.id_zona ||
      !form.id_invernadero ||
      !form.fecha_inicio
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const nuevo = {
      id: Date.now(),
      ...form,
      estado: "activo",
    };

    setCultivos([nuevo, ...cultivos]);
    setForm({
      nombre_cultivo: "",
      descripcion: "",
      temp_min: "",
      temp_max: "",
      humedad_min: "",
      humedad_max: "",
      id_zona: "",
      id_invernadero: "",
      fecha_inicio: "",
    });
    setModalOpen(false);
  };

  const inactivo = (id: number) => {
    setCultivos(cultivos.filter((c) => c.id !== id));
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Gestión de Cultivos</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Crear Cultivo
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cultivos.map((c) => (
          <div
            key={c.id}
            className="bg-white border border-gray-200 p-5 rounded-lg shadow-md relative"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {c.nombre_cultivo}
            </h2>
            <p className="text-sm text-gray-600 mb-2">{c.descripcion}</p>

            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                🌡️ Temp: {c.temp_min}°C ~ {c.temp_max}°C
              </li>
              <li>
                💧 Humedad: {c.humedad_min}% ~ {c.humedad_max}%
              </li>
              <li>📍 Zona: {c.id_zona}</li>
              <li>🏠 Invernadero: {c.id_invernadero}</li>
              <li>📅 Inicio: {c.fecha_inicio}</li>
              <li>
                ⚙️ Estado:{" "}
                <span className="uppercase font-medium">{c.estado}</span>
              </li>
            </ul>

            <button
              onClick={() => inactivo(c.id)}
              className="absolute top-2 right-3 text-red-500 hover:text-red-700 text-sm"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Nuevo Cultivo
            </h2>

            <div className="space-y-3">
              <input
                placeholder="Nombre del cultivo"
                value={form.nombre_cultivo}
                onChange={(e) =>
                  setForm({ ...form, nombre_cultivo: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Descripción"
                value={form.descripcion}
                onChange={(e) =>
                  setForm({ ...form, descripcion: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="Temp. mínima °C"
                  value={form.temp_min}
                  onChange={(e) =>
                    setForm({ ...form, temp_min: e.target.value })
                  }
                  className="p-2 border rounded"
                />
                <input
                  placeholder="Temp. máxima °C"
                  value={form.temp_max}
                  onChange={(e) =>
                    setForm({ ...form, temp_max: e.target.value })
                  }
                  className="p-2 border rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="Humedad mínima %"
                  value={form.humedad_min}
                  onChange={(e) =>
                    setForm({ ...form, humedad_min: e.target.value })
                  }
                  className="p-2 border rounded"
                />
                <input
                  placeholder="Humedad máxima %"
                  value={form.humedad_max}
                  onChange={(e) =>
                    setForm({ ...form, humedad_max: e.target.value })
                  }
                  className="p-2 border rounded"
                />
              </div>
              <input
                placeholder="ID Zona"
                value={form.id_zona}
                onChange={(e) => setForm({ ...form, id_zona: e.target.value })}
                className="w-full p-2 border rounded"
              />
              <input
                placeholder="ID Invernadero"
                value={form.id_invernadero}
                onChange={(e) =>
                  setForm({ ...form, id_invernadero: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="date"
                value={form.fecha_inicio}
                onChange={(e) =>
                  setForm({ ...form, fecha_inicio: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancelar
              </button>
              <button
                onClick={agregarCultivo}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
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
