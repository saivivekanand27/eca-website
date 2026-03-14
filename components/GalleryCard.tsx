"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type GalleryCardProps = {
  title: string;
  image: string;
  date?: string;
};

export default function GalleryCard({ title, image, date }: GalleryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-xl overflow-hidden shadow cursor-pointer"
    >
      <Image src={image} alt={title} width={500} height={300} className="object-cover w-full h-72" />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-3 w-full">
        <h3 className="text-sm font-semibold">{title}</h3>
        {date && <p className="text-xs">{date}</p>}
      </div>
    </motion.div>
  );
}