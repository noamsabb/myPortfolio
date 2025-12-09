import { Home } from "../../PageArea/Home/Home";
import { ProjectList } from "../../ProjectsArea/ProjectList/ProjectList";
import { Copyrights } from "../Copyrights/Copyrights";
import { Nav } from "../Nav/Nav";
import { About } from "../../PageArea/About/About";
import { SideBar } from "../SideBar/SideBar";
import "./Layout.css";

import { Spacer } from "../../Spacer";

export function Layout() {
  return (
    <div className="Layout">
      <nav>
        <Nav />
      </nav>
      <main>
        <SideBar />
        <section id="home">
          <Home />
        </section>
        <Spacer height={300} />
        <section id="projects">
          <ProjectList />
        </section>
        <Spacer height={200} />
        <section id="about">
          <About />
        </section>
      </main>
      <footer>
        <Copyrights />
      </footer>
    </div>
  );
}