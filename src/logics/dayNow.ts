export default function getDayOfWeek(date: any) {
  const daysOfWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  const dayIndex = date.getDay(); // Retorna um número de 0 a 6
  return daysOfWeek[dayIndex];
}
