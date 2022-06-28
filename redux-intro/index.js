class Store {
  constructor(store, reducer) {
    this.store = store;
    this.reducer = reducer;
  }

  getStore() {
    return this.store;
  }

  dispatch(action) {
    this.store.count = reducer(action, this.store.count);
  }
}

const ADD_COUNTER = "ADD_COUNTER";
const SUB_COUNTER = "SUB_COUNTER";

const reducer = (action, store) => {
  if (action === "ADD_COUNTER") {
    return store + 4;
  }
  return store - 1;
};

const store = new Store({ count: 1 }, reducer);
store.dispatch(ADD_COUNTER);
store.dispatch(SUB_COUNTER);

console.log(store);
