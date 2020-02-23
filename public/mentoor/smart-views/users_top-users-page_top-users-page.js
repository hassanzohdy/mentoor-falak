_Component({
                selector: 'top-users-page',
                c: 'TopUsersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','isLoading','users','user'],
                children: {c2rJTox9M:'flk-spinner',cfoCOjBaZ:'user-online',cvJhYLqEJ:'gold-icon',cNlcQfHdF:'layout'},
                render: function (component) {
                    let cmpgbBE = this._lc('cNlcQfHdF', {parent:component,content:(layout) => {let elInNb5 = eo('h1',null,null,`class`,`bold`);
text(trans(component.title));
ec('h1');
let cndwDd4 = component.isLoading;
this.setState('stWKT22', cndwDd4);
let cndIlCi = !(cndwDd4);
this.setState('stR5htr', cndIlCi);
if (cndwDd4) { 
let cmpXG36 = this._lc('c2rJTox9M', {parent:component,parentTop:layout,state:'stWKT22'});
}else { 
let elcuh5_ = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let elNQzz1 = eo('thead');
let els5Wgz = eo('tr');
let elrEOTx = eo('th',null,null,`class`,`text-left`);
text(`User`);
ec('th');
let elsX_3o = eo('th');
text(`Gold`);
ec('th');
ec('tr');
ec('thead');
let elX2Wn9 = eo('tbody');
for (let index in component.users) {
let user = component.users[index]; 
 let ii7_X8 = 'AhrJ73p' + index;
let eljjF9N = eo('tr','x7Ygp7SMAa67' + index+ii7_X8);
let el5N9xq = eo('td','Yumff'+ii7_X8);
let elTnm0T = eo('span','86Yff'+ii7_X8,null,`class`,`mr-1`);
let eleaREp = eo('span','aI7ff'+ii7_X8);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let elfis__ = ev('img','omRff'+ii7_X8,null,`src`,`${userImage(user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(user)}`,`alt`,`${userName(user)}`);
let el_ZQxV = eo('span','QQTff'+ii7_X8,null,`class`,`bold mr-1`);
el_ZQxV.cls = {'orange-text': user.id == component.user.id};

            for (let className in el_ZQxV.cls) {
                el_ZQxV.classList.toggle(className, el_ZQxV.cls[className]);
            }  
            text(userName(user));
ec('span');
let cmpDrqM = this._lc('cfoCOjBaZ', {parent:component,parentTop:layout,props:{id:user.id},attrs:{id:`${user.id}`},state:'stR5htr',insideLoop:true,index:"" +ii7_X8});
ec('td');
let ell38Be = eo('td','3L4ff'+ii7_X8,null,`class`,`total-reward`);
let cmpQBVF = this._lc('cvJhYLqEJ', {parent:component,parentTop:layout,props:{coins:user.gold},state:'stR5htr',insideLoop:true,index:"" +ii7_X8});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });