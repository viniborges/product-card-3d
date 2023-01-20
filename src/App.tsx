import { useMemo, useState } from "react";

import button360 from "./assets/360_button.svg";
import closeButton from "./assets/close_button.svg";
import { ViewProduct } from "./components/ViewProduct";

import styles from "./App.module.css";

export function App() {
  const [is3d, setIs3d] = useState(false);

  function handleClickButtonView3d() {
    setIs3d((state) => !state);
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerSplit}>
        <div className={styles.containerProductImage}>
          <div className={styles.buttonView} onClick={handleClickButtonView3d}>
            <img src={is3d ? closeButton : button360} alt="visualizar 3d" />
          </div>
          <div className={styles.containerViewProduct}>
            <ViewProduct view3d={is3d} />
          </div>
        </div>
      </div>
      <div className={styles.containerSplit}>
        <div className={styles.containerProductDetails}>
          <span>CÓDIGO: 42404</span>
          <h1>Sofá Margot II - Rosé</h1>
          <span>R$ 4.000,00</span>
          <button>ADICIONAR À CESTA</button>
        </div>
      </div>
    </div>
  );
}
