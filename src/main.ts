import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const config=new DocumentBuilder().
  // setTitle('Finance App API')
  // .setDescription('Finnace APP API')
  // .setVersion('1.0')
  // .addTag('Build').build();
  // const document = SwaggerModule.createDocument(app, config);
  // const outputPath = path.resolve(process.cwd(), 'swagger.json');
  // writeFileSync(outputPath, JSON.stringify(document), { encoding: 'utf8'});
  const options = new DocumentBuilder()
  .setTitle('Finance API')
  .setDescription('API description')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
