

function showDialog(){
    let a = document.getElementById('entry').value;
    const dialog = document.getElementById("myDialog");
    if (a == '123'){
        document.location.href = 'home.html';
    }
    else{
        dialog.showModal();
        dialog.style.display = 'block';
        dialog.style.margin = 'auto auto'
    }
    
}
function closeDialog() {
    const dialog = document.getElementById("myDialog"); 
    dialog.close();
    dialog.style.display = 'none'; 
} 
function main() {
    const a = document.querySelector('.gross');
    const b = document.querySelector('.menu-burger');
    a.style.display = 'block';
    b.style.display = 'none';
} 