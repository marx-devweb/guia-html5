# Elementos de código de computador HTML

### `<kbd>` para entrada de teclado

Este elemento e usado para marcar a entrada do teclado inserida no computador.

###### exemplo:

```html
<p>Pressione <kbd>Ctrl + S</kbd> para salvar um documento.</p>
```

###### resultado:

<p>Pressione <kbd>Ctrl + S</kbd> para salvar um documento.</p>

---

### `<samp>` para saída do programa

Este elemento é usado para marcar uma amostra da saída de um programa de computador.

###### exemplo:

```html
<p>Mensagem do computador:</p>
<p><samp>File not found.<br>Pressione F1 para continuar.</samp></p>
```

###### resultado:

<p>Mensagem do computador:</p>
<p><samp>File not found.<br>Pressione F1 para continuar.</samp></p>

---

### `<code>` para código de computador

Este elemento é usado para marcar partes de um código de computador.

###### exemplo:

```html
<code>
x = 5;
y = 6;
z = x + y;
</code>
```

###### resultado:

<code>x = 5;y = 6;z = x + y;</code>

Este elemento não preserva espaços em branco extra e quebras de linha. Para manter as quebras de linha e os espaços em branco, e só colocar o elemento `<code>` dentro do elemento `<pre>`.

###### exemplo:

``` html
<pre>
<code>
x = 5;
y = 6;
z = x + y;
</code>
</pre>
```

---

### `<var>` para variáveis

Este elemento define uma variável ou uma expressão matemática.

###### exemplo:

```html
<p>A área de um triângulo é: 1/2 x <var>b</var> x <var>h</var>, onde <var>b</var> é a base e <var>h</var> é a altura vertical.</p>
```

***

> **PRÓXIMO CONTEÚDO:** [Lógica com JavaScript](/conteudo/09-logica)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Elementos de código de computador HTML](https://www.w3schools.com/html/html_computercode_elements.asp)