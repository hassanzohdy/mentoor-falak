const pluralize = require('pluralize');
const { fs } = require('@flk/fs');

commander
    .command('np, new:project-module <component>', 'Create new Project module.')
    .option('--app', 'Define the application name that will contain the installed module, default to baseApp value in config.json settings.')
    .option('--service', 'Define module service.')
    .option('-k, --item-key', 'Project module key in the project record.')
    .option('-r, --route', 'Create route for component and service.')
    .then(createAdminModule);

function createAdminModule(command) {
    let createComponent = require(FRAMEWORK_COMMANDS_DIRECTORY + '/new-component');
    let createService = require(FRAMEWORK_COMMANDS_DIRECTORY + '/new-service');

    let componentName = command.component;

    if (!command.options.route) {
        command.options.route = '/' + componentName;
    }

    command.options.module = 'projects';

    // component command
    let componentCommand = Object.clone(command);

    componentCommand.options.route = componentCommand.options.route;

    componentCommand.component = 'project-details-page/project-' + command.component;

    let componentOptions = createComponent(componentCommand);
    // end of component command

    // service command
    let serviceCommand = Object.clone(command);

    serviceCommand.options.route = '/projects' + serviceCommand.options.route;

    serviceCommand.service = 'project-' + (command.options.service || componentName);

    let serviceOptions = createService(serviceCommand);

    // end of service command

    let resourcePath = __dirname + '/resources';
    let singleName = pluralize(componentName, 1).capitalize();
    let itemKey = (command.options.itemKey || componentName).toCamelCase();

    let tableJsContent = fs.get(resourcePath + '/component.js');

    let componentContent = tableJsContent.replace('CLASS_NAME', componentOptions.component)
        .replaceAll('SERVICE_NAME', serviceOptions.alias)
        .replaceAll('ITEM_KEY_CAPITALIZED', itemKey.capitalize())
        .replaceAll('ITEM_KEY', itemKey);


    let tableHtmlContent = fs.get(resourcePath + '/component.html');

    let componentHtmlContent = tableHtmlContent.replaceAll('SINGLE_NAME', singleName)
                                                .replaceAll('PLURAL_NAME', pluralize(singleName))
                                                .replaceAll('ITEM_KEY', itemKey);

    fs.put(componentOptions.componentJsFilePath, componentContent);
    fs.put(componentOptions.componentHtmlFilePath, componentHtmlContent);
}