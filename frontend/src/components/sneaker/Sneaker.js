import { motion } from "framer-motion";

function Sneaker({ sneaker }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="Sneaker"
    >
      <h2>{sneaker.title}</h2>
      <img src={"https://aws.s3.url" + sneaker.imgUrl} alt={sneaker.imgAlt} />
    </motion.div>
  );
}

export default Sneaker;
