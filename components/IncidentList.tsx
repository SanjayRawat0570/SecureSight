"use client";

import { useEffect, useState } from "react";
import IncidentCard from "./IncidentCard";

export default function IncidentList() {
  const [incidents, setIncidents] = useState([]);

  const fetchIncidents = async () => {
    const res = await fetch("/api/incidents?resolved=false");
    const data = await res.json();
    setIncidents(data);
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  const handleResolve = async (id: number) => {
    setIncidents((prev) => prev.filter((item) => item.id !== id));
    await fetch(`/api/incidents/${id}`, { method: "PATCH" });
  };

  return (
    <div className="bg-black h-full overflow-y-auto p-2 text-white">
      <h2 className="text-lg font-bold mb-2">🛑 Unresolved Incidents</h2>
      {incidents.map((incident) => (
        <IncidentCard
          key={incident.id}
          incident={incident}
          onResolve={handleResolve}
        />
      ))}
    </div>
  );
}
