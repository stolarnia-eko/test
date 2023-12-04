
let klamka = document.getElementById('klamka')
let zaw = document.getElementById('zawias')
let stl = document.getElementById('slup')

let box_left = document.querySelector('.box-left')
let box_right = document.querySelector('.box-right')
let box_bottom = document.querySelector('.box-bottom')

let count_skr = '1'
let spos_open = 'rozw_uch'
let str_zaw = 'left'
let str_slupek = 'left'
let h_kl = ''
let start = 'stop'
let one_or_two = ''
let poziom_okucia = 'standart'

let b1 = document.getElementById("btn1")
let b2 = document.getElementById("btn2")
let b3 = document.getElementById("btn3")
let b4 = document.getElementById("btn4")
let b5 = document.getElementById("btn5")
let b6 = document.getElementById("btn6")
let b7 = document.getElementById("btn7")
let b8 = document.getElementById("btn8")

let l1 = document.getElementById('l-1')
let l2 = document.getElementById('l-2')
let l3 = document.getElementById('l-3')
let l4 = document.getElementById('l-4')

let p1 = document.getElementById('p-1')
let p2 = document.getElementById('p-2')
let p3 = document.getElementById('p-3')
let p4 = document.getElementById('p-4')

let t1 = document.getElementById('t-1')
let t2 = document.getElementById('t-2')
let t3 = document.getElementById('t-3')

let bot1 = document.getElementById('b-1')
let bot2 = document.getElementById('b-2')
let bot3 = document.getElementById('b-3')

let res = document.getElementById('res-desingo')

let standart
let dialog = document.querySelector('.modal')
let infoDialog = document.getElementById('info-dialog')

let btn_standart = document.getElementById('btn_standart')
let btn_er1 = document.getElementById('btn_er1')
let btn_er2 = document.getElementById('btn_er2')


let data = {
    h_klamka: [140, 190, 283, 433, 533, 583, 1020],
    width_max: 1600,
    height_min: 280,
    height_max: 2800
}

window.addEventListener('load', () => {
    b1.style.backgroundColor = 'red'
    b3.style.backgroundColor = 'red'
    b5.style.backgroundColor = 'red'
    b7.style.backgroundColor = 'red'
    stl.style.display = 'none'
    for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
        const element = document.querySelectorAll('.btn9')[index];
        element.innerHTML = data.h_klamka[index]
    }


})
function add_style_button() {
    btn_standart.style.backgroundColor = 'blueviolet'
    btn_er1.style.backgroundColor = 'blueviolet'
    btn_er2.style.backgroundColor = 'blueviolet'
    btn_standart.disabled = false
    btn_er1.disabled = false
    btn_er2.disabled = false
}

function count_skrzydla(count) {
    delete_all_div()
    count_skr = count
    one_or_two = count
    add_style_button()
    if (count_skr == '1') {
        b1.style.backgroundColor = 'red'
        b2.style.backgroundColor = 'blueviolet'

        klamka.style.display = 'block'
        zaw.style.display = 'block'
        stl.style.display = 'none'

        if (start == 'start') {
            if (one_or_two == '1') {
                delete_all_div()
                for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
                    const element = document.querySelectorAll('.btn9')[index];
                    if (element.classList.contains('active')) {
                        element.classList.remove('active')
                    }

                }
                if (btn_standart.classList.contains('active')) {
                    btn_standart.classList.remove('active')
                }
            }
        }
    }
    else if (count_skr == '2') {
        one_or_two = '2'
        b2.style.backgroundColor = 'red'
        b1.style.backgroundColor = 'blueviolet'
        klamka.style.display = 'none'
        zaw.style.display = 'none'
        stl.style.display = 'block'
    }
    for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
        const element = document.querySelectorAll('.btn9')[index];
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    }

}

function sposob_open(params) {
    spos_open = params
    if (spos_open == 'rozw_uch') {
        b3.style.backgroundColor = 'red'
        b4.style.backgroundColor = 'blueviolet'
    }
    else {
        b4.style.backgroundColor = 'red'
        b3.style.backgroundColor = 'blueviolet'
        spos_open = 'rozw'
    }
    for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
        const element = document.querySelectorAll('.btn9')[index];
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    }
    delete_all_div()
    add_style_button()
}

function strona_zawiasow(params) {
    str_zaw = params
    if (str_zaw == 'left') {
        b5.style.backgroundColor = 'red'
        b6.style.backgroundColor = 'blueviolet'
    }
    else {
        b6.style.backgroundColor = 'red'
        b5.style.backgroundColor = 'blueviolet'
    }
    for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
        const element = document.querySelectorAll('.btn9')[index];
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    }
    add_style_button()
    delete_all_div()
}

function slupek(value_slupek) {
    str_slupek = value_slupek
    if (str_slupek == 'left') {
        b7.style.backgroundColor = 'red'
        b8.style.backgroundColor = 'blueviolet'
    }
    else {
        b8.style.backgroundColor = 'red'
        b7.style.backgroundColor = 'blueviolet'
    }

    for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
        const element = document.querySelectorAll('.btn9')[index];
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    }
    add_style_button()
    delete_all_div()
}

document.querySelectorAll('.btn9').forEach(button => {
    button.addEventListener('click', function (param) {
        h_kl = button.textContent
        btn_standart.style.backgroundColor = 'blueviolet'
        btn_er1.style.backgroundColor = 'blueviolet'
        btn_er2.style.backgroundColor = 'blueviolet'
        for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
            const element = document.querySelectorAll('.btn9')[index];
            if (element.classList.contains('active')) {
                element.classList.remove('active')
            }
            button.classList.add('active')

        }
        if (standart != 'ok') {
            delete_all_div()

        }

    });
});



function input_click() {
    delete_all_div()
    btn_standart.style.backgroundColor = 'blueviolet'
    btn_er1.style.backgroundColor = 'blueviolet'
    btn_er2.style.backgroundColor = 'blueviolet'
    res.innerText = ''
    for (let index = 0; index < document.querySelectorAll('.btn9').length; index++) {
        const element = document.querySelectorAll('.btn9')[index];
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    }
    btn_standart.disabled = false
    btn_er1.disabled = false
    btn_er2.disabled = false
}

function click_button_standart() {
    start = 'start'
    let inp1 = document.getElementById('inp1').value
    let inp2 = document.getElementById('inp2').value
    add_color_box_standart(count_skr, str_zaw, str_slupek, spos_open)
    if (count_skr == '1' && inp1 != '' && inp2 != '') {
        if (h_kl != '') {
            if (inp2 >= data.height_min && inp2 <= data.height_max && inp1 <= data.width_max) {
                res_box_x(inp1, inp2, h_kl, str_zaw, spos_open)
                h_kl = ''
                btn_er1.disabled = true
                btn_er2.disabled = true
            }
            else {
                infoDialog.innerText = 'Niema takich zakresów!!!'
                open_dialog()
            }
        }
        else {
            infoDialog.innerText = 'Jaka wysokość klamki???'
            open_dialog()
            delete_all_div()
            btn_standart.classList.remove('active')
        }
    }
    else if (count_skr == '2' && inp1 != '' && inp2 != '') {
        if (inp2 >= data.height_min && inp2 <= data.height_max && inp1 <= data.width_max) {
            res_box_xx(inp1, inp2, str_slupek, spos_open)
            btn_standart.style.backgroundColor = 'red'
            btn_er1.disabled = true
            btn_er2.disabled = true
        }
        else {
            infoDialog.innerText = 'Niema takich zakresów!!!'
            open_dialog()
        }
    }
    else {
        open_dialog()
        infoDialog.innerText = 'Dodaj wymiary skrzydeł!!!'
    }
}
function click_button_er1() {
    start = 'start'
    let inp1 = document.getElementById('inp1').value
    let inp2 = document.getElementById('inp2').value

    add_color_box_er(count_skr, str_zaw)
    if (count_skr == '1' && inp1 != '' && inp2 != '') {
        if (h_kl != '') {
            if (inp2 >= data.height_min && inp2 <= data.height_max && inp1 <= data.width_max) {
                func_zasuwnica(inp2, h_kl, str_zaw)
                h_kl = ''
                if (standart == 'ok') {
                    btn_er1.style.backgroundColor = 'red'
                    func_plecy_er1(inp2, str_zaw)
                    func_dol_er1(inp1, count_skr)
                    func_gora_er1(inp1, spos_open, count_skr)
                    btn_standart.disabled = true
                    btn_er2.disabled = true
                }

            }
            else {
                infoDialog.innerText = 'Niema takich zakresów!!!'
                open_dialog()
            }
        }
        else {
            infoDialog.innerText = 'Jaka wysokość klamki???'
            open_dialog()
            btn_er1.classList.remove('active')
        }
    }
    else if (count_skr == '2' && inp1 != '' && inp2 != '') {
        if (inp2 >= data.height_min && inp2 <= data.height_max && inp1 <= data.width_max) {
            res_box_xx_er1(inp1, inp2, str_slupek, spos_open, count_skr)
            btn_er1.style.backgroundColor = 'red'
            btn_standart.disabled = true
            btn_er2.disabled = true
        }
        else {
            infoDialog.innerText = 'Niema takich zakresów!!!'
            open_dialog()
        }
    }
    else {
        open_dialog()
        infoDialog.innerText = 'Dodaj wymiary skrzydeł!!!'
    }
}
function click_button_er2() {
    let inp1 = document.getElementById('inp1').value
    let inp2 = document.getElementById('inp2').value
    start = 'start'
    add_color_box_er(count_skr, str_zaw)
    if (count_skr == '1' && inp1 != '' && inp2 != '') {
        if (h_kl != '') {
            if (inp2 >= 490 && inp2 <= 2600 && inp1 <= data.width_max) {
                res_box_x_er2(inp1, inp2, h_kl, str_zaw, count_skr)
                h_kl = ''
                btn_er2.classList.add('active')
                btn_standart.disabled = true
                btn_er1.disabled = true
            }
            else {
                infoDialog.innerText = 'Niema takich zakresów!!!'
                open_dialog()
            }
        }
        else {
            infoDialog.innerText = 'Jaka wysokość klamki???'
            open_dialog()
            btn_standart.classList.remove('active')
        }
    }
    else if (count_skr == '2' && inp1 != '' && inp2 != '') {
        if (inp2 >= 490 && inp2 <= 2600 && inp1 <= 1600) {
            res_box_xx_er2(inp1, inp2, str_slupek, spos_open, str_zaw)
            btn_standart.disabled = true
            btn_er1.disabled = true
        }
        else {
            infoDialog.innerText = 'Niema takich zakresów!!!'
            open_dialog()
        }
    }
    else {
        open_dialog()
        infoDialog.innerText = 'Dodaj wymiary skrzydeł!!!'
    }
}
function add_color_box_standart(count_skr, str_zaw, str_slupek, spos_open) {
    if (spos_open == 'rozw_uch') {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                box_left.style.color = 'red'
                box_right.style.color = 'green'
                p3.style.color = 'brown'
                l3.style.color = 'red'
            }
            else if (str_zaw == 'right') {
                box_left.style.color = 'green'
                box_right.style.color = 'red'
                l3.style.color = 'brown'
                p3.style.color = 'red'
            }
        }
        else if (count_skr == '2') {
            if (str_slupek == 'left') {
                box_left.style.color = 'brown'
                box_right.style.color = 'red'
                p3.style.color = 'red'
                l3.style.color = 'brown'
            }
            else if (str_slupek == 'right') {
                box_left.style.color = 'red'
                box_right.style.color = 'brown'
                l3.style.color = 'red'
                p3.style.color = 'brown'
            }
        }
    }
    if (spos_open == 'rozw') {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                box_left.style.color = 'brown'
                box_right.style.color = 'green'
                p3.style.color = 'brown'
                l3.style.color = 'brown'
            }
            else if (str_zaw == 'right') {
                box_left.style.color = 'green'
                box_right.style.color = 'brown'
                p3.style.color = 'brown'
                l3.style.color = 'brown'
            }
        }
        else if (count_skr == '2') {
            box_left.style.color = 'brown'
            box_right.style.color = 'brown'
            p3.style.color = 'brown'
            l3.style.color = 'brown'
        }
    }
}
function add_color_box_er(count_skr, str_zaw) {
    if (count_skr == '1') {
        if (str_zaw == 'left') {
            box_left.style.color = 'red'
            box_right.style.color = 'green'
            p3.style.color = 'brown'
            l3.style.color = 'red'
        }
        else if (str_zaw == 'right') {
            box_left.style.color = 'green'
            box_right.style.color = 'red'
            l3.style.color = 'brown'
            p3.style.color = 'red'
        }
    }
    else if (count_skr == '2') {
        box_left.style.color = 'red'
        box_right.style.color = 'red'
        l3.style.color = 'red'
        p3.style.color = 'red'
    }
}




function delete_all_div() {
    p1.innerText = ''
    p2.innerText = ''
    p3.innerText = ''
    p4.innerText = ''
    l1.innerText = ''
    l2.innerText = ''
    l3.innerText = ''
    l4.innerText = ''
    t1.innerText = ''
    t2.innerText = ''
    t3.innerText = ''
    bot1.innerText = ''
    bot2.innerText = ''
    bot3.innerText = ''

}

function func_plecy(spos_open, height, str_zaw) {
    if (spos_open == 'rozw_uch') {
        if (height < 801) {
            if (str_zaw == 'left') {
                l1.innerText = ''
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = ''
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }

        }
        else if (height >= 801 && height <= 1200) {
            if (str_zaw == 'left') {
                l1.innerText = '400'
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '400'
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (height >= 1201 && height <= 1600) {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (height >= 1601 && height <= 2000) {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '400'
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '400'
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (height >= 2001 && height <= 2400) {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (height >= 2401 && height <= 2600) {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = '400'
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = '400'
                p4.innerText = ''
            }
        }
        else if (height >= 2601 && height <= 2800) {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = '600'
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = '600'
                p4.innerText = ''
            }
        }
    }
    else if (spos_open == 'rozw') {
        if (height >= 801 && height <= 1600) {
            if (str_zaw == 'left') {
                l1.innerText = ''
                l2.innerText = 'd-kr'
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw = 'right') {
                p1.innerText = ''
                p2.innerText = 'd-kr'
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (height >= 1601) {
            if (str_zaw == 'left') {
                l1.innerText = ''
                l2.innerText = 'd-kr'
                l3.innerText = 'd-kr'
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = ''
                p2.innerText = 'd-kr'
                p3.innerText = 'd-kr'
                p4.innerText = ''
            }

        }
    }
}

function func_zasuwnica(height, height_klamka, str_zaw) {

    if (height >= 280 && height <= 570 && height_klamka == 140) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
    }
    else if (height >= 511 && height <= 600 && height_klamka == 190) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = '262'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = '262'
            l4.innerText = ''
        }

    }
    else if (height >= 601 && height <= 800 && height_klamka == 283) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = '350'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = '350'
            l4.innerText = ''
        }

    }
    else if (height >= 801 && height <= 1000 && height_klamka == 433) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = '550'
            p3.innerText = '283'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = '550'
            l3.innerText = '283'
            l4.innerText = ''
        }
    }
    else if (height >= 1001 && height <= 1200 && height_klamka == 533) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = '700'
            p3.innerText = '388'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = '700'
            l3.innerText = '388'
            l4.innerText = ''
        }
    }
    else if (height >= 1201 && height <= 1400 && height_klamka == 583) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = '700'
            p3.innerText = '388'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = '700'
            l3.innerText = '388'
            l4.innerText = ''
        }
    }
    else if (height >= 1401 && height <= 1600 && height_klamka == 583) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1170'
            p2.innerText = '700'
            p3.innerText = '388'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1170'
            l2.innerText = '700'
            l3.innerText = '388'
            l4.innerText = ''
        }
    }
    else if (height >= 1601 && height <= 1800 && height_klamka == 583) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1370'
            p2.innerText = '700'
            p3.innerText = '388'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1370'
            l2.innerText = '700'
            l3.innerText = '388'
            l4.innerText = ''
        }
    }
    else if (height >= 1601 && height <= 1800 && height_klamka == 1020) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = '1370'
            p3.innerText = '1121'
            p4.innerText = '700'
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = '1370'
            l3.innerText = '1121'
            l4.innerText = '700'
        }
    }
    else if (height >= 1801 && height <= 2000 && height_klamka == 1020) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = '1370'
            p3.innerText = '1121'
            p4.innerText = '700'
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = '1370'
            l3.innerText = '1121'
            l4.innerText = '700'
        }
    }
    else if (height >= 2001 && height <= 2800 && height_klamka == 1020) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1770'
            p2.innerText = '1370'
            p3.innerText = '1121'
            p4.innerText = '700'
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1770'
            l2.innerText = '1370'
            l3.innerText = '1121'
            l4.innerText = '700'
        }
    }
    else {
        btn_standart.style.backgroundColor = 'blueviolet'
        delete_all_div()
        standart = ''
        infoDialog.innerText = 'Niestandart!!! Okuwamy według skrzydła!!!'
        open_dialog()
    }
}

function func_gora(widht, spos_open, str_zaw) {
    if (spos_open == 'rozw_uch') {
        if (widht < 801) {
            t2.innerText = ''
            t1.innerText = ''
            t3.innerText = ''
        }
        if (widht >= 801 && widht <= 1000) {
            t2.innerText = 'AX-600'
            t1.innerText = ''
            t3.innerText = ''
        }
        else if (widht >= 1001 && widht < 1401) {
            t2.innerText = 'AX-750'
            t1.innerText = ''
            t3.innerText = ''
        }
        else if (widht >= 1401) {
            open_dialog()
            infoDialog.innerText = 'Montaż dodatkowej rozwórki!!!'
            t2.innerText = 'AX-750'
            t1.innerText = ''
            t3.innerText = ''
        }
    }
    else if (spos_open == 'rozw') {
        if (widht >= 801 && widht <= 1200) {
            t2.innerText = '400'
            t1.innerText = ''
            t3.innerText = ''
        }
        else if (widht >= 1201 && widht <= 1400) {
            t2.innerText = '600'
            t1.innerText = ''
            t3.innerText = ''
        }
        else if (widht >= 1401 && widht <= 1600) {
            if (str_zaw == 'left') {
                t1.innerText = ''
                t2.innerText = '400 600'
                t3.innerText = ''
            }
            else if (str_zaw == 'right') {
                t1.innerText = ''
                t2.innerText = '600 400'
                t3.innerText = ''
            }
        }
    }
}
function func_dol(widht, str_zaw) {
    if (widht < 801) {
        bot2.innerText = ''
        bot1.innerText = ''
        bot3.innerText = ''
    }
    else if (widht >= 801 && widht <= 1200) {
        bot2.innerText = '400'
        bot1.innerText = ''
        bot3.innerText = ''
    }
    else if (widht >= 1201 && widht <= 1400) {
        bot2.innerText = '600'
        bot1.innerText = ''
        bot3.innerText = ''

    }
    else if (widht >= 1401 && widht <= 1600) {
        if (str_zaw == 'left') {
            bot1.innerText = ''
            bot2.innerText = '400 600'
            bot3.innerText = ''
        }
        else if (str_zaw == 'right') {
            bot1.innerText = ''
            bot2.innerText = '600 400'
            bot3.innerText = ''
        }

    }
}

function res_box_x(widht, height, height_klamka, str_zaw, spos_open) {
    func_zasuwnica(height, height_klamka, str_zaw)
    if (standart == 'ok') {
        btn_standart.style.backgroundColor = 'red'
        func_plecy(spos_open, height, str_zaw)
        func_gora(widht, spos_open, str_zaw)
        func_dol(widht, str_zaw)
    }
}
function res_box_xx(widht, height, str_slupek, spos_open) {
    if (spos_open == 'rozw_uch') {
        xx_plecy(height, str_slupek, spos_open)
        xx_top_rozw_uch(widht, str_slupek)
        xx_slupek_rozw_uch(widht, str_slupek)
        xx_top_bottom_rozw(widht, spos_open)
    }

    xx_docisk(height, str_slupek, spos_open)
    if (spos_open == 'rozw') {
        xx_top_bottom_rozw(widht, spos_open, str_slupek)
    }


}
function xx_plecy(height, str_slupek, spos_open) {
    if (height < 801) {
        if (str_slupek == 'left') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_slupek == 'right') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }

    }
    else if (height >= 801 && height <= 1200) {
        if (str_slupek == 'right') {
            l1.innerText = '400'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_slupek == 'left') {
            p1.innerText = '400'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }

    }
    else if (height >= 1201 && height <= 1600) {
        if (str_slupek == 'right') {
            l1.innerText = '600'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_slupek == 'left') {
            p1.innerText = '600'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }

    }
    else if (height >= 1601 && height <= 2000) {
        if (str_slupek == 'right') {
            l1.innerText = '600'
            l2.innerText = '400'
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_slupek == 'left') {
            p1.innerText = '600'
            p2.innerText = '400'
            p3.innerText = ''
            p4.innerText = ''
        }

    }
    else if (height >= 2001 && height <= 2400) {
        if (str_slupek == 'right') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_slupek == 'left') {
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = ''
            p4.innerText = ''
        }

    }
    else if (height >= 2401 && height <= 2800) {
        if (str_slupek == 'right') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '400'
            l4.innerText = ''
        }
        else if (str_slupek == 'left') {
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '400'
            p4.innerText = ''
        }

    }
}
function xx_docisk(height, str_slupek, spos_open) {
    if (height < 801) {
        if (spos_open == 'row_uch') {
            if (str_slupek == 'left') {
                l1.innerText = ''
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_slupek == 'right') {
                p1.innerText = ''
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (spos_open == 'rozw') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }

    }
    else if (height >= 801 && height < 1601) {
        if (spos_open == 'rozw_uch') {
            if (str_slupek == 'left') {
                l1.innerText = ''
                l2.innerText = 'd-kr'
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_slupek == 'right') {
                p1.innerText = ''
                p2.innerText = 'd-kr'
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (spos_open == 'rozw') {
            p1.innerText = ''
            p2.innerText = 'd-kr'
            p3.innerText = ''
            p4.innerText = ''
            l1.innerText = ''
            l2.innerText = 'd-kr'
            l3.innerText = ''
            l4.innerText = ''
        }

    }
    else if (height >= 1601) {
        if (spos_open == 'rozw_uch') {
            if (str_slupek == 'left') {
                l1.innerText = ''
                l2.innerText = 'd-kr'
                l3.innerText = 'd-kr'
                l4.innerText = ''
            }
            else if (str_slupek == 'right') {
                p1.innerText = ''
                p2.innerText = 'd-kr'
                p3.innerText = 'd-kr'
                p4.innerText = ''
            }
        }
        else if (spos_open == 'rozw') {
            p1.innerText = ''
            p2.innerText = 'd-kr'
            p3.innerText = 'd-kr'
            p4.innerText = ''
            l1.innerText = ''
            l2.innerText = 'd-kr'
            l3.innerText = 'd-kr'
            l4.innerText = ''
        }
    }
}
function xx_top_rozw_uch(widht, str_slupek) {
    if (widht < 801) {
        if (str_slupek == 'left') {
            t3.innerText = ''
            t2.innerText = ''
        }
        else if (str_slupek == 'right') {
            t1.innerText = ''
            t2.innerText = ''
        }
    }
    else if (widht >= 801 && widht < 1001) {
        if (str_slupek == 'left') {
            t3.innerText = 'AX-600'
            t1.innerText = ''
            t2.innerText = ''
        }
        else if (str_slupek == 'right') {
            t1.innerText = 'AX-600'
            t3.innerText = ''
            t2.innerText = ''
        }
    }
    else if (widht >= 1001 && widht < 1401) {

        if (str_slupek == 'left') {
            t3.innerText = 'AX-750'
            t1.innerText = ''
            t2.innerText = ''
        }
        else if (str_slupek == 'right') {
            t1.innerText = 'AX-750'
            t3.innerText = ''
            t2.innerText = ''
        }
    }
    else if (widht >= 1401) {
        open_dialog()
        infoDialog.innerText = 'Montaż dodatkowej rozwórki!!!'
        if (str_slupek == 'left') {
            t3.innerText = 'AX-750'
            t1.innerText = ''
            t2.innerText = ''
        }
        else if (str_slupek == 'right') {
            t1.innerText = 'AX-750'
            t3.innerText = ''
            t2.innerText = ''
        }
    }

}
function xx_slupek_rozw_uch(widht, str_slupek) {
    if (widht < 801) {
        if (str_slupek == 'left') {
            t1.innerText = ''
            t2.innerText = ''
        }
        else if (str_slupek == 'right') {
            t3.innerText = ''
            t2.innerText = ''
        }
    }
    else if (widht >= 801 && widht < 1201) {
        if (str_slupek == 'left') {
            t1.innerText = '400'
            t2.innerText = ''
        }
        else if (str_slupek == 'right') {
            t3.innerText = '400'
            t2.innerText = ''
        }
    }
    else if (widht >= 1201 && widht < 1401) {
        if (str_slupek == 'left') {
            t1.innerText = '600'
            t2.innerText = ''
        }
        else if (str_slupek == 'right') {
            t3.innerText = '600'
            t2.innerText = ''
        }
    }
    else if (widht >= 1401 && widht < 1601) {
        if (str_slupek == 'left') {
            t1.innerText = '400 600'
            t2.innerText = ''
        }
        else if (str_slupek == 'right') {
            t3.innerText = '600 400'
            t2.innerText = ''
        }
    }

}
function xx_top_bottom_rozw(widht, spos_open, str_slupek) {
    if (widht < 801) {
        if (spos_open == 'rozw_uch') {
            bot1.innerText = ''
            bot3.innerText = ''
            bot2.innerText = ''
        }
        else if (spos_open == 'rozw') {
            t1.innerText = ''
            t3.innerText = ''
            bot1.innerText = ''
            bot3.innerText = ''
            bot2.innerText = ''
        }

    }
    else if (widht >= 801 && widht < 1201) {
        if (spos_open == 'rozw_uch') {
            bot1.innerText = '400'
            bot3.innerText = '400'
            bot2.innerText = ''
        }
        else if (spos_open == 'rozw') {
            t1.innerText = '400'
            t3.innerText = '400'
            bot1.innerText = '400'
            bot3.innerText = '400'
            bot2.innerText = ''
        }

    }
    else if (widht >= 1201 && widht < 1401) {
        if (spos_open == 'rozw_uch') {
            bot1.innerText = '600'
            bot3.innerText = '600'
            bot2.innerText = ''
        }
        else if (spos_open == 'rozw') {
            t1.innerText = '600'
            t3.innerText = '600'
            bot1.innerText = '600'
            bot3.innerText = '600'
            bot2.innerText = ''
        }

    }
    else if (widht >= 1401 && widht < 1601) {
        if (spos_open == 'rozw_uch') {
            bot1.innerText = '400 600'
            bot3.innerText = '600 400'
            bot2.innerText = ''
        }
        else if (spos_open == 'rozw') {
            if (str_slupek == 'left') {
                t1.innerText = '400 600'
                t3.innerText = '600 400'
                bot1.innerText = '400 600'
                bot3.innerText = '600 400'
                bot2.innerText = ''
            }
            else if (str_slupek == 'right') {
                t1.innerText = '400 600'
                t3.innerText = '600 400'
                bot1.innerText = '400 600'
                bot3.innerText = '600 400'
                bot2.innerText = ''
            }

        }

    }
}


function func_plecy_er1(height, str_zaw) {
    if (height < 801) {
        if (str_zaw == 'left') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_zaw == 'right') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 801 && height < 1201) {
        if (str_zaw == 'left') {
            l1.innerText = '400'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_zaw == 'right') {
            p1.innerText = '400'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1201 && height < 1601) {
        if (str_zaw == 'left') {
            l1.innerText = '600'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_zaw == 'right') {
            p1.innerText = '600'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1601 && height < 2001) {
        if (str_zaw == 'left') {
            l1.innerText = '600'
            l2.innerText = '400'
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_zaw == 'right') {
            p1.innerText = '600'
            p2.innerText = '400'
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 2001 && height < 2401) {
        if (str_zaw == 'left') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = ''
            l4.innerText = ''
        }
        else if (str_zaw == 'right') {
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 2401 && height < 2601) {
        if (str_zaw == 'left') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '400'
            l4.innerText = ''
        }
        else if (str_zaw == 'right') {
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '400'
            p4.innerText = ''
        }
    }
    else if (height >= 2601 && height < 2800) {
        if (str_zaw == 'left') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '600'
            l4.innerText = ''
        }
        else if (str_zaw == 'right') {
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '600'
            p4.innerText = ''
        }
    }
}
function func_dol_er1(widht, count_skr) {
    if (count_skr == '1') {
        if (widht < 400) {
            bot1.innerText = ''
            bot2.innerText = ''
            bot3.innerText = ''
        }
        else if (widht >= 400 && widht < 601) {
            bot1.innerText = ''
            bot2.innerText = '200'
            bot3.innerText = ''
        }
        else if (widht >= 601 && widht < 801) {
            bot1.innerText = ''
            bot2.innerText = '400'
            bot3.innerText = ''
        }
        else if (widht >= 801 && widht < 1001) {
            bot1.innerText = ''
            bot2.innerText = '600'
            bot3.innerText = ''
        }
        else if (widht >= 1001 && widht < 1201) {
            bot1.innerText = ''
            bot2.innerText = '600 200'
            bot3.innerText = ''
        }
        else if (widht >= 1201 && widht < 1601) {
            bot1.innerText = ''
            bot2.innerText = '600 400'
            bot3.innerText = ''
        }

    }
    else if (count_skr == '2') {
        if (widht < 400) {
            bot1.innerText = ''
            bot2.innerText = ''
            bot3.innerText = ''
        }
        else if (widht >= 400 && widht < 601) {
            bot1.innerText = '200'
            bot2.innerText = ''
            bot3.innerText = '200'
        }
        else if (widht >= 601 && widht < 801) {
            bot1.innerText = '400'
            bot2.innerText = ''
            bot3.innerText = '400'
        }
        else if (widht >= 801 && widht < 1001) {
            bot1.innerText = '600'
            bot2.innerText = ''
            bot3.innerText = '600'
        }
        else if (widht >= 1001 && widht < 1201) {
            bot1.innerText = '600 200'
            bot2.innerText = ''
            bot3.innerText = '600 200'
        }
        else if (widht >= 1201 && widht < 1601) {
            bot1.innerText = '600 400'
            bot2.innerText = ''
            bot3.innerText = '600 400'
        }
    }
}
function func_gora_er1(widht, spos_open, count_skr) {
    if (spos_open == 'rozw_uch') {
        func_gora(widht, spos_open)
    }
    else if (spos_open == 'rozw') {
        func_gora_er1_rozw(widht, count_skr)
    }
}
function func_gora_er1_rozw(widht) {
    if (count_skr == '1') {
        if (widht < 801) {
            t1.innerText = ''
            t2.innerText = ''
            t3.innerText = ''
        }
        else if (widht >= 801 && widht < 1001) {
            t1.innerText = ''
            t2.innerText = 'AX-600'
            t3.innerText = ''
        }
        else if (widht >= 1001) {
            t1.innerText = ''
            t2.innerText = 'AX-750'
            t3.innerText = ''
        }
    }
    else if (count_skr == '2') {
        if (widht < 801) {
            t1.innerText = ''
            t2.innerText = ''
            t3.innerText = ''
        }
        else if (widht >= 801 && widht < 1001) {
            t1.innerText = 'AX-600'
            t2.innerText = ''
            t3.innerText = 'AX-600'
        }
        else if (widht >= 1001 && widht < 1401) {
            t1.innerText = 'AX-750'
            t2.innerText = ''
            t3.innerText = 'AX-750'
        }
        else if (widht >= 1401) {
            open_dialog()
            infoDialog.innerText = 'Montaż dodatkowej rozwórki!!!'
            t1.innerText = 'AX-750'
            t2.innerText = ''
            t3.innerText = 'AX-750'
        }
    }
}
function res_box_xx_er1(widht, height, str_slupek, spos_open, count_skr) {
    res_box_left_right_er1(height)
    func_dol_er1(widht, count_skr)
    func_gora_er1_rozw(widht, count_skr)
}
function res_box_left_right_er1(height) {
    if (height < 801) {
        l1.innerText = ''
        l2.innerText = ''
        l3.innerText = ''
        l4.innerText = ''
        p1.innerText = ''
        p2.innerText = ''
        p3.innerText = ''
        p4.innerText = ''
    }
    else if (height >= 801 && height < 1201) {
        l1.innerText = '400'
        l2.innerText = ''
        l3.innerText = ''
        l4.innerText = ''
        p1.innerText = '400'
        p2.innerText = ''
        p3.innerText = ''
        p4.innerText = ''
    }
    else if (height >= 1201 && height < 1601) {
        l1.innerText = '600'
        l2.innerText = ''
        l3.innerText = ''
        l4.innerText = ''
        p1.innerText = '600'
        p2.innerText = ''
        p3.innerText = ''
        p4.innerText = ''
    }
    else if (height >= 1601 && height < 2001) {
        l1.innerText = '600'
        l2.innerText = '400'
        l3.innerText = ''
        l4.innerText = ''
        p1.innerText = '600'
        p2.innerText = '400'
        p3.innerText = ''
        p4.innerText = ''
    }
    else if (height >= 2001 && height < 2401) {
        l1.innerText = '600'
        l2.innerText = '600'
        l3.innerText = ''
        l4.innerText = ''
        p1.innerText = '600'
        p2.innerText = '600'
        p3.innerText = ''
        p4.innerText = ''
    }
    else if (height >= 2401 && height < 2601) {
        l1.innerText = '600'
        l2.innerText = '600'
        l3.innerText = '400'
        l4.innerText = ''
        p1.innerText = '600'
        p2.innerText = '600'
        p3.innerText = '400'
        p4.innerText = ''
    }
    else if (height >= 2601 && height < 2801) {
        l1.innerText = '600'
        l2.innerText = '600'
        l3.innerText = '600'
        l4.innerText = ''
        p1.innerText = '600'
        p2.innerText = '600'
        p3.innerText = '600'
        p4.innerText = ''
    }
}
function res_box_x_er2(widht, height, h_kl, str_zaw, count_skr) {
    res_box_zasuwnica_er2(height, h_kl, str_zaw)
    if (standart == 'ok') {
        res_box_gora_er2(widht, count_skr)
        res_box_dol_er2(widht, count_skr)
        res_box_plecy_er2(height, count_skr, str_zaw)
        btn_er2.style.backgroundColor = 'red'
    }

}
function res_box_zasuwnica_er2(height, height_klamka, str_zaw) {
    if (height < 601) {
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
        }

    }
    else if (height >= 601 && height < 801 && h_kl == 283) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = '350'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = '350'
            l4.innerText = ''
        }
    }
    else if (height >= 801 && height < 1001 && h_kl == 433) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = '550'
            p3.innerText = '288'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = '550'
            l3.innerText = '288'
            l4.innerText = ''
        }
    }
    else if (height >= 1001 && height < 1201 && h_kl == 533) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = '700'
            p3.innerText = '388'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = '700'
            l3.innerText = '388'
            l4.innerText = ''
        }

    }
    else if (height >= 1201 && height < 1401 && h_kl == 583) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = ''
            p2.innerText = '700'
            p3.innerText = '388'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = ''
            l2.innerText = '700'
            l3.innerText = '388'
            l4.innerText = ''
        }

    }
    else if (height >= 1401 && height < 1601 && h_kl == 583) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1170'
            p2.innerText = '700'
            p3.innerText = '388'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1170'
            l2.innerText = '700'
            l3.innerText = '388'
            l4.innerText = ''
        }

    }
    else if (height >= 1601 && height < 1801 && h_kl == 583) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1370'
            p2.innerText = '700'
            p3.innerText = '388'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1370'
            l2.innerText = '700'
            l3.innerText = '388'
            l4.innerText = ''
        }

    }
    else if (height >= 1601 && height < 1801 && h_kl == 1020) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1370'
            p2.innerText = '1121'
            p3.innerText = '700'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1370'
            l2.innerText = '1121'
            l3.innerText = '700'
            l4.innerText = ''
        }

    }
    else if (height >= 1801 && height < 2001 && h_kl == 1020) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1370'
            p2.innerText = '1121'
            p3.innerText = '700'
            p4.innerText = ''
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1370'
            l2.innerText = '1121'
            l3.innerText = '700'
            l4.innerText = ''
        }
    }
    else if (height >= 2001 && height < 2601 && h_kl == 1020) {
        standart = 'ok'
        if (str_zaw == 'left') {
            p1.innerText = '1770'
            p2.innerText = '1370'
            p3.innerText = '1121'
            p4.innerText = '700'
        }
        else if (str_zaw == 'right') {
            l1.innerText = '1770'
            l2.innerText = '1370'
            l3.innerText = '1121'
            l4.innerText = '700'
        }
    }
    else {
        infoDialog.innerText = 'Niestandart!!! Okuwamy według skrzydła!!!'
        open_dialog()
        standart = ''
        delete_all_div()
    }
}
function res_box_plecy_er2(height, count_skr, str_zaw) {
    if (height < 490) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = ''
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = ''
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = ''
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = ''
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 490 && height < 801) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '200'
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '200'
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '200'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = '200'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height <= 801 && height > 1001) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '400'
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '400'
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '400'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = '400'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1001 && height < 1201) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = ''
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = ''
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = ''
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = ''
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1201 && height < 1401) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '200'
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '200'
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '200'
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = '200'
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1401 && height < 1601) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '400'
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '400'
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '400'
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = '400'
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1601 && height < 1801) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = ''
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = ''
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = ''
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = ''
            p4.innerText = ''
        }
    }
    else if (height >= 1801 && height < 2001) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = '200'
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = '200'
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '200'
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '200'
            p4.innerText = ''
        }
    }
    else if (height >= 2001 && height < 2201) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = '400'
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = '400'
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '400'
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '400'
            p4.innerText = ''
        }
    }
    else if (height >= 2201 && height < 2401) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = '600'
                l4.innerText = ''
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = '600'
                p4.innerText = ''
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '600'
            l4.innerText = ''
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '600'
            p4.innerText = ''
        }
    }
    else if (height >= 2401 && height < 2601) {
        if (count_skr == '1') {
            if (str_zaw == 'left') {
                l1.innerText = '600'
                l2.innerText = '600'
                l3.innerText = '600'
                l4.innerText = '200'
            }
            else if (str_zaw == 'right') {
                p1.innerText = '600'
                p2.innerText = '600'
                p3.innerText = '600'
                p4.innerText = '200'
            }
        }
        else if (count_skr == '2') {
            l1.innerText = '600'
            l2.innerText = '600'
            l3.innerText = '600'
            l4.innerText = '200'
            p1.innerText = '600'
            p2.innerText = '600'
            p3.innerText = '600'
            p4.innerText = '200'
        }
    }
}




function res_box_gora_er2(widht, count_skr) {

    if (widht < 801) {
        if (count_skr == '1') {
            t1.innerText = ''
            t2.innerText = ''
            t3.innerText = ''
        }
        else if (count_skr == '2') {
            t1.innerText = ''
            t2.innerText = ''
            t3.innerText = ''
        }
    }
    else if (widht >= 801 && widht < 1401) {
        if (count_skr == '1') {
            t1.innerText = ''
            t2.innerText = 'AX-600'
            t3.innerText = ''
        }
        else if (count_skr == '2') {
            t1.innerText = 'AX-600'
            t2.innerText = ''
            t3.innerText = 'AX-600'
        }
    }
    else if (widht >= 1401 && widht < 1601) {
        open_dialog()
        infoDialog.innerText = 'Montaż dodatkowej rozwórki!!!'
        if (count_skr == '1') {
            t1.innerText = ''
            t2.innerText = 'AX-600'
            t3.innerText = ''
        }
        else if (count_skr == '2') {
            t1.innerText = 'AX-600'
            t2.innerText = ''
            t3.innerText = 'AX-600'
        }
    }

}
function res_box_dol_er2(widht, count_skr) {
    if (widht < 490) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = ''
            bot3.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = ''
            bot2.innerText = ''
            bot3.innerText = ''
        }
    }
    else if (widht >= 490 && widht < 691) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = '200'
            bot3.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = '200'
            bot2.innerText = ''
            bot3.innerText = '200'
        }
    }
    else if (widht >= 691 && widht < 891) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = '400'
            bot3.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = '400'
            bot2.innerText = ''
            bot3.innerText = '400'
        }
    }
    else if (widht >= 891 && widht < 1091) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = '600'
            bot3.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = '600'
            bot2.innerText = ''
            bot3.innerText = '600'
        }
    }
    else if (widht >= 1091 && widht < 1291) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = '600 200'
            bot3.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = '600 200'
            bot2.innerText = ''
            bot3.innerText = '600 200'
        }
    }
    else if (widht >= 1291 && widht < 1601) {
        if (count_skr == '1') {
            bot1.innerText = ''
            bot2.innerText = '600 400'
            bot3.innerText = ''
        }
        else if (count_skr == '2') {
            bot1.innerText = '600 400'
            bot2.innerText = ''
            bot3.innerText = '600 400'
        }
    }
}

function res_box_xx_er2(widht, height, str_slupek, spos_open, str_zaw) {
    res_box_gora_er2(widht, count_skr)
    res_box_plecy_er2(height, count_skr, str_zaw)
    res_box_dol_er2(widht, count_skr)
    btn_er2.style.backgroundColor = 'red'
}


function open_dialog() {
    dialog.showModal()
}
function close_dialog() {
    dialog.close()
}
function add_style_body() {

}
let theming = document.querySelectorAll('.style-body')
for (let index = 0; index < theming.length; index++) {
    const element = theming[index];
    element.addEventListener('click', () => {
        if (element.textContent === 'Dark') {
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
            box_bottom.style.color = 'yellow'
            value_resultat.style.color = 'black'

        }
        else {
            document.body.style.backgroundColor = 'blanchedalmond'
            document.body.style.color = 'black'
            box_bottom.style.color = 'black'
        }
    })

}
// calkulator
let value_resultat = document.querySelector('.res-value')
let zn = ''

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (param) {
        for (let index = 0; index < document.querySelectorAll('.btn').length; index++) {
            const element = document.querySelectorAll('.btn')[index];
            if (element.classList.contains('click-active-calc')) {
                element.classList.remove('click-active-calc')
            }
            button.classList.add('click-active-calc')
        }
    });
});

document.querySelector('.box-btn').onclick = (event) => {
    const key = event.target.textContent
    let a = document.getElementById('digit-a').value
    let b = document.getElementById('digit-b').value
    if (a != '' && b != '') {
        if (key === '+') {
            zn = (+a) + (+b)
        }
        if (key === '-') {
            zn = a - b
        }
        if (key === 'x') {
            zn = a * b
        }
        if (key === '/') {
            zn = a / b

        }
        if (key === '|W|') {
            zn = (a - b) / 2
        }

        str = zn.toString()
        if (str.length >= 10) {
            str = str.slice(0, 10)
        }
        value_resultat.textContent = str
    }

}
document.querySelector('.clear-btn').addEventListener('click', () => {
    let a = document.getElementById('digit-a')
    let b = document.getElementById('digit-b')
    a.value = ''
    b.value = ''
    value_resultat.textContent = ''
    document.querySelectorAll('.btn').forEach(button => {
        for (let index = 0; index < document.querySelectorAll('.btn').length; index++) {
            const element = document.querySelectorAll('.btn')[index];
            if (element.classList.contains('click-active-calc')) {
                element.classList.remove('click-active-calc')
            }
        }

    });

})
