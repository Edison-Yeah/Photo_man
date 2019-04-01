<template>
<div>
<h1>{{msg}}</h1>
<button>click</button>
</div>
</template>
<script>
export default {
    name: 'user',
    data() {
        return {
            msg: 'Welcome'
        }
    }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}

</style>