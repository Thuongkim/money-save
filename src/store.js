import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      transaction: null,
      transactions: [],
      error: null,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTransaction(state, transactionPayload) {
      state.transaction = transactionPayload;
    },
    setTransactions(state, transactionsPayload) {
      state.transactions = transactionsPayload;
    },
    setError(state, errorPayload) {
      state.error = errorPayload;
    },
  },
  actions: {
    async fetchTransaction({ commit }, { id }) {
      const response = await fetch(`http://localhost:3000/transactions/${id}`);
      const data = await response.json();
      commit("setTransaction", data);
    },
    async fetchAllTransactions({ commit }) {
      try {
        const response = await fetch(`http://localhost:3000/transactions`);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        commit("setTransactions", data);
      } catch (error) {
        commit("setError", error.message);
      }
    },
  },
});
export default store;
