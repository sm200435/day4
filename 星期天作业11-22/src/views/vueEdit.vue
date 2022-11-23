<template>
    <div>
        <template>
            <quill-editor class="quill" v-model="content" ref="myQuillEditor" :options="editorOption"
                @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @change="onEditorChange($event)">
            </quill-editor>
        </template>
    </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    data() {
        return {
            content:"",
            editorOption: {}
        }
    },
    methods: {
        onEditorReady(editor) { // 准备编辑器

        },
        onEditorBlur() { }, // 失去焦点事件
        onEditorFocus() { }, // 获得焦点事件
        onEditorChange() { }, // 内容改变事件

    },
    created() {

    },
    mounted() {

    },
    components: {
        quillEditor
    },
    computed: {

    },
    watch: {

    },
}
</script>

<style lang='scss' scoped>

</style>
