"use client";

import { motion } from "framer-motion";

import { Counter } from "@/components/counter";
import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="relative -mt-14 z-20 pb-20">
      <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <Card className="group border-white/18 bg-anthracite-950/82 text-white transition duration-300 hover:-translate-y-1 hover:shadow-glow">
              <CardContent>
                <p className="font-display text-4xl font-black text-sand-300">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm text-white/70">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
