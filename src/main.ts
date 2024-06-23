import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';

import { AllExceptionsFilter } from './api/exception.filter';
import { WhatsappConfigService } from './config.service';
import { AppModuleCore } from './core/app.module.core';
import { SwaggerConfiguratorCore } from './core/SwaggerConfiguratorCore';
import { getLogLevels } from './helpers';
import { WAHA_WEBHOOKS } from './structures/webhooks.dto';
import { getWAHAVersion, VERSION, WAHAVersion } from './version';

console.log('NODE - Catching unhandled exceptions enabled');
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // @ts-ignore
  console.error(reason.stack);
});

async function loadModules(): Promise<
  [typeof AppModuleCore, typeof SwaggerConfiguratorCore]
> {
  const version = getWAHAVersion();
  console.log(`WAHA (WhatsApp HTTP API) - Running ${version} version...`);

  if (version === WAHAVersion.CORE) {
    const { AppModuleCore } = await import('./core/app.module.core');
    const { SwaggerConfiguratorCore } = await import(
      './core/SwaggerConfiguratorCore'
    );
    return [AppModuleCore, SwaggerConfiguratorCore];
  }
  // Ignore if it's core version - there's no plus module
  // @ts-ignore
  const { AppModulePlus } = await import('./plus/app.module.plus');
  // @ts-ignore
  const { SwaggerConfiguratorPlus } = await import('./plus/SwaggerConfiguratorPlus'); // prettier-ignore
  // @ts-ignore
  return [AppModulePlus, SwaggerConfiguratorPlus];
}

async function bootstrap() {
  const [AppModule, SwaggerModule] = await loadModules();
  const httpsOptions = AppModule.getHttpsOptions();
  const app = await NestFactory.create(AppModule, {
    logger: getLogLevels(false),
    httpsOptions: httpsOptions,
  });

  app.enableShutdownHooks();
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors();
  // Ideally, we should apply it globally.
  // but for now we added it ValidationPipe on Controller or endpoint level
  // app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Allow to send big body - for images and attachments
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: false }));

  // Configure swagger
  const swaggerConfigurator = new SwaggerModule(app);
  swaggerConfigurator.configure(WAHA_WEBHOOKS);

  AppModule.appReady(app);
  const config = app.get(WhatsappConfigService);
  await app.listen(config.port);
  console.log(`WhatsApp HTTP API is running on: ${await app.getUrl()}`);
  console.log(`Environment:`, VERSION);
}

bootstrap();
