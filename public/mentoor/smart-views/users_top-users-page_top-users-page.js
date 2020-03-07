_Component({
                selector: 'top-users-page',
                c: 'TopUsersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','isLoading','users','user'],
                children: {c_RgXxGLB:'flk-spinner',cGF9Acnrp:'user-online',cWXXJmyEX:'gold-icon',cvp9HzKYD:'layout'},
                render: function (component) {
                    let cmpWxzW = this._lc('cvp9HzKYD', {parent:component,content:(layout) => {let el8O4iO = eo('h1',null,null,`class`,`bold`);
text(trans(component.title));
ec('h1');
let cndj3Sv = component.isLoading;
this.setState('stocd8g', cndj3Sv);
let cndxN54 = !(cndj3Sv);
this.setState('st595GI', cndxN54);
if (cndj3Sv) { 
let cmpBQ4i = this._lc('c_RgXxGLB', {parent:component,parentTop:layout,state:'stocd8g'});
}else { 
let eljcXD8 = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let elF_8VT = eo('thead');
let elqKqE1 = eo('tr');
let elegwWH = eo('th',null,null,`class`,`text-left`);
text(`User`);
ec('th');
let elXPYts = eo('th');
text(`Gold`);
ec('th');
ec('tr');
ec('thead');
let elJOxRo = eo('tbody');
for (let index in component.users) {
let user = component.users[index]; 
 let iipict = 'BQMsgIZ' + index;
let eltNKHh = eo('tr','A4fp3jdXbuiQ' + index+iipict);
let elSzK7r = eo('td','PgIff'+iipict);
let elGcDqo = eo('span','RSeff'+iipict,null,`class`,`mr-1`);
let el3vWv5 = eo('span','Vltff'+iipict);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let elYkgM1 = ev('img','nqGff'+iipict,null,`src`,`${userImage(user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(user)}`,`alt`,`${userName(user)}`);
let eltbPBZ = eo('span','Hwmff'+iipict,null,`class`,`bold mr-1 ${cls({'orange-text': user.id == component.user.id})}`);
text(userName(user));
ec('span');
let cmpMmjF = this._lc('cGF9Acnrp', {parent:component,parentTop:layout,props:{id:user.id},attrs:{id:`${user.id}`},state:'st595GI',insideLoop:true,index:"" +iipict});
ec('td');
let elnkqeG = eo('td','JWlff'+iipict,null,`class`,`total-reward`);
let cmprXlL = this._lc('cWXXJmyEX', {parent:component,parentTop:layout,props:{coins:user.gold},state:'st595GI',insideLoop:true,index:"" +iipict});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });