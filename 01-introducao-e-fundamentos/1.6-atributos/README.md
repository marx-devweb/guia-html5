# Atributos HTML

Os atributos HTML fornecem informações adicionais sobre elementos HTML.

- Todos os elementos HTML podem ter atributos
- Os atributos fornecem informações adicionais sobre os elementos
- Os atributos são sempre especificados na tag inicial
- Os atributos geralmente vem em pares nome/valor como: name="value"

***

### O atributo `href`

A tag `<a>` define um hiperlink. O atributo `href` especifica o URL da página para a qual o link vai:

###### sintaxe:

````html
<a href="https://www.w3schools.com">Visit W3Schools</a>
````

***

### O atributo `src`

A tag `<img>` é usada para incorporar uma imagem em uma página HTML. O atributo `src` especifica o caminho para a imagem a ser exibida.

Há duas maneiras de especificar o URL no atributo `src` :

- URL absoluto - utiliza um link de uma imagem externa hospedada em outro site. 

  ``` html
  <img src="https://www.w3schools.com/images/img_girl.jpg">
  ```

  <br>

- URL Relativo - utiliza links para uma imagem que está hospedada na pasta do site.

```` html
<img src="img/img_girl.jpg">
````

> ***Dica:** quase sempre é melhor usar URLs relativos. Eles não vão quebrar se você mudar de domínio.*

***

### Atributos de largura e altura - `width` e `height`

A tag `<img>` também deve conter os atributos `width` e `height`, que especificam a largura e a altura da imagem (em pixels).

###### sintaxe:

````html
<img src="img_girl.jpg" width="500" height="600">
````

---

### O atributo `alt`

O atributo `alt` e obrigatório para a tag `<img>`, este atributo especifica um texto alternativo para uma imagem se por algum motivo não puder ser exibida.

###### sintaxe:

````html
<img src="img_girl.jpg" alt="Girl with a jacket">
````

***

### O atributo `style`

O atributo `style` é usado para adicionar estilos a um elemento, como cor, fonte, tamanho e muito mais.

###### sintaxe:

```` html
<p style="color:red;">Este é um paragrafo.</p>
````

***

### O atributo `lang`

Você deve sempre incluir o atributo `lang` dentro da tag `<html>`, para declarar o idioma da página da Web. Isto destina-se a ajudar os motores de busca e navegadores.

O exemplo a seguir especifica o inglês como o idioma:

````html
<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>
````

Os códigos de país também podem ser adicionados ao código de idioma no atributo `lang`. Assim, os dois primeiros caracteres definem o idioma da página HTML e os dois últimos caracteres definem o país.

O exemplo a seguir especifica português como idioma e Brasil como país:

````html
<!DOCTYPE html>
<html lang="pt-BR">
<body>
...
</body>
</html>
````

***

### O atributo `title`

O atributo `title` define algumas informações extras sobre um elemento.

O valor do atributo `title` será exibido como uma dica de ferramenta quando você passar o mouse sobre o elemento:

###### sintaxe:

````html
<p title="Eu sou uma dica de ferramenta">Este é um parágrafo.</p>
````

***

> **PRÓXIMO AULA:** [Comentários](../1.7-comentarios)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Atributos](https://www.w3schools.com/html/html_attributes.asp)
