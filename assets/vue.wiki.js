const wikiarticle = Vue.component('wikiarticle', {
    props: ['title'],
    template: `<article>
        <section class="w3-container w3-red">You're currently viewing the <span class="mk-bolder">staging</span> wiki. <a href="https://stuffby.acei.us/wiki">Click here</a> for the <span class="mk-bolder">production</span> wiki.</section>
        <br>
        <section class="w3-container">
        <h2 class="w3-border-bottom">{{title}}</h2>
        <!--<section id="editing-controls">
            <button id="pagemode-toggle" class="w3-button" onclick="pagemode('edit');">Edit</button>
            <button id="bold-btn" class="w3-button" onclick="markup('b');" style="display: none;"><b>Bold</b></button>
            <button id="itallic-btn" class="w3-button" onclick="markup('i');" style="display: none;"><i>Itallic</i></button>
        </section>-->
        <section id="article-body">
            <slot></slot>
        </section>
        <section>
            <textarea id="article-editor" class="w3-input" style="display: none;"></textarea>
        </section>
        </section>
    </article>`,
    /*data: function() {
        return {
            articlecontent: ''
        }
    }*/
});

const wikiVM = new Vue({
    el: '#app',
    components: {
        wikiarticle,
    }
});