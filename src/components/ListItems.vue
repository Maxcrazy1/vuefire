<template>
<div class="container">

    <vue-snotify></vue-snotify>
    <h4 class="display-4 text-center mt-3">El stock que proviene de firebase 🔥</h4>
    <div class="text-center">
    <Modal ref="modelo" class="mt-2 mb-2"></Modal>
</div>
    <b-container class="border border-info mb-5">
        <b-row>
            <b-col xl="3" lg="3" md="6" sm="1" v-for="item in documents" class="mt-3" :key="item.id">
                <div>
                    <b-card :title="item.title" :img-src="item.url" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                        <b-card-text>
                            <h4>Precio</h4>
                            <h5>${{item.precio}}</h5>
                        </b-card-text>
                        <div class="text-center">
                            <b-button href="#" variant="primary" @click="setProducto(item)">Editar</b-button>
                            <b-button href="#" class="ml-3" variant="danger" @click="removeDoc(item.id)">Eliminar</b-button>
                        </div>
                    </b-card>
                </div>

            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
// llamado a archivo que gestiona la conexión
import {
    db
} from '@/config/db';

import Firebase from 'firebase'
import Modal from '@/components/Modal.vue'
import {
    mapMutations,
    mapState,
    mapActions
} from 'vuex';

export default {
    components: {
        name: 'ListItems',
        Modal,
    },
    data() {
        return {
            documents: [],

        }
    },

    // extracción de datos de colección de firebase
    firestore: {
        documents: db.collection('ventas'),
    },
    methods: {
        ...mapMutations(['setDatos', 'setCondition']),

        setProducto(datos) {
            this.setCondition("edit");
            this.setDatos(datos);
            this.$bvModal.show('modalDatos');
            this.$refs.modelo.fillVar()

        },
        removeDoc(id) {
            db.collection('ventas')
                .doc(id)
                .delete();
            this.notificacion('El producto ha sido borrado de firebase', 'Eliminado');
        },
        notificacion(body, title) {
            this.$snotify.warning(body, title);
        },

    }
}
</script>

<style>


</style>
