<template lang="html">
  <div>
    <h1>overview</h1>
  </div>
</template>
<script>
import fireStore from "../configs/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
export default {
  setup() {
    async function getCities() {
      const citiesCol = collection(fireStore, "transactions");
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map((doc) => doc.data());
      console.log(cityList);
      return cityList;
    }
    getCities();
  },
};
</script>
<style lang=""></style>
<!-- <template lang="html">
  <div>
    <input type="text" v-model="searchText" />
    <ul v-for="(customer, index) in filterCustommers" :key="index">
      <li>{{ customer }}</li>
    </ul>
  </div>
</template>
<script>
import { reactive, ref, computed } from "vue";
export default {
  setup() {
    const searchText = ref("");
    const customers = reactive([
      "Micheal",
      "Sophius",
      "Garen",
      "Ash",
      "Soraka",
    ]);
    const filterCustommers = computed(() =>
      customers.filter((customer) =>
        customer.toLowerCase().includes(searchText.value.toLowerCase())
      )
    );
    return { searchText, filterCustommers };
  },
};
</script>
<style lang=""></style> -->
