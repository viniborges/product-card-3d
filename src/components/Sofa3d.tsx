import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";

import styles from "./Sofa3d.module.css";

// const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Sofa3d() {
  return (
    <div className={styles.container3d}>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Spline scene="https://prod.spline.design/VcoTuhILOLzazD-9/scene.splinecode" />
        </Suspense>
      </div>
    </div>
  );
}
