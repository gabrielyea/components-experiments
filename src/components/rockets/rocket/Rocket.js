/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  AnimatePresence, AnimateSharedLayout, motion, useCycle,
} from 'framer-motion';
import { reserve } from '../../../redux/slice/rocketsSlice';
import style from './rocket.module.scss';

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Rocket = ({
  id, name, description, image, reserved, click, displayInfo,
}) => {
  const [open, toggleOpen] = useCycle(true, false);

  const dispatch = useDispatch();

  const reservedSpan = <span>Reserved</span>;

  const [reservedTag, setReservedTag] = useState(null);
  const [reservedClass, setReservedClass] = useState(style.notReserved);

  const handleClick = (idRocket) => {
    dispatch(reserve(idRocket));
  };

  useEffect(() => {
    if (reserved) {
      setReservedTag(reservedSpan);
      setReservedClass(style.reserved);
    } else {
      setReservedTag(null);
      setReservedClass(style.notReserved);
    }
  }, [reserved]);

  const createContent = () => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1 }}
    >
      <h2>{name}</h2>
      <p>
        {reservedTag}
        {description}
      </p>
      <button
        type="button"
        className={reservedClass}
        onClick={() => handleClick(id)}
      >
        {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
      </button>
    </motion.div>
  );

  return (
    <motion.li
      layoutId={id}
      className={style.item}
      variants={variants}
      layout
      onClick={() => {
        click();
      }}
    >
      <h2>{name}</h2>
      { displayInfo && (
        <AnimateSharedLayout>
          <AnimatePresence>
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                key={id}
                src={image}
                alt={name}
              />
              <h2>{name}</h2>
              <p>
                {reservedTag}
                {description}
              </p>
              <button
                type="button"
                className={reservedClass}
                onClick={() => handleClick(id)}
              >
                {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </motion.div>
          </AnimatePresence>
        </AnimateSharedLayout>
      )}
    </motion.li>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.string,
};

Rocket.defaultProps = {
  reserved: 'false',
};

export default Rocket;
