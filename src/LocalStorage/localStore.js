const getDataFromLocalStore = () => {
  const getData = localStorage.getItem("donateItem");

  return getData ? JSON.parse(getData) : [];
};

const saveDataToLocalStore = (item) => {
  const storeData = getDataFromLocalStore();
  storeData.push(item);
  localStorage.setItem("donateItem", JSON.stringify(storeData));
};

export { getDataFromLocalStore, saveDataToLocalStore };
