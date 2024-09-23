import { z } from 'zod';

export const todoSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  status: z.enum(['todo', 'in-progress', 'done']),
  importance: z.enum(['low', 'medium', 'high']),
});

export const todoListSchema = z.array(todoSchema);

export type Todo = z.infer<typeof todoSchema>;
