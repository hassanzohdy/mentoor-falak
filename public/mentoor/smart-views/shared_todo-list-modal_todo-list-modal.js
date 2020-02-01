_Component({
                selector: 'todo-list-modal',
                c: 'TodoListModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','isUnlocked','confirm','isLoading','todo','filterBy','currentStatus','totalItems','totalPending','totalCompleted','getCategories','todoItems','readyInput','changeStatus','isAdding','currentCategoryIndex','isAddingCategory','addItem','addCategory','unlock'],
                children: {cfVl3sSFS:'gold-icon',cJV93GogJ:'flk-spinner',c0s2Y4ybq:'flk-dropdown-list',c1Ug8XQ41:'flk-modal',c9VEW_1u_:'flk-alert',cHgeFTYAF:'flk-alert',cJeuQ3k0G:'flk-alert'},
                render: function (component) {
                    let cmpSZHC = this._lc('c1Ug8XQ41', {parent:component,events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let cndqU15 = ! component.isUnlocked();
this.setState('stuVo_1', cndqU15);
let cndQrIe = component.isLoading;
this.setState('stfpRy7', cndQrIe);
let cnds0js = !(cndqU15||cndQrIe);
this.setState('stJf911', cnds0js);
if (cndqU15) { 
let elLghCH = eo('div','ZIYf');
let elvwCEF = eo('div','hZzf');
let elOhLzk = eo('p','zEvf');
text(`Todo list will give you a quick list for accomplishment progress based on your todo list items
                completion.`);
ec('p');
let elEhaxc = eo('p','wZxf');
text(`You can easily check/uncheck your finished todo items with a single click.`);
ec('p');
ec('div');
let cndZM41 = ! Is.empty(FLAGS.shoppingMall);
this.setState('stEy2yp', cndZM41);
if (cndZM41) { 
let elO2qDj = eo('div','35Of',null,`class`,`m-t-4 text-center`);
let elfuJeQ = eo('button','Fd_f',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-sm btn-success`);
let cmpl8Kh = this._lc('cfVl3sSFS', {parent:component,parentTop:flkModal,props:{coins:FLAGS.shoppingMall.todo},state:'stEy2yp'});
let elL99YC = eo('div','lsOf',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}ec('div');
}else if (cndQrIe) { 
let cmpzIG3 = this._lc('cJV93GogJ', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stfpRy7'});
}else { 
let cndmxOm = ! Is.empty(component.todo.categories);
this.setState('st_zSQ6', cndmxOm);
let cnd_rd_ = !(cndmxOm);
this.setState('stNQh21', cnd_rd_);
if (cndmxOm) { 
let elXlgsd = eo('span','E5If',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.ALL)}]},`class`,`badge badge-purple`);
elXlgsd.cls = {active: TodoListModal.ALL == component.currentStatus};

            for (let className in elXlgsd.cls) {
                elXlgsd.classList.toggle(className, elXlgsd.cls[className]);
            }  
            text(`All
                (${ component.totalItems() })`);
ec('span');
let elitgiH = eo('span','G14f',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.PENDING)}]},`class`,`badge badge-primary`);
elitgiH.cls = {active: TodoListModal.PENDING == component.currentStatus};

            for (let className in elitgiH.cls) {
                elitgiH.classList.toggle(className, elitgiH.cls[className]);
            }  
            text(`Pending
                (${ component.totalPending() })`);
ec('span');
let el_71xz = eo('span','_HBf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.COMPLETED)}]},`class`,`badge badge-success`);
el_71xz.cls = {active: TodoListModal.COMPLETED == component.currentStatus};

            for (let className in el_71xz.cls) {
                el_71xz.classList.toggle(className, el_71xz.cls[className]);
            }  
            text(`Completed
                (${ component.totalCompleted() })`);
ec('span');
let elvegsR = eo('div','GoIf',null,`class`,`categories-filter`);
component.categoriesDropdown = this._lc('c0s2Y4ybq', {parent:component,parentTop:flkModal,props:{items:component.getCategories(),multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy(component.currentStatus, e.map(cat => cat.text))}},boolAttrs:{multiple:true},attrs:{placeholder:`${trans(`Filter by category`)}`,heading:'Categories'},state:'st_zSQ6'});
ec('div');
let el7OSRi = eo('div','7E6f',null,`class`,`items-list`);
for (let index in component.todoItems) {
let category = component.todoItems[index]; 
 let ii7FOI = category.id+ index;
let eluDdyN = eo('div','YOiMA6PlTdqt' + index+ii7FOI,null,`class`,`category-wrapper`);
let elpked6 = eo('h1','HEHff'+ii7FOI,null,`class`,`category m-y-2`);
let elkz8rw = eo('span','O_mff'+ii7FOI);
text(category.name);
ec('span');
let cndbcLH = category.items.length > 0;
this.setState('stt9XCx', cndbcLH);
if (cndbcLH) { 
let elIrXTC = eo('span','SUFff'+ii7FOI);
text('(' + category.items.length + ')');
ec('span');
}ec('h1');
let cndwYJp = ! Is.empty(category.items);
this.setState('sthd1AN', cndwYJp);
let cndTugn = !(cndwYJp);
this.setState('stR21N9', cndTugn);
if (cndwYJp) { 
for (let i in category.items) {
let item = category.items[i]; 
 let ii0jn8 = item.id + item.done + category.id+ i;
let elWg6i_ = eo('div','aQy6heTgctCm' + i+ii7FOI+ii0jn8,null,`class`,`row item`);
let elby1sc = eo('div','6uGff'+ii7FOI+ii0jn8,null,`class`,`col-9`);
text(item.item);
ec('div');
let elvV29H = eo('div','fu7ff'+ii7FOI+ii0jn8,null,`class`,`col check-item`);
let elMqCWB = eo('label','qnaff'+ii7FOI+ii0jn8);
let el8J7JW = ev('input','VORff'+ii7FOI+ii0jn8,null, eventListeners, {onready:[function(e) {var $el = this;component.readyInput($el)}],onchange:[function(e) {var $el = this;component.changeStatus(category, item.id, $el.checked)}]}, boolAttrs, {checked:item.done},`class`,`cb pristine`,`type`,`checkbox`);
el8J7JW.cls = {checked: item.done};

            for (let className in el8J7JW.cls) {
                el8J7JW.classList.toggle(className, el8J7JW.cls[className]);
            }  
            
                    setTimeout(function () {
                        let $el = el8J7JW;
                        component.readyInput($el);
                    }, 20);                
                let eljLkPq = eo('span','7Ecff'+ii7FOI+ii0jn8);
ec('span');
ec('label');
ec('div');
ec('div');
}
}else { 
let elIDBim = eo('h1','YLQff'+ii7FOI,null,`class`,`m-y-2 text-center`);
text(`No items here.`);
ec('h1');
}let elkHLEl = eo('button','IYMff'+ii7FOI,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAdding = true; component.currentCategoryIndex = index;}]},`title`,``,`class`,`btn btn-circle btn-success m-y-2`);
let elWEags = eo('i','NTJff'+ii7FOI,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elkHLEl;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add todo item')}`});
        ;
                    }, 20);                
                ec('div');
}
ec('div');
}else { 
let el5utF0 = eo('h1',null,null,`class`,`text-center bold p-y-3`);
text(`No items yet.`);
ec('h1');
}let el5gFUd = eo('div',null,null,`class`,`btns-list`);
let elzItjV = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingCategory = true;}]},`title`,``,`class`,`btn btn-circle btn-pink float-right`);
let elBdzDA = eo('i',null,null,`class`,`${fas('folder-plus') + ' mr-1 icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elzItjV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new category')}`});
        ;
                    }, 20);                
                ec('div');
}},attrs:{id:'todo-list-modal',header:'Todo list'}});
let cndRvha = component.isAdding;
this.setState('st3adJ1', cndRvha);
if (cndRvha) { 
let cmp7DH4 = this._lc('c9VEW_1u_', {parent:component,props:{withInput:true,headingTheme:'primary'},events:{onconfirm:function(e) {let $el = this; component.addItem(e)},onclose:function(e) {let $el = this; component.isAdding = false;}},attrs:{placeholder:`${trans(`Todo item.`)}`,heading:'Adding new Todo Item',message:'Add todo item.'},state:'st3adJ1'});
}let cndPLDn = component.isAddingCategory;
this.setState('stdDY3z', cndPLDn);
if (cndPLDn) { 
let cmpWtqw = this._lc('cHgeFTYAF', {parent:component,props:{withInput:true},events:{onconfirm:function(e) {let $el = this; component.addCategory(e)},onclose:function(e) {let $el = this; component.isAddingCategory = false;}},attrs:{placeholder:`${trans(`Todo category.`)}`,heading:'Adding Todo category',message:'Add new todo category.'},state:'stdDY3z'});
}let cndVgTf = component.confirm;
this.setState('stv2Mz3', cndVgTf);
if (cndVgTf) { 
let cmpqDWJ = this._lc('cJeuQ3k0G', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stv2Mz3'});
}
                    this.isReadyToGo();
                }
        });