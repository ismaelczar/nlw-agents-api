import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { rooms } from './rooms.ts';

export const questions = pgTable('questions', {
  id: uuid().primaryKey().defaultRandom(),
  roomId: uuid()
    .references(() => rooms.id) // Referencia entre a tabela rooms e questions
    .notNull(),
  question: text().notNull(),
  answer: text(),
  createAt: timestamp().defaultNow().notNull(),
});
