import { integer, type SQLiteColumnBuilderBase } from "drizzle-orm/sqlite-core";

export function entity<TColumns extends Record<string, SQLiteColumnBuilderBase>>(
	columns: TColumns
) {
	return {
		id: integer("id").primaryKey(),
		...columns,
	};
}
