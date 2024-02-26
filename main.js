const app = Vue.createApp({
    data () {
        return{
            product: "Socks",
            description: "Fluffy warm socks!",
            image: './assets/images/socks_green.jpg',
            url: "https://www.vuemastery.com",
            inventory: 100,
            onSale: false,
            details: ["50 cotton", "30% wool", "20% polyester"],
            variants:[
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'}
            ],
            sizes: ["xsmall", "small", "medium", "large", "xlarge"],
        }
    }
})
