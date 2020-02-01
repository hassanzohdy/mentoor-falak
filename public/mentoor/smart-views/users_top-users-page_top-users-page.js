_Component({
                selector: 'top-users-page',
                c: 'TopUsersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','isLoading','users','user'],
                children: {cMpZyTc8l:'flk-spinner',cmqVv7lU9:'user-online',cHDqreGDv:'gold-icon',c_PXx9dNk:'layout'},
                render: function (component) {
                    let cmp8Qnn = this._lc('c_PXx9dNk', {parent:component,content:(layout) => {let eldwu7W = eo('h1',null,null,`class`,`bold`);
text(trans(component.title));
ec('h1');
let cndiqXf = component.isLoading;
this.setState('stKEWlB', cndiqXf);
let cndjQ9c = !(cndiqXf);
this.setState('str4UMk', cndjQ9c);
if (cndiqXf) { 
let cmpHTBx = this._lc('cMpZyTc8l', {parent:component,parentTop:layout,state:'stKEWlB'});
}else { 
let el204oD = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let elfCHHH = eo('thead');
let elmy0SE = eo('tr');
let elQ4s8c = eo('th',null,null,`class`,`text-left`);
text(`User`);
ec('th');
let elfiw5J = eo('th');
text(`Gold`);
ec('th');
ec('tr');
ec('thead');
let eltHQtY = eo('tbody');
for (let index in component.users) {
let user = component.users[index]; 
 let iiOhOW = 'ciGXHmr' + index;
let elSmMBt = eo('tr','XzTSBYfr5Q2e' + index+iiOhOW);
let elre0nQ = eo('td','3e1ff'+iiOhOW);
let elqcAdE = eo('span','roiff'+iiOhOW,null,`class`,`mr-1`);
let elUWkMq = eo('span','CqXff'+iiOhOW);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let elDGojf = ev('img','Fxvff'+iiOhOW,null,`src`,`${userImage(user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(user)}`,`alt`,`${userName(user)}`);
let elAEjHh = eo('span','YXOff'+iiOhOW,null,`class`,`bold mr-1`);
elAEjHh.cls = {'orange-text': user.id == component.user.id};

            for (let className in elAEjHh.cls) {
                elAEjHh.classList.toggle(className, elAEjHh.cls[className]);
            }  
            text(userName(user));
ec('span');
let cmpBkDo = this._lc('cmqVv7lU9', {parent:component,parentTop:layout,props:{id:user.id},attrs:{id:`${user.id}`},state:'str4UMk',insideLoop:true,index:"" +iiOhOW});
ec('td');
let elpllFq = eo('td','PL_ff'+iiOhOW,null,`class`,`total-reward`);
let cmpCEJA = this._lc('cHDqreGDv', {parent:component,parentTop:layout,props:{coins:user.gold},state:'str4UMk',insideLoop:true,index:"" +iiOhOW});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });