<template lang="pug">
h1 {{msg}}
div {{aa}}

</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const aa = '123'
</script>
