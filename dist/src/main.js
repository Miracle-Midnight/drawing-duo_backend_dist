"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path = require("path");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./common/exceptions/http-exception.filter");
const success_interceptor_1 = require("./common/interceptors/success.interceptor");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const expressBasicAuth = require("express-basic-auth");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new success_interceptor_1.SuccessInterceptor());
    app.setGlobalPrefix('api');
    app.use(['/docs', '/docs-json'], expressBasicAuth({
        challenge: true,
        users: { [process.env.SWAGGER_USERNAME]: process.env.SWAGGER_PASSWORD },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Drawing Duo API')
        .setDescription('REST API for Drawing Duo')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.enableCors({ origin: '*' });
    app.useStaticAssets(path.join(__dirname, './common', 'uploads'), {
        prefix: '/media',
    });
    const PORT = process.env.PORT;
    await app.listen(PORT);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map