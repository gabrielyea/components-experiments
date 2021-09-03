/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fetchAllMissions } from '../../redux/slice/componentSlice';
import styles from './loaderStyle.module.scss';

const container = {
  initial: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  loading: {
    flip: Infinity,
    duration: 1,
    ease: 'easeInOut',
  },
};

const ballVariants = {
  animate: {
    rotate: 360,
    borderRadius: ['50%%', '50%'],
    x: 75,
    transition: {
      flip: Infinity,
      duration: 2,
      ease: 'easeInOut',
    },
  },
  initial: {
    x: -75,
  },
};
const Loader = (props) => {
  const { component } = props;
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.components.loading);

  useEffect(() => {
    dispatch(fetchAllMissions());
  }, []);

  return (
    <>
      <AnimatePresence>
        {loadingState === 'pending' ? (
          <motion.div
            key="loader"
            className={styles.mainContainer}
            variants={container}
            initial="loading"
            animate="loading"
            exit="hidden"
          >
            <motion.div>
              LOADING
            </motion.div>
            <motion.div
              className={styles.ball}
              variants={ballVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        ) : (
          <motion.div
            key="component"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {component}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loader;
