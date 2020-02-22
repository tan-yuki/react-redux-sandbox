import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {INCREMENT_ACTION_TYPE} from '../redux/actions/counter';
import {RootState} from '../redux/reducers';


export default function Counter() {
  const count = useSelector((state: RootState) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();

  return <>
    <button onClick={() => dispatch({type: INCREMENT_ACTION_TYPE})}>Click</button>
    <p>{count}</p>
  </>;
}
