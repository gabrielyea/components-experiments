/* eslint-disable react/prop-types */
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import styles from './itemStyle.module.scss';

function Row() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.row} />
    </motion.div>
  );
}

const Item = (props) => {
  const [show, toggleShow] = useCycle(false, true);
  const {
    id, name, description,
  } = props;

  const showContent = () => (
    <motion.div
      layout
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p>{id}</p>
      <p>{name}</p>
      <p>{description}</p>
    </motion.div>
  );

  return (
    <motion.li
      className={styles.mainContainer}
      layout
      initial
      onClick={() => toggleShow()}
    >
      <motion.p
        layout
      >
        {name}
      </motion.p>
      <AnimatePresence>
        {show && (
        <>
          <Row />
          { showContent() }
          <Row />
        </>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default Item;
