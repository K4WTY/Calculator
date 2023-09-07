const buttons = document.querySelectorAll('button')
const input = document.getElementById('input-result')

buttons.forEach(function(e) {
    e.addEventListener('click', function() {
        if (e.innerHTML == 'DEL' && input.value.length > 1) {
            let value = input.value
            input.value = value.substring(0, value.length - 1)
            return
        } else if (e.innerHTML == 'DEL' && input.value.length == 1) {
            input.value = 0
            return
        }

        if (e.innerHTML == 'RESET') {
            input.value = 0
            return
        }

        if (e.innerHTML == '=') {
            try {
                input.value =  eval(input.value)
                return
            } catch(msg) {
                alert(msg)
                input.value = 0
                return
            }
        }

        if (input.value == 0) {
            input.value = e.innerHTML
            return
        }

        input.value += e.innerHTML
    })
})