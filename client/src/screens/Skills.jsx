import React from 'react'

export default function Skills(props) {
  return (
    <div>
      <h3>Skills</h3>
      {
        props.skills.map(skill => (
          <p key={skill.id}>{skill.name}</p>
        ))
      }
    </div>
  )
}