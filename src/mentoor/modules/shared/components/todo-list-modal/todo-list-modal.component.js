class TodoListModal {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, meService, todoListService, shoppingMallService) {
        this.user = user;
        this.meService = meService;
        this.todoListService = todoListService;
        this.shoppingMallService = shoppingMallService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.onClose = this.inputs.getEvent('close');

        if (!this.isUnlocked()) return;

        this.categoriesDropdown = null;

        this.isLoading = true;
        this.currentSelectedCategories = [];

        let { records } = await this.todoListService.list();
        this.todo = records;
        this.isLoading = false;

        this.currentStatus = TodoListModal.ALL;

        this.todoItems = this.todo.categories;

        if (this.totalPending() > 0) {
            this.filterBy(TodoListModal.PENDING);
        }

        this.allCategories = this.getCategories();
    }

    /**
     * Unlock the todo list
     */
    async unlock() {
        if (!this.user.isLoggedIn()) return alert('This feature is available for registered users only.');

        if (this.user.gold < FLAGS.shoppingMall.todo) return alert('Insufficient gold.');

        this.isLoading = true;

        try {
            playAudio(Sounds.PAY_COINS);
            let response = await this.shoppingMallService.purchase('todo');
            this.user.update(response.user);

            this.todo = response.item;

            this.allCategories = this.getCategories();

            this.categoriesDropdown.updateItems(this.allCategories);
        } catch (response) {
        } finally {
            this.isLoading = false;
        }
    }

    /**
     * Check if todo is unlocked to user
     * 
     * @returns boolean
     */
    isUnlocked() {
        return this.user.isLoggedIn() && this.user.shoppingMall.includes('todo');
    }

    /**
     * Get total pending todo items
     * 
     * @returns number
     */
    totalPending() {
        return this.getTotal('pending');
    }

    /**
     * Get total completed todo items
     * 
     * @returns number
     */
    totalCompleted() {
        return this.getTotal('done');
    }

    /**
     * Get total todo items of the given status
     * 
     * @param   boolean todoStatus 
     * @returns number
     */
    getTotal(todoStatus) {
        return this.todo.total.items[todoStatus];
    }

    /**
     * @see https://codepen.io/jkantner/pen/wEeWWG
     * @param HTMLElement input 
     */
    readyInput(input) {
        input.addEventListener("click", function () {
            this.classList.remove("pristine");
        });
    }

    /**
     * Change todo item status
     * 
     * @param   string category
     * @param   number itemId
     * @param   bool status
     */
    changeStatus(category, itemId, status) {
        // wait 500 ms until the pencil animation ends

        let data = {
            done: Number(status),
        };

        setTimeout(() => {
            this.todoListService.changeStatus(itemId, data).then(this.updateTodo.bind(this));
            for (let todoCategory of this.todo.categories) {
                if (todoCategory.id == category.id) {
                    for (let item of todoCategory.items) {
                        if (item.id == itemId) {
                            item.done = status;
                        }
                    }
                }
            }

            this.filterBy(this.currentStatus, this.currentSelectedCategories);
        }, 400);

    }

    /**
     * Filter by given todo items status
     * 
     * @param {boolean} status 
     */
    filterBy(status = this.currentStatus, categories = this.currentSelectedCategories) {
        this.currentStatus = status;
        this.currentSelectedCategories = categories;

        let orderedCategories = {
            fillable: [],
            empty: [],
        };

        let allCategories = [];

        for (let category of this.todo.categories) {
            if (!Is.empty(this.currentSelectedCategories) && !this.currentSelectedCategories.includes(category.name)) continue;

            let items = category.items.filter(item => status == TodoListModal.ALL || item.done == status);

            let filteredCategory = {
                id: category.id,
                name: category.name,
                items,
            };

            allCategories.push(filteredCategory);

            if (items.length > 0) {
                orderedCategories.fillable.push(filteredCategory);
            } else {
                orderedCategories.empty.push(filteredCategory);
            }
        }

        function dynamicSort(property, order = 'ASC') {
            return function (a, b) {
                let result = (Object.get(a, property) < Object.get(b, property)) ? -1 : (Object.get(a, property) > Object.get(b, property)) ? 1 : 0;

                return order.toUpperCase() === 'ASC' ? result : - result;
            }
        }

        // if the user is in the All section, then disable sorting
        this.todoItems = status == TodoListModal.ALL ?
            allCategories :
            orderedCategories.fillable.concat(orderedCategories.empty);
    }

    /**
     * Get total items
     * 
     * @returns number
     */
    totalItems() {
        return this.getTotal('all');
    }

    /**
     * Get all selected categories
     * 
     * @return array
     */
    getSelectedCategories() {
        return Is.empty(this.currentSelectedCategories) ? this.getCategories() : this.currentSelectedCategories;
    }

    updateTodo(response) {
        this.todo = response.records;
        
        this.todoItems = this.todo.categories;

        this.allCategories = this.getCategories();

        this.filterBy();
    }

    /**
     * Add new item
     * 
     * @param   string item
     */
    addItem(item) {
        let category = this.todoItems[this.currentCategoryIndex];

        let existingItem = Array.get(category.items, categoryItem => categoryItem.item == item.trim());

        if (existingItem) return alert(`This item already set in category items list.`);

        category.items.push({
            item,
            id: null,
            done: false,
        });

        this.todoItems[this.currentCategoryIndex] = category;

        this.detectChanges();

        this.todoListService.add({ item, categoryId: category.id }).then(this.updateTodo.bind(this));
    }

    /**
     * Add new category
     * 
     * @param   string category
     */
    addCategory(category) {
        for (let todoCategory of this.todo.categories) {
            if (todoCategory.name == category) return alert(`${category} category already exists.`);
        }

        this.todo.categories.push({
            name: category,
            items: [],
        });

        this.allCategories = this.getCategories();

        this.categoriesDropdown.updateItems(this.allCategories);

        // mark the given category as selected as well
        // this.categoriesDropdown.appendSelected(category);

        this.filterBy(this.currentStatus);

        this.todoListService.addCategory({ name: category }).then(this.updateTodo.bind(this));
    }

    /**
     * Get all categories
     */
    getCategories() {
        return this.todo.categories.filter(category => category.name != null).map(category => category.name);
    }
}

TodoListModal.ALL = null;
TodoListModal.PENDING = false;
TodoListModal.COMPLETED = true;
