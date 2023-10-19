
function fun1() {
    let a = document.getElementById('entry');
    let res = 0;

    if (a.checked) {
        res = 1;
    }
    else {
        res = 0;
    }
    return res;
}
function fun2() {
    let b = document.getElementById('entry1');
    let i = document.getElementById('inp3');
    let res = 0;
    if (b.checked) {
        res = 1;
        i.style.display = 'none';
    }
    else {
        res = 0;
        i.style.display = 'block';
    }
    return res;
}
function fun3() {
    let c = document.getElementById('entry2');
    let res = 0;
    if (c.checked) {
        res = 1;
    }
    else {
        res = 0;
    }
    return res;
}
function fun4() {
    let d = document.getElementById('entry3');
    let res = 0;
    if (d.checked) {
        res = 1;
    }
    else {
        res = 0;
    }
    return res;
}

function desingo(params) {
    let width = document.getElementById('inp1').value;
    let height = document.getElementById('inp2').value;
    if (height !== '' && width !== '') {
        if (width >= 330 && width <= 600) {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Okuwanie identyczne';
            document.querySelector('.tresc-dialog').innerText = 'Rozwórka 250';
            document.querySelector('.title-dialog1').innerText = '';
        }
        else if (width >= 601 && width <= 800) {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Okuwanie identyczne';
            document.querySelector('.tresc-dialog').innerText = 'Rozwórka 350';
            document.querySelector('.title-dialog1').innerText = '';
        }
        else if (width >= 801 && width <= 1200) {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Okuwanie identyczne';
            document.querySelector('.tresc-dialog').innerText = 'Rozwórka 500';
            document.querySelector('.title-dialog1').innerText = '';
        }
        else if (width >= 1201 && width <= 1600) {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Okuwanie identyczne';
            document.querySelector('.title-dialog1').innerText = 'Dodatkowa rozwórka';
            document.querySelector('.tresc-dialog').innerText = 'Rozwórka 500';
        }
    }

}


const $form1 = document.querySelector('.my-program1');
const $form2 = document.querySelector('.my-program2');
const $form3 = document.querySelector('.my-program3');
const $form4 = document.querySelector('.my-program4');



const $back = document.querySelector('.box-typ-okna');
function back_input() {
    $back.scrollIntoView({
        block: "center",
        behavior: 'smooth'
    })

    document.getElementById('xx-r-gora').innerText = '';
    document.getElementById('xx-r-dol').innerText = '';
    document.getElementById('xx-r-pl').innerText = '';
    document.getElementById('xx-r-stl').innerText = '';

    document.getElementById('xx-r-uch-gora').innerText = '';
    document.getElementById('xx-r-uch-dol').innerText = '';
    document.getElementById('xx-r-uch-pl').innerText = '';
    document.getElementById('xx-r-uch-stl').innerText = '';

    document.getElementById('x-r-uch-gora').innerText = '';
    document.getElementById('x-r-uch-dol').innerText = '';
    document.getElementById('x-r-uch-zas').innerText = '';
    document.getElementById('x-r-uch-nsp').innerText = '';
    document.getElementById('x-r-uch-pl').innerText = '';

    document.getElementById('x-r-gora').innerText = '';
    document.getElementById('x-r-dol').innerText = '';
    document.getElementById('x-r-zas').innerText = '';
    document.getElementById('x-r-nsp').innerText = '';
    document.getElementById('x-r-pl').innerText = '';

}

function check_box(params) {
    let res1 = fun1();
    let res2 = fun2();
    let res3 = fun3();
    let res4 = fun4();

    if (res1 == 1 && res2 == 0 && res3 == 1 && res4 == 0) {
        $form1.scrollIntoView({
            block: "center",
            behavior: 'smooth'
        })
    }
    else if (res1 == 1 && res2 == 0 && res3 == 0 && res4 == 1) {
        $form2.scrollIntoView({
            block: "center",
            behavior: 'smooth'
        })
    }

    else if (res1 == 0 && res2 == 1 && res3 == 1 && res4 == 0) {
        $form3.scrollIntoView({
            block: "center",
            behavior: 'smooth'
        })
    }
    else if (res1 == 0 && res2 == 1 && res3 == 0 && res4 == 1) {
        $form4.scrollIntoView({
            block: "center",
            behavior: 'smooth'
        })
    }
}
function showDialog() {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}
function closeDialog() {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

function exit_home(params) {
    document.location.href = 'home.html';
}
let rozworka = document.querySelectorAll('.dod-rozw');

function dodatkowa_rozworka(params) {
    for (let index = 0; index < rozworka.length; index++) {
        const element = rozworka[index];
        element.innerText = 'Uwaga: Montaż dodatkowej rozwórki!!!';

    }
}
function dodatkowa_rozworka_delete(params) {
    for (let index = 0; index < rozworka.length; index++) {
        const element = rozworka[index];
        element.innerText = '';

    }
}

function click_button_Standart(params) {
    document.querySelector('.title-dialog1').innerText = '';
    document.querySelector('.tresc-dialog').innerText = '';
    dodatkowa_rozworka_delete();
    let a = document.querySelectorAll('.info-typ');
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        element.innerText = 'Standart';
    }
    let res1 = fun1();
    let res2 = fun2();
    let res3 = fun3();
    let res4 = fun4();

    let width = document.getElementById('inp1').value;
    let height = document.getElementById('inp2').value;
    let klamka = document.getElementById('inp3').value;


    //jednoskrzydlowka rozwierne
    if (res1 == 1 && res2 == 0 && res3 == 1 && res4 == 0) {
        if (width !== '' && height !== '' && klamka !== '') {
            if (height >= 280 && height <= 2800 && width <= 1600) {
                zasuwnica(height, klamka)
                plecy(height);
                dol(width);
                gora_rozw(width);
                document.querySelector('.info-gabaryt-width1').textContent = width;
                document.querySelector('.info-gabaryt-height1').textContent = height;
                document.querySelector('.info-gabaryt-klamka1').textContent = klamka;

            }
            else {
                showDialog();
                document.querySelector('.title-dialog').innerText = 'Uwaga: Niema takich zakresow!!!';
            }

        }
        else {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga: Wpisz wymiary skrzydla';
        }
    }


    //jednoskrzydlowka rozwierno-uchylne
    else if (res1 == 1 && res2 == 0 && res3 == 0 && res4 == 1) {
        if (width !== '' && height !== '' && klamka !== '') {
            if (height >= 280 && height <= 2800 && width <= 1600) {
                zasuwnica(height, klamka)
                plecy_rozw_uch(height);
                dol(width);
                gora_rozw_uch(width);
                document.querySelector('.info-gabaryt-width2').innerHTML = width;
                document.querySelector('.info-gabaryt-height2').textContent = height;
                document.querySelector('.info-gabaryt-klamka2').textContent = klamka;
            }
            else {
                showDialog();
                document.querySelector('.title-dialog').innerText = 'Uwaga: Niema takich zakresow!!!';
            }
        }
        else {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga: Wpisz wymiary skrzydla';
        }
    }

    // dwoskrzydlowki
    //rozwierne
    else if (res2 == 1 && res1 == 0 && res3 == 1 && res4 == 0) {
        if (width !== '' && height !== '') {
            if (height >= 280 && height <= 2800 && width <= 1600) {
                plecy(height)
                dol(width);
                gora_rozw(width);
                check_box();
                document.querySelector('.info-gabaryt-width3').textContent = width;
                document.querySelector('.info-gabaryt-height3').textContent = height;
            }
            else {
                showDialog();
                document.querySelector('.title-dialog').innerText = 'Uwaga: Niema takich zakresow!!!';
            }
        }
        else {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga: Wpisz wymiary skrzydla';
        }
    }
    //rozwierno-uchylne dwoskrzydlowka
    else if (res2 == 1 && res1 == 0 && res3 == 0 && res4 == 1) {
        if (width !== '' && height !== '') {
            if (height >= 280 && height <= 2800 && width <= 1600) {
                dol(width);
                gora_rozw_uch(width);
                plecy_rozw_uch(height)
                plecy(height)
                check_box();
                document.querySelector('.info-gabaryt-width4').textContent = width;
                document.querySelector('.info-gabaryt-height4').textContent = height;
            }
            else {
                showDialog();
                document.querySelector('.title-dialog').innerText = 'Uwaga: Niema takich zakresow!!!';
            }
        }
        else {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga: Wpisz wymiary skrzydla';
        }
    }
    else {
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Uwaga: Niewlasciwy wybor!!!';
    }
}

// 6 function dla okucia STANDART
//jednoskrzydlowka rozwierne i rozwierno-uchylne
function zasuwnica(height, klamka) {
    let res1 = fun1();
    let res3 = fun3();
    let res4 = fun4();

    if (height >= 280 && height <= 570 && klamka == 140) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = 'niema nic';
            document.getElementById('x-r-nsp').innerText = 'niema nic';
            check_box();
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = 'niema nic';
            document.getElementById('x-r-uch-nsp').innerText = 'niema nic';
            check_box();
        }

    }
    else if (height >= 511 && height <= 600 && klamka == 190) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = 'niema nic';
            document.getElementById('x-r-nsp').innerText = '262';
            check_box();
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = 'niema nic';
            document.getElementById('x-r-uch-nsp').innerText = '262';
            check_box();
        }

    }
    else if (height > 600 && height <= 800 && klamka == 283) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = 'niema nic';
            document.getElementById('x-r-nsp').innerText = '350';
            check_box();
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = 'niema nic';
            document.getElementById('x-r-uch-nsp').innerText = '350';
            check_box();
        }
    }
    else if (height > 800 && height <= 1000 && klamka == 433) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '550';
            document.getElementById('x-r-nsp').innerText = '288';
            check_box();
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '550';
            document.getElementById('x-r-uch-nsp').innerText = '288';
            check_box();
        }

    }
    else if (height > 1000 && height <= 1200 && klamka == 533) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700';
            document.getElementById('x-r-nsp').innerText = '388';
            check_box();
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700';
            document.getElementById('x-r-uch-nsp').innerText = '388';
            check_box();
        }

    }
    else if (height > 1200 && height <= 1400 && klamka == 583) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700';
            document.getElementById('x-r-nsp').innerText = '388';
            check_box();
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700';
            document.getElementById('x-r-uch-nsp').innerText = '388';
            check_box();
        }
    }
    else if (height > 1400 && height <= 1600 && klamka == 583) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700 1170';
            document.getElementById('x-r-nsp').innerText = '388';
            check_box();
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700 1170';
            document.getElementById('x-r-uch-nsp').innerText = '388';
            check_box();
        }

    }
    else if (height > 1600 && height <= 1800 && klamka == 583) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700 1370';
            document.getElementById('x-r-nsp').innerText = '388';
            check_box();
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700 1370';
            document.getElementById('x-r-uch-nsp').innerText = '388';
            check_box();
        }

    }
    else if (height > 1600 && height <= 1800 && klamka == 1020) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700 1370';
            document.getElementById('x-r-nsp').innerText = '1121';
            check_box();
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700 1370';
            document.getElementById('x-r-uch-nsp').innerText = '1121';
            check_box();
        }

    }
    else if (height > 1800 && height <= 2000 && klamka == 1020) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700 1370';
            document.getElementById('x-r-nsp').innerText = '1121';
            check_box();
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700 1370';
            document.getElementById('x-r-uch-nsp').innerText = '1121';
            check_box();
        }

    }
    else if (height > 2000 && height <= 2600 && klamka == 1020) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700 1370 1770';
            document.getElementById('x-r-nsp').innerText = '1121';
            check_box();
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700 1370 1770';
            document.getElementById('x-r-uch-nsp').innerText = '1121';
            check_box();
        }

    }
    else if (height > 2600 && height <= 2800 && klamka == 1020) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700 1370 1770';
            document.getElementById('x-r-nsp').innerText = '1121';
            check_box();
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700 1370 1770';
            document.getElementById('x-r-uch-nsp').innerText = '1121';
            check_box();
        }

    }
    else {

        showDialog();
        document.querySelector('.title-dialog').innerText = 'Uwaga: Niestandart!!!';
    }
}
function plecy(height) {

    let res1 = fun1();
    let res2 = fun2();
    let res3 = fun3();
    let res4 = fun4();
    if (height <= 800) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-pl').innerText = 'niema nic';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-pl').innerText = 'niema nic';
            document.getElementById('xx-r-stl').innerText = 'niema nic';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-stl').innerText = 'niema nic';
        }

    }
    else if (height >= 801 && height <= 1600) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-pl').innerText = '1 docisk';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-pl').innerText = '1 docisk';
            document.getElementById('xx-r-stl').innerText = '1 docisk';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-stl').innerText = '1 docisk';
        }

    }
    else if (height >= 1600) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-pl').innerText = '2 dociska';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-pl').innerText = '2 dociska';
            document.getElementById('xx-r-stl').innerText = '2 dociska';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-stl').innerText = '2 dociska';
        }
    }
}
function plecy_rozw_uch(height) {
    let res1 = fun1();
    let res2 = fun2();
    let res3 = fun3();
    let res4 = fun4();

    if (height < 801) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-pl').innerText = 'niema nic';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-pl').innerText = 'niema nic';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-pl').innerText = 'niema nic';
        }
    }
    else if (height > 800 && height <= 1200) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-pl').innerText = 400;
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-pl').innerText = 400;
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-pl').innerText = '400';
        }
    }
    else if (height > 1200 && height <= 1600) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-pl').innerText = 600;
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-pl').innerText = 600;
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-pl').innerText = '600';
        }
    }
    else if (height > 1600 && height <= 2000) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '600  400';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-pl').innerText = '600 400';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-pl').innerText = '600 400';
        }

    }
    else if (height > 2000 && height <= 2400) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '600  600';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-pl').innerText = '600  600';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-pl').innerText = '600 600';
        }
    }
    else if (height > 2400 && height <= 2600) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '600 600 400';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-pl').innerText = '600 600 400';
        }
    }
    else if (height > 2600 && height <= 2800) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '600 600 600';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-pl').innerText = '600 600 600';
        }
    }
}
function dol(width) {
    let res1 = fun1();
    let res2 = fun2();
    let res3 = fun3();
    let res4 = fun4();

    if (width <= 800) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-dol').innerText = 'niema nic';
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = 'niema nic';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-dol').innerText = 'niema nic';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-dol').innerText = 'niema nic';
        }
    }
    else if (width >= 801 && width <= 1200) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-dol').innerText = 400;
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = 400;
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-dol').innerText = 400;
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-dol').innerText = 400;
        }
    }
    else if (width > 1200 && width <= 1400) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-dol').innerText = 600;
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = 600;
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-dol').innerText = 600;
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-dol').innerText = 600;
        }
    }
    else if (width > 1400 && width <= 1600) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-dol').innerText = '600  400';
        }
        else if (res1 == 1 && res4 == 1) {
            dodatkowa_rozworka();
            document.getElementById('x-r-uch-dol').innerText = '600 400';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-dol').innerText = '600 400';
        }
        else if (res2 == 1 && res4 == 1) {
            dodatkowa_rozworka();
            document.getElementById('xx-r-uch-dol').innerText = '600 400';
        }
    }
}
function gora_rozw(width) {
    let res1 = fun1();
    let res2 = fun2();
    let res3 = fun3();
    let res4 = fun4();
    if (width < 801) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-gora').innerText = 'niema nic';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-gora').innerText = 'niema nic';
        }


    }
    else if (width > 800 && width <= 1200) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-gora').innerText = 'Jak dól';
        }

        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-gora').innerText = 'Jak dól';
        }
    }
    else if (width > 1200 && width <= 1600) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-gora').innerText = 'Jak dól';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-gora').innerText = 'Jak dól';
        }
    }
    else if (width > 1400 && width <= 1600) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-gora').innerText = 'Jak dól';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-gora').innerText = 'Jak dól';
        }
    }
}
function gora_rozw_uch(width) {
    let res1 = fun1();
    let res2 = fun2();
    let res3 = fun3();
    let res4 = fun4();

    if (width < 801) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-gora').innerText = 'niema nic';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-gora').innerText = 'niema nic';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-gora').innerText = 'niema nic';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-gora').innerText = 'niema nic';
        }
    }
    else if (width > 800 && width <= 1000) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-gora').innerText = 'AX-600';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-gora').innerText = 'AX-600';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-gora').innerText = 'AX-600';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-gora').innerText = 'AX-600';
        }

    }
    else if (width > 1000 && width <= 1600) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-gora').innerText = 'AX-750';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-gora').innerText = 'AX-750';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-gora').innerText = 'AX-750';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-gora').innerText = 'AX-750';
        }
    }
}

//------------------poziom zabiezpeczenia okucia ER 1----------------------

function click_button_ER_1() {
    document.querySelector('.title-dialog1').innerText = '';
    document.querySelector('.tresc-dialog').innerText = '';
    let a = document.querySelectorAll('.info-typ');
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        element.innerText = 'ER 1';
    }
    let res1 = fun1();
    let res2 = fun2();
    let res3 = fun3();
    let res4 = fun4();

    let width = document.getElementById('inp1').value;
    let height = document.getElementById('inp2').value;
    let klamka = document.getElementById('inp3').value;


    //jednoskrzydlowka rozwierne
    if (res1 == 1 && res2 == 0 && res3 == 1 && res4 == 0) {
        if (width !== '' && height !== '' && klamka !== '') {
            if (height >= 280 && height <= 2800 && width <= 1600) {
                zasuwnica(height, klamka)
                plecy_rozw_uch(height);
                dol_Er1(width);
                gora_rozw_uch(width)
                document.querySelector('.info-gabaryt-width1').textContent = width;
                document.querySelector('.info-gabaryt-height1').textContent = height;
                document.querySelector('.info-gabaryt-klamka1').textContent = klamka;
            }
            else {
                showDialog();
                document.querySelector('.title-dialog').innerText = 'Uwaga: Niema takich zakresow!!!';

            }
        }
        else {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga: Wpisz wymiary skrzydla';
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////
    //jednoskrzydlowka rozwierno-uchylne
    else if (res1 == 1 && res2 == 0 && res3 == 0 && res4 == 1) {
        if (width !== '' && height !== '' && klamka !== '') {
            if (height >= 280 && height <= 2800 && width <= 1600) {
                zasuwnica(height, klamka)
                plecy_rozw_uch(height);
                dol_Er1(width);
                gora_rozw_uch(width)
                document.querySelector('.info-gabaryt-width2').innerHTML = width;
                document.querySelector('.info-gabaryt-height2').textContent = height;
                document.querySelector('.info-gabaryt-klamka2').textContent = klamka;
            }
            else {
                showDialog();
                document.querySelector('.title-dialog').innerText = 'Uwaga: Niema takich zakresow!!!';
            }
        }
        else {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga: Wpisz wymiary skrzydla';
        }
    }

    // dwoskrzydlowki
    //rozwierne
    else if (res2 == 1 && res1 == 0 && res3 == 1 && res4 == 0) {
        if (width !== '' && height !== '') {
            if (height >= 280 && height <= 2800 && width <= 1600) {
                dol_Er1(width);
                gora_rozw_uch(width);
                plecy_er1_xx(height);
                check_box();
                document.querySelector('.info-gabaryt-width1').textContent = width;
                document.querySelector('.info-gabaryt-height1').textContent = height;
            }
            else {
                showDialog();
                document.querySelector('.title-dialog').innerText = 'Uwaga: Niema takich zakresow!!!';
            }
        }
        else {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga: Wpisz wymiary skrzydla';
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    //dwoskrydlowka rozwierno-uchylne
    else if (res2 == 1 && res1 == 0 && res3 == 0 && res4 == 1) {
        if (width !== '' && height !== '') {
            if (height >= 280 && height <= 2800 && width <= 1600) {
                dol_Er1(width);
                gora_rozw_uch(width);
                plecy_er1_xx(height);
                check_box();
                document.querySelector('.info-gabaryt-width4').textContent = width;
                document.querySelector('.info-gabaryt-height4').textContent = height;
            }
            else {
                showDialog();
                document.querySelector('.title-dialog').innerText = 'Uwaga: Niema takich zakresow!!!';
            }
        }
        else {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga: Wpisz wymiary skrzydla';
        }
    }

    else {
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Uwaga:  Niewłaściwy wybór!!!'
    }

}
// er1 dol

function dol_Er1(width) {
    let res1 = fun1();
    let res2 = fun2();
    let res3 = fun3();
    let res4 = fun4();

    if (width <= 400) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-dol').innerText = 'niema nic';
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = 'niema nic';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-dol').innerText = 'niema nic';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-dol').innerText = 'niema nic';
        }
    }
    else if (width >= 400 && width <= 600) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-dol').innerText = '200';
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = '200';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-dol').innerText = '200';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-dol').innerText = '200';
        }
    }
    else if (width >= 601 && width <= 800) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-dol').innerText = '400';
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = '400';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-dol').innerText = '400';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-dol').innerText = '400';
        }
    }
    else if (width >= 801 && width <= 1000) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-dol').innerText = '600';
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = 600;
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-dol').innerText = '600';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-dol').innerText = 600;
        }
    }
    else if (width > 1000 && width <= 1200) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-dol').innerText = '600 200';
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = '600 200';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-dol').innerText = '600 200';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-dol').innerText = '600 200';
        }
    }
    else if (width > 1200 && width <= 1400) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-dol').innerText = '600 400';
        }
        else if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = '600 400';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-dol').innerText = '600 400';
        }
        else if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-dol').innerText = '600 400';
        }
    }
    else if (width > 1400 && width <= 1600) {
        if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-dol').innerText = '600  400';
        }
        else if (res1 == 1 && res4 == 1) {
            dodatkowa_rozworka();
            document.getElementById('x-r-uch-dol').innerText = '600 400';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-dol').innerText = '600 400';
        }
        else if (res2 == 1 && res4 == 1) {
            dodatkowa_rozworka();
            document.getElementById('xx-r-uch-dol').innerText = '600 400';
        }
    }
}
// er1 plecy
function plecy_er1_xx(height) {
    let res2 = fun2();
    let res3 = fun3();
    let res4 = fun4();

    if (height <= 800) {
        if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-stl').innerText = 'niema nic';
            document.getElementById('xx-r-uch-pl').innerText = 'niema nic';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-pl').innerText = 'niema nic';
            document.getElementById('xx-r-stl').innerText = 'niema nic';
        }

    }
    else if (height >= 801 && height <= 1200) {
        if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-stl').innerText = '400';
            document.getElementById('xx-r-uch-pl').innerText = '400';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-pl').innerText = '400';
            document.getElementById('xx-r-stl').innerText = '400';
        }

    }
    else if (height >= 1201 && height <= 1600) {
        if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-stl').innerText = '600';
            document.getElementById('xx-r-uch-pl').innerText = '600';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-pl').innerText = '600';
            document.getElementById('xx-r-stl').innerText = '600';
        }

    }
    else if (height >= 1601 && height <= 2000) {
        if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-stl').innerText = '600 400';
            document.getElementById('xx-r-uch-pl').innerText = '600 400';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-pl').innerText = '600 400';
            document.getElementById('xx-r-stl').innerText = '600 400';
        }

    }
    else if (height >= 2001 && height <= 2400) {
        if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-stl').innerText = '600 600';
            document.getElementById('xx-r-uch-pl').innerText = '600 600';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-pl').innerText = '600 600';
            document.getElementById('xx-r-stl').innerText = '600 600';
        }

    }
    else if (height >= 2401 && height <= 2600) {
        if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-stl').innerText = '600 600 400';
            document.getElementById('xx-r-uch-pl').innerText = '600 600 400';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-pl').innerText = '600 600 400';
            document.getElementById('xx-r-stl').innerText = '600 600 400';
        }

    }
    else if (height >= 2601 && height <= 2800) {
        if (res2 == 1 && res4 == 1) {
            document.getElementById('xx-r-uch-stl').innerText = '600 600 600';
            document.getElementById('xx-r-uch-pl').innerText = '600 600 600';
        }
        else if (res2 == 1 && res3 == 1) {
            document.getElementById('xx-r-stl').innerText = '600 600 600';
            document.getElementById('xx-r-pl').innerText = '600 600 600';
        }

    }
}

//---------------- poziom zabiezpieczenia okucia ER 2------------------

function click_button_ER_2(params) {
    document.querySelector('.title-dialog1').innerText = '';
    document.querySelector('.tresc-dialog').innerText = '';
    let a = document.querySelectorAll('.info-typ');
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        element.innerText = 'ER 2';
    }
    let res1 = fun1();
    let res2 = fun2();
    let res3 = fun3();
    let res4 = fun4();

    let width = document.getElementById('inp1').value;
    let height = document.getElementById('inp2').value;
    let klamka = document.getElementById('inp3').value;


    //jednoskrzydlowka rozwierne
    if (res1 == 1 && res2 == 0 && res3 == 1 && res4 == 0) {
        if (width !== '' && height !== '' && klamka !== '') {
            if (height >= 490 && height <= 2600 && width <= 1600) {
                zasuwnica_Er2(height, klamka)
                plecyX_rozw_uch_Er2(height);
                dol_Er_2(width);
                gora_rozw_uch_Er2(width)
                document.querySelector('.info-gabaryt-width1').textContent = width;
                document.querySelector('.info-gabaryt-height1').textContent = height;
                document.querySelector('.info-gabaryt-klamka1').textContent = klamka;

            }
            else {
                showDialog();
                document.querySelector('.title-dialog').innerText = 'Uwaga: Niema takich zakresow!!!';
            }
        }
        else {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga: Wpisz wymiary skrzydla';
        }
    }


    //jednoskrzydlowka rozwierno-uchylne
    else if (res1 == 1 && res2 == 0 && res3 == 0 && res4 == 1) {
        if (width !== '' && height !== '' && klamka !== '') {
            if (height >= 601 && height <= 2600 && width <= 1600) {
                zasuwnica_Er2(height, klamka)
                plecyX_rozw_uch_Er2(height);
                dol_Er_2(width);
                gora_rozw_uch_Er2(width);
                document.querySelector('.info-gabaryt-width2').innerHTML = width;
                document.querySelector('.info-gabaryt-height2').textContent = height;
                document.querySelector('.info-gabaryt-klamka2').textContent = klamka;
            }
            else {
                showDialog();
                document.querySelector('.title-dialog').innerText = 'Uwaga: Niema takich zakresow!!!';
            }
        }
        else {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga: Wpisz wymiary skrzydla';
        }
    }


                            // dwoskrzydlowki
    //rozwierne
    else if (res2 == 1 && res1 == 0 && res3 == 1 && res4 == 0) {
        if (width !== '' && height !== '') {
            if (height >= 280 && height <= 2800 && width <= 1600) {
                plecyX_rozw_uch_Er2(height)
                dol_Er_2(width)
                gora_rozw_uch_Er2(width)
                check_box();
                document.querySelector('.info-gabaryt-width3').textContent = width;
                document.querySelector('.info-gabaryt-height3').textContent = height;
            }
            else {
                showDialog();
                document.querySelector('.title-dialog').innerText = 'Uwaga: Niema takich zakresow!!!';
            }
        }
    }

    //rozwierno-uchylne
    else if (res2 == 1 && res1 == 0 && res3 == 0 && res4 == 1) {
        if (width !== '' && height !== '') {
            if (height >= 601 && height <= 2600 && width <= 1600) {
                dol_Er_2(width);
                gora_rozw_uch_Er2(width);
                plecyX_rozw_uch_Er2(height);
                check_box();
                document.querySelector('.info-gabaryt-width4').textContent = width;
                document.querySelector('.info-gabaryt-height4').textContent = height;
            }
            else {
                showDialog();
                document.querySelector('.title-dialog').innerText = 'Uwaga: Niema takich zakresow!!!';
            }
        }
        else {
            showDialog();
            document.querySelector('.title-dialog').innerText = 'Uwaga: Wpisz wymiary skrzydla';
        }
    }
    else {
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Uwaga: Niewlasciwy wybor!!!';
    }
}

function zasuwnica_Er2(height, klamka) {
    let res1 = fun1();
    let res3 = fun3();
    let res4 = fun4();
    if (height >= 601 && height <= 800 && klamka == 283) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = 'niema nic';
            document.getElementById('x-r-uch-nsp').innerText = '350';
        
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = 'niema nic';
            document.getElementById('x-r-nsp').innerText = '350';
            
        }
        check_box()
    }

    else if (height >= 801 && height <= 1000 && klamka == 433) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '550';
            document.getElementById('x-r-uch-nsp').innerText = '288';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '550';
            document.getElementById('x-r-nsp').innerText = '288';
        }
        check_box()
    }
    else if (height >= 1001 && height <= 1200 && klamka == 533) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700';
            document.getElementById('x-r-uch-nsp').innerText = '388';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700';
            document.getElementById('x-r-nsp').innerText = '388';
        }
        check_box()
    }


    else if (height >= 1201 && height <= 1400 && klamka == 583) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700';
            document.getElementById('x-r-uch-nsp').innerText = '388';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700';
            document.getElementById('x-r-nsp').innerText = '388';
        }
        check_box()
    }


    else if (height >= 1401 && height <= 1600 && klamka == 583) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700 1170';
            document.getElementById('x-r-uch-nsp').innerText = '388';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700 1170';
            document.getElementById('x-r-nsp').innerText = '388';
        }
        check_box()
    }


    else if (height >= 1601 && height <= 1800 && klamka == 583) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700 1370';
            document.getElementById('x-r-uch-nsp').innerText = '388';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700 1370';
            document.getElementById('x-r-nsp').innerText = '388';
        }
        check_box()
    }


    else if (height >= 1601 && height <= 1800 && klamka == 1020) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700 1370';
            document.getElementById('x-r-uch-nsp').innerText = '1121';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700 1370';
            document.getElementById('x-r-nsp').innerText = '1121';
        }
        check_box()
    }

    else if (height >= 1801 && height <= 2000 && klamka == 1020) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700 1370';
            document.getElementById('x-r-uch-nsp').innerText = '1121';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700 1370 ';
            document.getElementById('x-r-nsp').innerText = '1121';
        }
        check_box()
    }
    else if (height >= 2001 && height <= 2600 && klamka == 1020) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-zas').innerText = '700 1370 1770';
            document.getElementById('x-r-uch-nsp').innerText = '1121';
        }
        else if (res1 == 1 && res3 == 1) {
            document.getElementById('x-r-zas').innerText = '700 1370 1770';
            document.getElementById('x-r-nsp').innerText = '1121';
        }
        check_box()
    }

    else {
        showDialog();
        document.querySelector('.title-dialog').innerText = 'Uwaga: Niestandart!!!';
    }
    
}
function plecyX_rozw_uch_Er2(height) {
    let res1 = fun1();
    let res2 = fun2();
    let res3 = fun3();
    let res4 = fun4();
    if (height < 490) {
        if (res1 == 1) {
            document.getElementById('x-r-uch-pl').innerText = 'niema nic';
            document.getElementById('x-r-pl').innerText = 'niema nic'
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-pl').innerText = 'niema nic';
            document.getElementById('xx-r-uch-stl').innerText = 'niema nic';
            document.getElementById('xx-r-pl').innerText = 'niema nic'
            document.getElementById('xx-r-stl').innerText = 'niema nic'
        }
    }
    else if (height >= 490 && height <= 800) {
        if (res1 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '200';
            document.getElementById('x-r-pl').innerText = '200'
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-pl').innerText = '200';
            document.getElementById('xx-r-uch-stl').innerText = '200';
            document.getElementById('xx-r-pl').innerText = '200'
            document.getElementById('xx-r-stl').innerText = '200'
        }
    }
    else if (height >= 801 && height <= 1000) {
        if (res1 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '400';
            document.getElementById('x-r-pl').innerText = '400'
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-pl').innerText = '400';
            document.getElementById('xx-r-uch-stl').innerText = '400';
            document.getElementById('xx-r-pl').innerText = '400'
            document.getElementById('xx-r-stl').innerText = '400'
        }
    }
    else if (height >= 1001 && height <= 1200) {
        if (res1 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '600';
            document.getElementById('x-r-pl').innerText = '600'
        }     
        else if (res2 == 1){
            document.getElementById('xx-r-uch-pl').innerText = '600';
            document.getElementById('xx-r-uch-stl').innerText = '600';
            document.getElementById('xx-r-pl').innerText = '600'
            document.getElementById('xx-r-stl').innerText = '600'
        }
    }
    else if (height >= 1201 && height <= 1400) {
        if (res1 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '600 200';
            document.getElementById('x-r-pl').innerText = '600 200'
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-pl').innerText = '600 200';
            document.getElementById('xx-r-uch-stl').innerText = '600 200';
            document.getElementById('xx-r-pl').innerText = '600 200'
            document.getElementById('xx-r-stl').innerText = '600 200'
        }
    }
    else if (height >= 1401 && height <= 1600) {
        if (res1 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '600 400';
            document.getElementById('x-r-pl').innerText = '600 400'
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-pl').innerText = '600 400';
            document.getElementById('xx-r-uch-stl').innerText = '600 400';
            document.getElementById('xx-r-pl').innerText = '600 400'
            document.getElementById('xx-r-stl').innerText = '600 400'
        }
    }
    else if (height >= 1601 && height <= 1800) {
        if (res1 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '600 600';
            document.getElementById('x-r-pl').innerText = '600 600'
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-pl').innerText = '600 600';
            document.getElementById('xx-r-uch-stl').innerText = '600 600';
            document.getElementById('xx-r-pl').innerText = '600 600'
            document.getElementById('xx-r-stl').innerText = '600 600'
        }
    }
    else if (height >= 1801 && height <= 2000) {
        if (res1 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '600 600 200';
            document.getElementById('x-r-pl').innerText = '600 600 200'
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-pl').innerText = '600 600 200';
            document.getElementById('xx-r-uch-stl').innerText = '600 600 200';
            document.getElementById('xx-r-pl').innerText = '600 600 200'
            document.getElementById('xx-r-stl').innerText = '600 600 200'
        }
    }
    else if (height >= 2001 && height <= 2200) {
        if (res1 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '600 600 400';
            document.getElementById('x-r-pl').innerText = '600 600 400'
        } 
        else if (res2 == 1){
            document.getElementById('xx-r-uch-pl').innerText = '600 600 400';
            document.getElementById('xx-r-uch-stl').innerText = '600 600 400';
            document.getElementById('xx-r-pl').innerText = '600 600 400'
            document.getElementById('xx-r-stl').innerText = '600 600 400'
        }
    }
    else if (height >= 2201 && height <= 2400) {
        if (res1 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '600 600 600';
            document.getElementById('x-r-pl').innerText = '600 600 600'
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-pl').innerText = '600 600 600';
            document.getElementById('xx-r-uch-stl').innerText = '600 600 600';
            document.getElementById('xx-r-pl').innerText = '600 600 600'
            document.getElementById('xx-r-stl').innerText = '600 600 600'
        }
    }
    else if (height >= 1401 && height <= 2600) {
        if (res1 == 1) {
            document.getElementById('x-r-uch-pl').innerText = '600 600 600 200';
            document.getElementById('x-r-pl').innerText = '600 600 600 200'
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-pl').innerText = '600 600 600 200';
            document.getElementById('xx-r-uch-stl').innerText = '600 600 600 200';
            document.getElementById('xx-r-pl').innerText = '600 600 600 200'
            document.getElementById('xx-r-stl').innerText = '600 600 600 200'
        }
    }
}
function gora_rozw_uch_Er2(width) {

    if (width < 801) {
        document.getElementById('x-r-uch-gora').innerText = 'niema nic';
        document.getElementById('x-r-gora').innerText = 'niema nic'
        document.getElementById('xx-r-uch-gora').innerText = 'niema nic';   
        document.getElementById('xx-r-gora').innerText = 'niema nic'; 
    }
    else if (width >= 801 && width <= 1600) {
        document.getElementById('x-r-uch-gora').innerText = 'AX-600';
        document.getElementById('x-r-gora').innerText = 'AX-600'
        document.getElementById('xx-r-uch-gora').innerText = 'AX-600';
        document.getElementById('xx-r-gora').innerText = 'AX-600'; 
    }
}
function dol_Er_2(width) {
    let res1 = fun1();
    let res2 = fun2()
    let res3 = fun3()
    let res4 = fun4()
    if (width < 490) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = 'niema nic';
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-dol').innerText = 'niema nic';
            document.getElementById('xx-r-dol').innerText = 'niema nic';
        }
        else if (res1 == 1 && res3 == 1){
            document.getElementById('x-r-dol').innerText = 'niema nic'
        }
    }
    else if (width >= 490 && width <= 690) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = '200';
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-dol').innerText = '200';
            document.getElementById('xx-r-dol').innerText = '200';
        }
        else if (res1 == 1 && res3 == 1){
            document.getElementById('x-r-dol').innerText = '200'
        }
    }
    else if (width >= 691 && width <= 890) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = '400';
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-dol').innerText = '400';
            document.getElementById('xx-r-dol').innerText = '400';
        }
        else if (res1 == 1 && res3 == 1){
            document.getElementById('x-r-dol').innerText = '400'
        }
    }
    else if (width >= 891 && width <= 1090) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = '600';
        }
        else if(res2 == 1) {
            document.getElementById('xx-r-uch-dol').innerText = '600';
            document.getElementById('xx-r-dol').innerText = '600';
        }
        else if (res1 == 1 && res3 == 1){
            document.getElementById('x-r-dol').innerText = '600'
        }
    }
    else if (width >= 1091 && width <= 1290) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = '600 200';
        }
        else if(res2 == 1) {
            document.getElementById('xx-r-uch-dol').innerText = '600 200';
            document.getElementById('xx-r-dol').innerText = '600 200';
        }
        else if (res1 == 1 && res3 == 1){
            document.getElementById('x-r-dol').innerText = '600 200'
        }
    }
    else if (width >= 1291 && width <= 1600) {
        if (res1 == 1 && res4 == 1) {
            document.getElementById('x-r-uch-dol').innerText = '600 400';
        }
        else if (res2 == 1){
            document.getElementById('xx-r-uch-dol').innerText = '600 400';
            document.getElementById('xx-r-dol').innerText = '600 400';
        }
        else if (res1 == 1 && res3 == 1){
            document.getElementById('x-r-dol').innerText = '600 400'
        }
    }
}



