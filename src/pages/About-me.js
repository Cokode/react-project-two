import React from "react";
import './About-me';

export default function AboutMe (){
    return (
        <div className="About-Me">
            <h1>About Me</h1>
        </div>
    )
}

<ul>
                <li>
                  <span>Html_url:</span>
                  <Link url={profile.html_url} title={profile.html_url} />
                </li>
                <li>
                  <span>Repose_url:</span>
                  <Link url={profile.repos_url} title={profile.repos_url} />
                </li>
                <li><span>Name:</span>{profile.name}</li>
                <li><span>company:</span>{profile.company}</li>
                <li><span>Location:</span>{profile.location}</li>
                <li><span>Email: </span>{profile.email}</li>
                <li><span>Bio: </span>{profile.bio}</li>
              </ul>