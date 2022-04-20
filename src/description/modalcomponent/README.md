## 🧴 Modal
- ## props  
   |Name|type|required|default|description|
   |-----|-----|-----|-----|-----|
   |modaltype|String|true|'modal_w400'|모달 사이즈| 

- ## slot
 > slot은 컴퍼넌트간에 공통적은 부분을 추출하는 것이며 slot에 이름을 정할 수 있다.
  * ### **modalhead**
    > modalhead에 대한 텍스트를 넣을 수 있다.
  
  * ### **close**
    > close(font-awesome)에 대한 아이콘을 넣는 곳이다.

  * ### **titlebox**
    > titlebox에 대한 텍스트를 넣을 수 있다.

  * ### **cotentbox**
    > cotentbox에 대한 텍스트를 넣을 수 있다.


    Modal.vue
    ```html javascript
      <!-- Modal Head -->
      <div class="modal_head">
         <slot name="modalhead">
            <h3 class="modal_title">헤더내용</h3>
         </slot>
         <slot name="close">
            <h1 class="modal_exit">닫기아이콘</h1>
         </slot>
      </div>
      <!-- Modal Body -->
      <div class="modal_body">
         <div class="modal_content">
            <h1 class="title_box">
               <slot name="titlebox">컨텐트 제목을 작성하세요</slot>
            </h1>
            <div class="content_box">
               <slot name="cotentbox">컨텐트 내용을 채우세요</slot>
            </div>
         </div>
      </div> 
    ```

    Modal400.vue
    
    ```html javascript
   
      <!-- Modal400.vue -->  
      <template>
         <Modal>
            <template #modalhead>
               <h1 class="modal_title white bold">Modal Head</h1>
            </template>

            <template #close>
               <h1 class="modal_exit" @click="exitmodal()"><font-awesome-icon class="white" icon="xmark" /></h1>
            </template>

            <template #titlebox>Modal Contents Header</template>

            <template #cotentbox>
               컨텐츠 내용을 작성하는 곳입니다. <br />
               content_box
            </template>
         </Modal>
      </template>
      <script>
      import Modal from '@/components/Modal/Modal.vue';
      export default {
         components: {
            Modal,
         }
      }
      </script> 
    ```