import { customType } from "drizzle-orm/sqlite-core";

export const datetime = customType<{ data: Date, driverData: string }>({
    dataType: () => 'text',
    fromDriver: (string) => new Date(string),
    toDriver: (date) => date.toISOString()
})