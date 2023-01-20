import Sofa3d from "./Sofa3d";
import { SofaImageStatic } from "./SofaImageStatic";

interface IViewProduct3d {
  view3d: boolean;
}

export function ViewProduct({ view3d }: IViewProduct3d) {
  if (view3d) {
    return <Sofa3d />;
  }
  return <SofaImageStatic />;
}
