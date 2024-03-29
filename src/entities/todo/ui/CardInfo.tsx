import { Typography } from "@mui/material"
import { intlFormatDistance } from "date-fns"
import { ITodoDetail } from "../model/todo-detail"
import { useContext } from "react"
import { OptionsContext } from "@/shared/api"
import { languages } from "@/shared/config"

export function CardInfo({ todo }: { todo: ITodoDetail }) {
  const { language } = useContext(OptionsContext)
  return (
    <>
      <Typography variant="h6" component="h6">
        {todo.title}
      </Typography>
      <Typography gutterBottom variant="body1">
        {languages[language].CREATED +
          ": " +
          intlFormatDistance(todo.createdAt, Date.now(), { locale: language })}
      </Typography>
      <Typography gutterBottom variant="body1">
        {languages[language].EDITED +
          ": " +
          intlFormatDistance(todo.editedAt, Date.now(), {
            locale: language
          })}
      </Typography>
      {todo.description && <Typography>{todo.description}</Typography>}
    </>
  )
}
