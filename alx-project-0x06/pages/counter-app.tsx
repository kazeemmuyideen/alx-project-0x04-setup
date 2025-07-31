import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import { RootState } from "@/store/store";
import { increment, decrement } from "@/store/store";
import Header from "@/components/layouts/Header";

const CounterApp = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Header />
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Counter App</h1>
        <p className="text-xl mb-4">Current Count: {count}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Increment
          </button>
        </div>
      </main>
    </div>
  );
};

export default CounterApp;
