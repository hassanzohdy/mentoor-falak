_Component({
                selector: 'todo-list-modal',
                c: 'TodoListModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','isUnlocked','confirm','isLoading','todo','filterBy','currentStatus','totalItems','totalPending','totalCompleted','getCategories','todoItems','readyInput','changeStatus','isAdding','currentCategoryIndex','isAddingCategory','addItem','addCategory','unlock'],
                children: {cmQAphwpj:'gold-icon',cDy4x_sju:'flk-spinner',cTBnusRab:'flk-dropdown-list',czwjAE7bN:'flk-modal',cYnF62lcz:'flk-alert',cVspfiMeJ:'flk-alert',cXgjxZLfD:'flk-alert'},
                render: function (component) {
                    let cmpL3WY = this._lc('czwjAE7bN', {parent:component,events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let cndtT6B = ! component.isUnlocked();
this.setState('stmBmw8', cndtT6B);
let cndm7AG = component.isLoading;
this.setState('stdRTXP', cndm7AG);
let cndN2zU = !(cndtT6B||cndm7AG);
this.setState('st8mtqm', cndN2zU);
if (cndtT6B) { 
let elKJuS9 = eo('div','UyEf');
let eluthQY = eo('div','YKTf');
let elLeUXU = eo('p','zpEf');
text(`Todo list will give you a quick list for accomplishment progress based on your todo list items
                completion.`);
ec('p');
let elfHLko = eo('p','11Hf');
text(`You can easily check/uncheck your finished todo items with a single click.`);
ec('p');
ec('div');
let cndGHzc = ! Is.empty(FLAGS.shoppingMall);
this.setState('stCYzqu', cndGHzc);
if (cndGHzc) { 
let elgaT8I = eo('div','31Jf',null,`class`,`m-t-4 text-center`);
let el3J5Kp = eo('button','YCSf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-sm btn-success`);
let cmpfGke = this._lc('cmQAphwpj', {parent:component,parentTop:flkModal,props:{coins:FLAGS.shoppingMall.todo},state:'stCYzqu'});
let elI2xDX = eo('div','bS4f',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}ec('div');
}else if (cndm7AG) { 
let cmpbkg5 = this._lc('cDy4x_sju', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stdRTXP'});
}else { 
let cndDKPa = ! Is.empty(component.todo.categories);
this.setState('stbooBB', cndDKPa);
let cndqCZD = !(cndDKPa);
this.setState('st38dMe', cndqCZD);
if (cndDKPa) { 
let elmeCL2 = eo('span','lNbf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.ALL)}]},`class`,`badge badge-purple ${cls({active: TodoListModal.ALL == component.currentStatus})}`);
text(`All
                (${ component.totalItems() })`);
ec('span');
let el1LBGJ = eo('span','n1Kf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.PENDING)}]},`class`,`badge badge-primary ${cls({active: TodoListModal.PENDING == component.currentStatus})}`);
text(`Pending
                (${ component.totalPending() })`);
ec('span');
let elu4Kz6 = eo('span','wIYf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.COMPLETED)}]},`class`,`badge badge-success ${cls({active: TodoListModal.COMPLETED == component.currentStatus})}`);
text(`Completed
                (${ component.totalCompleted() })`);
ec('span');
let el8m_kC = eo('div','GjFf',null,`class`,`categories-filter`);
component.categoriesDropdown = this._lc('cTBnusRab', {parent:component,parentTop:flkModal,props:{items:component.getCategories(),multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy(component.currentStatus, e.map(cat => cat.text))}},boolAttrs:{multiple:true},attrs:{placeholder:`${trans(`Filter by category`)}`,heading:'Categories'},state:'stbooBB'});
ec('div');
let elbUk2L = eo('div','VnOf',null,`class`,`items-list`);
for (let index in component.todoItems) {
let category = component.todoItems[index]; 
 let iiXrZU = category.id+ index;
let elQZhMS = eo('div','b4dFsr41Xopr' + index+iiXrZU,null,`class`,`category-wrapper`);
let eljF8S1 = eo('h1','9blff'+iiXrZU,null,`class`,`category m-y-2`);
let elxapgj = eo('span','oVSff'+iiXrZU);
text(category.name);
ec('span');
let cndt7J_ = category.items.length > 0;
this.setState('stYgNZt', cndt7J_);
if (cndt7J_) { 
let elEnvfw = eo('span','GoTff'+iiXrZU);
text('(' + category.items.length + ')');
ec('span');
}ec('h1');
let cnd8lAG = ! Is.empty(category.items);
this.setState('st_qJpJ', cnd8lAG);
let cndGAQG = !(cnd8lAG);
this.setState('strUxR9', cndGAQG);
if (cnd8lAG) { 
for (let i in category.items) {
let item = category.items[i]; 
 let iiZPLg = item.id + item.done + category.id+ i;
let elnotw9 = eo('div','l84G3ja7yuOp' + i+iiXrZU+iiZPLg,null,`class`,`row item`);
let elBSBis = eo('div','M7lff'+iiXrZU+iiZPLg,null,`class`,`col-9`);
text(item.item);
ec('div');
let elw1Pd_ = eo('div','A6Pff'+iiXrZU+iiZPLg,null,`class`,`col check-item`);
let elRyvNV = eo('label','270ff'+iiXrZU+iiZPLg);
let el6t6OG = ev('input','heYff'+iiXrZU+iiZPLg,null, eventListeners, {onready:[function(e) {var $el = this;component.readyInput($el)}],onchange:[function(e) {var $el = this;component.changeStatus(category, item.id, $el.checked)}]}, boolAttrs, {checked:item.done},`class`,`cb pristine ${cls({checked: item.done})}`,`type`,`checkbox`);

                    setTimeout(function () {
                        let $el = el6t6OG;
                        component.readyInput($el);
                    }, 20);                
                let el3722Z = eo('span','Rfpff'+iiXrZU+iiZPLg);
ec('span');
ec('label');
ec('div');
ec('div');
}
}else { 
let elwXXHS = eo('h1','in1ff'+iiXrZU,null,`class`,`m-y-2 text-center`);
text(`No items here.`);
ec('h1');
}let elLuSHo = eo('button','NhYff'+iiXrZU,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAdding = true; component.currentCategoryIndex = index;}]},`title`,``,`class`,`btn btn-circle btn-success m-y-2`);
let elr2gpS = eo('i','Rbcff'+iiXrZU,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elLuSHo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add todo item')}`});
        ;
                    }, 20);                
                ec('div');
}
ec('div');
}else { 
let elrNHWB = eo('h1',null,null,`class`,`text-center bold p-y-3`);
text(`No items yet.`);
ec('h1');
}let elwehUO = eo('div',null,null,`class`,`btns-list`);
let elCTmua = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingCategory = true;}]},`title`,``,`class`,`btn btn-circle btn-pink float-right`);
let elVJq1I = eo('i',null,null,`class`,`${fas('folder-plus')} mr-1 icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elCTmua;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new category')}`});
        ;
                    }, 20);                
                ec('div');
}},attrs:{id:'todo-list-modal',header:'Todo list'}});
let cndRqrX = component.isAdding;
this.setState('stLsLrG', cndRqrX);
if (cndRqrX) { 
let cmpXl9L = this._lc('cYnF62lcz', {parent:component,props:{withInput:true,headingTheme:'primary'},events:{onconfirm:function(e) {let $el = this; component.addItem(e)},onclose:function(e) {let $el = this; component.isAdding = false;}},attrs:{placeholder:`${trans(`Todo item.`)}`,heading:'Adding new Todo Item',message:'Add todo item.'},state:'stLsLrG'});
}let cndezbP = component.isAddingCategory;
this.setState('stNdifb', cndezbP);
if (cndezbP) { 
let cmpzqLi = this._lc('cVspfiMeJ', {parent:component,props:{withInput:true},events:{onconfirm:function(e) {let $el = this; component.addCategory(e)},onclose:function(e) {let $el = this; component.isAddingCategory = false;}},attrs:{placeholder:`${trans(`Todo category.`)}`,heading:'Adding Todo category',message:'Add new todo category.'},state:'stNdifb'});
}let cnd4p9W = component.confirm;
this.setState('stJNYol', cnd4p9W);
if (cnd4p9W) { 
let cmp94zd = this._lc('cXgjxZLfD', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stJNYol'});
}
                    this.isReadyToGo();
                }
        });