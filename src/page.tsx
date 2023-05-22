import { FC, useCallback, useState } from "react";
import {Helmet} from "react-helmet"

export const Page: FC = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  return (
    <>
    <Helmet>
      <title>React Counter</title>
      <meta name="description" content="Static Generation のテスト" />
    </Helmet>
    <div>
      <button onClick={increment}>increment</button>
      <p>count: {count}</p>
    </div>
    </>
  );
};