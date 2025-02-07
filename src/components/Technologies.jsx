import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconVariants = (duration, delay, direction) => ({
  initial: { x: direction * 200, opacity: 0, rotate: 0 },
  animate: {
    x: 0,
    opacity: 1,
    rotate: [0, 360],
    transition: {
      duration: duration,
      ease: 'easeOut',
      delay: delay,
    },
  },
  whileHover: {
    y: [10, -10],
    transition: {
      duration: 1.5,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const icons = [
    {
      src: 'https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000',
      alt: 'Python',
      libraries: ['NumPy', 'Pandas', 'TensorFlow', 'Flask'],
    },
    {
      src: 'https://img.icons8.com/?size=100&id=Wy3XKG1CjyKf&format=png&color=000000',
      alt: 'Database',
      libraries: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
    },
    {
      src: 'https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000',
      alt: 'TensorFlow',
      libraries: ['Keras', 'TensorBoard', 'TFLite', 'TF-Agents'],
    },
    {
      src: 'https://img.icons8.com/?size=100&id=97624&format=png&color=000000',
      alt: 'Machine Learning',
      libraries: ['Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost'],
    },
    {
      component: <FaReact className='text-[120px] text-blue-500' />,
      alt: 'React',
      libraries: ['React Router', 'Redux', 'Framer Motion', 'Styled Components'],
    },
    {
      src: 'https://img.icons8.com/?size=100&id=17842&format=png&color=000000',
      alt: 'Linux',
      libraries: ['Bash', 'Zsh', 'Docker', 'Kubernetes'],
    },
  ];

  return (
    <div className='pb-24 flex flex-col items-center bg-cover bg-center' style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Known Technologies
      </motion.h2>

      <motion.div className='flex flex-wrap items-center justify-center gap-4'>
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            initial='initial'
            animate='animate'
            whileHover='whileHover'
            variants={iconVariants(3, index * 0.2, index % 2 === 0 ? -1 : 1)}
            className='p-4 w-[150px] h-[150px] bg-transparent flex items-center justify-center cursor-pointer'
            onClick={() => setSelectedTech(icon)}
          >
            {icon.component || <img src={icon.src} alt={icon.alt} className='w-full h-full' />}
          </motion.div>
          
        ))}
        <motion.h2
whileInView={{ opacity: 1, x: 0 }}
initial={{ opacity: 0, x: -100 }}
transition={{ duration: 1.5 }}
className='my-20 text-center text-4xl'
>
Click each Technology to know more!
</motion.h2>
      </motion.div>

      {selectedTech && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-6'
        >
          <div className='w-3/4 h-3/4 flex rounded-lg shadow-lg relative p-8 bg-cover bg-center' style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
            <motion.img
              src={selectedTech.src}
              alt={selectedTech.alt}
              className='w-1/3 h-auto object-contain'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className='w-2/3 pl-8 flex flex-col justify-center text-white'>
              <h2 className='text-3xl font-bold mb-4'>{selectedTech.alt}</h2>
              <ul className='text-lg space-y-2'>
                {selectedTech.libraries.map((lib, idx) => (
                  <li key={idx}>{lib}</li>
                ))}
              </ul>
            </div>
            <button
              className='absolute top-4 right-4 text-2xl text-gray-300 hover:text-red-500'
              onClick={() => setSelectedTech(null)}
            >
              ×
            </button>
          </div>
          
        </motion.div>
        
      )}
    </div>
  );
};

export default Technologies;

