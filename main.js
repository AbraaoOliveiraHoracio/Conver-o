const Calcular = document.getElementById("Calcular");
const Delet = document.getElementById("Delet");
const Resultado = document.getElementById("resul");

function Converso(){
let box = document.getElementById("box").value
let valor = parseFloat(document.getElementById("valor").value)


 switch (box) {  
     case "c/m":
     resultado = valor / 100
      break
       case "m/c":
        resultado = valor * 100
        break 
        case "k/l":
         resultado = valor * 2.2046
          break
           case "l/k":
 
 
           resultado = valor / 2.2046 
        }

document.getElementById("resul").value = resultado;

}
function DeletFunc(){
Resultado.value="";
valor.value="";
}
Calcular.addEventListener("click", Converso);
Delet.addEventListener("click", DeletFunc);


