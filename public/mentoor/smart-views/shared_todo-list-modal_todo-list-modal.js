_Component({
                selector: 'todo-list-modal',
                c: 'TodoListModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','isUnlocked','confirm','isLoading','todo','filterBy','currentStatus','totalItems','totalPending','totalCompleted','getCategories','todoItems','readyInput','changeStatus','isAdding','currentCategoryIndex','isAddingCategory','addItem','addCategory','unlock'],
                children: {cOX14xS9I:'gold-icon',cz1fe7sRM:'flk-spinner',ctSNCCo_D:'flk-dropdown-list',cSwrvBUck:'flk-modal',c4c8KMGn6:'flk-alert',cmpTQNK2T:'flk-alert',c1kz477CL:'flk-alert'},
                render: function (component) {
                    let cmpox_U = this._lc('cSwrvBUck', {parent:component,events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let cndJKqc = ! component.isUnlocked();
this.setState('stKGmkx', cndJKqc);
let cndUtRa = component.isLoading;
this.setState('stRvlzq', cndUtRa);
let cnd0WlV = !(cndJKqc||cndUtRa);
this.setState('st12qEW', cnd0WlV);
if (cndJKqc) { 
let elscD3Y = eo('div','7hKf');
let elGhzSi = eo('div','t4kf');
let elBcd3Y = eo('p','O7Cf');
text(`Todo list will give you a quick list for accomplishment progress based on your todo list items
                completion.`);
ec('p');
let elLjiee = eo('p','fhPf');
text(`You can easily check/uncheck your finished todo items with a single click.`);
ec('p');
ec('div');
let cnd42WU = ! Is.empty(FLAGS.shoppingMall);
this.setState('stLAZdl', cnd42WU);
if (cnd42WU) { 
let eltGaBz = eo('div','m8Bf',null,`class`,`m-t-4 text-center`);
let el4QANZ = eo('button','SRnf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-sm btn-success`);
let cmpMT5k = this._lc('cOX14xS9I', {parent:component,parentTop:flkModal,props:{coins:FLAGS.shoppingMall.todo},state:'stLAZdl'});
let elixVMh = eo('div','BaTf',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}ec('div');
}else if (cndUtRa) { 
let cmpuidA = this._lc('cz1fe7sRM', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stRvlzq'});
}else { 
let cndOMkA = ! Is.empty(component.todo.categories);
this.setState('stUgRZF', cndOMkA);
let cndp82p = !(cndOMkA);
this.setState('stkei6s', cndp82p);
if (cndOMkA) { 
let elMiQIx = eo('span','X6of',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.ALL)}]},`class`,`badge badge-purple`);
elMiQIx.cls = {active: TodoListModal.ALL == component.currentStatus};

            for (let className in elMiQIx.cls) {
                elMiQIx.classList.toggle(className, elMiQIx.cls[className]);
            }  
            text(`All
                (${ component.totalItems() })`);
ec('span');
let elZ6T_0 = eo('span','FM5f',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.PENDING)}]},`class`,`badge badge-primary`);
elZ6T_0.cls = {active: TodoListModal.PENDING == component.currentStatus};

            for (let className in elZ6T_0.cls) {
                elZ6T_0.classList.toggle(className, elZ6T_0.cls[className]);
            }  
            text(`Pending
                (${ component.totalPending() })`);
ec('span');
let elH8cGP = eo('span','ZjFf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.COMPLETED)}]},`class`,`badge badge-success`);
elH8cGP.cls = {active: TodoListModal.COMPLETED == component.currentStatus};

            for (let className in elH8cGP.cls) {
                elH8cGP.classList.toggle(className, elH8cGP.cls[className]);
            }  
            text(`Completed
                (${ component.totalCompleted() })`);
ec('span');
let elzg7Wy = eo('div','IDTf',null,`class`,`categories-filter`);
component.categoriesDropdown = this._lc('ctSNCCo_D', {parent:component,parentTop:flkModal,props:{items:component.getCategories(),multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy(component.currentStatus, e.map(cat => cat.text))}},boolAttrs:{multiple:true},attrs:{placeholder:`${trans(`Filter by category`)}`,heading:'Categories'},state:'stUgRZF'});
ec('div');
let elaF9qj = eo('div','6xLf',null,`class`,`items-list`);
for (let index in component.todoItems) {
let category = component.todoItems[index]; 
 let iitJyj = category.id+ index;
let elXiMMl = eo('div','O35AW4Y3dY2j' + index+iitJyj,null,`class`,`category-wrapper`);
let elyKtfa = eo('h1','3veff'+iitJyj,null,`class`,`category m-y-2`);
let elFv3JX = eo('span','80eff'+iitJyj);
text(category.name);
ec('span');
let cndyVbu = category.items.length > 0;
this.setState('stApV0D', cndyVbu);
if (cndyVbu) { 
let ellAH9O = eo('span','iDqff'+iitJyj);
text('(' + category.items.length + ')');
ec('span');
}ec('h1');
let cndOWGE = ! Is.empty(category.items);
this.setState('stoIi8e', cndOWGE);
let cnd8_fU = !(cndOWGE);
this.setState('std3V2h', cnd8_fU);
if (cndOWGE) { 
for (let i in category.items) {
let item = category.items[i]; 
 let ii02xk = item.id + item.done + category.id+ i;
let elXbtoI = eo('div','zcDQ64jn8SOA' + i+iitJyj+ii02xk,null,`class`,`row item`);
let elSt1Vd = eo('div','aw2ff'+iitJyj+ii02xk,null,`class`,`col-9`);
text(item.item);
ec('div');
let eldShHY = eo('div','CiAff'+iitJyj+ii02xk,null,`class`,`col check-item`);
let elMsh0b = eo('label','AYIff'+iitJyj+ii02xk);
let el_ONmO = ev('input','3GLff'+iitJyj+ii02xk,null, eventListeners, {onready:[function(e) {var $el = this;component.readyInput($el)}],onchange:[function(e) {var $el = this;component.changeStatus(category, item.id, $el.checked)}]}, boolAttrs, {checked:item.done},`class`,`cb pristine`,`type`,`checkbox`);
el_ONmO.cls = {checked: item.done};

            for (let className in el_ONmO.cls) {
                el_ONmO.classList.toggle(className, el_ONmO.cls[className]);
            }  
            
                    setTimeout(function () {
                        let $el = el_ONmO;
                        component.readyInput($el);
                    }, 20);                
                let elFhk9b = eo('span','Po8ff'+iitJyj+ii02xk);
ec('span');
ec('label');
ec('div');
ec('div');
}
}else { 
let el5_wJf = eo('h1','Msbff'+iitJyj,null,`class`,`m-y-2 text-center`);
text(`No items here.`);
ec('h1');
}let elHXVUj = eo('button','dJnff'+iitJyj,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAdding = true; component.currentCategoryIndex = index;}]},`title`,``,`class`,`btn btn-circle btn-success m-y-2`);
let elkB0Jh = eo('i','gJ3ff'+iitJyj,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elHXVUj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add todo item')}`});
        ;
                    }, 20);                
                ec('div');
}
ec('div');
}else { 
let elQJ6mB = eo('h1',null,null,`class`,`text-center bold p-y-3`);
text(`No items yet.`);
ec('h1');
}let elRU_iT = eo('div',null,null,`class`,`btns-list`);
let elxuVJv = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingCategory = true;}]},`title`,``,`class`,`btn btn-circle btn-pink float-right`);
let el_jUMX = eo('i',null,null,`class`,`${fas('folder-plus') + ' mr-1 icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elxuVJv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new category')}`});
        ;
                    }, 20);                
                ec('div');
}},attrs:{id:'todo-list-modal',header:'Todo list'}});
let cndH1ik = component.isAdding;
this.setState('stAIvfC', cndH1ik);
if (cndH1ik) { 
let cmpOA9Q = this._lc('c4c8KMGn6', {parent:component,props:{withInput:true,headingTheme:'primary'},events:{onconfirm:function(e) {let $el = this; component.addItem(e)},onclose:function(e) {let $el = this; component.isAdding = false;}},attrs:{placeholder:`${trans(`Todo item.`)}`,heading:'Adding new Todo Item',message:'Add todo item.'},state:'stAIvfC'});
}let cndNt1W = component.isAddingCategory;
this.setState('stvkEtu', cndNt1W);
if (cndNt1W) { 
let cmphUFT = this._lc('cmpTQNK2T', {parent:component,props:{withInput:true},events:{onconfirm:function(e) {let $el = this; component.addCategory(e)},onclose:function(e) {let $el = this; component.isAddingCategory = false;}},attrs:{placeholder:`${trans(`Todo category.`)}`,heading:'Adding Todo category',message:'Add new todo category.'},state:'stvkEtu'});
}let cndvKVR = component.confirm;
this.setState('stLtScx', cndvKVR);
if (cndvKVR) { 
let cmpDMnu = this._lc('c1kz477CL', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stLtScx'});
}
                    this.isReadyToGo();
                }
        });