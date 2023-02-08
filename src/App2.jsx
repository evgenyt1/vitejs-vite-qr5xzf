import { useCallback, useState } from 'react';
import { App } from '@fplan/app';
import entities from './entities.json?url';
import svg from './fp.svg?url';
import { createRoot } from 'react-dom/client';
import { Layout } from '@fplan/components';

const A = () => {
  const s = useState(0);
  return <div>AAA</div>;
};

function App2() {
  const ref = useCallback((element) => {
    if (!element) return;

    // createRoot(element).render(<Layout />);

    const m = new App({
      element,
      entities,
      svg,
      mapboxAccessToken:
        'pk.eyJ1IjoiZmVzdC1kZXYiLCJhIjoiY2w0eWVjMzNzMDlmdzNjdWxtbjc2Yzg2MyJ9.G3ETdkc8a1OjgsjNmUb3IA',
    });

    // setTimeout(() => {
    //     // m.select(["1", "2", "3"]);
    // }, 1000);

    // setTimeout(() => {
    //     // m.fitToBounds(["3", "4", "5"]);
    // }, 3000);
  }, []);

  return <div ref={ref}>{/* <Layout /> */}</div>;
}

export default App2;
