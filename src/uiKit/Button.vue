<template>
  <button
    :style="buttonStyle"
    :class="classes"
    class="flex items-center justify-center gap-1"
    @click.prevent.stop="handleClick"
    :disabled="disabled"
    :data-cy="dataCy"
  >
    <slot name="leadingSlot"></slot>
    <Loader v-if="loading" />
    {{ buttonLabel }}
    <slot> </slot>
  </button>
</template>

<script lang="ts" setup>
import { PropType, computed } from "vue";
import Loader from "./InsideButtonLoader.vue";

const props = defineProps({
  variant: {
    type: String as PropType<"primary" | "secondary" | "with_border" | "next">,
    default: "primary"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  buttonLabel: {
    type: String,
    default: ""
  },
  loading: {
    type: Boolean,
    default: false
  },
  dataCy: {
    type: String,
    default: ""
  },
  class: {
    type: String,
    default: ""
  },
  buttonStyle: {
    type: Object,
    default: {}
  }
});

const emit = defineEmits(["submit"]);

const handleClick = (): void => {
  if (!props.disabled) {
    emit("submit");
  }
};
const classes = computed(() => {
  return `button ${props.variant} ${props.disabled ? "disabled" : ""} ${
    props.class
  }`;
});
</script>

<style scoped>
.button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
}

.primary {
  background-color: #dd5928;
  color: #fff;
}

.primary:hover {
  background: #b5461d;
}

.secondary {
  color: #dd5928;
}

.with_border {
  border: 1px solid #f3efef;
  color: #696f8c;
}
.next {
  border: 1px solid #b5461d;
  color: #dd5928;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: #c1c4d6;
  border: 1px solid #f3efef;
}
</style>
