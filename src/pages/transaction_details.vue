<template lang="">
  <div>
    <div v-if="this.transaction">
      This is transaction {{ $route.params.id }} detail.
      <p>Name: {{ this.transaction.name }}</p>
      <p>Price: {{ this.transaction.price }}</p>
      <button>
        <router-link
          :to="{
            name: 'transaction_edits',
            params: { id: $route.params.id },
          }"
          >Edit</router-link
        >
      </button>
    </div>
    <div v-else>Loading transaction {{ $route.params.id }} detail...</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch(`http://localhost:3000/transactions/${this.$route.params.id}`)
      .then((response) => response.json())
      .then((data) => (this.transaction = data));
  },
};
</script>
<style lang=""></style>
