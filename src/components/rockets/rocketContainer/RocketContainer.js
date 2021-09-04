/* eslint-disable no-unused-vars */
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './rocketContainerStyle.module.scss';

import Rocket from '../rocket/Rocket';

const container = {
  loading: {
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const RocketContainer = () => {
  const allRockets = useSelector((state) => state.rockets.entities);
  const [selected, setSelected] = useState(null);

  const createRockets = () => allRockets.map((rocket) => (
    <Rocket
      displayInfo={false}
      key={rocket.id}
      id={rocket.id}
      name={rocket.rocket_name}
      description={rocket.description}
      image={rocket.flickr_images[0]}
      reserved={rocket.reserved}
      click={() => setSelected(rocket.id)}
    />
  ));

  const getRocket = (id) => allRockets.find((rocket) => rocket.id === id);

  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <motion.ul
          initital={{ borderRadius: 25 }}
          layout
          className={styles.mainContainer}
        >
          {createRockets()}
        </motion.ul>

        <AnimatePresence>
          {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            key="overlay"
            className={styles.overlay}
            onClick={() => setSelected(null)}
          />
          )}
          {selected && (
            <motion.div
              className={styles.singleItemContainer}
            >
              <div className={styles.singleItem}>
                <Rocket
                  displayInfo
                  key={selected}
                  id={selected}
                  layoutId={selected}
                  name={getRocket(selected).rocket_name}
                  description={getRocket(selected).description}
                  image={getRocket(selected).flickr_images[0]}
                  reserved={getRocket(selected).reserved}
                  click={() => setSelected(null)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
      {/* {allRockets
      && (
        <AnimateSharedLayout type="crossfade">
          <motion.ul
            className={styles.mainContainer}
            variants={container}
            initial="initial"
            animate="animate"
            layout
          >
            {createRockets}

            <AnimatePresence>
              {selected && (
                <motion.div layoutId={selected}>
                  <motion.h5>helo</motion.h5>
                  <motion.h2>item.title</motion.h2>
                  <motion.button onClick={() => setSelected(null)} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.ul>
        </AnimateSharedLayout>
      )} */}
    </>
  );
};

export default RocketContainer;
