export default {
  state: {
    API_NAME: "",
    custom_style: [
      {
        popup: "pop-up-cus",
        title: "title-cus",
        input: "input-cus",
        confirmButton: "confirm-cus",
        cancelButton: "cancel-cus",
      },
    ],
  },
  mutations: {
    setAPI_NAME(stade, value) {
      console.log(value);
      stade["API_NAME"] = value;
    },
  },
  actions: {},
  getters: {
    getAPI_NAME({ API_NAME }) {
      return API_NAME;
    },
    getCustom_style({ custom_style }) {
        return custom_style;
      },
  },
};
