Что такое TypeScript?

Ответ: TypeScript — это надмножество JavaScript, добавляющее статическую типизацию и современные возможности языка, компилируемое в чистый JavaScript.

Какие преимущества использования TypeScript?

Ответ: Статическая типизация, улучшенная поддержка инструментов разработки, обнаружение ошибок на этапе компиляции, улучшенная читаемость и поддерживаемость кода.

Как установить TypeScript?

Ответ: С помощью менеджера пакетов npm: npm install -g typescript.

Что такое типы в TypeScript?

Ответ: Типы определяют вид данных, которые могут храниться в переменной, такие как number, string, boolean, array, enum, пользовательские интерфейсы и классы.

Как объявить переменную с типом в TypeScript?

Ответ: Используя двоеточие после имени переменной: let age: number = 25;.

Что такое интерфейсы в TypeScript?

Ответ: Интерфейсы определяют структуру объектов, описывая свойства и методы, которые объект должен иметь.

Как объявить интерфейс в TypeScript?

Ответ:
interface User {
  name: string;
  age: number;
}

Что такое типы объединения (Union Types)?

Ответ: Типы, позволяющие переменной принимать значения нескольких типов, например: let value: string | number;.

Что такое типы пересечения (Intersection Types)?

Ответ: Типы, объединяющие несколько типов в один, содержащий все свойства объединяемых типов, например: type Combined = TypeA & TypeB;.

Как работает тип any в TypeScript?

Ответ: Тип any отключает проверку типов для переменной, позволяя ей принимать значения любого типа.

Что такое unknown тип?

Ответ: Тип unknown безопаснее any, так как требует проверки типа перед использованием значения.

Как использовать перечисления (Enums) в TypeScript?

Ответ:
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

Что такое дженерики (Generics) в TypeScript?

Ответ: Дженерики позволяют создавать компоненты, работающие с любыми типами, сохраняя типовую безопасность.
Как объявить функцию с типами параметров и возвращаемым значением?

Ответ:
function add(a: number, b: number): number {
  return a + b;
}

Что такое типы литералов (Literal Types)?

Ответ: Типы, ограниченные конкретными значениями, например: let direction: "left" | "right";.

Как использовать тип never?

Ответ: Тип never используется для функций, которые никогда не возвращают значение, например, при выбросе исключения или бесконечном цикле.

Что такое модули в TypeScript?

Ответ: Модули позволяют разделять код на отдельные файлы с экспортом и импортом функциональности с помощью export и import.

Как компилировать TypeScript в JavaScript?

Ответ: С помощью команды tsc, например: tsc filename.ts.

Что такое конфигурационный файл tsconfig.json?

Ответ: Файл, содержащий настройки компилятора TypeScript, такие как целевая версия JavaScript, пути модулей и включаемые файлы.

Как установить типы для сторонних библиотек?

Ответ: С помощью DefinitelyTyped и установки пакетов с префиксом @types, например: npm install --save-dev @types/lodash.

Что такое декларации типов (.d.ts файлы)?

Ответ: Файлы, содержащие определения типов для JavaScript библиотек, позволяющие TypeScript понимать их структуру.

Как использовать классы в TypeScript?

Ответ:
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

Что такое модификаторы доступа public, private, protected?

Ответ: Контролируют доступ к свойствам и методам класса. public доступен везде, private только внутри класса, protected внутри класса и его наследников.

Как реализовать наследование в TypeScript?

Ответ:
class Employee extends Person {
  employeeId: number;
  constructor(name: string, employeeId: number) {
    super(name);
    this.employeeId = employeeId;
  }
}

Что такое абстрактные классы?

Ответ: Классы, которые не могут быть инстанцированы напрямую и могут содержать абстрактные методы, которые должны быть реализованы наследниками.
Как объявить интерфейс с методами?

Ответ:
interface Animal {
  name: string;
  makeSound(): void;
}

Что такое объединение типов через интерфейсы (interface vs type)?

Ответ: Интерфейсы предназначены для описания структур объектов и могут быть расширены, тогда как типы через type более гибкие, поддерживают объединения и пересечения.
Как использовать readonly свойства?

Ответ:
interface Point {
  readonly x: number;
  readonly y: number;
}

Что такое tuple (кортеж) в TypeScript?

Ответ: Массив фиксированной длины с заранее определенными типами для каждого элемента, например: let tuple: [string, number] = ["hello", 10];.
Как использовать типы пересечения для объединения интерфейсов?

Ответ:
interface A { a: number; }
interface B { b: string; }
type AB = A & B;

Что такое декларации пространства имен (namespaces)?

Ответ: Механизм организации кода внутри логических блоков, предотвращающий загрязнение глобального пространства.
Как использовать дженерики с ограничениями (Generics with Constraints)?

Ответ:
function identity<T extends number | string>(arg: T): T {
  return arg;
}

Что такое mapped types?

Ответ: Типы, создаваемые на основе существующих типов с изменением их свойств, например: type Readonly<T> = { readonly [P in keyof T]: T[P] };.
Как использовать условные типы (Conditional Types)?

Ответ:
type IsString<T> = T extends string ? "Yes" : "No";

Что такое utility types и приведите примеры?

Ответ: Встроенные типы, упрощающие работу с другими типами, например: Partial, Pick, Omit, Record, Readonly.
Как использовать Partial тип?

Ответ:
interface User {
  name: string;
  age: number;
}
let partialUser: Partial<User> = { name: "Alice" };

Что такое Pick и Omit?

Ответ: Pick выбирает определенные свойства из типа, Omit исключает определенные свойства.
type UserName = Pick<User, "name">;
type UserWithoutAge = Omit<User, "age">;

Как использовать Record тип?

Ответ:
type PageInfo = Record<string, string>;
let info: PageInfo = { title: "Home", description: "Welcome" };

Что такое Readonly тип?

Ответ: Делает все свойства объекта доступными только для чтения.
let readonlyUser: Readonly<User> = { name: "Bob", age: 30 };

Как работать с дженериками в классах?

Ответ:
class Box<T> {
  content: T;
  constructor(content: T) {
    this.content = content;
  }
}
let box = new Box<string>("Hello");

Что такое декораторы в TypeScript?

Ответ: Специальные объявления, позволяющие аннотировать и изменять классы и их члены. Требуют включения experimentalDecorators.
Как использовать декоратор класса?

Ответ:
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
}

Что такое strict режим в TypeScript?

Ответ: Набор опций компилятора, повышающих строгость проверки типов, включая noImplicitAny, strictNullChecks и другие.
Как настроить tsconfig.json для строгой типизации?

Ответ:
{
  "compilerOptions": {
    "strict": true
  }
}

Что такое декораторы свойств и методов?

Ответ: Специальные функции, которые применяются к свойствам или методам класса для изменения их поведения или метаданных.
Как использовать дженерики в функциях?

Ответ:
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

Что такое перегрузка функций в TypeScript?

Ответ: Возможность объявлять несколько сигнатур функции с разными параметрами, реализуемые одной функцией.

Как объявить перегруженную функцию?

Ответ:
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

Что такое типы индексирования (Index Types)?

Ответ: Позволяют получать тип значения по ключу объекта, например: type ValueType = MyType["key"];.

Как использовать keyof оператор?

Ответ:
interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // "name" | "age"

Что такое type guards?

Ответ: Механизмы, позволяющие уточнять тип переменной внутри условных блоков, например, с помощью typeof или instanceof.

Как создать пользовательский type guard?

Ответ:
function isString(value: any): value is string {
  return typeof value === "string";
}

Что такое декларации namespace и когда их использовать?

Ответ: Используются для организации кода в логические блоки, особенно в проектах без модулей. В современных проектах предпочтительнее модули.

Как использовать декораторы параметров?

Ответ:
function logParameter(target: any, propertyKey: string, parameterIndex: number) {
  console.log(`Parameter index: ${parameterIndex}`);
}

class Example {
  method(@logParameter param: string) {}
}

Что такое type assertion и как его использовать?

Ответ: Позволяет явно указать компилятору тип переменной, используя синтаксис as или угловые скобки.
let someValue: any = "Hello";
let strLength: number = (someValue as string).length;

Что такое декораторы методов?

Ответ: Функции, применяемые к методам класса для изменения их поведения или добавления метаданных.
Как использовать модификатор readonly в классах?

Ответ:
class Car {
  readonly brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}

Что такое Mapped Types и как их использовать?

Ответ: Типы, создаваемые путем перебора свойств другого типа и применения к ним изменений.
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

Как работает тип Tuple с rest параметрами?

Ответ: Позволяет объявлять кортежи с переменным числом элементов последнего типа.
type StringNumberTuple = [string, ...number[]];

Что такое Ambient Declarations?

Ответ: Декларации типов для существующего кода (например, сторонних библиотек), обычно в .d.ts файлах.

Как использовать declare в TypeScript?

Ответ: Для объявления переменных, функций или модулей, существующих вне TypeScript, например:
declare var JQuery: any;

Что такое type aliases и как их создавать?

Ответ: Создание псевдонимов для типов с помощью ключевого слова type.
type StringOrNumber = string | number;

Как использовать interface для описания функций?

Ответ:
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(src, sub) {
  return src.includes(sub);
};

Что такое module augmentation?

Ответ: Расширение существующих модулей или интерфейсов путем добавления новых свойств или методов.

Как использовать namespace для организации кода?

Ответ:
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}

Что такое index signatures?

Ответ: Позволяют описывать типы свойств с динамическими ключами.
interface Dictionary {
  [key: string]: any;
}

Как использовать optional properties в интерфейсах?

Ответ:
interface User {
  name: string;
  age?: number;
}

Что такое default parameters и как их использовать в TypeScript?

Ответ: Параметры функции с заданным значением по умолчанию.
function greet(name: string = "Guest") {
  console.log(`Hello, ${name}`);
}

Как использовать rest parameters в TypeScript?

Ответ:
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

Что такое type inference в TypeScript?

Ответ: Автоматическое определение типов переменных компилятором на основе присвоенных значений.

Как отключить проверку типов для определенных строк кода?

Ответ: С помощью комментариев // @ts-ignore или // @ts-expect-error перед строкой.

Что такое Conditional Types и приведите пример?

Ответ: Типы, зависящие от условий, например:
type IsString<T> = T extends string ? "Yes" : "No";

Как использовать Template Literal Types?

Ответ: Создание типов на основе шаблонных строк.
type Greeting = `Hello, ${string}`;

Что такое never тип и когда его использовать?

Ответ: Тип, представляющий значения, которые никогда не происходят, например, функции, выбрасывающие исключения.

Как использовать keyof с индексированными доступами?

Ответ:
interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // "name" | "age"

Что такое non-null assertion operator (!)?

Ответ: Оператор, указывающий компилятору, что значение не null или undefined.
let value: string | null = "Hello";
console.log(value!.length);

Как использовать dynamic import в TypeScript?

Ответ:
import("module").then(module => {
  module.doSomething();
});

Что такое Decorator Metadata и как его использовать?

Ответ: Метаданные, добавляемые декораторами, требуют включения emitDecoratorMetadata и используются для отражения типов во время выполнения.

Как настроить пути модулей (module resolution) в TypeScript?

Ответ: Через tsconfig.json с помощью параметра paths и baseUrl.
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@app/*": ["src/app/*"]
    }
  }
}

Что такое Declaration Merging и как оно работает?

Ответ: Объединение нескольких деклараций с одним именем в одну, что позволяет расширять интерфейсы или модули.
interface Window {
  title: string;
}
interface Window {
  ts: TypeScriptAPI;
}