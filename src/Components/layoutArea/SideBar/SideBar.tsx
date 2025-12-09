import "./SideBar.css";
import {
  Github,
  Linkedin
} from "lucide-react";

export function SideBar() {
    return (
        <div className="SideBar">
            <div className="linkedIndButton">
                <a href="https://www.linkedin.com/in/noam-sabban/" target="_blank" ><Linkedin></Linkedin></a>
            </div>
            <div className="GitHubButton">
                <a href="https://github.com/noamsabb" target="_blank"><Github></Github></a>
            </div>
        </div>
    );
}
