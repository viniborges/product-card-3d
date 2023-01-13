import product from './assets/product.png'
import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.container}>
      <div className={styles.containerSplit}>
        <div className={styles.containerProductImage}>
          <img src={product} className="" alt="imagem do produto sofa" />
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
  )
}