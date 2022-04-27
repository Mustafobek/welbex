"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = require("path");
const hbs_1 = __importDefault(require("hbs"));
const sequelize_1 = __importDefault(require("./database/sequelize"));
const constant_1 = require("./constant");
const logger_1 = __importDefault(require("./utils/logger"));
const auth_1 = __importDefault(require("./router/auth"));
const post_1 = __importDefault(require("./router/post"));
const pages_1 = __importDefault(require("./router/pages"));
// application
const app = (0, express_1.default)();
// swagger documentation
const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: 'Welbex-task',
            version: '1.0.0',
            description: 'Welbex test app with express!'
        },
        servers: [{
                url: 'http://localhost:3000'
            }, {
                url: "https://blog-test-task-999.herokuapp.com"
            }],
    },
    apis: ["./src/documentation/*.ts"]
};
const spec = (0, swagger_jsdoc_1.default)(options);
// app middleware setups
app.use(express_1.default.json({ limit: '20mb' }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use(express_1.default.static((0, path_1.join)(__dirname, '../assets')));
app.set('views', (0, path_1.join)(__dirname, '../views'));
app.set('view engine', 'hbs');
hbs_1.default.registerPartials((0, path_1.join)(__dirname, '../views/partials'));
app.use('/api/v1/auth', auth_1.default);
app.use('/api/v1/post', post_1.default);
app.use('/api/documentation', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(spec));
app.use('/', pages_1.default);
function boot() {
    return __awaiter(this, void 0, void 0, function* () {
        yield sequelize_1.default.authenticate();
        yield sequelize_1.default.sync();
        app.listen(constant_1.SERVER_PORT, () => logger_1.default.info(`Server is on port: ${constant_1.SERVER_PORT}`));
    });
}
boot().then();
