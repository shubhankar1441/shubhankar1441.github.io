import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Background from "./components/Background";
import Progress from "./components/Progress";

import Step1Landing from "./components/Step1Landing";
import Step2Bow from "./components/Step2Bow";
import Step3Tree from "./components/Step3Tree";
import Step4Cake from "./components/Step4Cake";
import Step5Balloons from "./components/Step5Balloons";
import Step6Memories from "./components/Step6Memories";
import Step7Letter from "./components/Step7Letter";
import Step8Finale from "./components/Step8Finale";

import { birthdayData } from "./data/birthdayData";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);

  const nextStep = () => {
    setDirection(1);
    setCurrentStep((step) => Math.min(step + 1, 8));
  };

  const previousStep = () => {
    setDirection(-1);
    setCurrentStep((step) => Math.max(step - 1, 1));
  };

  const replay = () => {
    setDirection(-1);
    setCurrentStep(1);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Landing
            data={birthdayData}
            onNext={nextStep}
          />
        );

      case 2:
        return <Step2Bow onNext={nextStep} />;

      case 3:
        return (
          <Step3Tree
            data={birthdayData}
            onNext={nextStep}
          />
        );

      case 4:
        return (
          <Step4Cake
            data={birthdayData}
            onNext={nextStep}
          />
        );

      case 5:
        return (
          <Step5Balloons
            data={birthdayData}
            onNext={nextStep}
          />
        );

      case 6:
        return (
          <Step6Memories
            data={birthdayData}
            onNext={nextStep}
          />
        );

      case 7:
        return (
          <Step7Letter
            data={birthdayData}
            onNext={nextStep}
          />
        );

      case 8:
        return (
          <Step8Finale
            data={birthdayData}
            onReplay={replay}
          />
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-dvh overflow-hidden bg-[#0d0614] text-white">
      <div className="relative mx-auto min-h-dvh w-full max-w-md overflow-hidden">
        <Background />

        {currentStep < 8 && (
          <Progress step={currentStep} />
        )}

        <AnimatePresence
          mode="wait"
          custom={direction}
        >
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
            className="relative z-10 min-h-dvh"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;