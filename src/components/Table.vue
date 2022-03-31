<template>
  <table>
    <thead>
      <tr>
        <slot name="header">
          <th colspan="99">헤더에 데이터를 넣어주세요</th>
        </slot>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, index) in tlist" :key="'item' + index">
        <tr>
          <slot name="list" :row="item"></slot>
        </tr>
      </template>
      <tr v-if="tlist.length === 0">
        <td colspan="99">검색결과가 없습니다.</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    tlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
