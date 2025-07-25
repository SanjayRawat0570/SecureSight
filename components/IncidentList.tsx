"use client";

import { useEffect, useState } from "react";
import IncidentCard from "./IncidentCard";

type Incident = {
  id: number;
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

  // 🔁 Dummy incident data
  const dummyIncidents: Incident[] = [
    {
      id: 1,
      type: "Vault Breach",
      tsStart: "2025-07-24T08:58:46.240Z",
      tsEnd: "2025-07-24T09:00:46.240Z",
      thumbnailUrl: "/thumbnails/vault-breach.jpg",
      resolved: false,
      camera: { location: "Vault" },
    },
    {
      id: 2,
      type: "Unknown Person",
      tsStart: "2025-07-24T07:24:07.620Z",
      tsEnd: "2025-07-24T07:26:07.620Z",
      thumbnailUrl: "/thumbnails/unknown-person.jpg",
      resolved: false,
      camera: { location: "Entrance" },
    },
    {
      id: 3,
      type: "Unauthorized Access",
      tsStart: "2025-07-24T07:13:49.944Z",
      tsEnd: "2025-07-24T07:15:49.944Z",
      thumbnailUrl: "/thumbnails/anauth-access.jpg",
      resolved: false,
      camera: { location: "Vault" },
    },
    {
      id: 4,
      type: "Vault Breach",
      tsStart: "2025-07-24T06:31:20.149Z",
      tsEnd: "2025-07-24T06:33:20.149Z",
      thumbnailUrl: "/thumbnails/vault-breach.jpg",
      resolved: false,
      camera: { location: "Shop Floor A" },
    },
    {
      id: 5,
      type: "Unauthorized Access",
      tsStart: "2025-07-24T05:34:54.546Z",
      tsEnd: "2025-07-24T05:36:54.546Z",
      thumbnailUrl: "/thumbnails/anauth-access.jpg",
      resolved: false,
      camera: { location: "Entrance" },
    },
    {
      id: 6,
      type: "Face Recognised",
      tsStart: "2025-07-24T02:57:00.194Z",
      tsEnd: "2025-07-24T02:59:00.194Z",
      thumbnailUrl: "/thumbnails/face-recognised.jpg",
      resolved: false,
      camera: { location: "Shop Floor A" },
    },
    {
      id: 7,
      type: "Unauthorized Access",
      tsStart: "2025-07-23T23:54:39.740Z",
      tsEnd: "2025-07-23T23:56:39.740Z",
      thumbnailUrl: "/thumbnails/anauth-access.jpg",
      resolved: false,
      camera: { location: "Shop Floor A" },
    },
    {
      id: 8,
      type: "Unknown Person",
      tsStart: "2025-07-23T20:23:00.202Z",
      tsEnd: "2025-07-23T20:25:00.202Z",
      thumbnailUrl: "/thumbnails/unknown-person.jpg",
      resolved: false,
      camera: { location: "Vault" },
    },
  ];

  useEffect(() => {
    // ✅ Set dummy data on mount
    setIncidents(dummyIncidents);
  }, []);

  const handleResolve = async (id: number) => {
    // Mark as resolved by filtering
    setIncidents((prev) => prev.filter((item) => item.id !== id));
    // You can optionally console log instead of real PATCH
    console.log(`Incident ${id} marked as resolved`);
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
