import { sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { entity } from "@/util";
import { splitWorkouts } from "@/data/schema";

export const splits = sqliteTable(
	"split",
	entity({
		name: text("name").notNull(),
	}),
	(x) => ({
		ixName: uniqueIndex("ix_name").on(x.name),
	})
);

export const splitRelations = relations(splits, ({ many }) => ({
	splitWorkouts: many(splitWorkouts),
}));

export type Split = typeof splits.$inferSelect;
export type CreateSplit = typeof splits.$inferInsert;
