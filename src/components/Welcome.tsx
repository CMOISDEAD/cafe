import { motion } from "motion/react";

export const Welcome = () => {
  return (
    <div className="snap-always snap-center h-screen min-h-screen welcome">
      <div className="relative flex justify-center items-center backdrop-blur-sm h-full overflow-hidden">
        <div className="font-bold font-serif text-center">
          <h1 className="text-4xl md:text-8xl uppercase">
            Mujeres Caficultoras de Calarca
          </h1>
          <div className="md:text-3xl">
            <h3>Un proyecto de la Universidad del Quindio</h3>
            <h3>Facultad de Ciencias Humanas y Bellas Artes</h3>
            <h3>Programa de Comunicación Social y Periodismo</h3>
            <h3>Por</h3>
            <ul>
              <li>María Ángeles Vargas</li>
              <li>Jessica Martinez</li>
            </ul>
          </div>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          src="/images/cuts/colibri.png"
          alt="mujeres caficultoras colibri"
          className="top-0 left-0 absolute w-48 md:w-96 rotate-12"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          src="/images/cuts/cafe.png"
          alt="mujeres caficultoras cafe"
          className="bottom-0 left-0 absolute w-40 md:w-96 rotate-12"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, scaleX: -1, rotate: 12 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          src="/images/cuts/cafe.png"
          alt="mujeres caficultoras cafe"
          className="right-0 bottom-0 absolute w-40 md:w-96"
        />
        <a
          href="https://www.uniquindio.edu.co/programas/publicaciones/298/comunicacion-social-periodismo/"
          target="_blank"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            src="/images/comunicacion.png"
            alt="comunicacion social y periodismo"
            className="top-0 right-0 left-0 absolute m-auto w-48 md:w-96"
          />
        </a>
      </div>
    </div>
  );
};
