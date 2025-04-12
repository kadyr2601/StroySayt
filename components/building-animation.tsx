"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"

export default function BuildingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    setIsVisible(true)
    controls.start("visible")
  }, [controls])

  // Construction materials
  const generateMaterials = (count: number) => {
    return Array.from({ length: count }).map((_, index) => ({
      id: index,
      type: Math.random() > 0.7 ? "concrete" : "brick",
      size: Math.random() * 15 + 15, // 15-30px
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 1 + 1, // 1-2s
    }))
  }

  const materials = generateMaterials(30)

  // Building floors animation variants
  const buildingVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scaleY: 1,
      transition: {
        delay: i * 0.5 + 1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  // Windows animation variants
  const windowVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2 + 3.5,
        duration: 0.5,
      },
    }),
  }

  return (
    <div ref={containerRef} className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[350px] h-[500px] z-20">
      {/* Falling construction materials animation */}
      {isVisible &&
        materials.map((material) => (
          <motion.div
            key={material.id}
            className={`absolute ${
              material.type === "brick"
                ? "bg-gradient-to-b from-red-700 to-red-900"
                : "bg-gradient-to-b from-gray-300 to-gray-400"
            } shadow-md`}
            style={{
              width: material.size,
              height: material.type === "brick" ? material.size / 2 : material.size,
              left: `${material.left}%`,
              top: -50,
              borderRadius: material.type === "concrete" ? "2px" : "0px",
            }}
            initial={{ y: -100, opacity: 0, rotate: Math.random() * 180 - 90 }}
            animate={{
              y: 500,
              opacity: [0, 1, 1, 0],
              rotate: Math.random() * 360 - 180,
            }}
            transition={{
              duration: material.duration,
              delay: material.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: Math.random() * 5 + 5,
              ease: "easeIn",
            }}
          >
            {/* Add brick texture */}
            {material.type === "brick" && (
              <>
                <div className="absolute top-[3px] left-[3px] right-[3px] bottom-[3px] border border-red-800/30"></div>
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-red-800/20"></div>
              </>
            )}
            {/* Add concrete texture */}
            {material.type === "concrete" && (
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,_transparent_30%,_#00000010_70%)]"></div>
            )}
          </motion.div>
        ))}

      {/* Building base */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] flex flex-col items-center">
        {/* Ground */}
        <motion.div
          className="w-[350px] h-[15px] bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 rounded-sm"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        {/* Foundation */}
        <motion.div
          className="w-[320px] h-[25px] bg-gradient-to-b from-gray-600 to-gray-700 rounded-t-sm"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="w-full h-[5px] bg-gray-800/50"></div>
        </motion.div>

        {/* First floor */}
        <motion.div
          className="w-[300px] h-[120px] bg-gradient-to-b from-stone-300 to-stone-400 relative shadow-md"
          custom={0}
          initial="hidden"
          animate={controls}
          variants={buildingVariants}
          style={{ transformOrigin: "bottom" }}
        >
          {/* Brick texture overlay */}
          <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(to_right,_transparent,_transparent_20px,_#00000010_20px,_#00000010_40px)] bg-[repeating-linear-gradient(to_bottom,_transparent,_transparent_10px,_#00000010_10px,_#00000010_20px)]"></div>

          {/* Door */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50px] h-[85px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-t-md shadow-md"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            style={{ transformOrigin: "bottom" }}
          >
            {/* Door details */}
            <div className="absolute inset-[4px] border border-gray-700 rounded-t-sm"></div>
            <div className="absolute right-[10px] top-1/2 w-[5px] h-[5px] rounded-full bg-gray-600"></div>
          </motion.div>

          {/* Windows */}
          <motion.div
            className="absolute top-[30px] left-[50px] w-[40px] h-[50px] bg-gradient-to-b from-blue-200 to-blue-300 shadow-md"
            custom={0}
            initial="hidden"
            animate={controls}
            variants={windowVariants}
          >
            {/* Window frame */}
            <div className="absolute inset-0 border-[3px] border-gray-600"></div>
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border-r border-b border-gray-600"></div>
              <div className="border-b border-gray-600"></div>
              <div className="border-r border-gray-600"></div>
              <div></div>
            </div>
            {/* Window sill */}
            <div className="absolute -bottom-[5px] -left-[2px] -right-[2px] h-[5px] bg-gray-500"></div>
          </motion.div>

          <motion.div
            className="absolute top-[30px] right-[50px] w-[40px] h-[50px] bg-gradient-to-b from-blue-200 to-blue-300 shadow-md"
            custom={1}
            initial="hidden"
            animate={controls}
            variants={windowVariants}
          >
            {/* Window frame */}
            <div className="absolute inset-0 border-[3px] border-gray-600"></div>
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border-r border-b border-gray-600"></div>
              <div className="border-b border-gray-600"></div>
              <div className="border-r border-gray-600"></div>
              <div></div>
            </div>
            {/* Window sill */}
            <div className="absolute -bottom-[5px] -left-[2px] -right-[2px] h-[5px] bg-gray-500"></div>
          </motion.div>

          {/* Floor separator */}
          <div className="absolute bottom-0 left-0 right-0 h-[8px] bg-gray-500"></div>
        </motion.div>

        {/* Second floor */}
        <motion.div
          className="w-[300px] h-[120px] bg-gradient-to-b from-stone-200 to-stone-300 relative shadow-md"
          custom={1}
          initial="hidden"
          animate={controls}
          variants={buildingVariants}
          style={{ transformOrigin: "bottom" }}
        >
          {/* Brick texture overlay */}
          <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(to_right,_transparent,_transparent_20px,_#00000010_20px,_#00000010_40px)] bg-[repeating-linear-gradient(to_bottom,_transparent,_transparent_10px,_#00000010_10px,_#00000010_20px)]"></div>

          {/* Windows */}
          <motion.div
            className="absolute top-[30px] left-[40px] w-[40px] h-[50px] bg-gradient-to-b from-blue-200 to-blue-300 shadow-md"
            custom={2}
            initial="hidden"
            animate={controls}
            variants={windowVariants}
          >
            {/* Window frame */}
            <div className="absolute inset-0 border-[3px] border-gray-600"></div>
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border-r border-b border-gray-600"></div>
              <div className="border-b border-gray-600"></div>
              <div className="border-r border-gray-600"></div>
              <div></div>
            </div>
            {/* Window sill */}
            <div className="absolute -bottom-[5px] -left-[2px] -right-[2px] h-[5px] bg-gray-500"></div>
          </motion.div>

          <motion.div
            className="absolute top-[30px] left-1/2 transform -translate-x-1/2 w-[40px] h-[50px] bg-gradient-to-b from-blue-200 to-blue-300 shadow-md"
            custom={3}
            initial="hidden"
            animate={controls}
            variants={windowVariants}
          >
            {/* Window frame */}
            <div className="absolute inset-0 border-[3px] border-gray-600"></div>
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border-r border-b border-gray-600"></div>
              <div className="border-b border-gray-600"></div>
              <div className="border-r border-gray-600"></div>
              <div></div>
            </div>
            {/* Window sill */}
            <div className="absolute -bottom-[5px] -left-[2px] -right-[2px] h-[5px] bg-gray-500"></div>
          </motion.div>

          <motion.div
            className="absolute top-[30px] right-[40px] w-[40px] h-[50px] bg-gradient-to-b from-blue-200 to-blue-300 shadow-md"
            custom={4}
            initial="hidden"
            animate={controls}
            variants={windowVariants}
          >
            {/* Window frame */}
            <div className="absolute inset-0 border-[3px] border-gray-600"></div>
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border-r border-b border-gray-600"></div>
              <div className="border-b border-gray-600"></div>
              <div className="border-r border-gray-600"></div>
              <div></div>
            </div>
            {/* Window sill */}
            <div className="absolute -bottom-[5px] -left-[2px] -right-[2px] h-[5px] bg-gray-500"></div>
          </motion.div>

          {/* Floor separator */}
          <div className="absolute bottom-0 left-0 right-0 h-[8px] bg-gray-500"></div>
        </motion.div>

        {/* Third floor */}
        <motion.div
          className="w-[300px] h-[120px] bg-gradient-to-b from-stone-100 to-stone-200 relative shadow-md"
          custom={2}
          initial="hidden"
          animate={controls}
          variants={buildingVariants}
          style={{ transformOrigin: "bottom" }}
        >
          {/* Brick texture overlay */}
          <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(to_right,_transparent,_transparent_20px,_#00000010_20px,_#00000010_40px)] bg-[repeating-linear-gradient(to_bottom,_transparent,_transparent_10px,_#00000010_10px,_#00000010_20px)]"></div>

          {/* Windows */}
          <motion.div
            className="absolute top-[30px] left-[40px] w-[40px] h-[50px] bg-gradient-to-b from-blue-200 to-blue-300 shadow-md"
            custom={5}
            initial="hidden"
            animate={controls}
            variants={windowVariants}
          >
            {/* Window frame */}
            <div className="absolute inset-0 border-[3px] border-gray-600"></div>
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border-r border-b border-gray-600"></div>
              <div className="border-b border-gray-600"></div>
              <div className="border-r border-gray-600"></div>
              <div></div>
            </div>
            {/* Window sill */}
            <div className="absolute -bottom-[5px] -left-[2px] -right-[2px] h-[5px] bg-gray-500"></div>
          </motion.div>

          <motion.div
            className="absolute top-[30px] left-1/2 transform -translate-x-1/2 w-[40px] h-[50px] bg-gradient-to-b from-blue-200 to-blue-300 shadow-md"
            custom={6}
            initial="hidden"
            animate={controls}
            variants={windowVariants}
          >
            {/* Window frame */}
            <div className="absolute inset-0 border-[3px] border-gray-600"></div>
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border-r border-b border-gray-600"></div>
              <div className="border-b border-gray-600"></div>
              <div className="border-r border-gray-600"></div>
              <div></div>
            </div>
            {/* Window sill */}
            <div className="absolute -bottom-[5px] -left-[2px] -right-[2px] h-[5px] bg-gray-500"></div>
          </motion.div>

          <motion.div
            className="absolute top-[30px] right-[40px] w-[40px] h-[50px] bg-gradient-to-b from-blue-200 to-blue-300 shadow-md"
            custom={7}
            initial="hidden"
            animate={controls}
            variants={windowVariants}
          >
            {/* Window frame */}
            <div className="absolute inset-0 border-[3px] border-gray-600"></div>
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border-r border-b border-gray-600"></div>
              <div className="border-b border-gray-600"></div>
              <div className="border-r border-gray-600"></div>
              <div></div>
            </div>
            {/* Window sill */}
            <div className="absolute -bottom-[5px] -left-[2px] -right-[2px] h-[5px] bg-gray-500"></div>
          </motion.div>

          {/* Floor separator/cornice */}
          <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-gray-500"></div>
        </motion.div>

        {/* Roof */}
        <motion.div
          className="relative w-[320px] h-[70px] bg-gradient-to-b from-gray-700 to-gray-800 shadow-lg"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          style={{ transformOrigin: "bottom" }}
        >
          {/* Roof details */}
          <div className="absolute bottom-0 left-0 w-full h-[15px] bg-gray-900/30"></div>
          <div className="absolute top-0 left-0 w-full h-[5px] bg-gray-600"></div>

          {/* Roof texture */}
          <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(to_right,_transparent,_transparent_10px,_#00000020_10px,_#00000020_20px)]"></div>

          {/* Attic window */}
          <motion.div
            className="absolute top-[15px] left-1/2 transform -translate-x-1/2 w-[30px] h-[30px] bg-gradient-to-b from-blue-200 to-blue-300 rounded-t-full shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.5 }}
          >
            {/* Window frame */}
            <div className="absolute inset-0 border-[3px] border-gray-600 rounded-t-full"></div>
            <div className="absolute inset-0 rounded-t-full overflow-hidden">
              <div className="absolute top-0 left-1/2 right-0 bottom-0 border-l border-gray-600"></div>
              <div className="absolute top-1/2 left-0 right-0 bottom-0 border-t border-gray-600"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Chimney */}
        <motion.div
          className="absolute top-[-90px] right-[60px] w-[30px] h-[90px] bg-gradient-to-b from-gray-600 to-gray-700 shadow-md"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 4.2, duration: 0.5 }}
          style={{ transformOrigin: "bottom" }}
        >
          {/* Chimney details */}
          <div className="absolute top-0 left-0 right-0 h-[8px] bg-gray-500"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gray-800"></div>

          {/* Brick texture overlay */}
          <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(to_right,_transparent,_transparent_10px,_#00000020_10px,_#00000020_20px)] bg-[repeating-linear-gradient(to_bottom,_transparent,_transparent_5px,_#00000020_5px,_#00000020_10px)]"></div>

          {/* Smoke */}
          {isVisible && (
            <>
              <motion.div
                className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[15px] h-[15px] rounded-full bg-white/20 backdrop-blur-sm"
                initial={{ y: 0, opacity: 0, scale: 0.5 }}
                animate={{ y: -70, opacity: [0, 0.6, 0], scale: 3 }}
                transition={{
                  duration: 3,
                  delay: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 0.5,
                }}
              />
              <motion.div
                className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white/20 backdrop-blur-sm"
                initial={{ y: 0, opacity: 0, scale: 0.5 }}
                animate={{ y: -50, opacity: [0, 0.4, 0], scale: 2 }}
                transition={{
                  duration: 2,
                  delay: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              />
              <motion.div
                className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[8px] h-[8px] rounded-full bg-white/20 backdrop-blur-sm"
                initial={{ y: 0, opacity: 0, scale: 0.5 }}
                animate={{ y: -40, opacity: [0, 0.3, 0], scale: 1.5 }}
                transition={{
                  duration: 1.5,
                  delay: 5.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1.5,
                }}
              />
            </>
          )}
        </motion.div>
      </div>

      {/* Construction crane (more realistic) */}
      <motion.div
        className="absolute bottom-0 right-[-80px] origin-bottom"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        {/* Base */}
        <div className="w-[15px] h-[15px] bg-gray-800 absolute bottom-0 left-[7.5px] transform -translate-x-1/2"></div>

        {/* Main tower */}
        <div className="w-[15px] h-[350px] bg-yellow-500 relative">
          {/* Tower details - ladder-like structure */}
          <div className="absolute inset-0 flex flex-col justify-between py-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-full h-[2px] bg-yellow-600"></div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-[-5px] w-[5px] bg-yellow-600"></div>
          <div className="absolute inset-y-0 right-[-5px] w-[5px] bg-yellow-600"></div>
        </div>

        {/* Operator cabin */}
        <div className="absolute top-[50px] left-[15px] w-[20px] h-[25px] bg-gray-700">
          <div className="absolute inset-[2px] bg-blue-200/30"></div>
        </div>

        {/* Horizontal arm */}
        <div className="absolute top-0 left-0 w-[180px] h-[15px] bg-yellow-500 flex items-center">
          <div className="absolute inset-y-0 left-0 right-0 flex justify-between px-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-[2px] h-full bg-yellow-600"></div>
            ))}
          </div>
          <div className="absolute inset-x-0 top-[-5px] h-[5px] bg-yellow-600"></div>
          <div className="absolute inset-x-0 bottom-[-5px] h-[5px] bg-yellow-600"></div>
        </div>

        {/* Counterweight */}
        <div className="absolute top-[-10px] left-[-50px] w-[50px] h-[35px] bg-gray-700"></div>

        {/* Cable */}
        <div className="absolute top-[7.5px] left-[140px] w-[2px] h-[100px] bg-gray-800"></div>

        {/* Hook */}
        <motion.div
          className="absolute top-[107.5px] left-[140px] w-[15px] h-[20px]"
          initial={{ y: -50 }}
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <div className="w-[15px] h-[10px] bg-gray-600"></div>
          <div className="w-[3px] h-[10px] bg-gray-700 absolute left-[6px] bottom-0"></div>
          <div className="w-[9px] h-[3px] bg-gray-800 absolute left-[3px] bottom-0 rounded-b-sm"></div>
        </motion.div>
      </motion.div>
    </div>
  )
}
