## 🚓 Paging
- ## props  
   |Name|type|required|default|description|
   |---------|------|----|-|------|
   |totaldata|Number|true|1|전체데이터|
   |pagingdata|Number|true|5|보여주고 싶은 데이터 개수|
   |pagingrange|Number|true|5|보여주고 싶은 페이징 단위| 

- ## data     
   |Name|description|
   |-----------|------|
   |page_number|현재 페이지 번호|
   |totalpaging|전체 페이지 개수( Math.ceil(totaldata/pagingdata) )|
   |page_range|보여주고 싶은 페이지 범위|

- ## methods  
   |Name|description|
   |-----------|------|
   |onPaging|페이징을 할때마다 동작 하는 함수|


- ## 사용예시

App.vue
```html script
<template>
   <Paging :totaldata="totalCount" :pagingdata="5" :pagingrange="5" @onPaging="pagingNext"></Paging>
</template>   
<script>
import Paging from '@/components/Paging.vue';
export default {
   setup() {
      const totalCount = ref(6);

      const pagingNext = pageNumger => {
         //데이터 통신을 작업하는곳
      }
   },
   components: {
      Paging,
   },
}   
</script>
```