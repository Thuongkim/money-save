<template lang="html">
  <div>
    Add transaction.
    <div>Name: <input type="text" v-model="transactionData.name" /></div>
    <div>Price: <input type="text" v-model="transactionData.price" /></div>
    <button @click="onSaveTransaction()">Save</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transactionData: {
        name: null,
        price: null,
      },
    };
  },
  methods: {
    onSaveTransaction() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.transactionData.name,
          price: this.transactionData.price,
        }),
      };
      fetch(`http://localhost:3000/transactions`, requestOptions)
        .then((response) => response.json())
        .then(() =>
          this.$router.push({
            name: "transactions",
          })
        );
    },
  },
};
</script>
<style lang="css" scoped>
input {
  margin-bottom: 10px;
}
</style>
