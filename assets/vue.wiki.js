const wikiarticle = Vue.component('wikiarticle', {
    props: ['title'],
    template: `<article>
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
});

const stagingmessage = Vue.component('stagingmessage', {
    template: `<section class="w3-container w3-red">You're currently viewing the <span class="mk-bolder">staging</span> wiki. For the <span class="mk-bolder"><a href="https://stuffby.acei.us/wiki">production</a></span> wiki.</section>`,
    name: 'stagingmessage'
});

const wikiVM = new Vue({
    el: '#app',
    components: {
        wikiarticle,
    }
});