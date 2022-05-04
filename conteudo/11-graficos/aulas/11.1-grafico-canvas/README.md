# Gráfico Canvas

O elemento `<canvas>` é apenas um container para desenhar gráficos utilizando JavaScript.

O exemplo abaixo, cria uma tela na página HTML. Por padrão, uma tela não tem borda nem conteúdo.

###### exemplo:

```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
</canvas>
```

> **Observação:** sempre especificar um atributo `id` (a ser referido em um script). 

---

### Adicionando um JavaScript

###### script para desenhar uma linha:

```javascript
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
</script>
```

###### script para desenhar um circulo:

```html
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
</script>
```

###### script para desenhar um texto:

```html
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);
</script>
```

###### script para desenhar um texto traçado: 

```html
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50);
</script>
```

###### script para desenhar um gradiente linear:

```html
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
</script>
```

###### script para desenhar um gradiente circular:

```html
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
</script>
```

###### script para desenhar uma imagem:

```html
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("scream");
ctx.drawImage(img, 10, 10);
</script>
```

***

> **PRÓXIMA AULA:** [Gráficos SVG](../11.2-grafico-svg)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Gráfico Canvas](https://www.w3schools.com/html/html5_canvas.asp)