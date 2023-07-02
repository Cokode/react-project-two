import { useEffect, useState } from "react";
import List from "../components/List";
import ProjectAbout from "./Project-About";
import {Link as RouterLink} from 'react-router-dom';

export default function Projects({userName}) {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.github.com/users/${userName}/repos`);
            const result = await data.json();

            if (result){
                setProjects(result)
                setLoading(false)
            }
        }
        fetchData();            
    })

    return (
        <div className='Projects-container'>
            <ProjectAbout />
            {loading ? ( <span>Loading...</span>) : 
            (
              <div>
                    <List items={projects.map((project) => ({
                        field: project.name, 
                        value: <RouterLink url={project.html_url} 
                        title={project.html_url} />,
                    }))} />
                </div>
        )}
        </div>
    );
}