## π Paging
- ## props  
   |Name|type|required|default|description|
   |---------|------|----|-|------|
   |totaldata|Number|true|1|μ μ²΄λ°μ΄ν°|
   |pagingdata|Number|true|5|λ³΄μ¬μ£Όκ³  μΆμ λ°μ΄ν° κ°μ|
   |pagingrange|Number|true|5|λ³΄μ¬μ£Όκ³  μΆμ νμ΄μ§ λ¨μ| 

- ## data     
   |Name|description|
   |-----------|------|
   |page_number|νμ¬ νμ΄μ§ λ²νΈ|
   |totalpaging|μ μ²΄ νμ΄μ§ κ°μ( Math.ceil(totaldata/pagingdata) )|
   |page_range|λ³΄μ¬μ£Όκ³  μΆμ νμ΄μ§ λ²μ|

- ## methods  
   |Name|description|
   |-----------|------|
   |onPaging|νμ΄μ§μ ν λλ§λ€ λμ νλ ν¨μ|


- ## μ¬μ©μμ

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
         //λ°μ΄ν° ν΅μ μ μμνλκ³³
      }
   },
   components: {
      Paging,
   },
}   
</script>
```