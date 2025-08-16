"use client";
import React from "react";

const AdminLogout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-gray-900 text-2xl font-semibold mb-4">Logout</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
        <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminLogout;
