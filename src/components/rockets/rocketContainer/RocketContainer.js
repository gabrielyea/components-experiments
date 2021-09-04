import { motion, AnimateSharedLayout } from 'framer-motion';
import { useSelector } from 'react-redux';

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

  const createRockets = () => allRockets.map((rocket) => (
    <Rocket
      key={rocket.id}
      id={rocket.id}
      name={rocket.rocket_name}
      description={rocket.description}
      image={rocket.flickr_images[0]}
      reserved={rocket.reserved}
    />
  ));

  return (
    <>
      {allRockets
      && (
        <AnimateSharedLayout>
          <motion.div
            variants={container}
            initial="initial"
            animate={allRockets.length > 0 ? 'animate' : 'loading'}
          >
            {createRockets()}
          </motion.div>
        </AnimateSharedLayout>
      )}
    </>
  );
};

export default RocketContainer;
