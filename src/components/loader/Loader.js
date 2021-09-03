import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllMissions } from '../../redux/slice/componentSlice';
import MissionContainer from '../missions/missionContainer/MissionContainer';

const Loader = () => {
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.components.loading);
  const allMissions = useSelector((state) => state.components.entities);

  useEffect(() => {
    dispatch(fetchAllMissions());
  }, []);

  return (
    <>
      {loadingState === 'pending' ? (
        <div>hello</div>
      ) : (
        <MissionContainer
          allItems={allMissions}
        />
      )}
    </>
  );
};

export default Loader;
