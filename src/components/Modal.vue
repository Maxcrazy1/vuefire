<template>
<div>
    <b-button variant="danger" v-b-modal.modalDatos @click="newObject()">Añadir a stock</b-button>

    <b-modal id="modalDatos" title="Producto para el stock">
       <div class="form-group">
            <label for="exampleFormControlInput1">Nombre del producto</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre del producto" v-model="item.nombre">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">Stock</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Stock" v-model="item.stock">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">Precio</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Precio $" v-model="item.precio">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">Url de la img</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Url de la imagen" v-model="item.url">
        </div>
        <div slot="modal-footer" class="w-100">
            <p class="float-left">App vuefire</p>
            <b-button variant="dark" size="sm" class="float-right ml-2" @click="show=false">
                Cancelar
            </b-button>

            <b-button variant="primary" size="sm" class="float-right" @click="actionItem()">
                Guardar
            </b-button>
        </div>
    </b-modal>
</div>
</template>

<script>
import {
    db
} from '../config/db';
import Vuex from 'vuex'
import store from '@/store';

import {
    mapState,
    mapMutations,
    mapActions,

} from 'vuex';

export default {
    components: {
        name: 'Modal'
    },
    data() {
        return {
            item: {
                nombre: null,
                precio: null,
                stock: null,
                url: null
            }
        }
    },

    computed: {
        // comunicación de datos alojados en store
        ...mapState(['producto', 'cond']),

    },
    methods: {
        ...mapMutations(['setCondition']),

        actionItem() {

            if (this.cond == "edit") {
                this.editItem()
            } else {
                this.newItem();
            }
            this.cleanVar();
            this.$bvModal.hide("modalDatos")

        },
        editItem() {
            db.collection('ventas')
                .doc(this.producto.id)
                .set({
                    title: this.item.nombre,
                    precio: this.item.precio,
                    stock: this.item.stock,
                    url: this.item.url
                })
        this.editNotify();

        },
        newItem() {
            db.collection('ventas').add({
                title: this.item.nombre,
                precio: this.item.precio,
                precio: this.item.stock,
                url: this.item.url
            })
            this.successNotify();
        },

        fillVar() {
            this.item.nombre = this.producto.nombre;
            this.item.precio = this.producto.precio;
            this.item.stock = this.producto.stock;
            this.item.url = this.producto.url;
        },

        cleanVar() {
            this.item.nombre = '',
                this.item.stock = '',
                this.item.precio = ''
                this.item.url = ''
        },
        newObject() {
            this.setCondition("new");
            this.cleanVar();

        },
        
  successNotify() {
      this.$snotify.success("El producto ha sido almacenado en firebase", "Guardado");
  },
  editNotify() {
      this.$snotify.info("El producto ha sido editado en firebase", "Editado");
  },

    },

}
</script>
