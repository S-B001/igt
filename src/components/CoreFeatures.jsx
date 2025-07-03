import { motion } from 'framer-motion';
import PaternCore from '../assets/pattern-core.png'

export default function CoreFeatures() {
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section
      className="px-6 md:px-12 py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center relative">

        {/* Background Behind Cards Only */}
        <div className="absolute left-0 top-0 h-full w-1/2 z-10">
          <img
            src={PaternCore}
            alt="Background"
            className="h-full w-full object-cover "
          />
        </div>

        {/* Left Cards */}
        <motion.div
          className="grid grid-cols-2 gap-6 w-full md:w-1/2 relative z-10"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            { value: '80k+', text: 'We have more than students', color: 'text-yellow-500', delay: 0 },
            { value: '150+', text: 'Free online tutorials videos available', color: 'text-violet-500', delay: 1 },
            { value: '90+', text: 'Daily updated blogpost maintain', color: 'text-orange-500', delay: 2 },
            { value: '&3M', text: 'Job posted everydays with qualification', color: 'text-red-500', delay: 3 },
          ].map((card, i) => (
            <motion.div
              key={i}
              className={`bg-white shadow-sm p-6 h-40 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center ${i % 2 === 1 ? 'mt-10' : ''}`}
              variants={cardVariant}
              custom={i}
            >
              <h4 className={`text-5xl font-bold ${card.color}`}>{card.value}</h4>
              <p className="text-gray-600 mt-2 text-center">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-[#EF9E48] uppercase mb-2">Core features</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#0F2137] leading-tight mb-6">
            Smart Jackpots that you may love this anytime & anywhere
          </h3>
          <p className="text-gray-600 mb-6">
            Get your tests delivered at let home collect sample from the victory of the managments that supplies
            best design system guidelines ever. Get your tests delivered at let home collect sample.
          </p>
          <motion.button
            className="bg-[#FCF2E8] text-[#EF9E48] px-4 py-3 rounded font-semibold text-sm hover:bg-orange-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Details
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
