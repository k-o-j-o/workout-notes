import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { entity, datetime } from "@/util";
import { sessions, exercises } from "@/data/schema";

export const sessionExercises = sqliteTable(
	"exercise_record",
	entity({
		sessionId: integer("session_id")
			.notNull()
			.references(() => sessions.id, { onDelete: "cascade" }),
		exerciseId: integer("exercise_id")
			.notNull()
			.references(() => exercises.id, { onDelete: "cascade" }),
		weight: integer("weight").notNull(),
		reps: integer("reps").notNull(),
		sets: integer("sets").notNull(),
		rest: integer("rest"),
		recordedAt: datetime("recorded_at").notNull(),
		notes: text("notes"),
		difficulty: integer("difficulty"),
	})
);

export const sessionExerciseRelations = relations(sessionExercises, ({ one }) => ({
	exercise: one(exercises, {
		fields: [sessionExercises.exerciseId],
		references: [exercises.id],
	}),
}));
