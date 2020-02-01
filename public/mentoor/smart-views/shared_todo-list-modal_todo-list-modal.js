_Component({
                selector: 'todo-list-modal',
                c: 'TodoListModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','isUnlocked','confirm','isLoading','todo','filterBy','currentStatus','totalItems','totalPending','totalCompleted','getCategories','todoItems','readyInput','changeStatus','isAdding','currentCategoryIndex','isAddingCategory','addItem','addCategory','unlock'],
                children: {culO1fEVi:'gold-icon',cvNFNpsW_:'flk-spinner',c21kbhK7J:'flk-dropdown-list',cZfkWog8C:'flk-modal',cbsbhG_K4:'flk-alert',cBi8jJF6_:'flk-alert',cTklklHP5:'flk-alert'},
                render: function (component) {
                    let cmp0TG7 = this._lc('cZfkWog8C', {parent:component,events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let cnd3T1v = ! component.isUnlocked();
this.setState('stn3eOy', cnd3T1v);
let cndcpzh = component.isLoading;
this.setState('stU6ovo', cndcpzh);
let cndAg6A = !(cnd3T1v||cndcpzh);
this.setState('stUtjyJ', cndAg6A);
if (cnd3T1v) { 
let elPQfDI = eo('div','jQ0f');
let elMDhir = eo('div','sX1f');
let elScQMl = eo('p','Wc6f');
text(`Todo list will give you a quick list for accomplishment progress based on your todo list items
                completion.`);
ec('p');
let elHgnLB = eo('p','kL0f');
text(`You can easily check/uncheck your finished todo items with a single click.`);
ec('p');
ec('div');
let cndOY4k = ! Is.empty(FLAGS.shoppingMall);
this.setState('st6pYHq', cndOY4k);
if (cndOY4k) { 
let elLtSym = eo('div','oe3f',null,`class`,`m-t-4 text-center`);
let elf6lmf = eo('button','EIRf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-sm btn-success`);
let cmpbaIp = this._lc('culO1fEVi', {parent:component,parentTop:flkModal,props:{coins:FLAGS.shoppingMall.todo},state:'st6pYHq'});
let elw3IN4 = eo('div','nZrf',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}ec('div');
}else if (cndcpzh) { 
let cmpQQTf = this._lc('cvNFNpsW_', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stU6ovo'});
}else { 
let cndqi2u = ! Is.empty(component.todo.categories);
this.setState('stoead2', cndqi2u);
let cndxLFg = !(cndqi2u);
this.setState('stgshOK', cndxLFg);
if (cndqi2u) { 
let elirQfw = eo('span','k7bf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.ALL)}]},`class`,`badge badge-purple`);
elirQfw.cls = {active: TodoListModal.ALL == component.currentStatus};

            for (let className in elirQfw.cls) {
                elirQfw.classList.toggle(className, elirQfw.cls[className]);
            }  
            text(`All
                (${ component.totalItems() })`);
ec('span');
let elfbLdX = eo('span','X7_f',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.PENDING)}]},`class`,`badge badge-primary`);
elfbLdX.cls = {active: TodoListModal.PENDING == component.currentStatus};

            for (let className in elfbLdX.cls) {
                elfbLdX.classList.toggle(className, elfbLdX.cls[className]);
            }  
            text(`Pending
                (${ component.totalPending() })`);
ec('span');
let eltysft = eo('span','10Pf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.COMPLETED)}]},`class`,`badge badge-success`);
eltysft.cls = {active: TodoListModal.COMPLETED == component.currentStatus};

            for (let className in eltysft.cls) {
                eltysft.classList.toggle(className, eltysft.cls[className]);
            }  
            text(`Completed
                (${ component.totalCompleted() })`);
ec('span');
let elM7hZ2 = eo('div','aVzf',null,`class`,`categories-filter`);
component.categoriesDropdown = this._lc('c21kbhK7J', {parent:component,parentTop:flkModal,props:{items:component.getCategories(),multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy(component.currentStatus, e.map(cat => cat.text))}},boolAttrs:{multiple:true},attrs:{placeholder:`${trans(`Filter by category`)}`,heading:'Categories'},state:'stoead2'});
ec('div');
let ele4NLk = eo('div','jb7f',null,`class`,`items-list`);
for (let index in component.todoItems) {
let category = component.todoItems[index]; 
 let iih6i7 = category.id+ index;
let elfG2ET = eo('div','9gZSpZni3VZN' + index+iih6i7,null,`class`,`category-wrapper`);
let elunD69 = eo('h1','CPpff'+iih6i7,null,`class`,`category m-y-2`);
let elqEFjR = eo('span','ZSzff'+iih6i7);
text(category.name);
ec('span');
let cndJ1r9 = category.items.length > 0;
this.setState('stCcJA3', cndJ1r9);
if (cndJ1r9) { 
let el7X92Z = eo('span','gSHff'+iih6i7);
text('(' + category.items.length + ')');
ec('span');
}ec('h1');
let cndcjwi = ! Is.empty(category.items);
this.setState('stFLkEF', cndcjwi);
let cndsYfJ = !(cndcjwi);
this.setState('st2QXoe', cndsYfJ);
if (cndcjwi) { 
for (let i in category.items) {
let item = category.items[i]; 
 let iiyhMV = item.id + item.done + category.id+ i;
let elf4jnu = eo('div','VQ6qjaxLLfmd' + i+iih6i7+iiyhMV,null,`class`,`row item`);
let el8TlgQ = eo('div','JMrff'+iih6i7+iiyhMV,null,`class`,`col-9`);
text(item.item);
ec('div');
let elJ1b73 = eo('div','WBMff'+iih6i7+iiyhMV,null,`class`,`col check-item`);
let elBJmPv = eo('label','U1Iff'+iih6i7+iiyhMV);
let elhmvPv = ev('input','unAff'+iih6i7+iiyhMV,null, eventListeners, {onready:[function(e) {var $el = this;component.readyInput($el)}],onchange:[function(e) {var $el = this;component.changeStatus(category, item.id, $el.checked)}]}, boolAttrs, {checked:item.done},`class`,`cb pristine`,`type`,`checkbox`);
elhmvPv.cls = {checked: item.done};

            for (let className in elhmvPv.cls) {
                elhmvPv.classList.toggle(className, elhmvPv.cls[className]);
            }  
            
                    setTimeout(function () {
                        let $el = elhmvPv;
                        component.readyInput($el);
                    }, 20);                
                let elo4bvz = eo('span','RH8ff'+iih6i7+iiyhMV);
ec('span');
ec('label');
ec('div');
ec('div');
}
}else { 
let eltqHdi = eo('h1','tVYff'+iih6i7,null,`class`,`m-y-2 text-center`);
text(`No items here.`);
ec('h1');
}let elwIlXu = eo('button','i17ff'+iih6i7,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAdding = true; component.currentCategoryIndex = index;}]},`title`,``,`class`,`btn btn-circle btn-success m-y-2`);
let elTUs9s = eo('i','hMkff'+iih6i7,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elwIlXu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add todo item')}`});
        ;
                    }, 20);                
                ec('div');
}
ec('div');
}else { 
let elcKRwO = eo('h1',null,null,`class`,`text-center bold p-y-3`);
text(`No items yet.`);
ec('h1');
}let el84df3 = eo('div',null,null,`class`,`btns-list`);
let eljJwpT = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingCategory = true;}]},`title`,``,`class`,`btn btn-circle btn-pink float-right`);
let elYmFrh = eo('i',null,null,`class`,`${fas('folder-plus') + ' mr-1 icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eljJwpT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new category')}`});
        ;
                    }, 20);                
                ec('div');
}},attrs:{id:'todo-list-modal',header:'Todo list'}});
let cndQGfo = component.isAdding;
this.setState('stvb0HL', cndQGfo);
if (cndQGfo) { 
let cmpY7kL = this._lc('cbsbhG_K4', {parent:component,props:{withInput:true,headingTheme:'primary'},events:{onconfirm:function(e) {let $el = this; component.addItem(e)},onclose:function(e) {let $el = this; component.isAdding = false;}},attrs:{placeholder:`${trans(`Todo item.`)}`,heading:'Adding new Todo Item',message:'Add todo item.'},state:'stvb0HL'});
}let cndPhYl = component.isAddingCategory;
this.setState('stGVA5l', cndPhYl);
if (cndPhYl) { 
let cmpz4we = this._lc('cBi8jJF6_', {parent:component,props:{withInput:true},events:{onconfirm:function(e) {let $el = this; component.addCategory(e)},onclose:function(e) {let $el = this; component.isAddingCategory = false;}},attrs:{placeholder:`${trans(`Todo category.`)}`,heading:'Adding Todo category',message:'Add new todo category.'},state:'stGVA5l'});
}let cndcbUn = component.confirm;
this.setState('sttS2rf', cndcbUn);
if (cndcbUn) { 
let cmp62LH = this._lc('cTklklHP5', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'sttS2rf'});
}
                    this.isReadyToGo();
                }
        });