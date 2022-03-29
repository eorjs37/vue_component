<template>
  <div class="center">
      <div class="pagination">
        <a>&laquo;</a>
        <a :class="{ 'active' : currentPage == 1 }" @click="currentPage=1">1</a>
        <a :class="{ 'active' : currentPage == 2 }" @click="currentPage=2">2</a>
        <a :class="{ 'active' : currentPage == 3 }" @click="currentPage=3">3</a>
        <a :class="{ 'active' : currentPage == 4 }" @click="currentPage=4">4</a>
        <a :class="{ 'active' : currentPage == 5 }" @click="currentPage=5">5</a>
        <a :class="{ 'active' : currentPage == 6 }" @click="currentPage=6">6</a>
        <a>&raquo;</a>
    </div>
  </div>
  
</template>

<script>import { ref } from "vue"

export default {
    setup(){
        const currentPage = ref(1);
        
        return{
            currentPage,
        }
    }
}
</script>

<style scoped>
.center{
    position: relative;
    margin-top: 15px;
}
.pagination {
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
}

.pagination a:hover:not(.active) {background-color: #ddd;}
</style>