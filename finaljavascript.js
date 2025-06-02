
//Login

 function login(){
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById('contraseña').value;
    
    if (usuario == 'nicolas' && contraseña == '12345') {
        window.location.href = 'html muebleria ultimo.html';
    }
    else {
        alert('Usuario o contraseña incorrectos');
    }
}

//Muebleria
function comprar(){
 
        window.location.href = 'compra.html';
    }
    


//Compra 

function enviar(){
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
     alert('Compraste '+ cantidad + 'unidad(es) de' + 'producto' + producto);
        
    }

    function inicio(){
      
        window.location.href = 'práctica final.html';
    }

     function ingreso(){
      
        window.location.href = 'práctica final.html';
    }