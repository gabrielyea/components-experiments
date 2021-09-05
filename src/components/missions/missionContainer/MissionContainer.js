/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Mission from '../mission/Mission';
import styles from './missionContainerStyle.module.scss';

const container = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const MissionContainer = () => {
  const allMissions = useSelector((state) => state.components.entities);

  const createMissions = (list) => list.map((mission) => (
    <Mission
      key={mission.mission_id}
      id={mission.mission_id}
      name={mission.mission_name}
      description={mission.description}
      joined={mission.reserved}
    />
  ));

  return (
    <>
      {allMissions
      && (
      <motion.table
        className={styles.mainContainer}
        variants={container}
        initial="initial"
        animate="animate"
      >
        <tr className={styles.headers}>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {createMissions(allMissions)}
      </motion.table>
      )}
    </>
  );
};

export default MissionContainer;
