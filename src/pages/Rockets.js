import { useDispatch, useSelector } from 'react-redux';
import RocketContainer from '../components/rockets/rocketContainer/RocketContainer';
import Loader from '../components/loader/Loader';
import { fetchAllRockets } from '../redux/slice/rocketsSlice';

const Rocket = () => {
  const loading = useSelector((state) => state.rockets.loading);
  const list = useSelector((state) => state.rockets.entities);
  const dispatch = useDispatch();

  const handleCall = () => {
    dispatch(fetchAllRockets());
  };

  return (
    <>
      <Loader
        loading={loading}
        callDispatch={handleCall}
        list={list}
      >
        <RocketContainer />
      </Loader>
    </>
  );
};
export default Rocket;
