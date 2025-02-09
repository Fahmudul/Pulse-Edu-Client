"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const LayoutTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              duration: 0.4,
              ease: "easeInOut",
              delay: 1,
            },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};

export default LayoutTransition;
