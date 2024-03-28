export const updateData = (data: any, payload: any) => {
  const objIndex = data.findIndex((obj: any) => obj.id === payload.id);
  if (objIndex !== -1) {
    data[objIndex] = payload;
    return data;
  } else {
    return data;
  }
};
