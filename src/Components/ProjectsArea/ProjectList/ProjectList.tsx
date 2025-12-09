import "./ProjectList.css";
import { projects } from "../ProjectsData/ProjectsData";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export function ProjectList() {
    return (
        <div>
            <h2 className="ProjectList-title">My Projects</h2>
            <div className="ProjectList">
                {projects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </div>
    );
}
