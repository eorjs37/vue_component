<template>
  <table>
    <thead>
        <tr>
            <th v-for="(item,index) in head" :key="'head'+index">
                {{item}}
            </th>
        </tr>
    </thead>
   <tbody v-if="body.length > 0">
       <tr v-for="(item, index) in body" :key="'body'+index">
           <td>{{ item.item1 }}</td>
           <td>{{ item.item2 }}</td>
           <td>{{ item.item3 }}</td>
       </tr>
   </tbody>
   <tbody v-else>
       <tr>
           <th colspan="99">데이터가 존재하지 않습니다.</th>
       </tr>
   </tbody>
 </table>
</template>
<script>
export default {
    props:{
        head:{
            type: Array,
            required: true,
            default(){
                return []
            }
        },
        body:{
            type: Array,
            required: true,
            default(){
                return []
            }
        }
    },
}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>