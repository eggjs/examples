'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
require("source-map-support/register");
module.exports = (appInfo) => {
    const config = {};
    // should change to your own
    config.keys = appInfo.name + '123456';
    config.siteFile = {
        '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/public/favicon.png')),
    };
    config.news = {
        pageSize: 30,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBR2IseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3Qix1Q0FBcUM7QUFXckMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQXFCO0lBQ3JDLE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztJQUV2Qiw0QkFBNEI7SUFDNUIsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUV0QyxNQUFNLENBQUMsUUFBUSxHQUFHO1FBQ2hCLGNBQWMsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0tBQ3RGLENBQUM7SUFFRixNQUFNLENBQUMsSUFBSSxHQUFHO1FBQ1osUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsdUNBQXVDO0tBQ25ELENBQUM7SUFFRixNQUFNLENBQUMsSUFBSSxHQUFHO1FBQ1osaUJBQWlCLEVBQUUsVUFBVTtRQUM3QixPQUFPLEVBQUU7WUFDUCxNQUFNLEVBQUUsVUFBVTtTQUNuQjtLQUNGLENBQUM7SUFFRixNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyJ9