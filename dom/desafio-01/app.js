new Vue({
    el: '#desafio',
    data: {
        nome: 'Dimitri Marchetti',
        idade: '37',
        link: "https://static.dafiti.com.br/p/Democrata-Sapato-Social-Couro-Democrata-Jazz-Flex-Preto-1322-6178223-2-zoom.jpg",
    },
    methods: {
        numeroRandomico() {
            return Math.random()
        }
    }
})