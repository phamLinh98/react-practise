import { CallBackComponent } from "../DemoComponent/CallBackComponent";
import FeatchApi from "../DemoComponent/FeatchApi";
import { MemoComponent } from "../DemoComponent/Memo";
import { UseImperativehandle } from "../DemoComponent/UseImperativehandle";
import DemoComponent from "../FeatureComponent/Demo";
import Game from "../FeatureComponent/Game";
import { NewComponent } from "../FeatureComponent/KyThuatSo2";
import ParentComponent from "../FeatureComponent/ParentComponent";

export const rootConfig = [
  {
    path: "/",
    element: <Game />,
  },
  {
    path: "/demo",
    element: <DemoComponent />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/usecallback",
    element: <ParentComponent />,
  },
  {
    path: "/non-render",
    element: <NewComponent />,
  },
  {
    path: "/usememo",
    element: <MemoComponent />,
  },
  {
    path: "/useImperativehandle",
    element: <UseImperativehandle />,
  },
  {
    path: "/fetchapi",
    element: <FeatchApi />,
  },
  {
    path: "/callbackdemo",
    element: <CallBackComponent />,
  },
];
