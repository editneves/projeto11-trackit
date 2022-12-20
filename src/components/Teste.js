function handleContent(habits) {
    if (habits.length !== 0) {
      return habits.map((habit) => {
        const days = [
          { shortName: "D", isHabit: false },
          { shortName: "S", isHabit: false },
          { shortName: "T", isHabit: false },
          { shortName: "Q", isHabit: false },
          { shortName: "Q", isHabit: false },
          { shortName: "S", isHabit: false },
          { shortName: "S", isHabit: false },
        ];
        console.log(habit);
        habit.days.map((dayIndex) => (days[Number(dayIndex)].isHabit = true));
        return (
          <HabitContainer>
            <HabitTitle>
              <p>{habit.name}</p>
              <HabitDelete onClick={() => handleDeletion(habit.id)}>
                <ion-icon name="trash-outline" />
              </HabitDelete>
            </HabitTitle>

            <HabitDays>
              {days.map((day) => {
                return (
                  <HabitDay color={day.isHabit} background={day.isHabit} onClick={() => handleCheckHabit()}>
                    {day.shortName}
                  </HabitDay>
                );
              })}
            </HabitDays>
          </HabitContainer>
        );
      });
    } else {
      return (
        <span>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </span>
      );
    }
  }