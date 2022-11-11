<template>
  <div class="d-flex flex-column align-items-start">
    <h5>{{review.user.name}}</h5>
    <span>{{review.user.email}}</span>
    <span>{{review.review}}</span>
  </div>
</template>

<script>
export default {
    name: "ReviewComponent",
    props: {
        review: Object,
  }
}
</script>

<style>

</style>