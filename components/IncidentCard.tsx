// IncidentCard.tsx
type Incident = {
  id: number; // ✅ same here
  type: string;
  tsStart: string;
  tsEnd: string;
  thumbnailUrl: string;
  resolved: boolean;
  camera: {
    location: string;
  };
};

type Props = {
  incident: Incident;
  onResolve: (id: number) => void;
};



export default function IncidentCard({ incident, onResolve }: Props) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-3 flex gap-4 items-start">
      <img
        src={incident.thumbnailUrl}
        alt="Incident Thumbnail"
        width={120}
        height={80}
        className="rounded-md"
      />
      <div className="flex-1">
        <h3 className="text-md font-bold">{incident.type}</h3>
        <p className="text-sm text-gray-300">{incident.camera.location}</p>
        <p className="text-xs text-gray-400">
          {new Date(incident.tsStart).toLocaleTimeString()} -{" "}
          {new Date(incident.tsEnd).toLocaleTimeString()}
        </p>
        {!incident.resolved && (
          <button
            onClick={() => onResolve(incident.id)}
            className="mt-2 px-3 py-1 bg-green-600 rounded text-sm hover:bg-green-700"
          >
            Resolve
          </button>
        )}
      </div>
    </div>
  );
}


