<template>
<div>
    <header class="masthead" id="banner">
        <div class="container">
            <div class="intro-text">
                <div class="intro-lead-in">Bienvenido</div>
                <div class="intro-heading text-uppercase">Vue + Fire</div>
                <a class="btn btn-info btn-xl text-uppercase" href="#services">Saber más</a>

            </div>
        </div>
    </header>
<b-container>
    <b-row class="text-center page-section">

        <div class="text-center container">
            <h2 class="section-heading text-uppercase mb-4 mt-4">Productos Recientes</h2>
            <h3 class="section-subheading text-muted">Productos extraidos desde firebase con firevue.</h3>

        </div>
        <b-col v-for="item in prodMain" :key="item.id" xl="3" lg="3" md="6" sm="1" >
            <b-img class="mediana mt-5" v-bind:src="item.url" rounded="circle" alt="Circle image"></b-img>

            <h4>{{item.title}}</h4>

        </b-col>
    </b-row>
    </b-container>

    <section id="portafolio"> 
    <b-container >
    <b-row class="page-section text-center" >
        <div class="container">
            <h2 class="section-heading text-uppercase mb-4 mt-4">Ideas</h2>
        </div>
        <div class="mx-auto container">
            <b-card-group deck>

                <b-card no-body img-src="https://source.unsplash.com/oR0uERTVyD0/380x200" img-alt="Image" img-top>
                    <b-card-body>
                        <b-card-title>Card Title</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                    </b-card-body>
                </b-card>

                <b-card no-body img-src="https://source.unsplash.com/W1GCJ4GcsPk/380x200" img-alt="Image" img-top>
                    <b-card-body>
                        <b-card-title>Card Title</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                    </b-card-body>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/n_lX06M02HI/380x200" img-alt="Image" img-top>
                    <b-card-body>
                        <b-card-title>Card Title</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                    </b-card-body>
                </b-card>

            </b-card-group>

            <b-card-group deck class="mt-4">
                <b-card no-body img-src="https://source.unsplash.com/505eectW54k/380x200" img-alt="Image" img-top>
                    <b-card-body>
                        <b-card-title>Card Title</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                    </b-card-body>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/XMFZqrGyV-Q/380x200" img-alt="Image" img-top>
                    <b-card-body>
                        <b-card-title>Card Title</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                    </b-card-body>
                </b-card>
                <b-card no-body img-src="https://source.unsplash.com/Khqmo4T-rs0/380x200" img-alt="Image" img-top>
                    <b-card-body>
                        <b-card-title>Card Title</b-card-title>
                        <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
                    </b-card-body>
                </b-card>

            </b-card-group>
        </div>
    </b-row>
</b-container>
</section>


    <section class="text-center page-section">
        <div class="container">
            <h2 class="section-heading text-uppercase ">Nosotros</h2>
            <h3 class="section-subheading text-muted">Productos extraidos desde firebase con firevue.</h3>
        </div>
        <b-container>
            <b-row>
                <b-col>
                    <b-img src="https://source.unsplash.com/rDEOVtE7vOs/200x200" class="border border-info mb-3" rounded="circle" alt="Circle image"></b-img>
                    <h4>Kay Garland</h4>
                    <p class="text-muted">Lead Designer</p>
                </b-col>
                <b-col>
                    <b-img src="https://source.unsplash.com/Nm70URdtf3c/200x200" class="border border-info mb-3" rounded="circle" alt="Circle image"></b-img>
                    <h4>Larry Parker</h4>
                    <p class="text-muted">Lead Marketer</p>
                </b-col>
                <b-col>
                    <b-img src="https://source.unsplash.com/d2MSDujJl2g/200x200" class="border border-info mb-3" rounded="circle" alt="Circle image"></b-img>
                    <h4>Diana Pertersen</h4>
                    <p class="text-muted">Lead Developer</p>
                </b-col>
            </b-row>
        </b-container>
        <div class=" mt-5 col-lg-8 mx-auto text-center">
            <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>

        </div>
    </section>

    <section class="page-section contact">
        <div class="container">
            <div class="text-center container mb-3">
                <h3>Contactanos</h3>
            </div>
            <b-row>
                <b-col cols="12">
                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                        <b-row>
                            <b-col cols="6">
                                <div class="form-group">
                                    <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number.">
                                    <p class="help-block text-danger"></p>
                                </div>
                            </b-col>
                            <b-col cols="6">
                                <div class="form-group">
                                    <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </b-col>
                            <div class="clearfix"></div>
                            <div class="col-lg-12 text-center">
                                <div id="success"></div>
                                <button id="sendMessageButton" class="btn btn-warning btn-xl text-uppercase" type="submit">Enviar mensaje</button>
                            </div>
                        </b-row>
                    </form>
                </b-col>
            </b-row>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer mt-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <span class="copyright">Copyright &copy; Your Website 2019</span>
                </div>
                <div class="col-md-4">
                    <ul class="list-inline social-buttons">
                        <li class="list-inline-item">
                            <a href="#">
                                <font-awesome-icon icon="user-secret" size="lg" />
                            </a>
                        </li>

                    </ul>
                </div>
                <div class="col-md-4">
                    <ul class="list-inline quicklinks">
                        <li class="list-inline-item">
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">Terms of Use</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
import {
    db
} from '@/config/db';
import Firebase from 'firebase'

export default {
    components: {
        name: 'Home'
    },

    data() {
        return {
            prodMain: [],
        }
    },
    firestore: {
        prodMain: db.collection('ventas').limit(4),
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

.page-section {
    padding: 50px 0;
}

header.masthead {
    text-align: center;
    background-image: url("https://images.unsplash.com/photo-1487537023671-8dce1a785863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
    /* filter:brightness(0.5); */
}

header.masthead .intro-text {
    padding-top: 150px;
    padding-bottom: 100px;
}

header.masthead .intro-text .intro-lead-in {
    font-size: 22px;
    font-style: italic;
    line-height: 22px;
    margin-bottom: 25px;
    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

header.masthead .intro-text .intro-heading {
    color: #17A2B8;
    font-size: 60px;
    font-weight: 700;
    line-height: 50px;
    margin-bottom: 25px;
    font-family: 'Oswald', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

.page-section h2.section-heading {
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 15px;
    font-family: 'Oswald', sans-serif;

}

.page-section h3.section-subheading {
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 75px;
    text-transform: none;
    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

img.mediana {
    width: 200px;
    height: 200px;
}

#portafolio {
    background-color: #f4f4f5;
}

section.contact {
    /* Location of the image */
    background-image: url(https://images.unsplash.com/photo-1505562130589-9879683e72da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);

    /* Background image is centered vertically and horizontally at all times */
    background-position: center center;

    /* Background image doesn't tile */
    background-repeat: no-repeat;

    /* Background image is fixed in the viewport so that it doesn't move when 
     the content's height is greater than the image's height */
    background-attachment: fixed;

    /* This is what makes the background image rescale based
     on the container's size */
    background-size: cover;

    /* Set a background color that will be displayed
     while the background image is loading */
    background-color: #464646;
}

.text-muted {
    color: #6c757d !important;
}
</style>
