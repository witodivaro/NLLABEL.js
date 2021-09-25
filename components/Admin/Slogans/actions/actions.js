import api from "../../../../utils/axios";

export const saveSlogan = async (slogan) => {
  const { _id, text } = slogan;

  const {
    data: { slogan: savedSlogan },
  } = await api.put("/slogans/", { _id, text });

  return savedSlogan;
};

export const deleteSlogan = async (slogan) => {
  const { _id } = slogan;

  await api.delete("/slogans", { data: { _id } });

  return slogan;
};

export const createSlogan = async (slogan) => {
  const { text } = slogan;

  const {
    data: { slogan: deletedSlogan },
  } = await api.post("/slogans", { text });

  return deletedSlogan;
};
