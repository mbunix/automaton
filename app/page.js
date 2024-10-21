import Image from "next/image";
import { Inter } from "next/font/google";
import  Dashboard  from '../app/dashboard/page.jsx'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        <Dashboard />
      </h1>
</div>
  );
}
