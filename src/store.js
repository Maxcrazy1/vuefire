import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cond:null,
    producto: {
      id:null,
      nombre: null,
      precio: null,
      stock: null
    }
  },

  mutations: {
    setDatos(state, newProduct) {
      state.producto.id=newProduct.id;
      state.producto.nombre = newProduct.title;
      state.producto.precio = newProduct.precio;
      state.producto.stock = newProduct.stock;
      state.producto.url = newProduct.url;
    },
    setCondition(state,param){
      state.cond = param;

    }
  },

  actions: {
   

  
  }
})
