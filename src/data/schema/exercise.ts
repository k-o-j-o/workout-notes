import { sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { entity } from "@/lib";

export const exercises = sqliteTable(
	"exercise",
	entity({
		name: text("name").notNull(),
	}),
	(x) => ({
		ixName: uniqueIndex("ix_name").on(x.name),
	})
);
