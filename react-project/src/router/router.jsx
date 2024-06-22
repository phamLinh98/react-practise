import DemoComponent from "../FeatureComponent/Demo";
import Game from "../FeatureComponent/Game";
import JapaneseFeature, {
  CheckGrammaJapanese,
} from "../FeatureComponent/JapaneseTranslate";
import Translate from "../FeatureComponent/Translate";

export const rootConfig = [
  {
    path: "/",
    element: <JapaneseFeature />,
  },
  {
    path: "/japanese",
    element: <JapaneseFeature />,
  },
  {
    path: "/demo",
    element: <DemoComponent />,
  },
  {
    path: "/grammar",
    element: <CheckGrammaJapanese />,
  },
  {
    path: "/translate",
    element: <Translate />,
  },
  {
    path: "/game",
    element: <Game/>
  },
];
