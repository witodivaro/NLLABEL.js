import React from "react";
import TeamMember from "../TeamMember/TeamMember";

const Team = ({ isAddingTeamMember, team, onSave, onDelete, className }) => (
  <div className={className}>
    {isAddingTeamMember && (
      <TeamMember
        key="new"
        teamMember={{}}
        onSave={onSave}
        onDelete={onDelete}
      />
    )}
    {team.map((teamMember) => (
      <TeamMember
        key={teamMember._id}
        teamMember={teamMember}
        onSave={onSave}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default Team;
