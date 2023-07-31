// Створити абстрактний клас Figeure3D з властивостю ім'я (string не пуста) і методом обчислити об'єм.

// Створити класи нащадки: сфера, куб, *циліндр. Написати сеттери для властивостей.

// Створити функцію getVolume3DFigure, яка приймає будь яку 3d фігуру і повертає її об'єм.
const MATH_PI = 3.14;
class Figure3D {
  #name;
  constructor(name) {
    if (this.constructor === Figure3D) {
      throw new Error("Forbidden to create instance in abstract class");
    }
    if (typeof name !== "string") {
      throw new TypeError("must be string");
    }
    this.#name = name;
  }
  getVolume() {}

  get name() {
    return this.#name;
  }
}

class Sphere extends Figure3D {
  #radius;
  constructor(radius) {
    super("Sphere");
    this.#radius = radius;
  }
  getVolume() {
    return 4 * MATH_PI * (this.#radius * this.#radius);
  }
  get radius() {
    return this.#radius;
  }
  set radius(number) {
    if (typeof number !== "number") {
      throw new TypeError("must be a number");
    }
    if (number <= 0) {
      throw new RangeError("must be positive number");
    }
    this.#radius = number;
  }
}

class Cube extends Figure3D {
  #side;
  constructor(side) {
    super("Cube");
    this.#side = side;
  }
  getVolume() {
    return this.#side ** 3;
  }
  get side() {
    return this.#side;
  }
  set side(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be a number");
    }
    if (value <= 0) {
      throw new RangeError("must be positive number");
    }
    this.#side = value;
  }
}

class Cylinder extends Figure3D {
  #baseArea;
  #height;
  constructor(baseArea, height) {
    super("Cylinder");
    this.#baseArea = baseArea;
    this.#height = height;
  }
  getVolume() {
    return this.#baseArea * this.#height;
  }

  get baseArea() {
    return this.#baseArea;
  }
  set baseArea(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be a number");
    }
    if (value <= 0) {
      throw new RangeError("must be positive number");
    }
    this.#baseArea = value;
  }
  get height() {
    return this.#height;
  }
  set height(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be a number");
    }
    if (value <= 0) {
      throw new RangeError("must be positive number");
    }
    this.#baseArea = value;
  }
}

function getVolume3DFigure(figure) {
  if (figure instanceof Figure3D) {
    return figure.getVolume();
  }
  throw new TypeError("must be figure");
}

try {
  console.group("about sphere");
  const sphere = new Sphere(2);
  console.log(sphere);
  console.log(sphere.getVolume());
  console.log(getVolume3DFigure(sphere));
  console.groupEnd;

  console.group("about Cube");
  const cube = new Cube(5);
  console.log(cube);
  console.log(cube.getVolume());
  console.log(getVolume3DFigure(cube));
  console.groupEnd;

  console.group("about Cylinder");
  const cylinder = new Cylinder(5, 10);
  console.log(cylinder);
  console.log(cylinder.getVolume());
  console.log(getVolume3DFigure(cylinder));
  console.groupEnd;
} catch (error) {
  console.log(error.message);
}
