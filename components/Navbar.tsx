"use client";

import {
  LayoutDashboard,
  Camera,
  AlertTriangle,
  Users,
  ImageIcon,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-[#a9b1be] to-[#d2d4d8] shadow-md text-black">
      
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Image src="/assets/logo.svg" alt="logo" width={32} height={32} />
        <span className="text-xl font-bold">MANDLACX</span>
      </div>

      {/* Full-width Menu */}
      <div className="flex-1 mx-12">
        <div className="flex justify-evenly items-center text-sm font-medium">
          <div className="flex items-center gap-2 hover:text-yellow-600 cursor-pointer transition">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-2 hover:text-yellow-600 cursor-pointer transition">
            <Camera size={20} />
            <span>Cameras</span>
          </div>
          <div className="flex items-center gap-2 hover:text-yellow-600 cursor-pointer transition">
            <ImageIcon size={20} />
            <span>Scenes</span>
          </div>
          <div className="flex items-center gap-2 hover:text-yellow-600 cursor-pointer transition">
            <AlertTriangle size={20} />
            <span>Incidents</span>
          </div>
          <div className="flex items-center gap-2 hover:text-yellow-600 cursor-pointer transition">
            <Users size={20} />
            <span>Users</span>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3">
        <Image
          src="/assets/user-avatar.jpg"
          alt="user"
          width={32}
          height={32}
          className="rounded-full"
        />
        <div className="text-right">
          <div className="font-semibold text-sm">sanjay rawat</div>
          <div className="text-xs text-gray-700">sanjayrawat0570@gmail.com</div>
        </div>
        <ChevronDown size={18} />
      </div>
    </nav>
  );
}




