Flexbox работает на контейнере (родительский элемент) и его детях (вложенные элементы). Стиль `display: flex` применяется к контейнеру, контейнер - это просто по сути любой элемент или тэг, который имеет детей

`1.2 Основные свойства контейнера:`

`display: flex`

`flex-direction`(как только вы задаете `display: flex`, то по умолчанию имеет row): `row, row-reverse, column, column-reverse`

`justify-content`(Отвечает за горизонталь, когда `flex-direction:` `row`, когда `column`, то за вертикаль): `center, flex-end, flex-start, space-between, space-around, space-evenly`

`align-items`(Отвечает за вертикаль, когда `flex-direction: row`, когда `column`, то за горизонталь): `center, flex-end, flex-start`

`flex-wrap: wrap, nowrap`

`1.3 Основные свойства элементов:`

`flex-grow`
`flex-shrink`
`flex-basis`
`order`
