"use client";

import React, { useState } from "react";

export default function BitacoraPage() {
  const [publicaciones, setPublicaciones] = useState([
    {
      id: 1,
      titulo: "Fallo en sensor de humedad",
      contenido: "El sensor de humedad de la Zona 2 dejó de transmitir datos.",
      importancia: "alta",
      tipo_evento: "fallo_sensor",
      id_invernadero: 1,
      id_zona: 2,
      autor_id: 3,
      timestamp_publicacion: "2025-06-29 10:32",
    },
    {
      id: 2,
      titulo: "Cambio de cultivo",
      contenido: "Se ha reemplazado el cultivo de tomates por pimientos.",
      importancia: "media",
      tipo_evento: "cambio_cultivo",
      id_invernadero: 1,
      id_zona: 1,
      autor_id: 2,
      timestamp_publicacion: "2025-06-28 15:20",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    titulo: "",
    contenido: "",
    importancia: "media",
    tipo_evento: "",
    id_invernadero: "1",
    id_zona: "",
    autor_id: "1",
  });

  const crearPublicacion = () => {
    if (!form.titulo || !form.contenido) {
      alert("Completa al menos el título y contenido.");
      return;
    }

    const nueva = {
      id: Date.now(),
      ...form,
      timestamp_publicacion: new Date().toISOString().slice(0, 16).replace("T", " "),
    };

    setPublicaciones([...publicaciones, nueva]);
    setForm({
      titulo: "",
      contenido: "",
      importancia: "media",
      tipo_evento: "",
      id_invernadero: "1",
      id_zona: "",
      autor_id: "1",
    });
    setModalOpen(false);
  };

  const eliminarPublicacion = (id: number) => {
    setPublicaciones(publicaciones.filter((pub) => pub.id !== id));
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen font-body">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Bitácora de Actividades
      </h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Nueva Publicación
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publicaciones.map((pub) => (
          <div
            key={pub.id}
            className={`p-5 rounded-xl shadow border border-opacity-30 relative ${
              pub.importancia === "alta"
                ? "border-red-500 bg-red-50"
                : pub.importancia === "baja"
                ? "border-blue-300 bg-blue-50"
                : "border-yellow-400 bg-yellow-50"
            }`}
          >
            <h2 className="text-xl font-semibold text-gray-800">{pub.titulo}</h2>
            <p className="text-sm text-gray-700 mt-2">{pub.contenido}</p>
            <div className="text-xs text-gray-600 mt-4">
              <p>Evento: <strong>{pub.tipo_evento || "sin especificar"}</strong></p>
              <p>Invernadero: #{pub.id_invernadero}</p>
              {pub.id_zona && <p>Zona: #{pub.id_zona}</p>}
              <p>Autor ID: {pub.autor_id}</p>
              <p>Publicado: {pub.timestamp_publicacion}</p>
            </div>
            <button
              onClick={() => eliminarPublicacion(pub.id)}
              className="absolute top-2 right-3 text-red-600 hover:text-red-800 text-sm"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Modal de nueva publicación */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Nueva Publicación
            </h2>

            <input
              type="text"
              placeholder="Título"
              value={form.titulo}
              onChange={(e) => setForm({ ...form, titulo: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />
            <textarea
              placeholder="Contenido"
              value={form.contenido}
              onChange={(e) => setForm({ ...form, contenido: e.target.value })}
              className="w-full mb-3 p-2 border rounded"
            />
            <div className="grid grid-cols-2 gap-4 mb-3">
              <select
                value={form.importancia}
                onChange={(e) => setForm({ ...form, importancia: e.target.value })}
                className="p-2 border rounded"
              >
                <option value="alta">Alta</option>
                <option value="media">Media</option>
                <option value="baja">Baja</option>
              </select>
              <input
                type="text"
                placeholder="Tipo de evento"
                value={form.tipo_evento}
                onChange={(e) => setForm({ ...form, tipo_evento: e.target.value })}
                className="p-2 border rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <input
                type="number"
                placeholder="ID Invernadero"
                value={form.id_invernadero}
                onChange={(e) => setForm({ ...form, id_invernadero: e.target.value })}
                className="p-2 border rounded"
              />
              <input
                type="number"
                placeholder="ID Zona (opcional)"
                value={form.id_zona}
                onChange={(e) => setForm({ ...form, id_zona: e.target.value })}
                className="p-2 border rounded"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancelar
              </button>
              <button
                onClick={crearPublicacion}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Publicar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
