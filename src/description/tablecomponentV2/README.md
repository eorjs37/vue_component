## 🧤 TableV2
- ## props  
   |Name|type|required|default|description|
   |-----|-----|-----|-----|-----|
   |isCheckBox|Boolean|false|true|체크박스 사용여부|
   |tabledata|Object|false|{head:[],body:[]}|Table Head,Body 데이터|


- ## 데이터 양식
 > Table에 들어가는 데이터는 아래와 같이 맞춰야 한다.  
 head에서는 headkey와 body의 key값을 맞춰주어야 한다.  
 ex) body의 값이 name:'name'으로 맞추었다면, head에는 headkey:'name'으로 맞춰야한다.

 ```json
 {
   head:[
      //body의 key값과 맞춰야 한다.
		 {headkey:'country',colname:'국가'},
      {headkey:'name',colname:'이름'}
	],
	body:[
		 { country:'name', name:'최대건' }
	]
 }
 ```

- ## thead 커스텀
 > thead의 내용을 Custom 하고 싶다면 아래와 같이 Custom을 하면된다.

 ```html javascript
 <!-- #Head키명 -->
 <template #Headcountry>
   <th class="col1">커스텀할 내용</th>
 </template>
 ```
- ## tbody 커스텀
 > tbody의 내용을 Custom 하고 싶다면 아래와 같이 Custom을 하면된다.

 ```html javascript
<!-- #키명 -->
<template #Company="{ row }">
   <span @click="clickEvent(row)"> {{ row.Company }}커스텀할 내용 </span>
</template>
 ```


 - ## Method 
 ### @rowselected
 > @rowselected를 사용하여 현재 선택된 row를 return 해줄수 있습니다.

 ```html javascript
 <!-- TableV2 Component -->

 <TableV2 :tabledata="tableData" @rowselected="onRowSelected">


 </TableV2>

<script>
   setup() {
      const onRowSelected = item => {
			console.log('item : ', item);
		};

      return{
         onRowSelected
      }
   }
</script>
 ```