_Component({
                selector: 'todo-list-modal',
                c: 'TodoListModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','isUnlocked','confirm','isLoading','todo','filterBy','currentStatus','totalItems','totalPending','totalCompleted','getCategories','todoItems','readyInput','changeStatus','isAdding','currentCategoryIndex','isAddingCategory','addItem','addCategory','unlock'],
                children: {cwJI6W9bp:'gold-icon',c8ynlBtCt:'flk-spinner',c2Bip_t9j:'flk-dropdown-list',c9nzEEJ2m:'flk-modal',c62C8RqqM:'flk-alert',ciFCPuc0J:'flk-alert',crB314Rt5:'flk-alert'},
                render: function (component) {
                    let cmp9o97 = this._lc('c9nzEEJ2m', {parent:component,events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let cndeCDO = ! component.isUnlocked();
this.setState('stc5GyJ', cndeCDO);
let cndU1cn = component.isLoading;
this.setState('stTBoNH', cndU1cn);
let cndRCky = !(cndeCDO||cndU1cn);
this.setState('stGNKjr', cndRCky);
if (cndeCDO) { 
let elYMDa7 = eo('div','t4Nf');
let elwojn4 = eo('div','zzaf');
let elf_LJW = eo('p','JQqf');
text(`Todo list will give you a quick list for accomplishment progress based on your todo list items
                completion.`);
ec('p');
let elMr_55 = eo('p','m3of');
text(`You can easily check/uncheck your finished todo items with a single click.`);
ec('p');
ec('div');
let cndVNpZ = ! Is.empty(FLAGS.shoppingMall);
this.setState('st1wExS', cndVNpZ);
if (cndVNpZ) { 
let elkFZIk = eo('div','bDJf',null,`class`,`m-t-4 text-center`);
let elABci4 = eo('button','wSof',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-sm btn-success`);
let cmp9Qlz = this._lc('cwJI6W9bp', {parent:component,parentTop:flkModal,props:{coins:FLAGS.shoppingMall.todo},state:'st1wExS'});
let el0xIpq = eo('div','QVyf',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}ec('div');
}else if (cndU1cn) { 
let cmpNgif = this._lc('c8ynlBtCt', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stTBoNH'});
}else { 
let cndxgil = ! Is.empty(component.todo.categories);
this.setState('stVLtBY', cndxgil);
let cndXDG7 = !(cndxgil);
this.setState('st0DHma', cndXDG7);
if (cndxgil) { 
let elZtdse = eo('span','52Bf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.ALL)}]},`class`,`badge badge-purple ${cls({active: TodoListModal.ALL == component.currentStatus})}`);
text(`All
                (${ component.totalItems() })`);
ec('span');
let el1fJDJ = eo('span','kNyf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.PENDING)}]},`class`,`badge badge-primary ${cls({active: TodoListModal.PENDING == component.currentStatus})}`);
text(`Pending
                (${ component.totalPending() })`);
ec('span');
let elLIaKt = eo('span','wbPf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.COMPLETED)}]},`class`,`badge badge-success ${cls({active: TodoListModal.COMPLETED == component.currentStatus})}`);
text(`Completed
                (${ component.totalCompleted() })`);
ec('span');
let elt08te = eo('div','8ccf',null,`class`,`categories-filter`);
component.categoriesDropdown = this._lc('c2Bip_t9j', {parent:component,parentTop:flkModal,props:{items:component.getCategories(),multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy(component.currentStatus, e.map(cat => cat.text))}},boolAttrs:{multiple:true},attrs:{placeholder:`${trans(`Filter by category`)}`,heading:'Categories'},state:'stVLtBY'});
ec('div');
let elxAlDN = eo('div','H9nf',null,`class`,`items-list`);
for (let index in component.todoItems) {
let category = component.todoItems[index]; 
 let ii3JUO = category.id+ index;
let elGnsyE = eo('div','e84EDF_I4Vzm' + index+ii3JUO,null,`class`,`category-wrapper`);
let el4bCkE = eo('h1','wKTff'+ii3JUO,null,`class`,`category m-y-2`);
let elR4TC4 = eo('span','IcLff'+ii3JUO);
text(category.name);
ec('span');
let cndKD8o = category.items.length > 0;
this.setState('stD8bNZ', cndKD8o);
if (cndKD8o) { 
let elDfTXF = eo('span','44zff'+ii3JUO);
text('(' + category.items.length + ')');
ec('span');
}ec('h1');
let cndSiSb = ! Is.empty(category.items);
this.setState('st9Y30E', cndSiSb);
let cndQjbo = !(cndSiSb);
this.setState('stDzdzh', cndQjbo);
if (cndSiSb) { 
for (let i in category.items) {
let item = category.items[i]; 
 let iiTaGn = item.id + item.done + category.id+ i;
let elZhHpq = eo('div','0QtdnlwvJnAK' + i+ii3JUO+iiTaGn,null,`class`,`row item`);
let elBjJrJ = eo('div','rZqff'+ii3JUO+iiTaGn,null,`class`,`col-9`);
text(item.item);
ec('div');
let elPfLlG = eo('div','UBHff'+ii3JUO+iiTaGn,null,`class`,`col check-item`);
let elwCfV_ = eo('label','KBdff'+ii3JUO+iiTaGn);
let elwW_G6 = ev('input','Q2eff'+ii3JUO+iiTaGn,null, eventListeners, {onready:[function(e) {var $el = this;component.readyInput($el)}],onchange:[function(e) {var $el = this;component.changeStatus(category, item.id, $el.checked)}]}, boolAttrs, {checked:item.done},`class`,`cb pristine ${cls({checked: item.done})}`,`type`,`checkbox`);

                    setTimeout(function () {
                        let $el = elwW_G6;
                        component.readyInput($el);
                    }, 20);                
                let elKEDP1 = eo('span','qz4ff'+ii3JUO+iiTaGn);
ec('span');
ec('label');
ec('div');
ec('div');
}
}else { 
let elFjjEs = eo('h1','u2jff'+ii3JUO,null,`class`,`m-y-2 text-center`);
text(`No items here.`);
ec('h1');
}let eliYs8r = eo('button','41vff'+ii3JUO,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAdding = true; component.currentCategoryIndex = index;}]},`title`,``,`class`,`btn btn-circle btn-success m-y-2`);
let elxayfw = eo('i','TdPff'+ii3JUO,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eliYs8r;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add todo item')}`});
        ;
                    }, 20);                
                ec('div');
}
ec('div');
}else { 
let elXvoyW = eo('h1',null,null,`class`,`text-center bold p-y-3`);
text(`No items yet.`);
ec('h1');
}let el_8G6P = eo('div',null,null,`class`,`btns-list`);
let elzW2du = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingCategory = true;}]},`title`,``,`class`,`btn btn-circle btn-pink float-right`);
let elsW6z6 = eo('i',null,null,`class`,`${fas('folder-plus')} mr-1 icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elzW2du;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new category')}`});
        ;
                    }, 20);                
                ec('div');
}},attrs:{id:'todo-list-modal',header:'Todo list'}});
let cndbhOk = component.isAdding;
this.setState('stGzrIb', cndbhOk);
if (cndbhOk) { 
let cmp0kpP = this._lc('c62C8RqqM', {parent:component,props:{withInput:true,headingTheme:'primary'},events:{onconfirm:function(e) {let $el = this; component.addItem(e)},onclose:function(e) {let $el = this; component.isAdding = false;}},attrs:{placeholder:`${trans(`Todo item.`)}`,heading:'Adding new Todo Item',message:'Add todo item.'},state:'stGzrIb'});
}let cndo54W = component.isAddingCategory;
this.setState('stt3bkd', cndo54W);
if (cndo54W) { 
let cmp6aAD = this._lc('ciFCPuc0J', {parent:component,props:{withInput:true},events:{onconfirm:function(e) {let $el = this; component.addCategory(e)},onclose:function(e) {let $el = this; component.isAddingCategory = false;}},attrs:{placeholder:`${trans(`Todo category.`)}`,heading:'Adding Todo category',message:'Add new todo category.'},state:'stt3bkd'});
}let cndReZk = component.confirm;
this.setState('stUcaLB', cndReZk);
if (cndReZk) { 
let cmpqXIw = this._lc('crB314Rt5', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stUcaLB'});
}
                    this.isReadyToGo();
                }
        });