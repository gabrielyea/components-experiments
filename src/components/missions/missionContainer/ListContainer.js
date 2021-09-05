import { useSelector } from 'react-redux';
import { AnimateSharedLayout, motion } from 'framer-motion';
import Item from '../mission/Item';
import styles from './listContainerStyle.module.scss';

const ListContainer = () => {
  const allMissions = useSelector((state) => state.components.entities);

  const createMissions = (list) => list.map((mission) => (
    <Item
      key={mission.mission_id}
      id={mission.mission_id}
      name={mission.mission_name}
      description={mission.description}
      joined={mission.reserved}
    />
  ));

  return (
    <AnimateSharedLayout>
      <motion.ul
        className={styles.mainContainer}
        layout
      >
        {createMissions(allMissions)}
      </motion.ul>
    </AnimateSharedLayout>
  );
};

export default ListContainer;
