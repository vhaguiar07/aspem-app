import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Substitua pelo domínio do seu frontend
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Aspem APP')
    .setDescription('Documentação das rotas do Aspem APP')
    .setVersion('1.0')
    .addTag('users') // Adicione tags conforme necessário
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8080);
}
bootstrap();
