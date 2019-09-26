const { CodeGenerator, FileStructures, FilesManager } = require('pont-engine');
const data = require('./api-docs.json');
const { SwaggerV2Reader } = require('pont-engine/lib/scripts/swagger');

const reader = new SwaggerV2Reader({}, console.log);
reader.translateChinese(JSON.stringify(data)).then(swaggerStr => {
  const dataSource = reader.transform2Standard(JSON.parse(swaggerStr), false, 'api');

  const gen = new CodeGenerator();
  gen.setDataSource(dataSource);

  const fileStructure = new FileStructures([gen], true);
  const filesManager = new FilesManager(fileStructure, './service');

  filesManager.regenerate();
});
