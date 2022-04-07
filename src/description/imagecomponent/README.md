## ⚓ Image

- ## props  
   |Name|type|required|default|description|
   |---------|------|----|-|------|
   |imageurl|String|true|require('@/assets/images/no-pictures.png')|이미지URL|

- ## emits
   |Name|description|
   |-----------|------|
   |onReturnFile|파일Return|

- ## data   
   |Name|description|
   |-----------|------|
   |image_url|이미지url|

- ## methods
   |Name|description|
   |-----------|------|
   |imageUpload|이미지업로드|
   |deleteImage|이미지삭제|

- ## 사용예시  
App.vue
```html script
<template>
   <Image
        :imageurl="'https://imgnews.pstatic.net/image/425/2022/04/07/20220407032632026624fed20d3049816221754_20220407032901728.jpg?type=w647'"
        @onReturnFile="returnFile"
    ></Image>
</template>   
<script>
import Image from '@/components/Image.vue';
export default {
   setup() {
      const fileData = ref(null);

      const returnFile = file => {
            fileData.value = file;
      };

      return {
          returnFile
      }
   },
   components: {
      Image,
   },
}   
</script>
```