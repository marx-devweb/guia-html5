# Iframes HTML

Um iframe é usado para incorporar uma outra página da web dentro da página atual. 

---

### Sintaxe 

A tag `<iframe>` define incorporação da página. 

###### exemplo:

``` html
<iframe src="url" title="descrição"></iframe>
```

---

### Definir Altura e Largura

Utilizamos os atributos `height` e `width` para definir o tamanho do iframe.

###### exemplo:

``` html
<iframe src="demo_iframe.htm" height="200" width="300" title="Exemplo iframe"></iframe>
```

Também podemos utilizar o atributo `style` e usas as propriedades `height` e `width`:

###### exemplo:

``` html
<iframe src="demo_iframe.htm" style="height:200px;width:300px;" title="Exemplo iframe"></iframe>
```

---

### Removendo a borda

Utilizamos o atributo `style` e a propriedade `border` para remover as bordas de um iframe.

###### exemplo:

``` html
<iframe src="demo_iframe.htm" style="border:none;" title="Exemplo iframe"></iframe>
```

---

### Destino para um link

O iframe pode ser utilizado como destino para um link. 

Para defini-ló como um destino, o atributo `target` do link deve se referir ao atributo `name` do iframe:

###### exemplo:

```html
<iframe src="demo_iframe.htm" name="iframe_a" title="Exemplo iframe"></iframe>

<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
```

***

> **PRÓXIMA AULA:** [Elementos de código de computador](../8.2-elementos-de-codigo-de-computador)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Iframes HTML](https://www.w3schools.com/html/html_iframe.asp)