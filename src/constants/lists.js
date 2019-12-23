const birthday = {
  name: "На день рождения",
  productList: [
    { name: "Торт", done: false, isEditing: false },
    { name: "Свечи", done: false, isEditing: false },
    { name: "Газировка", done: false, isEditing: false }
  ],
  done: false,
  isEditing: false
};

const forBreakfast = {
  name: "Для ужина",
  productList: [
    { name: "Котлеты", done: false, isEditing: false },
    { name: "Майонез", done: false, isEditing: false },
    { name: "Картошка", done: false, isEditing: false },
    { name: "Молоко", done: false, isEditing: false }
  ],
  done: false,
  isEditing: false
};

export const INITIAL_LISTS = [birthday, forBreakfast];
