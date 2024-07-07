import { relations } from "drizzle-orm";
import { sqliteTable, integer } from "drizzle-orm/sqlite-core";

import { exercises, workouts } from "@/data/schema";

export const workoutExercises = sqliteTable("workout_exercise", {
	workoutId: integer("workout_id")
		.notNull()
		.references(() => workouts.id, { onDelete: "cascade" }),
	exerciseId: integer("exercise_id")
		.notNull()
		.references(() => exercises.id, { onDelete: "cascade" }),
	sets: integer("sets").notNull(),
	reps: integer("reps").notNull(),
	rest: integer("rest"),
});

export const workoutExerciseRelations = relations(workoutExercises, ({ one }) => ({
	workout: one(workouts, {
		fields: [workoutExercises.workoutId],
		references: [workouts.id],
	}),
	exercise: one(exercises, {
		fields: [workoutExercises.exerciseId],
		references: [exercises.id],
	}),
}));
