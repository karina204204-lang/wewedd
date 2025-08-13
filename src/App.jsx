import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WeddingInvitation() {
  const heroImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80";
  const lemonImg = "https://images.unsplash.com/photo-1604335399100-1a2e72c5c1d2?auto=format&fit=crop&w=800&q=80";
  const gzhelImg = "https://images.unsplash.com/photo-1626776179745-5d1e0b048121?auto=format&fit=crop&w=800&q=80";
  const flowersImg = "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?auto=format&fit=crop&w=800&q=80";

  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]); // Смещение фона

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-[#fdfcf7] text-gray-800">
      {/* Hero с параллаксом */}
      <motion.section
        ref={ref}
        style={{ backgroundImage: `url(${heroImg})`, y }}
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif text-white drop-shadow-lg"
        >
          Антон & Карина
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg mt-4 text-white"
        >
          06 сентября 2025
        </motion.p>
      </motion.section>

      {/* История */}
      <motion.section
        className="max-w-3xl mx-auto py-16 px-4 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-serif mb-6">Наша история</h2>
        <p className="leading-relaxed">
          Мы встретились осенью 2017 и с тех пор всегда вместе. И, кажется, пришло время перейти к новому этапу нашей совместной жизни.
          Но... мы не хотим начинать эту историю без вас и поэтому хотим пригласить вас на наш свадебный вечер и разделить радость
          этого дня в уютной компании с уже близкими и знакомыми людьми.
        </p>
      </motion.section>

      {/* Дресс-код */}
      <motion.section
        className="bg-[#f1f5f9] py-16 px-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Дресс-код</h2>
          <p className="mb-6">
            Мы не хотим ограничивать вас в выборе нарядов, дадим лишь направление — белая, голубая, жёлтая, зелёная или чёрно-белая палитра.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.img src={lemonImg} alt="Лимоны" className="rounded-lg shadow" whileHover={{ scale: 1.05 }} />
            <motion.img src={gzhelImg} alt="Гжель" className="rounded-lg shadow" whileHover={{ scale: 1.05 }} />
            <motion.img src={flowersImg} alt="Цветы" className="rounded-lg shadow" whileHover={{ scale: 1.05 }} />
            <motion.img src={heroImg} alt="Итальянский двор" className="rounded-lg shadow" whileHover={{ scale: 1.05 }} />
          </div>
        </div>
      </motion.section>

      {/* Меню */}
      <motion.section
        className="max-w-3xl mx-auto py-16 px-4 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-serif mb-6">Меню</h2>
        <p className="mb-6">Пожалуйста, выберите заранее блюдо на горячее:</p>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg hover:shadow-lg transition">Говяжьи щечки с картофельным пюре под пармезановым соусом</li>
          <li className="p-4 border rounded-lg hover:shadow-lg transition">Филе трески с пюре из цветной капусты и соусом биск</li>
        </ul>
      </motion.section>

      {/* Расписание */}
      <motion.section
        className="bg-[#f1f5f9] py-16 px-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Расписание</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">14:50 — Говорим "ДА" в ЗАГСе</p>
              <p>пер. Университетский 48</p>
            </div>
            <div>
              <p className="font-semibold">18:00 — Фуршет под открытым небом</p>
              <p>Блочный 22</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Контакты / RSVP */}
      <motion.section
        className="max-w-3xl mx-auto py-16 px-4 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-serif mb-6">RSVP</h2>
        <p className="mb-6">Напишите нам, сможете ли вы прийти:</p>
        <form action="https://formspree.io/f/mayvlkkn" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Ваше имя" className="w-full p-3 border rounded" required />
          <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded" required />
          <textarea name="message" placeholder="Ваш ответ" className="w-full p-3 border rounded" required></textarea>
          <button type="submit" className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition">Отправить</button>
        </form>
      </motion.section>
    </div>
  );
}
