
function Area()
        {
     var area, base, altura;
            base = prompt("Coloca la base");
            altura = prompt("Coloca la altura");

            base = parseInt(base);
            altura = parseInt(altura);
            area = (base * altura);

            alert("El area del cuadrado es: " +area);
        }

function Volumen()
        {
     var lado1, lado2, lado3,volumen;
            lado1 = prompt("Coloca el lado numero 1");
            lado2 = prompt("Coloca el lado numero 2");
            lado3 = prompt("Coloca el lado numero 3");
            lado1 = parseInt(lado1);
            lado2 = parseInt(lado2);
            lado3 = parseInt(lado3);
            volumen = (lado2 * lado3 * lado1);

            alert("El volumen del cuadrado es: " +volumen);
        }

function AreaT()
        {
     var area, base, altura;
            base = prompt("Coloca la base");
            altura = prompt("Coloca la altura");

            base = parseInt(base);
            altura = parseInt(altura);
            area = (base * altura)/2;

            alert("El area del triangulo  es: " +area);
        }



