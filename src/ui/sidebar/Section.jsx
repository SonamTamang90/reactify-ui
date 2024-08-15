import { useState } from "react";
import { HiChevronRight, HiChevronDown } from "react-icons/hi2";
import SectionLinks from "./SectionLinks";
import { AnimatePresence, motion } from "framer-motion";
function Section() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={toggleExpansion}
        aria-expanded={isExpanded}
        className="flex items-center gap-2 text-sm text-neutrals-100 font-semibold mb-4"
      >
        <span className="text-xs text-primary-default">
          {isExpanded ? <HiChevronDown /> : <HiChevronRight />}
        </span>
        Application UI
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <SectionLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Section;
