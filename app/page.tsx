import IncidentPlayer from "../components/IncidentPlayer";
import IncidentList from "../components/IncidentList";

export default function HomePage() {
  return (
    <div className="flex flex-1 h-full overflow-hidden">
      {/* LEFT - Video Panel */}
      <div className="w-2/3 p-4 overflow-y-auto bg-[#0f3066]">
        <IncidentPlayer />
      </div>

      {/* RIGHT - Incident List */}
      <div className="w-1/3 p-4 overflow-y-auto bg-[#627fad] border-l border-gray-700">
        <IncidentList />
      </div>
    </div>
  );
}


