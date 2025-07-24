"use client";

import { useState } from "react";

const cameraFeeds = [
  { name: "Camera 01", src: "/cameras/cam1.mp4" },
  { name: "Camera 02", src: "/cameras/cam2.mp4" },
  { name: "Camera 03", src: "/cameras/cam3.mp4" },
];

export default function IncidentPlayer() {
  const [selectedCamera, setSelectedCamera] = useState(cameraFeeds[0]);

  return (
    <div className="bg-zinc-900 p-4 rounded-xl text-white">
      <h2 className="text-xl font-bold mb-4">📹 Incident Viewer</h2>

      {/* Main Video Frame */}
      <div className="mb-4">
        <video
          key={selectedCamera.src}
          src={selectedCamera.src}
          controls
          autoPlay
          muted
          className="rounded-lg w-full h-auto"
        />
        <p className="mt-2 text-center text-gray-300">{selectedCamera.name}</p>
      </div>

      {/* Camera Selector Thumbnails */}
      <div className="flex gap-4 justify-center">
        {cameraFeeds.map((camera, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCamera(camera)}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              selectedCamera.name === camera.name
                ? "bg-green-600 text-white"
                : "bg-gray-700 text-gray-200"
            }`}
          >
            {camera.name}
          </button>
        ))}
      </div>
    </div>
  );
}






