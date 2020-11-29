class ProjectModuleDetailsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectModulesService) {
        super(projectModulesService);
        this.name = 'project-module-details';
        this.prependName = 'Module Details';
    }

    queryOptions() {
        return {
            module: this.router.params.moduleId,
        };
    }

    onProjectLoad() {
        this.module = this.project.module;

        this.moduleApi = this.module.api;

        if (this.moduleApi) {
            this.module.apiJson = JSON.parse(this.moduleApi);
        }
    }

    updateModuleApi() {
        this.service.updateModuleApi(this.module.id, this.moduleApi);

        this.isEditingApi = false;
    }

    validateApiJsonFormat(value) {
        this.apiFormatError = '';

        const error = msg => this.apiFormatError = msg;

        const parentIndex = (index, parent) => {
            return `${parent}_${+index + 1}`;
        };

        if (Is.empty(value)) {
            return error('This input is required');
        }

        if (!Is.json(value)) {
            return error('Invalid Json Format');
        }

        let jsonData = JSON.parse(value);

        if (!Is.array(jsonData)) {
            return error('API content must be in an array');
        }

        let requiredProperties = ['route', 'name', 'title', 'description'],
            requestMethods = ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS', 'PUT'],
            requiredDataProperties = ['name', 'type', 'description'];

        const validateItem = (item, index, parentItemIndex = null) => {
            let itemPosition = index + 1,
                parentItemPosition = '';

            if (!Is.null(parentItemIndex)) {
                parentItemPosition = ` parent item ${Number(parentItemIndex + 1)}`;
            }

            const msg = errorMessage => {
                return error(`${errorMessage} in item ${itemPosition}${parentItemPosition}.`);
            };

            const validateBodyItem = (bodyItem, index, bodyType, parentIndex) => {
                if (Is.string(bodyItem)) {
                    bodyItem = JSON.parse(bodyItem);
                }

                if (Is.array(bodyItem)) {
                    for (let i = 0; i < bodyItem.length; i++) {
                        validateBodyItem(bodyItem[i], i, bodyType, index);
                    }
                    return;
                }

                for (let key of ['name', 'type']) {
                    if (!bodyItem[key]) {
                        console.trace()
                        return msg(`${bodyType} Body #${parentIndex} Item #${index} ${key} attribute is required`);
                    }

                    if (!Is.string(bodyItem[key])) {
                        return msg(`${bodyType}  Body #${parentIndex} Item #${index} ${key} attribute must be a string`);
                    }
                }

                if (Is.array(bodyItem.value)) {
                    for (let i = 0; i < bodyItem.value.length; i++) {
                        if (!validateBodyItem(bodyItem.value[i], i + 1, bodyType, parentIndex + '_' + index));
                    }
                }

                return true;
            };

            for (let requiredProperty of requiredProperties) {
                if (!item[requiredProperty]) {
                    return msg(`${requiredProperty.ucfirst()} attribute is required`);
                } else if (!Is.string(item[requiredProperty])) {
                    return msg(`${requiredProperty.ucfirst()} accepts only string value`);
                }
            }

            if (!parentItemIndex && item.list) {
                if (!Is.array(item.list)) {
                    return msg(`Item list must be an array`);
                }

                for (let childItemIndex = 0; childItemIndex < item.list.length; childItemIndex++) {
                    if (validateItem(item.list[childItemIndex], childItemIndex, index) !== true) return;
                }
            } else {
                if (!item.method) {
                    return msg(`Method attribute is required`);
                } else if (!requestMethods.includes(item.method)) {
                    return msg(`Method attribute accepts only ${requestMethods.join('|')}`);
                }

                for (let dataType of ['query', 'body']) {
                    let data = item[dataType];
                    if (data) {
                        if (!Is.array(data)) {
                            return msg(`Method attribute must be an array`);
                        }

                        for (let paramIndex = 0; paramIndex < data.length; paramIndex++) {
                            let queryParam = data[paramIndex];

                            for (let property of requiredDataProperties) {
                                if (!queryParam[property]) {
                                    return msg(`${dataType.ucfirst()} #${paramIndex} ${property} is required`);
                                } if (!Is.string(queryParam[property])) {
                                    return msg(`${dataType.ucfirst()} #${paramIndex} ${property} must be string`);
                                }
                            }

                            if (queryParam.options && !Is.array(queryParam.options)) {
                                return msg(`${dataType.ucfirst()} #${paramIndex} options must be an array`);
                            }
                        }
                    }
                }

                if (!item.response) {
                    return msg(`Item Response Is Required`);
                }

                if (!Is.array(item.response)) {
                    return msg(`Item Response must be an array`);
                }

                for (let responseIndex = 0; responseIndex < item.response.length; responseIndex++) {
                    let responseData = item.response[responseIndex];

                    if (!responseData.code) {
                        return msg(`Response Code #${responseIndex} is required`);
                    }

                    if (!Is.int(responseData.code)) {
                        return msg(`Response Code #${responseIndex} must be integer`);
                    }

                    if (!responseData.body) {
                        return msg(`Response Body #${responseIndex} is required`);
                    }

                    if (!Is.array(responseData.body)) {
                        return msg(`Response Body #${responseIndex} must be an array`);
                    }

                    for (let responseBodyItemIndex = 0; responseBodyItemIndex < responseData.body.length; responseBodyItemIndex++) {
                        let bodyItem = responseData.body[responseBodyItemIndex];

                        if (validateBodyItem(bodyItem, responseBodyItemIndex + 1, 'response', responseIndex) !== true) return;
                    }
                }
            }

            return true;
        };

        for (let i = 0; i < jsonData.length; i++) {
            let item = jsonData[i];

            validateItem(item, i);
        }

        if (!this.apiFormatError) {
            this.module.apiJson = jsonData;
            this.cache.set('jsonData', value);
        }
    }
}
