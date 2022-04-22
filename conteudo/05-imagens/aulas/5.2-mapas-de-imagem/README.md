# Mapas de imagem HTML

Um mapa de imagem é uma imagem com áreas clicáveis.

A tag `<map>` define um mapa de imagem. As áreas são definidas com uma ou mais tags `<area>`.

---

### Inserindo a imagem

Inserimos a imagem com a tag `<img>` e adicionaremos o atributo `usemap`:

O valor do atributo `usemap` começa com # seguido pelo nome do mapa de imagem. Este atributo é usado para criar um relacionamento entre a imagem e o mapa de imagem.

``` html
<img src="imagens/workplace.jpg" alt="Workplace" usemap="#workmap">
```

---

### Criando o mapa de imagem

Para criar o mapa de imagem, utiliza-se o elemento `<map>` junto com o atributo `name` que é obrigatório. 

O atributo `name` deve ter o mesmo valor que o atributo `usemap` da tag `<img>`.

``` html
<map name="workmap">
   
</map>
```

Assim, o mapa de imagem está vinculado a imagem original.

---

### As áreas

As áreas clicável é definida pelo elemento `<area>`.

Este elemento deve ser declarado com o atributo `shape` que possui os seguintes valores:

- `rect` - define uma região retangular;
- `circle` - define uma região circular;
- `poly` - define uma região poligonal;
- `default` - define toda a região;

Também deveremos definir as coordenadas poder colocar a área clicável na imagem. Declaramos essas coordenadas com o atributo `coords`.

Abaixo temos o código fonte já com as coordenadas que definem as áreas clicaveis do notebook, celular e do café definidas:

``` html
<area shape="rect" coords="34, 44, 270, 350" alt="Notebook" href="notebook.html">
<area shape="rect" coords="290, 172, 333, 250" alt="Celular" href="celular.html">
<area shape="circle" coords="337, 300, 44" alt="Café" href="cafe.html">
```

---

### Coordenadas do computador

Nas coordenadas do computador, os valores `290, 172, 333, 250`, significa estão localizadas a 290 pixels da margem esquerda, 172 pixels da margem superior, 333 pixels da margem esquerda e 250 pixels da margem superior.

---

### Coordenadas do celular

Nas coordenadas do celular, os valores `34, 44, 270, 350`, significa estão localizadas a 34 pixels da margem esquerda, 44 pixels da margem superior, 70 pixels da margem esquerda e 350 pixels da margem superior.

---

### Coordenadas do café

Nas coordenadas do café, os valores `337, 300, 44` significa que o centro do circulo está a 337 pixels da margem esquerda e 300 pixels da parte superior, e o raio do circulo e 44 pixels.

---

### Mapa de imagem e JavaScript

Uma área clicável também pode acionar uma função JavaScript.

É só adicionar um evento `click` ao elemento `<area>` para executar uma função JavaScript:

``` html
<map name="workmap">
    <area shape="rect" coords="34,44,270,350" alt="Computer" href="notebook.html" onclick="notebook()">
    <area shape="rect" coords="290,172,333,250" alt="Phone" href="celular.html" onclick="celular()">
    <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="cafe.html" onclick="cafe()">
</map>

<script>
    function notebook() {
        alert("Você clicou no notebook!");
    }
    
    function celular() {
        alert("Você clicou no celular!");
    }
    
    function cafe() {
        alert("Você clicou na xícara de café!");
    }
</script>
```

***

> **PRÓXIMO AULA:** [Imagens background](../5.3-imagem-background)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Mapas de imagem](https://www.w3schools.com/html/html_images_imagemap.asp)