"use client";
import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  image: string;
};

export default function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <div className="border p-4 rounded-xl shadow hover:shadow-blue-500/30 transition flex flex-col items-center">
      <Image src={image} alt={name} width={120} height={120} className="rounded-full object-cover mb-3"/>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  );
}