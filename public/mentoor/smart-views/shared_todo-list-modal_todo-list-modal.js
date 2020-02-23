_Component({
                selector: 'todo-list-modal',
                c: 'TodoListModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['onClose','isUnlocked','confirm','isLoading','todo','filterBy','currentStatus','totalItems','totalPending','totalCompleted','getCategories','todoItems','readyInput','changeStatus','isAdding','currentCategoryIndex','isAddingCategory','addItem','addCategory','unlock'],
                children: {c9aziU5k2:'gold-icon',cVq8yIunt:'flk-spinner',cmfMBNHQt:'flk-dropdown-list',cMsqlOpI2:'flk-modal',cObNEXV7T:'flk-alert',cQ4JHmIla:'flk-alert',c2dJ209PZ:'flk-alert'},
                render: function (component) {
                    let cmpHapo = this._lc('cMsqlOpI2', {parent:component,events:{onclose:function(e) {let $el = this; component.onClose()}},content:(flkModal) => {let cndHw1N = ! component.isUnlocked();
this.setState('stClABe', cndHw1N);
let cndSdnu = component.isLoading;
this.setState('stQDP3U', cndSdnu);
let cndxQzF = !(cndHw1N||cndSdnu);
this.setState('stzm3su', cndxQzF);
if (cndHw1N) { 
let elJOvG9 = eo('div','M0Mf');
let elOQ8o4 = eo('div','8iRf');
let elE6F9C = eo('p','BAif');
text(`Todo list will give you a quick list for accomplishment progress based on your todo list items
                completion.`);
ec('p');
let elLp0Mx = eo('p','6Qhf');
text(`You can easily check/uncheck your finished todo items with a single click.`);
ec('p');
ec('div');
let cndRG6K = ! Is.empty(FLAGS.shoppingMall);
this.setState('stKfVRJ', cndRG6K);
if (cndRG6K) { 
let elLrz8i = eo('div','dQDf',null,`class`,`m-t-4 text-center`);
let el3tlp3 = eo('button','LaLf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-sm btn-success`);
let cmpEFmp = this._lc('c9aziU5k2', {parent:component,parentTop:flkModal,props:{coins:FLAGS.shoppingMall.todo},state:'stKfVRJ'});
let els19hh = eo('div','hTlf',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}ec('div');
}else if (cndSdnu) { 
let cmpCOvO = this._lc('cVq8yIunt', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stQDP3U'});
}else { 
let cndZZXk = ! Is.empty(component.todo.categories);
this.setState('stYDMBI', cndZZXk);
let cndkCZI = !(cndZZXk);
this.setState('stpmziU', cndkCZI);
if (cndZZXk) { 
let ela7Rrr = eo('span','mkFf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.ALL)}]},`class`,`badge badge-purple`);
ela7Rrr.cls = {active: TodoListModal.ALL == component.currentStatus};

            for (let className in ela7Rrr.cls) {
                ela7Rrr.classList.toggle(className, ela7Rrr.cls[className]);
            }  
            text(`All
                (${ component.totalItems() })`);
ec('span');
let elcrpQt = eo('span','wRMf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.PENDING)}]},`class`,`badge badge-primary`);
elcrpQt.cls = {active: TodoListModal.PENDING == component.currentStatus};

            for (let className in elcrpQt.cls) {
                elcrpQt.classList.toggle(className, elcrpQt.cls[className]);
            }  
            text(`Pending
                (${ component.totalPending() })`);
ec('span');
let eljbRKy = eo('span','ZUdf',null, eventListeners, {onclick:[function(e) {var $el = this;component.filterBy(TodoListModal.COMPLETED)}]},`class`,`badge badge-success`);
eljbRKy.cls = {active: TodoListModal.COMPLETED == component.currentStatus};

            for (let className in eljbRKy.cls) {
                eljbRKy.classList.toggle(className, eljbRKy.cls[className]);
            }  
            text(`Completed
                (${ component.totalCompleted() })`);
ec('span');
let elVqfOO = eo('div','lItf',null,`class`,`categories-filter`);
component.categoriesDropdown = this._lc('cmfMBNHQt', {parent:component,parentTop:flkModal,props:{items:component.getCategories(),multiple:true},events:{onselect:function(e) {let $el = this; component.filterBy(component.currentStatus, e.map(cat => cat.text))}},boolAttrs:{multiple:true},attrs:{placeholder:`${trans(`Filter by category`)}`,heading:'Categories'},state:'stYDMBI'});
ec('div');
let elhBfBs = eo('div','ewxf',null,`class`,`items-list`);
for (let index in component.todoItems) {
let category = component.todoItems[index]; 
 let iidHtH = category.id+ index;
let elp7xwL = eo('div','vlFiqFN0R4QT' + index+iidHtH,null,`class`,`category-wrapper`);
let elI5sDj = eo('h1','6Omff'+iidHtH,null,`class`,`category m-y-2`);
let elN4RUe = eo('span','xizff'+iidHtH);
text(category.name);
ec('span');
let cndrzJO = category.items.length > 0;
this.setState('stQoGGC', cndrzJO);
if (cndrzJO) { 
let elBuaPu = eo('span','mANff'+iidHtH);
text('(' + category.items.length + ')');
ec('span');
}ec('h1');
let cndsJw_ = ! Is.empty(category.items);
this.setState('st1PTtG', cndsJw_);
let cndvrih = !(cndsJw_);
this.setState('stQ7q5Q', cndvrih);
if (cndsJw_) { 
for (let i in category.items) {
let item = category.items[i]; 
 let ii982S = item.id + item.done + category.id+ i;
let elTDVeC = eo('div','jMSiA62kT7AH' + i+iidHtH+ii982S,null,`class`,`row item`);
let elQyp4d = eo('div','TWrff'+iidHtH+ii982S,null,`class`,`col-9`);
text(item.item);
ec('div');
let elLrdXk = eo('div','nfbff'+iidHtH+ii982S,null,`class`,`col check-item`);
let elpPaqK = eo('label','2Zqff'+iidHtH+ii982S);
let elIFGlp = ev('input','qxAff'+iidHtH+ii982S,null, eventListeners, {onready:[function(e) {var $el = this;component.readyInput($el)}],onchange:[function(e) {var $el = this;component.changeStatus(category, item.id, $el.checked)}]}, boolAttrs, {checked:item.done},`class`,`cb pristine`,`type`,`checkbox`);
elIFGlp.cls = {checked: item.done};

            for (let className in elIFGlp.cls) {
                elIFGlp.classList.toggle(className, elIFGlp.cls[className]);
            }  
            
                    setTimeout(function () {
                        let $el = elIFGlp;
                        component.readyInput($el);
                    }, 20);                
                let elCa1Qh = eo('span','SZYff'+iidHtH+ii982S);
ec('span');
ec('label');
ec('div');
ec('div');
}
}else { 
let elA_5ET = eo('h1','NN4ff'+iidHtH,null,`class`,`m-y-2 text-center`);
text(`No items here.`);
ec('h1');
}let elTzFhT = eo('button','Ma4ff'+iidHtH,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAdding = true; component.currentCategoryIndex = index;}]},`title`,``,`class`,`btn btn-circle btn-success m-y-2`);
let elQnk8x = eo('i','yeSff'+iidHtH,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elTzFhT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add todo item')}`});
        ;
                    }, 20);                
                ec('div');
}
ec('div');
}else { 
let eljPkLM = eo('h1',null,null,`class`,`text-center bold p-y-3`);
text(`No items yet.`);
ec('h1');
}let elrNaEs = eo('div',null,null,`class`,`btns-list`);
let eluNtxJ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.isAddingCategory = true;}]},`title`,``,`class`,`btn btn-circle btn-pink float-right`);
let el_V0jj = eo('i',null,null,`class`,`${fas('folder-plus') + ' mr-1 icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eluNtxJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new category')}`});
        ;
                    }, 20);                
                ec('div');
}},attrs:{id:'todo-list-modal',header:'Todo list'}});
let cndQ6Vx = component.isAdding;
this.setState('st8HSJA', cndQ6Vx);
if (cndQ6Vx) { 
let cmpGBa3 = this._lc('cObNEXV7T', {parent:component,props:{withInput:true,headingTheme:'primary'},events:{onconfirm:function(e) {let $el = this; component.addItem(e)},onclose:function(e) {let $el = this; component.isAdding = false;}},attrs:{placeholder:`${trans(`Todo item.`)}`,heading:'Adding new Todo Item',message:'Add todo item.'},state:'st8HSJA'});
}let cndRhsX = component.isAddingCategory;
this.setState('stpS2IT', cndRhsX);
if (cndRhsX) { 
let cmp2Wg3 = this._lc('cQ4JHmIla', {parent:component,props:{withInput:true},events:{onconfirm:function(e) {let $el = this; component.addCategory(e)},onclose:function(e) {let $el = this; component.isAddingCategory = false;}},attrs:{placeholder:`${trans(`Todo category.`)}`,heading:'Adding Todo category',message:'Add new todo category.'},state:'stpS2IT'});
}let cnd2TIM = component.confirm;
this.setState('stsby0X', cnd2TIM);
if (cnd2TIM) { 
let cmpn60P = this._lc('c2dJ209PZ', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stsby0X'});
}
                    this.isReadyToGo();
                }
        });