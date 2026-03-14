/// <reference types="react" />
"use client";

import { motion } from "framer-motion";

type InfoCardProps = {
  icon?: React.JSX.Element; // use React.JSX.Element instead of just JSX.Element
  title: string;
  description: string;
  image?: string;
};

export default function InfoCard({ icon, title, description, image }: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="border p-6 rounded-xl shadow hover:shadow-blue-500/30 transition"
    >
      {icon && <div className="mb-4">{icon}</div>}
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}