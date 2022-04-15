# Formatação de Texto 

Os elementos de formatação foram projetados para exibir tipos especiais de texto:

- `<b>` - <b>Texto em negrito</b>
- `<strong>` - <strong>Texto importante</strong>
- `<i>` - <i>Texto em itálico</i>
- `<em>` - <em>Texto em destaque</em>
- `<mark>` - <mark>Texto marcado</mark>
- `<small>` - <small>Texto menor</small>
- `<del>` - <del>Texto excluído</del>
- `<ins>` - <ins>Texto inserido</ins>
- `<sub>` - <sub>Texto subscrito</sub>
- `<sup>` - <sup>Texto sobrescrito</sup>

---

### Elementos `<b>` e `<strong>`

Visivelmente tanto a tag `<b>` quanto a tag `<strong>` terão resultados visuais iguais, a diferença entre as duas vai ser semanticamente. 

`<b>` define o texto onde tem fins apenas visual, sem transmitir necessariamente alguma importância extra ao texto e sem implicação de uma voz ou humor alternativo.

###### sintaxe:

````html
<b>Este texto está em negrito</b>
````

<br>

 `<strong>` define o texto com grande importância, seriedade ou urgência para o seu conteúdo.

###### sintaxe:

````html
<strong>Este texto é importante!</strong>
````

---

### Elementos `<i>` e `<em>`

Ambas as tegs também terão resultados visuais iguais. Mas semanticamente será diferente.

 `<i>` irá definir uma parte do texto em uma voz ou humor alternativo.

> ***Dica:** A tag `<i>` é frequentemente usada para indicar um termo técnico, uma frase de outro idioma, um pensamento, um nome de navio, etc.*

###### sintaxe:

````html
<i>Este texto está em itálico.</i>
````

<br>

`<em>` define o texto enfatizado.

> ***Dica:** Um leitor de tela pronunciará as palavras `<em>` com ênfase, usando ênfase verbal.*

###### sintaxe:

````html
<em>Este texto é enfatizado.</em>
````

---

### Elemento `<small>`

 `<small>` define um texto menor:

###### sintaxe:

````html
<small>Este é um texto menor.</small>
````

---

### Elemento HTML `<mark>`

 `<mark>` define um texto marcado ou destacado:

###### sintaxe:

````html
<p>Não se esqueça de comprar <mark>leite</mark> hoje.</p>
````

---

### Elemento HTML `<del>`

`<del>` define o texto que foi excluído de um documento. Geralmente os navegadores exibem um texto riscado:

###### sintaxe:

````html
<p>Minha cor favorita é o vermelho <del>azul</del>.</p>
````

<p>Minha cor favorita é o vermelho <del>azul</del>.</p>

---

### Elemento HTML `<ins>`

`<ins>` define um texto que foi inserido em um documento. Geralmente os navegadores exibem um texto sublinhado:

###### sintaxe:

````html
<p>Minha cor favorita é o <del>azul</del> <ins>vermelho</ins>.</p>
````

<p>Minha cor favorita é o <del>azul</del> <ins>vermelho</ins>.</p>

---

### Elemento HTML `<sub>`

`<sub>` define o texto subscrito. Geralmente os navegadores exibem meio caractere abaixo da linha normal e às vezes é renderizado em uma fonte menor. O texto subscrito pode ser usado para fórmulas químicas, como H₂O:

###### sintaxe:

````html
<p>Este é um texto <sub>subscrito</sub>.</p>
````

<p>Este é um texto <sub>subscrito</sub>.</p>

---

### Elemento HTML `<sup>`

`<sup>` define o texto sobrescrito. Geralmente os navegadores exibem um texto meio caractere acima da linha normal e, às vezes, é renderizado em uma fonte menor. O texto sobrescrito pode ser usado para notas de rodapé, como WWW¹]:

###### sintaxe:

````html
<p>Este é um texto <sup>sobrescrito</sup>.</p>
````

<p>Este é um texto <sup>sobrescrito</sup>.</p>

<br>

***

> **PRÓXIMA AULA:** [Elementos de citações](../2.5-elementos-citacoes)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Formatação de texto](https://www.w3schools.com/html/html_formatting.asp)