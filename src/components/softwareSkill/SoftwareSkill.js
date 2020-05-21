import React from 'react';

import { skillsSection } from '../../portfolio';

import './SoftwareSkill.css';

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills) => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
