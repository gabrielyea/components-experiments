import { useDispatch, useSelector } from 'react-redux';
import ListContainer from '../components/missions/missionContainer/ListContainer';
import Loader from '../components/loader/Loader';
import { fetchAllMissions } from '../redux/slice/componentSlice';

const List = () => {
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
        <ListContainer />
      </Loader>
    </>
  );
};
export default List;
