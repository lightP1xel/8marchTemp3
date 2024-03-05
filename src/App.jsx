import { EndBlock } from "./Components/EndBlock";
import { SecondBlock } from "./Components/SecondPage";
import { StartPage } from "./Components/StartPage";
import { VideoII } from "./Components/VideoII";
import style from "./style.module.css";

export const App = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <StartPage />
        <SecondBlock />
        <VideoII />
        <EndBlock />
      </div>
    </div>
  );
};
