import { sqliteTable, integer } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { entity, datetime } from "@/util";
import { workouts, sessionExercises } from "@/data/schema";

export const sessions = sqliteTable(
	"session",
	entity({
		workoutId: integer("workout_id")
			.notNull()
			.references(() => workouts.id, { onDelete: "cascade" }),
		startedAt: datetime("started_at").notNull(),
		endedAt: datetime("ended_at"),
	})
);

export const sessionRelations = relations(sessions, ({ one, many }) => ({
	workout: one(workouts, {
		fields: [sessions.workoutId],
		references: [workouts.id],
	}),
	sessionExercises: many(sessionExercises),
}));
