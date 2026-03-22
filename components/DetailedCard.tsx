"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Info } from "lucide-react";

interface DetailedCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  tooltipText?: string;
}

export default function DetailedCard({ icon, title, description, tooltipText }: DetailedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative group border border-gray-200 dark:border-gray-800 p-8 rounded-2xl bg-white dark:bg-[#0a0a0a] shadow-sm hover:shadow-xl dark:shadow-none hover:border-gray-300 dark:hover:border-gray-600 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        {icon && <div className="text-gray-900 dark:text-gray-100 p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">{icon}</div>}
        
        {/* Tooltip trigger icon */}
        {tooltipText && (
          <div className="relative cursor-help text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors pt-2">
            <Info size={22} />
            
            {/* Tooltip itself */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm text-center rounded-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-10 shadow-2xl pointer-events-none font-medium tracking-wide">
              {tooltipText}
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
            </div>
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{description}</p>
    </motion.div>
  );
}
