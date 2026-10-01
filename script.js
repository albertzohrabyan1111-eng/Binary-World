function f1(pay = false) {
    var elem = document.querySelector(`.te`)
    var elem2 = document.querySelector(`.sds`)
    var cod = event.keyCode
    if (cod == 13 || pay == true) {
        elem2.innerHTML = ``
        var arr = []
        var arj = elem.value
        for (var a = 0; a < arj.length; a++) {
            var codAscll = arj.charCodeAt(a);
            var ascllArj = codAscll
            var rezArr = []
            do {
                payman = true
                if (ascllArj == 0 || ascllArj == 1) {
                    rezArr.push(ascllArj)
                    payman = false
                } else {
                    if (ascllArj % 2 != 0) {
                        ascllArj = (ascllArj - 1) / 2
                        rezArr.push(1)
                    } else {
                        ascllArj = ascllArj / 2
                        rezArr.push(0)
                    }
                }
            } while (payman == true)
                rezArr.reverse()
            do {
                var payman2 = true
                if (rezArr.length < 8) {
                    rezArr.unshift(0)
                } else {
                    payman2 = false
                }
            } while (payman2 == true)
        for (var c = 0 ; c < rezArr.length; c++) {
            arr.push(rezArr[c])
        }
        }
        elem.value = null
        for (var b = 0; b < arr.length; b++) {
            elem2.innerHTML += arr[b] + ` `
        }
    }
}

