const app = new Vue({

    el: '#root',

    data:{
        counter: 0,

        images:[
            './assets/img/paesaggio01.jpg',
            './assets/img/paesaggio02.jpg',
            './assets/img/paesaggio03.jpg',
            './assets/img/paesaggio04.jpg',
            './assets/img/paesaggio05.jpg',
        ],

        bgColor: 'white'
    },

    methods:{
        prev(){
            console.log("Hai cliccato tu previous");

            clearInterval(this.setInterval); 

            if(this.counter == 0){
                return this.counter = this.images.length-1;
            }
             return this.counter--;
        },

        next(){
            console.log("Hai cliccato su next");

            clearInterval(this.setInterval);

            if(this.counter == this.images.length -1){
               return this.counter = 0;
            }
             return this.counter++;
        },

        selectImg(index){
            return this.counter = index;
        },
    },

    mounted(){
        setInterval(this.next, 3000);
        document.addEventListener("keyup", e => {
            if(e.key === 'ArrowRight'){
                this.next();
            }

            if(e.key === 'ArrowLeft'){
                this.prev();
            }
        });
    }
    
});