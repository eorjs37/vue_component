## ๐งค Table
- ## props  
   |Name|type|required|default|description|
   |-----|-----|-----|-----|-----|
   |tlist|Array|false|์์|table์ ๋ค์ด๊ฐ๋ ๋ฐ์ดํฐ| 
       
- ## slot  
  > slot์ ์ปดํผ๋ํธ๊ฐ์ ๊ณตํต์ ์ ๋ถ๋ถ์ ์ถ์ถํ๋ ๊ฒ์ด๋ฉฐ slot์ ์ด๋ฆ์ ์ ํ  ์ ์๋ค.
  * ### **header**
    > table์ head์ ๋ํ ๋ฐ์ดํฐ๋ฅผ ๋ฃ์ ์ ์๋ค.  
    ๊ฐ์ ๋ฃ์ง ์์ผ๋ฉด , ๊ธฐ๋ณธ์ ์ผ๋ก ์ ์ธํ ๊ฐ์ด ๋ค์ด๊ฐ๋ค.
    ```html
    <!-- Table.vue -->
    <tr>
      <slot name="header">
         <th colspan="99">ํค๋์ ๋ฐ์ดํฐ๋ฅผ ๋ฃ์ด์ฃผ์ธ์</th>
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
   > table.vue props์ tlist๋ฅผ ๋ฃ์ด์ค๋ค. Table.vue์์ tlist ๋ฐ๋ณต๋ฌธ์ ๋๋ฆฌ๋ฉด์,  
   slot์ ๊ฐ row๋ฅผ ๋ฃ์ด์ค๋ค. App.vue์์ slot-scope๋ฅผ ํตํด ์์ ๋ฐ์ดํฐ๋ฅผ ํ์ํ๋ค.

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
         <td colspan="99">๊ฒ์๊ฒฐ๊ณผ๊ฐ ์์ต๋๋ค.</td>
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



