<template>
  <div class="d-flex flex-column gap-5 p-5 align-items-center">
    <h1>Productos</h1>
    <table class="w-100">
      <tr>
        <th>Imagen</th>
        <th>Nombre</th>
        <th>Fecha creación</th>
      </tr>
      <tr v-for="producto in productos" :key="producto">
        <td><img class="img" :src="producto.images[0]"></td>
        <td>{{producto.name}}</td>
        <td>{{producto.createdAt}}</td>
        <td><a class="btn btn-primary w-100" @click="moreInfo(producto._id)">Más información</a></td>
      </tr>
    </table>
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
  max-width: 100px;
}
</style>