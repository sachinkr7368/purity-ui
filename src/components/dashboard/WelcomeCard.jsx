import React, { memo } from "react";
import Card from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const WelcomeCard = memo(() => {
  return (
    <Card className="h-full relative overflow-hidden flex flex-col justify-between">
      <div className="flex flex-col h-full relative z-10 justify-between">
        <div>
          <p className="text-gray-400 font-bold text-xs mb-1">
            Built by developers
          </p>
          <h3 className="text-gray-800 font-bold text-lg mb-2">
            Purity UI Dashboard
          </h3>
          <p className="text-gray-400 text-sm mb-4 lg:w-3/5">
            From colors, cards, typography to complex elements,
            <br /> you will find the full documentation.
          </p>
        </div>
        <div>
          <button className="flex items-center gap-1 text-gray-800 font-bold text-xs group">
            Read more{" "}
            <ArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Decorative Chakra Image Area */}
      {/* Decorative Chakra Image Area - Updated to match visual style */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-[45%] flex items-center justify-center">
        <div className="w-[90%] h-[90%] bg-[#4FD1C5] rounded-2xl flex items-center justify-center relative overflow-hidden">
          {/* Background Pattern could be added here if needed */}
          <Image
            src="/assets/chakraui.png"
            alt="Chakra UI"
            className="w-1/2 object-contain relative z-10"
            width={284}
            height={92}
            priority
          />
        </div>
      </div>
    </Card>
  );
});
WelcomeCard.displayName = "WelcomeCard";

export default WelcomeCard;
