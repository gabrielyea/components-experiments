/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllMissions } from '../../redux/slice/componentSlice';

const Loader = (props) => {
  const { component } = props;
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
        <>
          {component}
        </>
      )}
    </>
  );
};

export default Loader;
