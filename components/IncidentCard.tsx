'use client';

import Image from 'next/image';

type Props = {
  incident: {
    id: string;
    type: string;
    tsStart: string;
    tsEnd: string;
    thumbnailUrl: string;
    resolved: boolean;
    camera: {
      name: string;
      location: string;
    };
  };
  onResolve: (id: string) => void;
};

export default function IncidentCard({ incident, onResolve }: Props) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white mb-3">
      {/* ✅ Thumbnail image */}
      <Image
        src={incident.thumbnailUrl}
        alt="Incident thumbnail"
        width={120}
        height={80}
        className="rounded-lg object-cover"
      />

      {/* ✅ Incident details */}
      <div className="flex-1">
        <div className="font-semibold text-sm text-red-600">{incident.type}</div>
        <div className="text-xs text-gray-700">{incident.camera.location}</div>
        <div className="text-xs text-gray-500">
          {new Date(incident.tsStart).toLocaleTimeString()} —{' '}
          {new Date(incident.tsEnd).toLocaleTimeString()}
        </div>
      </div>

      {/* ✅ Resolve Button */}
      {!incident.resolved && (
        <button
          onClick={() => onResolve(incident.id)}
          className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
        >
          Resolve
        </button>
      )}
    </div>
  );
}

