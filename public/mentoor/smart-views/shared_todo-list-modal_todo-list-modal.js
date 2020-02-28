_Component({
                selector: 'todo-list-modal',
                c: 'TodoListModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','isUnlocked','confirm','isLoading','todo','filterBy','currentStatus','totalItems','totalPending','totalCompleted','getCategories','todoItems','readyInput','changeStatus','isAdding','currentCategoryIndex','isAddingCategory','addItem','addCategory','unlock'],
                children: {cMC5UKI0P:'gold-icon',cmnFMIiV7:'flk-spinner',cF7IsjzgH:'flk-dropdown-list',ci5vHlX7O:'flk-modal',cAqa5u3z4:'flk-alert',cbC4w8anS:'flk-alert',ckrjAhT6t:'flk-alert'},
                render: function (component) {
                    let cmpy_hI = this._lc('ci5vHlX7O', {parent:component,events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let cndS6eb = ! component.isUnlocked();
this.setState('st5OhNz', cndS6eb);
let cndWmkR = component.isLoading;
this.setState('staC0wR', cndWmkR);
let cndz35J = !(cndS6eb||cndWmkR);
this.setState('stORGaT', cndz35J);
if (cndS6eb) { 
let elkGjDM = eo('div','Qcdf');
let elAjs_d = eo('div','uwlf');
let elN9XaG = eo('p','PhIf');
text(`Todo list will give you a quick list for accomplishment progress based on your todo list items
                completion.`);
ec('p');
let ely46e6 = eo('p','u98f');
text(`You can easily check/uncheck your finished todo items with a single click.`);
ec('p');
ec('div');
let cndlYjM = ! Is.empty(FLAGS.shoppingMall);
this.setState('st8NA2e', cndlYjM);
if (cndlYjM) { 
let elirqsK = eo('div','u22f',null,`class`,`m-t-4 text-center`);
let elkZHrC = eo('button','jZ0f',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-sm btn-success`);
let cmpcfqA = this._lc('cMC5UKI0P', {parent:component,parentTop:flkModal,props:{coins:FLAGS.shoppingMall.todo},state:'st8NA2e'});
let elD05k4 = eo('div','8_4f',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}ec('div');
}else if (cndWmkR) { 
let cmpPpSX = this._lc('cmnFMIiV7', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'staC0wR'});
}else { 
let cnd4Oh_ = ! Is.empty(component.todo.categories);
this.setState('stBYcne', cnd4Oh_);
let cndHIUy = !(cnd4Oh_);
this.setState('stivnC0', cndHIUy);
if (cnd4Oh_) { 
let el8yIOw = eo('span','SSBf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.ALL)}]},`class`,`badge badge-purple ${cls({active: TodoListModal.ALL == component.currentStatus})}`);
text(`All
                (${ component.totalItems() })`);
ec('span');
let elxMp8K = eo('span','xJbf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.PENDING)}]},`class`,`badge badge-primary ${cls({active: TodoListModal.PENDING == component.currentStatus})}`);
text(`Pending
                (${ component.totalPending() })`);
ec('span');
let elB26jK = eo('span','ZmOf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.COMPLETED)}]},`class`,`badge badge-success ${cls({active: TodoListModal.COMPLETED == component.currentStatus})}`);
text(`Completed
                (${ component.totalCompleted() })`);
ec('span');
let elASjj2 = eo('div','yzBf',null,`class`,`categories-filter`);
component.categoriesDropdown = this._lc('cF7IsjzgH', {parent:component,parentTop:flkModal,props:{items:component.getCategories(),multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy(component.currentStatus, e.map(cat => cat.text))}},boolAttrs:{multiple:true},attrs:{placeholder:`${trans(`Filter by category`)}`,heading:'Categories'},state:'stBYcne'});
ec('div');
let elKrf2b = eo('div','RPDf',null,`class`,`items-list`);
for (let index in component.todoItems) {
let category = component.todoItems[index]; 
 let iihnXB = category.id+ index;
let el8T_9r = eo('div','BAGUZ6smtYFE' + index+iihnXB,null,`class`,`category-wrapper`);
let els5um2 = eo('h1','Fbgff'+iihnXB,null,`class`,`category m-y-2`);
let ely6faZ = eo('span','Qlgff'+iihnXB);
text(category.name);
ec('span');
let cndCCIS = category.items.length > 0;
this.setState('stPe3AL', cndCCIS);
if (cndCCIS) { 
let elrPMM_ = eo('span','whtff'+iihnXB);
text('(' + category.items.length + ')');
ec('span');
}ec('h1');
let cndgPOy = ! Is.empty(category.items);
this.setState('st9WVsS', cndgPOy);
let cndywFH = !(cndgPOy);
this.setState('sttQFug', cndywFH);
if (cndgPOy) { 
for (let i in category.items) {
let item = category.items[i]; 
 let iibkZY = item.id + item.done + category.id+ i;
let elKY2Sm = eo('div','btB1gixvOxIW' + i+iihnXB+iibkZY,null,`class`,`row item`);
let ellhmZh = eo('div','aSDff'+iihnXB+iibkZY,null,`class`,`col-9`);
text(item.item);
ec('div');
let elWly06 = eo('div','Xixff'+iihnXB+iibkZY,null,`class`,`col check-item`);
let elY6JTY = eo('label','VZSff'+iihnXB+iibkZY);
let elgGfKK = ev('input','dwsff'+iihnXB+iibkZY,null, eventListeners, {onready:[function(e) {var $el = this;component.readyInput($el)}],onchange:[function(e) {var $el = this;component.changeStatus(category, item.id, $el.checked)}]}, boolAttrs, {checked:item.done},`class`,`cb pristine ${cls({checked: item.done})}`,`type`,`checkbox`);

                    setTimeout(function () {
                        let $el = elgGfKK;
                        component.readyInput($el);
                    }, 20);                
                let elLhsd1 = eo('span','_Nkff'+iihnXB+iibkZY);
ec('span');
ec('label');
ec('div');
ec('div');
}
}else { 
let el6mI3L = eo('h1','zP1ff'+iihnXB,null,`class`,`m-y-2 text-center`);
text(`No items here.`);
ec('h1');
}let el0Cqty = eo('button','plOff'+iihnXB,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAdding = true; component.currentCategoryIndex = index;}]},`title`,``,`class`,`btn btn-circle btn-success m-y-2`);
let elTd0fW = eo('i','mZSff'+iihnXB,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el0Cqty;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add todo item')}`});
        ;
                    }, 20);                
                ec('div');
}
ec('div');
}else { 
let elvserq = eo('h1',null,null,`class`,`text-center bold p-y-3`);
text(`No items yet.`);
ec('h1');
}let elHliyI = eo('div',null,null,`class`,`btns-list`);
let elfP4wn = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingCategory = true;}]},`title`,``,`class`,`btn btn-circle btn-pink float-right`);
let el8Dc_Z = eo('i',null,null,`class`,`${fas('folder-plus')} mr-1 icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elfP4wn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new category')}`});
        ;
                    }, 20);                
                ec('div');
}},attrs:{id:'todo-list-modal',header:'Todo list'}});
let cndm6v_ = component.isAdding;
this.setState('stEQ13J', cndm6v_);
if (cndm6v_) { 
let cmpBAlF = this._lc('cAqa5u3z4', {parent:component,props:{withInput:true,headingTheme:'primary'},events:{onconfirm:function(e) {let $el = this; component.addItem(e)},onclose:function(e) {let $el = this; component.isAdding = false;}},attrs:{placeholder:`${trans(`Todo item.`)}`,heading:'Adding new Todo Item',message:'Add todo item.'},state:'stEQ13J'});
}let cndyET5 = component.isAddingCategory;
this.setState('stL5zl9', cndyET5);
if (cndyET5) { 
let cmpLMIR = this._lc('cbC4w8anS', {parent:component,props:{withInput:true},events:{onconfirm:function(e) {let $el = this; component.addCategory(e)},onclose:function(e) {let $el = this; component.isAddingCategory = false;}},attrs:{placeholder:`${trans(`Todo category.`)}`,heading:'Adding Todo category',message:'Add new todo category.'},state:'stL5zl9'});
}let cndO2GY = component.confirm;
this.setState('stnz4WY', cndO2GY);
if (cndO2GY) { 
let cmpM7BQ = this._lc('ckrjAhT6t', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stnz4WY'});
}
                    this.isReadyToGo();
                }
        });