"use client";

import { useState } from "react";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import teamDataJson from "../../data/team.json";

type Member = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

type TeamData = {
  executive: Member[];
  technical: Member[];
  nontech: Member[];
};

type TeamCategory = "executive" | "technical" | "nontech";

const teamData: TeamData = teamDataJson as TeamData; // <-- type cast here

export default function Team() {
  const [activeTab, setActiveTab] = useState<TeamCategory>("executive");
  const members = teamData[activeTab];

  return (
    <main className="px-6 py-16 max-w-7xl mx-auto">
      <section className="text-center">
        <h1 className="text-5xl font-bold">
          Meet the <span className="text-blue-600">Team</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          The passionate people behind Emerging Computers Arena.
        </p>
      </section>

      <div className="flex justify-center gap-4 mt-10 flex-wrap">
        {(["executive", "technical", "nontech"] as TeamCategory[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg border font-medium transition ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {tab === "executive"
              ? "Executive Body"
              : tab === "technical"
              ? "Technical Team"
              : "Non-Tech Team"}
          </button>
        ))}
      </div>

      <section className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {members.map((member, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-6 text-center shadow hover:shadow-blue-500/40 hover:-translate-y-2 transition duration-300"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={128}
              height={128}
              className="mx-auto rounded-full object-cover border-4 border-blue-500"
            />
            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <div className="flex justify-center mt-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}