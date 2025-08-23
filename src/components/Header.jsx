import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const Header = ({searchValue, setSearchValue}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="flex w-[70%] flex-col justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p className="text-5xl font-lora" variants={itemVariants}>
        Discover the Taste of Home
      </motion.p>
      <motion.p
        className="text-[13px] text-center w-[80%] mt-5"
        variants={itemVariants}
      >
        Explore authentic Pinoy recipes made simple and easy! From classic adobo
        to familiar tapsilog, find step-by-step guides to your favorite Filipino
        dishes. Perfect for beginners and seasoned cooks alike—lutong bahay,
        anytime, anywhere.
      </motion.p>
      <motion.div
        className="mt-10 w-[60%] bg-amber-50 border rounded-4xl px-4 py-3 flex justify-between "
        variants={itemVariants}
        whileFocus={{
          scale: 1.02,
          boxShadow: "0 0 0 2px rgba(245, 158, 11, 0.5)",
        }}
        whileHover={{ scale: 1.01 }}
      >
        <input
          type="text"
          className="outline-none w-full bg-transparent"
          placeholder="Search recipe..."
          value={searchValue}  
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Search />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
