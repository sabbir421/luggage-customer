import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/counterSlice';

const HomePage = () => {
    const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
    return (
        <div>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <span>{count}</span>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <div>
          <button onClick={() => dispatch(incrementByAmount(5))}>
            Increment by 5
          </button>
        </div>
      </div>
    );
};

export default HomePage;