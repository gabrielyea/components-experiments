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
  id, name, description, image, reserved, click,
}) => {
  const [open, toggleOpen] = useCycle(true, false);

  const dispatch = useDispatch();

  const reservedSpan = <span style={{ backgroundColor: '#0290ff', color: 'white' }}>Reserved</span>;

  const [reservedTag, setReservedTag] = useState(null);
  const [reservedClass, setReservedClass] = useState(style.notReserved);

  const handleClick = (idRocket) => {
    setReservedTag(reservedSpan);
    setReservedClass(style.reserved);
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

  return (
    <AnimatePresence>
      <motion.li
        key={id}
        layoutId={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={style.item}
      >
        <h2>{name}</h2>
        <img
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
        <button
          type="button"
          style={{ backgroundColor: '#c2c2c2', color: 'white', borderStyle: 'none' }}
          onClick={() => click()}
        >
          Close
        </button>
      </motion.li>
    </AnimatePresence>
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
