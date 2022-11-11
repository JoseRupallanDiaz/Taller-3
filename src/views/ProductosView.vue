<template>
  <div class="d-flex flex-column gap-2 p-5 w-100 bg-success bg-opacity-10">
    <h1>Productos</h1>
    <div v-for="producto in productos" :key="producto" class="d-flex bg-success bg-opacity-10 p-5 shadow-sm rounded">
        <img class="img" :src="producto.images[0]">
        <div class="d-flex flex-column flex-grow-1 px-5">
          <div>{{producto.name}}</div>
          <div>{{producto.createdAt}}</div>
        </div>
        <a class="btn btn-primary h-100" @click="moreInfo(producto._id)">Detalles</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "ProductosView",
    data(){
      return {
        productos: []
      }
    },
    async mounted(){
      const response = await axios.get("http://170.239.85.65:4000/products")
      this.productos = response.data
    },
    methods:{
      moreInfo(idProducto){
        this.$router.push("/productoinfo/"+idProducto)
      }
    }
}
</script>

<style>
.img {
  max-width: 200px;
}
</style>