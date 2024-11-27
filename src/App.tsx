import { Welcome } from "./components/Welcome";
import { Scroll } from "./components/Scroll";
import { Group } from "./components/Group";
import { Interview } from "./components/Interview";

import "react-photo-view/dist/react-photo-view.css";
import { group_1, group_2, group_3, group_4 } from "./data/groups";

function App() {
  return (
    <div className="relative bg-[#17140d] snap-mandatory snap-y h-screen text-white overflow-y-scroll">
      <Scroll />
      <Welcome />
      <Group data={group_1} />
      <Interview url="https://www.youtube.com/watch?v=WYcmEsLbM6Y" />
      <Group data={group_2} />
      <Interview url="https://www.youtube.com/watch?v=pn8RYrEiP_4" />
      <Group data={group_3} />
      <Interview url="https://youtu.be/HyllUT0hSLI" />
      <Group data={group_4} />
      <Interview url="https://youtu.be/nRpC3yUk3_o" />
      <Interview url="https://youtu.be/SBybSJRzBj8" />
    </div>
  );
}

export default App;
