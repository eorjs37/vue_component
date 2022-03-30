<template>
  <div class="pagination">
    <a>&laquo;</a>
    <a v-for="(item) in totalpaging" :key="'paging'+item" :class="page_number === item ? 'active' :''" @click="page_number=item">
      {{ item }}
    </a>
    <a>&raquo;</a>
  </div>
</template>

<script>import { onMounted, ref } from "vue";

export default {
  name: "Paging",
  props:{
    //전체 데이터
    totaldata:{
      type: Number,
      required:true,
      default:1
    },
    //보여주고 싶은 데이터 개수
    pagingdata:{
       type: Number,
       required:true,
       default:5
    },
  },
  setup(props){
    const page_number = ref(1);
    const totalpaging = ref(6);

    onMounted(()=>{
      totalpaging.value = Math.ceil(props.totaldata / props.pagingdata);
    });

    return{
      page_number,
      totalpaging
    }
  }
};
</script>

<style scoped>
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
