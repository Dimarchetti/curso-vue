new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Alerta Exibido!')
        },
        trocarValor(event) {
            this.valor = event.target.value
        }
    },
})