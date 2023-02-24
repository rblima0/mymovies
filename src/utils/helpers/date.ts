import { format, addDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDate = (
  date: Date,
  optionalFormat: string = 'dd/MM/yyyy'
): string => {
  const addedDate = addDays(new Date(date), 1)
  return format(addedDate, optionalFormat, {
    locale: ptBR,
  })
}
