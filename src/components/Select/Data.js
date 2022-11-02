import { v4 as uuidv4 } from "uuid"

const subjects = [
  { text: "Выберите предмет", id: uuidv4() },
  { text: "Английский язык", id: uuidv4() },
  { text: "Русский язык", id: uuidv4() },
  { text: "Литература", id: uuidv4() },
  { text: "Информатика", id: uuidv4() },
  { text: "Физика", id: uuidv4() },
  { text: "Предмет:", id: uuidv4() },
]
const roles = [
  { text: "Выберите роль", id: uuidv4() },
  { text: "Учитель", id: uuidv4() },
  { text: "Ученик", id: uuidv4() },
  { text: "Родитель", id: uuidv4() },
  { text: "Роль:", id: uuidv4() },
]

export { subjects, roles }
