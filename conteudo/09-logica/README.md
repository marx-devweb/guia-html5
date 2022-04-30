# Lógica com JavaScript

JavaScript torna as páginas HTML mais dinâmicas e interativas.

A tag `<script>` define um script. Este elemento contém instruções JavaScript ou pode referencia um arquivo JavaScript por meio do atributo `src`.

Para manipular um elemento HTML, o JavaScript geralmente utiliza o método `document.getElementById()`.

###### Exemplo:

```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Olá JavaScript!";
</script>
```

---

### Exemplos de JavaScript

###### JavaScript para alterar o conteúdo:

```html
<button type="button" onclick="myFunction()">CLIQUE PARA ALTERAR</button>
<p id="demo">Este texto irá alterar.</p>

<script>
    function myFunction() {
        document.getElementById("demo").innerHTML = "Olá JavaScript!";
    }
</script>
```

###### JavaScript para alterar estilos:

``` html
<p id="demo">JavaScript pode alterar o estilo de um elemento HTML.</p>
<script>    
    function myFunction() {
        document.getElementById("demo").style.fontSize = "25px"; 
        document.getElementById("demo").style.color = "red";
        document.getElementById("demo").style.backgroundColor = "yellow";
    }
</script>

<button type="button" onclick="myFunction()">CLIQUE PARA ALTERAR O ESTILO</button>
```

###### JavaScript para alterar atributos

```html
<script>
    function light(sw) {
        var pic;
        if (sw == 0) {
            pic = "pic_bulboff.gif"
        } else {
            pic = "pic_bulbon.gif"
        }
        document.getElementById('myImage').src = pic;
    }
</script>

<img id="myImage" src="pic_bulboff.gif" width="100" height="180">

<p>
    <button type="button" onclick="light(1)">Ligar lâmpada</button>
    <button type="button" onclick="light(0)">Desligar lâmpada</button>
</p>
```

---

### A tag `<noscript>`

Esta tag define um conteúdo alternativo a ser exibido para usuários que desabilitaram scripts em seus navegadores ou têm um navegador que não suporta scripts:

###### exemplo:

```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Olá JavaScript!";
</script>

<noscript>Um navegador sem suporte para JavaScript mostrará o texto escrito dentro do elemento noscript.</noscript>
```

***

> **PRÓXIMO CONTEÚDO:** [Formulários](/conteudo/10-formularios)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Lógica com JavaScript](https://www.w3schools.com/html/html_scripts.asp)