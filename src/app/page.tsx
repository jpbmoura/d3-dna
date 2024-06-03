"use client";

import RelationshipSection from "@/components/relationshipSection";
import ScoresDetails from "@/components/scoresDetails";
import BarChart from "@/components/shared/barChart";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatScores } from "@/helpers/functions/formatScores";
import { ResponsiveBar } from "@nivo/bar";
import { CornerRightDown } from "lucide-react";
import React from "react";
import Chart from "react-google-charts";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto pt-12 px-8 lg:px-0">
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-xl">D3 - DNA</h1>
      </header>

      <RelationshipSection />

      <section className="my-8 space-y-2">
        <h2 className="underline text-lg">Valores Organizacionais</h2>
        <span className="italic text-neutral-500 text-sm">
          work in progress
        </span>
      </section>
    </main>
  );
}
