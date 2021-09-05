/* eslint-disable react/prop-types */
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

const Avatar = ({
  id, img, desc, click,
}) => (
  <AnimatePresence>
    <motion.li
      className={styles.avatar}
      key={id}
      layoutId={id}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => click()}
    >
      <img alt="avatar" src={img} />
      <h2>{desc}</h2>
    </motion.li>
  </AnimatePresence>
);

const RocketContainer = () => {
  const allRockets = useSelector((state) => state.rockets.entities);
  const [selected, setSelected] = useState(null);

  const createAvatars = () => allRockets.map((rocket) => (
    <Avatar
      key={rocket.id}
      id={rocket.id}
      desc={rocket.rocket_name}
      img={rocket.flickr_images[0]}
      click={() => setSelected(rocket.id)}
    />
  ));

  const getRocket = (id) => allRockets.find((rocket) => rocket.id === id);

  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <motion.ul
          layout
          className={styles.mainContainer}
        >
          {createAvatars()}
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
              <motion.div
                className={styles.singleItem}
                key={selected}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Rocket
                  key={selected}
                  id={selected}
                  layoutId={selected}
                  name={getRocket(selected).rocket_name}
                  description={getRocket(selected).description}
                  image={getRocket(selected).flickr_images[0]}
                  reserved={getRocket(selected).reserved}
                  click={() => setSelected(null)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
};

export default RocketContainer;
