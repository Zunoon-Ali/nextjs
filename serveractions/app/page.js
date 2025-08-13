"use client"
import { submitAction } from "@/action/form";
import {useRef} from "react";
export default function Home() {
  const formResetRef = useRef();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
      ref={formResetRef}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
        action={(e)=>{submitAction(e); formResetRef.current.reset();}}
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center">
          Contact Form
        </h2>

        {/* Name */}
        <div>
          <label className="block text-gray-600 mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600 mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-600 mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-600 mb-1" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
