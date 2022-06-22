const initState = {
  todo: [
    {
      id: 1,
      title: "Learn Redux",
      status: false,
    },
  ],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export { reducer };
