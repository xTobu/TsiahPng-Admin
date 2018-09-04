<template>
    <div class="form-group">
        <label v-if="label">
            {{label}}
        </label>
        <select class="form-control border-select" v-bind="$props" @input="$emit('input',$event.target.value)">
            <option v-for="(option, index) in options" :value="option" :key="'key_'+index">{{ option }}</option>
        </select>
    </div>
</template>
<script>
export default {
    props: {
        label: String,
        name: String,
        disabled: Boolean,
        placeholder: String,
        value: [String, Number],
        options: Array
    },
    mounted() {
        //  console.log(this.$props.options);
    }
};
</script>

<style>
select.border-select {
    border: 1px solid #ccc5b9;
}
</style>
