import { sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { entity } from "@/util";
import { workoutExercises } from "@/data/schema";

export const workouts = sqliteTable(
	"workout",
	entity({
		name: text("name").notNull(),
	}),
	(x) => ({
		ixName: uniqueIndex("ix_name").on(x.name),
	})
);

export const workoutRelations = relations(workouts, ({ many }) => ({
	workoutExercises: many(workoutExercises),
}));

export type Workout = typeof workouts.$inferSelect;
export type CreateWorkout = typeof workouts.$inferInsert;
