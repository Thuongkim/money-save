<template lang="html">
  <div>
    <div class="title">
      <div>This is Transaction Page</div>
      <router-link :to="{ name: 'transaction_adds' }"
        ><button>Add</button></router-link
      >
    </div>
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction_details',
          params: { id: transaction.id },
        }"
        >{{ transaction.name }}
      </router-link>
      <div class="price">{{ transaction.price }}</div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchAllTransactions");
    const transactions = computed(() => store.state.transactions);
    const error = computed(() => store.state.error);
    return { transactions, error };
  },
};
</script>
<style lang="css" scoped>
.title {
  display: flex;
}
button {
  margin-left: 30px;
}
</style>
