import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Surprise() {
  const [messageVisible, setMessageVisible] = useState(false);

  return (
    <section className="py-8 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="soft-card p-6 rounded-lg"
      >
        {!messageVisible ? (
          <>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#5E355E' }}>
              Click here, Missy
            </h3>
            <motion.div
              className="text-lg text-warmgray cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMessageVisible(true)}
            >
              💖
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: '#5E355E' }}>
              You are my peace, my favorite thought, and my always.
            </h3>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}