import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { splits, workouts } from "@/data/schema";

export const splitWorkouts = sqliteTable("split_workout", {
	splitId: integer("split_id")
		.notNull()
		.references(() => splits.id, { onDelete: "cascade" }),
	workoutId: integer("workout_id")
		.notNull()
		.references(() => workouts.id, { onDelete: "cascade" }),
	order: integer("order").notNull(),
});

export const splitWorkoutsRelations = relations(splitWorkouts, ({ one }) => ({
	split: one(splits, {
		fields: [splitWorkouts.splitId],
		references: [splits.id],
	}),
	workout: one(workouts, {
		fields: [splitWorkouts.workoutId],
		references: [workouts.id],
	}),
}));
