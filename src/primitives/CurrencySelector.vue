<template>
  <div class="selector">
    <span class="selector_title">{{ title }}</span>
    <select
      class="select_btn"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    options: Array,
    title: String,
    modelValue: String,
  },
  emits: ["update:selectedCurrency"],
  methods: {},
};
</script>

<style lang="scss">
.selector {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80px;
  height: 100%;
  margin: 10px;
}
.select_btn {
  background: $btn-secondary-color;
  border-radius: 10px;
  width: 50px;
  height: 20px;
  margin: 3px 5px;
}
</style>