_Component({
                selector: 'todo-list-modal',
                c: 'TodoListModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','isUnlocked','confirm','isLoading','todo','filterBy','currentStatus','totalItems','totalPending','totalCompleted','getCategories','todoItems','readyInput','changeStatus','isAdding','currentCategoryIndex','isAddingCategory','addItem','addCategory','unlock'],
                children: {cUfgSF_QT:'gold-icon',cpEfCBsvy:'flk-spinner',chmDim3wq:'flk-dropdown-list',cO3RkaGF7:'flk-modal',ccDdiKyGb:'flk-alert',c4Su_Yuaz:'flk-alert',ceDI0bSTK:'flk-alert'},
                render: function (component) {
                    let cmpoTk8 = this._lc('cO3RkaGF7', {parent:component,events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let cndIFmj = ! component.isUnlocked();
this.setState('styvtzG', cndIFmj);
let cndj18R = component.isLoading;
this.setState('std2oVN', cndj18R);
let cndvS1r = !(cndIFmj||cndj18R);
this.setState('staDOWV', cndvS1r);
if (cndIFmj) { 
let elUxp4l = eo('div','lM9f');
let elwdWA9 = eo('div','OQvf');
let elADQsT = eo('p','h5Nf');
text(`Todo list will give you a quick list for accomplishment progress based on your todo list items
                completion.`);
ec('p');
let elP5yfo = eo('p','iGSf');
text(`You can easily check/uncheck your finished todo items with a single click.`);
ec('p');
ec('div');
let cndKBuW = ! Is.empty(FLAGS.shoppingMall);
this.setState('stLMfbp', cndKBuW);
if (cndKBuW) { 
let elmnuB7 = eo('div','ldKf',null,`class`,`m-t-4 text-center`);
let elavUqK = eo('button','5Axf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-sm btn-success`);
let cmptBgK = this._lc('cUfgSF_QT', {parent:component,parentTop:flkModal,props:{coins:FLAGS.shoppingMall.todo},state:'stLMfbp'});
let elCANFh = eo('div','Ox_f',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}ec('div');
}else if (cndj18R) { 
let cmpY32V = this._lc('cpEfCBsvy', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'std2oVN'});
}else { 
let cndv1_Z = ! Is.empty(component.todo.categories);
this.setState('stVqrEh', cndv1_Z);
let cndO4Wd = !(cndv1_Z);
this.setState('stIWx78', cndO4Wd);
if (cndv1_Z) { 
let el0JHAd = eo('span','Xtyf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.ALL)}]},`class`,`badge badge-purple`);
el0JHAd.cls = {active: TodoListModal.ALL == component.currentStatus};

            for (let className in el0JHAd.cls) {
                el0JHAd.classList.toggle(className, el0JHAd.cls[className]);
            }  
            text(`All
                (${ component.totalItems() })`);
ec('span');
let elK1Ais = eo('span','g3lf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.PENDING)}]},`class`,`badge badge-primary`);
elK1Ais.cls = {active: TodoListModal.PENDING == component.currentStatus};

            for (let className in elK1Ais.cls) {
                elK1Ais.classList.toggle(className, elK1Ais.cls[className]);
            }  
            text(`Pending
                (${ component.totalPending() })`);
ec('span');
let elP9Bqs = eo('span','JdFf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.COMPLETED)}]},`class`,`badge badge-success`);
elP9Bqs.cls = {active: TodoListModal.COMPLETED == component.currentStatus};

            for (let className in elP9Bqs.cls) {
                elP9Bqs.classList.toggle(className, elP9Bqs.cls[className]);
            }  
            text(`Completed
                (${ component.totalCompleted() })`);
ec('span');
let els4I9R = eo('div','_krf',null,`class`,`categories-filter`);
component.categoriesDropdown = this._lc('chmDim3wq', {parent:component,parentTop:flkModal,props:{items:component.getCategories(),multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy(component.currentStatus, e.map(cat => cat.text))}},boolAttrs:{multiple:true},attrs:{placeholder:`${trans(`Filter by category`)}`,heading:'Categories'},state:'stVqrEh'});
ec('div');
let ellaPoP = eo('div','a0Yf',null,`class`,`items-list`);
for (let index in component.todoItems) {
let category = component.todoItems[index]; 
 let ii7eHd = category.id+ index;
let elkb87C = eo('div','xE3wcbXTOH9U' + index+ii7eHd,null,`class`,`category-wrapper`);
let elFldQC = eo('h1','LQmff'+ii7eHd,null,`class`,`category m-y-2`);
let elT0X_1 = eo('span','SDtff'+ii7eHd);
text(category.name);
ec('span');
let cndmYVC = category.items.length > 0;
this.setState('stfjLpj', cndmYVC);
if (cndmYVC) { 
let elba7xm = eo('span','udbff'+ii7eHd);
text('(' + category.items.length + ')');
ec('span');
}ec('h1');
let cndEwL2 = ! Is.empty(category.items);
this.setState('stR2UTd', cndEwL2);
let cnd3Uqq = !(cndEwL2);
this.setState('stHBour', cnd3Uqq);
if (cndEwL2) { 
for (let i in category.items) {
let item = category.items[i]; 
 let iijqyF = item.id + item.done + category.id+ i;
let elmAZtc = eo('div','NiHu1QTn35Ow' + i+ii7eHd+iijqyF,null,`class`,`row item`);
let elQNBbI = eo('div','osMff'+ii7eHd+iijqyF,null,`class`,`col-9`);
text(item.item);
ec('div');
let elZffVz = eo('div','y4off'+ii7eHd+iijqyF,null,`class`,`col check-item`);
let elxHvjl = eo('label','8mjff'+ii7eHd+iijqyF);
let elTdVGP = ev('input','5atff'+ii7eHd+iijqyF,null, eventListeners, {onready:[function(e) {var $el = this;component.readyInput($el)}],onchange:[function(e) {var $el = this;component.changeStatus(category, item.id, $el.checked)}]}, boolAttrs, {checked:item.done},`class`,`cb pristine`,`type`,`checkbox`);
elTdVGP.cls = {checked: item.done};

            for (let className in elTdVGP.cls) {
                elTdVGP.classList.toggle(className, elTdVGP.cls[className]);
            }  
            
                    setTimeout(function () {
                        let $el = elTdVGP;
                        component.readyInput($el);
                    }, 20);                
                let elzpXn7 = eo('span','1Xtff'+ii7eHd+iijqyF);
ec('span');
ec('label');
ec('div');
ec('div');
}
}else { 
let elC_g1r = eo('h1','bphff'+ii7eHd,null,`class`,`m-y-2 text-center`);
text(`No items here.`);
ec('h1');
}let elfH_AU = eo('button','yjjff'+ii7eHd,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAdding = true; component.currentCategoryIndex = index;}]},`title`,``,`class`,`btn btn-circle btn-success m-y-2`);
let elI5CgN = eo('i','gDmff'+ii7eHd,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elfH_AU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add todo item')}`});
        ;
                    }, 20);                
                ec('div');
}
ec('div');
}else { 
let elSwVVc = eo('h1',null,null,`class`,`text-center bold p-y-3`);
text(`No items yet.`);
ec('h1');
}let elWAseu = eo('div',null,null,`class`,`btns-list`);
let el_flfz = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingCategory = true;}]},`title`,``,`class`,`btn btn-circle btn-pink float-right`);
let elNNpw9 = eo('i',null,null,`class`,`${fas('folder-plus') + ' mr-1 icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el_flfz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new category')}`});
        ;
                    }, 20);                
                ec('div');
}},attrs:{id:'todo-list-modal',header:'Todo list'}});
let cndGI7I = component.isAdding;
this.setState('sta7v6J', cndGI7I);
if (cndGI7I) { 
let cmp8d7x = this._lc('ccDdiKyGb', {parent:component,props:{withInput:true,headingTheme:'primary'},events:{onconfirm:function(e) {let $el = this; component.addItem(e)},onclose:function(e) {let $el = this; component.isAdding = false;}},attrs:{placeholder:`${trans(`Todo item.`)}`,heading:'Adding new Todo Item',message:'Add todo item.'},state:'sta7v6J'});
}let cnduVgg = component.isAddingCategory;
this.setState('st94EYj', cnduVgg);
if (cnduVgg) { 
let cmpyupa = this._lc('c4Su_Yuaz', {parent:component,props:{withInput:true},events:{onconfirm:function(e) {let $el = this; component.addCategory(e)},onclose:function(e) {let $el = this; component.isAddingCategory = false;}},attrs:{placeholder:`${trans(`Todo category.`)}`,heading:'Adding Todo category',message:'Add new todo category.'},state:'st94EYj'});
}let cndovOj = component.confirm;
this.setState('stO7N9n', cndovOj);
if (cndovOj) { 
let cmpapm6 = this._lc('ceDI0bSTK', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stO7N9n'});
}
                    this.isReadyToGo();
                }
        });