<template lang="html">
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
</template>
<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => (this.transactions = data));
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
