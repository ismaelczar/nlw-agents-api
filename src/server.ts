import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from './env.ts';
import { createQuestion } from './http/routes/create-questions.ts';
import { createRomm } from './http/routes/create-room.ts';
import { getRommQuestions } from './http/routes/get-room-questions.ts';
import { getRooms } from './http/routes/get-rooms.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(getRooms);
app.register(createRomm);
app.register(getRommQuestions);
app.register(createQuestion);

app.listen({ port: env.PORT });
