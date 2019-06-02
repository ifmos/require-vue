<template>
  <div class="home">{{title}}</div>
</template>

<script>
  define([], function () {
    return {
      name: 'home',
      template: __template__,
      data: function () {
        return {
          title: 'Welcome home!',
        }
      },
      mounted: function () {
        console.log('Home mounted!')
        this.$store.commit('updateUsername', 'Mos')
      },
    }
  })
</script>

<style>
  .home {

  }
</style>
