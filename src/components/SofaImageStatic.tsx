import styles from "./SofaImageStatic.module.css";
import product from "../assets/sofa_estatic.png";

export function SofaImageStatic() {
  return (
    <div>
      <img
        src={product}
        className={styles.productStatic}
        alt="imagem do produto sofa"
      />
    </div>
  );
}
