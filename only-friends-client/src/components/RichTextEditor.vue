<template>
  <div class="richTextEditor__container">
    <quill-editor class="test" ref="quillEditorRef" theme="snow" @update:content="update" :modules="modules" />
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

import BlotFormatter from 'quill-blot-formatter'
import ImageUploader from 'quill-image-uploader';

import { uploadMedia } from '../api/media.js'

const props = defineProps({
  onUpdate: {
    type: Function,
    default: null
  }
})
const quillEditorRef = ref(null);

const modules = [
  {
    name: 'blotFormatter',
    module: BlotFormatter
  },
  {
    name: 'imageUploader',
    module: ImageUploader,
    options: {
      upload: async file => {
        const fileUrl = await uploadMedia(file)
        return fileUrl
      }
    }
  }
]
function update() {
  if (props.onUpdate) props.onUpdate(quillEditorRef.value.getHTML())
}
</script>

<style lang="scss">
.richTextEditor__container {

  .ql-container {
    height: calc(100% - 42px);
  }
}
</style>