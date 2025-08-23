import React from "react";
import { motion } from "framer-motion";
import logo from "/assets/pinoylogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex justify-between py-6 px-12">
        <motion.div
          className="flex items-center gap-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={logo}
            alt=""
            className="w-[35px]"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <p className="text-amber-950 font-semibold text-xl">
            Pinoy Recipe Finder{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            className="bg-white text-black py-2 px-5 rounded-3xl text-[14px] border "
            whileHover={{
              scale: 1.05,
              backgroundColor: "#fef3c7",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            onClick={()=> navigate('/favorites')}
          >
            Favorites
          </motion.button>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
