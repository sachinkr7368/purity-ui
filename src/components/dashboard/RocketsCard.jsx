import React, { memo } from "react";
import Card from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

const RocketsCard = memo(() => (
  <div className="h-full">
    <Card className="h-full p-2">
      <div
        className="h-full relative overflow-hidden bg-cover bg-center rounded-xl group"
        style={{
          backgroundImage: "url('/assets/work-with-the-rockets.png')",
        }}
      >
        {/* Overlay - Dark gradient from top to bottom */}
        <div className="absolute inset-0 bg-linear-to-b from-gray-900/80 to-transparent z-0"></div>

        <div className="relative z-10 flex flex-col h-full justify-between p-4">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">
              Work with the Rockets
            </h3>
            <p className="text-white/80 text-sm">
              Wealth creation is an an environmentally friendly positive-sum
              game.
              <br />
              It is all about who take the opportunity first.
            </p>
          </div>

          <div className="mt-4">
            <button className="flex items-center gap-1 text-white font-bold text-xs group-hover:gap-2 transition-all">
              Read more <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </Card>
  </div>
));
RocketsCard.displayName = "RocketsCard";

export default RocketsCard;
