import DemoComponent from "../FeatureComponent/Demo";
import Game from "../FeatureComponent/Game";

export const rootConfig = [
  {
    path: "/",
    element: <Game/>
  },
  {
    path: "/demo",
    element: <DemoComponent />,
  },
  {
    path: "/game",
    element: <Game/>
  },
];
