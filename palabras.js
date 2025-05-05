function loadLDocA(fichero)
{
    let http = new XMLHttpRequest(); //Se crea petición al servidor
    http.open("GET",fichero,true); //Se pide procesar el fichero. Continua la ejecución hasta recibir la respuesta
    //http.setRequestHeader("Content-type", "text/xml");
    http.send();
    http.addEventListener('load', (event) => {  //Cuando se reciba la respuesta, se ejecuta esta función
        if(http.status === 200) {
            if(fichero.split(".")[1] == "txt")
            {
                gestionarFicheroTXT(http.responseText)
            }
            else
            {
                gestionarFicheroXML(http.responseXML)
			    
            }
		}})
}

function gestionarFicheroTXT(txtDoc)
{

   let contenedor = document.getElementById("palabras");
   let lineas = txtDoc.split('\n');
   let alternar = true;

   lineas.forEach(linea => {
    if(linea.trim() != ''){
        let div = document.createElement("div");
        div.classList.add("mensaje");
        div.classList.add(alternar? "izquierda" : "derecha");
        div.textContent = linea.trim();
        contenedor.append(div);
        alternar = !alternar;
   }
   });

   
 
}

loadLDocA("palabras.txt");