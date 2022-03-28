<template>
  <div class="mw-1200">
    <h1>
      Table Component
    </h1>
    <Table :head="tableHead" :body="tableBody"/>
  </div>
</template>

<script>
import Table from '@/components/Table.vue';
import { ref } from 'vue';
export default {
  name: 'App',
  setup(){
    const tableHead = ref(['company','Contact','Country']);
    const tableBody = ref(
      [
        {item1:'Alfreds Futterkiste', item2:'	Maria Anders', item3:'	Germany'},
        {item1:'Centro comercial Moctezuma', item2:'Francisco Chang', item3:'Mexico'},
        {item1:'Ernst Handel', item2:'Roland Mendel', item3:'Austria'},
        {item1:'Island Trading', item2:'Helen Bennett', item3:'UK'},
        {item1:'Laughing Bacchus Winecellars', item2:'Yoshi Tannamuri', item3:'Canada'},
      ]
    );
    return{
      tableHead,
      tableBody
    }
  },
  components:{
    Table
  },
}
</script>

<style>
body{
  margin: 0;
}

h1,h2,h3,h4,h5,h6{
  margin: 0;
}

.mw-1200{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
