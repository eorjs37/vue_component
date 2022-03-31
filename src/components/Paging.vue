<template>
  <div class="pagination">
    <a @click="prevPaging">&laquo;</a>
    <a v-for="(item) in pageRange" :key="'paging'+item" :class="page_number === item ? 'active' :''" @click="page_number=item">
      {{ item }}
    </a>
    <a @click="nextPaging">&raquo;</a>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
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
    //보여주고 싶은 페이징 단위
    pagingrange:{
      type: Number,
      required:true,
      default:5
    }
  },
  setup(props){
    const page_number = ref(1);
    const totalpaging = ref(6);
    const pageRange = ref(Array.from(new Array(props.pagingrange), (_,i)=> i+1));

    const prevPaging = () =>{
      if(page_number.value === 1){
        alert("첫번째 페이지 입니다.");
        return false;
      }
      page_number.value--;
    }

    const nextPaging = () =>{
      if(totalpaging.value <= page_number.value){
        alert("마지막페이지 입니다.");
        return false;
      }
      page_number.value++;
    }

    onMounted(()=>{
      totalpaging.value = Math.ceil(props.totaldata / props.pagingdata);
    });

    return{
      page_number,
      totalpaging,
      pageRange,
      prevPaging,
      nextPaging,
    }
  }
};
</script>

<style scoped>
.pagination {
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
