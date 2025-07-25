"use client";

import { useEffect, useState } from "react";
import IncidentCard from "./IncidentCard";

// ✅ Define the incident type
type Incident = {
  id: number; // ✅ Fix: use number
  type: string;
  tsStart: string;
  tsEnd: string;
  thumbnailUrl: string;
  resolved: boolean;
  camera: {
    location: string;
  };
};

export default function IncidentList() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const fetchIncidents = async () => {
    try {
      const res = await fetch("/api/incidents?resolved=false");

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const text = await res.text(); // Get raw response text first

      if (!text) {
        console.warn("⚠️ Empty response body");
        setIncidents([]); // or handle it gracefully
        return;
      }

      const data = JSON.parse(text);
      console.log(data);
      setIncidents(data);
    } catch (error) {
      console.error("❌ Failed to load incidents:", error);
    }
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
