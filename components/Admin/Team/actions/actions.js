import api from "../../../../utils/axios";

export const updateTeamMember = async (member) => {
  const {
    data: { member: savedTeamMember },
  } = await api.put("/team/", member);

  return savedTeamMember;
};

export const deleteTeamMember = async (member) => {
  const { _id } = member;

  await api.delete("/team", { data: { _id } });

  return member;
};

export const createTeamMember = async (member) => {
  const {
    data: { member: createdTeamMember },
  } = await api.post("/team", member);

  return createdTeamMember;
};
