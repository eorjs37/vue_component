## ๐งด Modal
- ## props  
   |Name|type|required|default|description|
   |-----|-----|-----|-----|-----|
   |modaltype|String|true|'modal_w400'|๋ชจ๋ฌ ์ฌ์ด์ฆ| 

- ## slot
 > slot์ ์ปดํผ๋ํธ๊ฐ์ ๊ณตํต์ ์ ๋ถ๋ถ์ ์ถ์ถํ๋ ๊ฒ์ด๋ฉฐ slot์ ์ด๋ฆ์ ์ ํ  ์ ์๋ค.
  * ### **modalhead**
    > modalhead์ ๋ํ ํ์คํธ๋ฅผ ๋ฃ์ ์ ์๋ค.
  
  * ### **close**
    > close(font-awesome)์ ๋ํ ์์ด์ฝ์ ๋ฃ๋ ๊ณณ์ด๋ค.

  * ### **titlebox**
    > titlebox์ ๋ํ ํ์คํธ๋ฅผ ๋ฃ์ ์ ์๋ค.

  * ### **cotentbox**
    > cotentbox์ ๋ํ ํ์คํธ๋ฅผ ๋ฃ์ ์ ์๋ค.


    Modal.vue
    ```html javascript
      <!-- Modal Head -->
      <div class="modal_head">
         <slot name="modalhead">
            <h3 class="modal_title">ํค๋๋ด์ฉ</h3>
         </slot>
         <slot name="close">
            <h1 class="modal_exit">๋ซ๊ธฐ์์ด์ฝ</h1>
         </slot>
      </div>
      <!-- Modal Body -->
      <div class="modal_body">
         <div class="modal_content">
            <h1 class="title_box">
               <slot name="titlebox">์ปจํํธ ์ ๋ชฉ์ ์์ฑํ์ธ์</slot>
            </h1>
            <div class="content_box">
               <slot name="cotentbox">์ปจํํธ ๋ด์ฉ์ ์ฑ์ฐ์ธ์</slot>
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
               ์ปจํ์ธ  ๋ด์ฉ์ ์์ฑํ๋ ๊ณณ์๋๋ค. <br />
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