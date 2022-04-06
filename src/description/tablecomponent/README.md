## 🧤 Table
- ## props  
   |Name|type|required|default|description|
   |-----|-----|-----|-----|-----|
   |tlist|Array|false|없음|table에 들어가는 데이터| 
       
- ## slot  
  > slot은 컴퍼넌트간에 공통적은 부분을 추출하는 것이며 slot에 이름을 정할 수 있다.
  * ### **header**
    > table에 head에 대한 데이터를 넣을 수 있다.  
    값을 넣지 않으면 , 기본적으로 선언한 값이 들어간다.
    ```html
    <!-- Table.vue -->
    <tr>
      <slot name="header">
         <th colspan="99">헤더에 데이터를 넣어주세요</th>
      </slot>
    </tr>

    <!-- App.vue -->
    <Table >
       <template #header>
         <th>Country</th>
         <th>Name</th>
         <th>Age</th>
      </template>
    </Table>
    ```
  * ### **list**
   > table.vue props에 tlist를 넣어준다. Table.vue에서 tlist 반복문을 돌리면서,  
   slot에 각 row를 넣어준다. App.vue에서 slot-scope를 통해 자식 데이터를 표시한다.

  Table.vue 
  ```html script
    <!-- Table.vue -->
    <tbody>
      <template v-for="item in tlist">
         <tr>
            <slot name="list" :row="item" :count="1"></slot>
         </tr>
      </template>
      <tr v-if="tlist.length === 0">
         <td colspan="99">검색결과가 없습니다.</td>
      </tr>
   </tbody>

   <script>
      props: {
         tlist: {
            type: Array,
            default() {
               return [];
            },
         },
      },
   </script>
    ```

   App.vue 
   ```html script
   <template>
      <Table :tlist="tableBody">
         <template #list="{ row }">
            <td>{{ row.item1 }}</td>
            <td>{{ row.item2 }}</td>
            <td>{{ row.item3 }}</td>
         </template>
      </Table>
   </template>
   <script>
      import Table from '@/components/Table.vue';
      export default {
         setup() {
            const tableBody = ref([
               {
                  item1: 'Alfreds Futterkiste',
                  item2: 'Maria Anders',
                  item3: 'Germany',
               },
               {
                  item1: 'Centro comercial Moctezuma',
                  item2: 'Francisco Chang',
                  item3: 'Mexico',
               },
               {
                  item1: 'Ernst Handel',
                  item2: 'Roland Mendel',
                  item3: 'Austria',
               },
               {
                  item1: 'Island Trading',
                  item2: 'Helen Bennett',
                  item3: 'UK',
               },
               {
                  item1: 'Laughing Bacchus Winecellars',
                  item2: 'Yoshi Tannamuri',
                  item3: 'Canada',
               },
            ]);
            return {
               tableHead,
               tableBody,
            };
         }
      }
   </script>
    ```



