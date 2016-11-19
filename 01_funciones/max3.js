<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../_recursos/main.css">
    <title>Dev.F JS Ejercicios - Funciones - 03. Máximo de tres</title>
  </head>
  <body>
    <h1>Máximo de tres números</h1>
    <div class="formulario">
      Número 1: <input type="text" name="numero1" id="numero1"><br />
      Número 2: <input type="text" name="numero2" id="numero2"><br />
      Número 3: <input type="text" name="numero3" id="numero3"><br />
      <button onclick="calcular_max();">Calcular!</button>
      <div id="resultado"></div>
    </div>
    <script>
        function calcular_max() {
          var n1 = parseInt(document.querySelector("#numero1").value);
          var n2 = parseInt(document.querySelector("#numero2").value);
          var n3 = parseInt(document.querySelector("#numero3").value);

          var maximo = max(n1, n2);
          maximo = max(maximo, n3);

          var resultado = document.querySelector("#resultado").value);
          resultado.innerHTML = "Max: " + maxino;
        }

        function max(hector, brian) {
          var mejor_sensei;
          if (hector > brian) {
            mejor_sensei = hector;
          } else {
            mejor_sensei = brian;
          }
          return mejor_sensei;
        }
        alert(mejor_sensei);

      </script>
    </body>
  </html>
