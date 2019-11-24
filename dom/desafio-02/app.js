new Vue({
    el: "#desafio",
    data: {
        valor: ""
    },
    methods: {
        alerta() {
            alert("Alerta!")
        },
        atualizarValor(event) {
            this.valor = event.target.value
        }
    }
})