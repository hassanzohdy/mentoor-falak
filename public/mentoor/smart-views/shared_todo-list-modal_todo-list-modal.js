_Component({
                selector: 'todo-list-modal',
                c: 'TodoListModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','isUnlocked','confirm','isLoading','todo','filterBy','currentStatus','totalItems','totalPending','totalCompleted','getCategories','todoItems','readyInput','changeStatus','isAdding','currentCategoryIndex','isAddingCategory','addItem','addCategory','unlock'],
                children: {cTZCTEfWY:'gold-icon',cNPaAHp1U:'flk-spinner',c8EwHkUgH:'flk-dropdown-list',ckIyJmjtK:'flk-modal',cnetImmDt:'flk-alert',ckyWrs2WP:'flk-alert',cI20FHhRK:'flk-alert'},
                render: function (component) {
                    let cmp5rRS = this._lc('ckIyJmjtK', {parent:component,events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let cndQQ40 = ! component.isUnlocked();
this.setState('stOgGcK', cndQQ40);
let cndUbLH = component.isLoading;
this.setState('st8GbRa', cndUbLH);
let cnd3E5B = !(cndQQ40||cndUbLH);
this.setState('stP7wA7', cnd3E5B);
if (cndQQ40) { 
let eliDqIv = eo('div','wTOf');
let elk8Hsl = eo('div','yI7f');
let elvILD8 = eo('p','cLwf');
text(`Todo list will give you a quick list for accomplishment progress based on your todo list items
                completion.`);
ec('p');
let elvMyZr = eo('p','6Zrf');
text(`You can easily check/uncheck your finished todo items with a single click.`);
ec('p');
ec('div');
let cndJPeg = ! Is.empty(FLAGS.shoppingMall);
this.setState('stuztDU', cndJPeg);
if (cndJPeg) { 
let elcg5QY = eo('div','At4f',null,`class`,`m-t-4 text-center`);
let el2MfVw = eo('button','2AEf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-sm btn-success`);
let cmpe2Gi = this._lc('cTZCTEfWY', {parent:component,parentTop:flkModal,props:{coins:FLAGS.shoppingMall.todo},state:'stuztDU'});
let elf89ly = eo('div','M9pf',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}ec('div');
}else if (cndUbLH) { 
let cmpcB5j = this._lc('cNPaAHp1U', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'st8GbRa'});
}else { 
let cnd5J7z = ! Is.empty(component.todo.categories);
this.setState('stYCC96', cnd5J7z);
let cndTL6Z = !(cnd5J7z);
this.setState('stxPQw8', cndTL6Z);
if (cnd5J7z) { 
let elNQLIp = eo('span','ZhKf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.ALL)}]},`class`,`badge badge-purple`);
elNQLIp.cls = {active: TodoListModal.ALL == component.currentStatus};

            for (let className in elNQLIp.cls) {
                elNQLIp.classList.toggle(className, elNQLIp.cls[className]);
            }  
            text(`All
                (${ component.totalItems() })`);
ec('span');
let elFqm4V = eo('span','tMcf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.PENDING)}]},`class`,`badge badge-primary`);
elFqm4V.cls = {active: TodoListModal.PENDING == component.currentStatus};

            for (let className in elFqm4V.cls) {
                elFqm4V.classList.toggle(className, elFqm4V.cls[className]);
            }  
            text(`Pending
                (${ component.totalPending() })`);
ec('span');
let elAsyHS = eo('span','UBPf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.COMPLETED)}]},`class`,`badge badge-success`);
elAsyHS.cls = {active: TodoListModal.COMPLETED == component.currentStatus};

            for (let className in elAsyHS.cls) {
                elAsyHS.classList.toggle(className, elAsyHS.cls[className]);
            }  
            text(`Completed
                (${ component.totalCompleted() })`);
ec('span');
let elO5ezh = eo('div','_EVf',null,`class`,`categories-filter`);
component.categoriesDropdown = this._lc('c8EwHkUgH', {parent:component,parentTop:flkModal,props:{items:component.getCategories(),multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy(component.currentStatus, e.map(cat => cat.text))}},boolAttrs:{multiple:true},attrs:{placeholder:`${trans(`Filter by category`)}`,heading:'Categories'},state:'stYCC96'});
ec('div');
let elBqDzN = eo('div','2INf',null,`class`,`items-list`);
for (let index in component.todoItems) {
let category = component.todoItems[index]; 
 let ii15Ia = category.id+ index;
let eltOo1b = eo('div','wUulBrnRUzVa' + index+ii15Ia,null,`class`,`category-wrapper`);
let eltnxFw = eo('h1','ibQff'+ii15Ia,null,`class`,`category m-y-2`);
let el_F6xG = eo('span','12Nff'+ii15Ia);
text(category.name);
ec('span');
let cndAq1W = category.items.length > 0;
this.setState('st5fs0x', cndAq1W);
if (cndAq1W) { 
let elGTcYe = eo('span','Dnjff'+ii15Ia);
text('(' + category.items.length + ')');
ec('span');
}ec('h1');
let cndF_dd = ! Is.empty(category.items);
this.setState('stgyXDJ', cndF_dd);
let cndVWK_ = !(cndF_dd);
this.setState('st79H3R', cndVWK_);
if (cndF_dd) { 
for (let i in category.items) {
let item = category.items[i]; 
 let ii6AmX = item.id + item.done + category.id+ i;
let el7HFpI = eo('div','ZSJeE6X6JpVk' + i+ii15Ia+ii6AmX,null,`class`,`row item`);
let elgjlvR = eo('div','blbff'+ii15Ia+ii6AmX,null,`class`,`col-9`);
text(item.item);
ec('div');
let elq1zgc = eo('div','Xjwff'+ii15Ia+ii6AmX,null,`class`,`col check-item`);
let elVndK4 = eo('label','qLJff'+ii15Ia+ii6AmX);
let elCroLc = ev('input','dbmff'+ii15Ia+ii6AmX,null, eventListeners, {onready:[function(e) {var $el = this;component.readyInput($el)}],onchange:[function(e) {var $el = this;component.changeStatus(category, item.id, $el.checked)}]}, boolAttrs, {checked:item.done},`class`,`cb pristine`,`type`,`checkbox`);
elCroLc.cls = {checked: item.done};

            for (let className in elCroLc.cls) {
                elCroLc.classList.toggle(className, elCroLc.cls[className]);
            }  
            
                    setTimeout(function () {
                        let $el = elCroLc;
                        component.readyInput($el);
                    }, 20);                
                let el6T2bJ = eo('span','U1pff'+ii15Ia+ii6AmX);
ec('span');
ec('label');
ec('div');
ec('div');
}
}else { 
let elxr56z = eo('h1','of9ff'+ii15Ia,null,`class`,`m-y-2 text-center`);
text(`No items here.`);
ec('h1');
}let ela3sqW = eo('button','Hh4ff'+ii15Ia,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAdding = true; component.currentCategoryIndex = index;}]},`title`,``,`class`,`btn btn-circle btn-success m-y-2`);
let el5puUf = eo('i','rKuff'+ii15Ia,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ela3sqW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add todo item')}`});
        ;
                    }, 20);                
                ec('div');
}
ec('div');
}else { 
let elt5OMt = eo('h1',null,null,`class`,`text-center bold p-y-3`);
text(`No items yet.`);
ec('h1');
}let elSwvdJ = eo('div',null,null,`class`,`btns-list`);
let elE6ao2 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingCategory = true;}]},`title`,``,`class`,`btn btn-circle btn-pink float-right`);
let elzkmep = eo('i',null,null,`class`,`${fas('folder-plus') + ' mr-1 icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elE6ao2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new category')}`});
        ;
                    }, 20);                
                ec('div');
}},attrs:{id:'todo-list-modal',header:'Todo list'}});
let cndGcpF = component.isAdding;
this.setState('stMagGM', cndGcpF);
if (cndGcpF) { 
let cmpk3SV = this._lc('cnetImmDt', {parent:component,props:{withInput:true,headingTheme:'primary'},events:{onconfirm:function(e) {let $el = this; component.addItem(e)},onclose:function(e) {let $el = this; component.isAdding = false;}},attrs:{placeholder:`${trans(`Todo item.`)}`,heading:'Adding new Todo Item',message:'Add todo item.'},state:'stMagGM'});
}let cndwT9o = component.isAddingCategory;
this.setState('stsNPCo', cndwT9o);
if (cndwT9o) { 
let cmps8ex = this._lc('ckyWrs2WP', {parent:component,props:{withInput:true},events:{onconfirm:function(e) {let $el = this; component.addCategory(e)},onclose:function(e) {let $el = this; component.isAddingCategory = false;}},attrs:{placeholder:`${trans(`Todo category.`)}`,heading:'Adding Todo category',message:'Add new todo category.'},state:'stsNPCo'});
}let cndoJhr = component.confirm;
this.setState('st1HP3H', cndoJhr);
if (cndoJhr) { 
let cmp963k = this._lc('cI20FHhRK', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'st1HP3H'});
}
                    this.isReadyToGo();
                }
        });