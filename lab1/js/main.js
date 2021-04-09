let counter;
const product = (done, text, id)=>({done, text, id});
const car = [
    product()
];

let app = new Vue ({
    el: '#app',
    data: {
        id: 0,
        counter: 0,
        name: '',
        prod: '',
        list_name: true,
        listVisibility: false,
        text_dec: false,
        car: [],
    },
    methods: {
        add() {
            this.car.push(
                product(done=false, text=this.prod, id=counter)
            );
            counter+=1;
        },
        del(index) {
            this.car.splice(index,1)
        }
    }
});

