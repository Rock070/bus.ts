<template lang="pug">
h1 {{msg}}

</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

</script>
