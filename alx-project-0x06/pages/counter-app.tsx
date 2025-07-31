// pages/counter-app.tsx
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/store/store";
import { increment, decrement, selectCount } from "@/store/counterSlice";
import Header from "@/components/layouts/Header";

const CounterApp = () => {
  const count = useSelector(selectCount); // ✅ select from Redux
  const dispatch: ReturnType<typeof useAppDispatch> = useAppDispatch(); // ✅ required

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
