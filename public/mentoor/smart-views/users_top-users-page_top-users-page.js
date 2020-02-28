_Component({
                selector: 'top-users-page',
                c: 'TopUsersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','isLoading','users','user'],
                children: {c9wKqqtei:'flk-spinner',c6o_chx78:'user-online',cnC9gF_LJ:'gold-icon',cy4jnsKZZ:'layout'},
                render: function (component) {
                    let cmpAx83 = this._lc('cy4jnsKZZ', {parent:component,content:(layout) => {let elIuqo1 = eo('h1',null,null,`class`,`bold`);
text(trans(component.title));
ec('h1');
let cndl0ac = component.isLoading;
this.setState('stgBNCD', cndl0ac);
let cnd16RT = !(cndl0ac);
this.setState('stvb7ZU', cnd16RT);
if (cndl0ac) { 
let cmp3cu0 = this._lc('c9wKqqtei', {parent:component,parentTop:layout,state:'stgBNCD'});
}else { 
let elEKi4J = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let el5EOy0 = eo('thead');
let elQ4e2Z = eo('tr');
let elhTCB3 = eo('th',null,null,`class`,`text-left`);
text(`User`);
ec('th');
let elh4DnL = eo('th');
text(`Gold`);
ec('th');
ec('tr');
ec('thead');
let elb8c9e = eo('tbody');
for (let index in component.users) {
let user = component.users[index]; 
 let iigENu = '89TV0KT' + index;
let elCZBho = eo('tr','ZnxU4_g8PReA' + index+iigENu);
let elXlsz5 = eo('td','a4pff'+iigENu);
let elZplVw = eo('span','WWxff'+iigENu,null,`class`,`mr-1`);
let elCSqjx = eo('span','oZeff'+iigENu);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let elYm3nI = ev('img','G1Dff'+iigENu,null,`src`,`${userImage(user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(user)}`,`alt`,`${userName(user)}`);
let elV0T7h = eo('span','dsQff'+iigENu,null,`class`,`bold mr-1 ${cls({'orange-text': user.id == component.user.id})}`);
text(userName(user));
ec('span');
let cmpxeic = this._lc('c6o_chx78', {parent:component,parentTop:layout,props:{id:user.id},attrs:{id:`${user.id}`},state:'stvb7ZU',insideLoop:true,index:"" +iigENu});
ec('td');
let elkVdH5 = eo('td','Sioff'+iigENu,null,`class`,`total-reward`);
let cmpvn6e = this._lc('cnC9gF_LJ', {parent:component,parentTop:layout,props:{coins:user.gold},state:'stvb7ZU',insideLoop:true,index:"" +iigENu});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });