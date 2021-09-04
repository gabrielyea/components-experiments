/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import MissionContainer from '../components/missions/missionContainer/MissionContainer';
import Loader from '../components/loader/Loader';
import { fetchAllMissions } from '../redux/slice/componentSlice';

const Mission = () => {
  const selector = useSelector((state) => state.components.loading);
  const list = useSelector((state) => state.components.entities);
  const dispatch = useDispatch();

  const handleCall = () => {
    dispatch(fetchAllMissions());
  };

  return (
    <>
      <Loader
        loading={selector}
        list={list}
        callDispatch={handleCall}
      >
        <MissionContainer />
      </Loader>
    </>
  );
};
export default Mission;
