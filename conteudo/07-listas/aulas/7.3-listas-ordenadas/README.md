# Listas ordenadas

O elemento `<ol>` define uma lista de itens ordenados, ou seja, uma lista que pode ser ordenada por números,  algarismos romanos, ou simples símbolos.

Cada item da lista, por padrão , será marcada por numero, mas pode ser alterado utilizando o atributo `type`

###### exemplo:

``` html
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>
```

###### resultado:

<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>

---

### O atributo `type`

Este atributo define o tipo do marcador, ele pode ter um dos seguintes valores:

- type="1" - indica números (padrão);
- type="A" - indica letras maiúsculas;
- type="a" - indica letras minúsculas;
- type="I" - indica algarismos romanos maiúsculos; 
- type="i" - indica algarismos romanos minúsculos;


#### Letra minúsculas:

``` html
<ol type="a">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>
```

###### resultado:

<ol type="a">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>

#### Algarismos romanos minúsculos

``` html
<ol type="i">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>
```

###### resultado:

<ol type="i">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>

---

### Contagem da lista de controle

Por padrão, uma lista ordenada começará a contar a partir de 1. para definir que a lista comece de um número especifico, podemos usar o atributo `start`:

###### exemplo: 

``` html
<ol start="50">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>
```

###### resultado:

<ol start="50">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>

---

### Lista aninhada

Podemos aninhar nossas listas, ou seja, utilizar uma lista não ordenada dentro da nossa lista:

###### exemplo:

``` html
<ol>
    <li>Desenvolvedor Front-end
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <br>
    <li>Desenvolvedor Back-end
        <ul>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <br>
    <li>Desenvolvedor Mobile
        <ul>
            <li>Kotlin </li>
            <li>Swift </li>
            <li>Python</li>
        </ul>
    </li>
</ol>
```

###### resultado:

<ol>
    <li>Desenvolvedor Front-end
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <br>
    <li>Desenvolvedor Back-end
        <ul>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <br>
    <li>Desenvolvedor Mobile
        <ul>
            <li>Kotlin </li>
            <li>Swift </li>
            <li>Python</li>
        </ul>
    </li>
</ol>

***

> **PRÓXIMA AULA:** [Outras listas](../7.4-outras-listas)

***


> **FONTE DO CONTEÚDO**:
>
> - [W3Schools - Listas ordenadas](https://www.w3schools.com/html/html_lists_ordered.asp)