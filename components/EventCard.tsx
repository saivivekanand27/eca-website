"use client";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
};

export default function EventCard({ title, date, location, description, image }: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
      transition={{ duration: 0.3 }}
      className="border rounded-xl overflow-hidden shadow"
    >
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-4 py-2 w-full text-sm">
          {date} | {location}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}