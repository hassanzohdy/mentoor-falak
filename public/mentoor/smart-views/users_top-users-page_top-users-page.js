_Component({
                selector: 'top-users-page',
                c: 'TopUsersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','isLoading','users','user'],
                children: {cNsq_ik2t:'flk-spinner',cLx8loWEa:'user-online',cWcMYIN2J:'gold-icon',cFbAEpqbw:'layout'},
                render: function (component) {
                    let cmpO6ZD = this._lc('cFbAEpqbw', {parent:component,content:(layout) => {let elEKYfY = eo('h1',null,null,`class`,`bold`);
text(trans(component.title));
ec('h1');
let cnd1Wbf = component.isLoading;
this.setState('stkEJGJ', cnd1Wbf);
let cndDS_b = !(cnd1Wbf);
this.setState('st3KWWh', cndDS_b);
if (cnd1Wbf) { 
let cmpmTd0 = this._lc('cNsq_ik2t', {parent:component,parentTop:layout,state:'stkEJGJ'});
}else { 
let elRf2XW = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let elk0pHD = eo('thead');
let elzPSsS = eo('tr');
let elRMfJv = eo('th',null,null,`class`,`text-left`);
text(`User`);
ec('th');
let el1ZWwO = eo('th');
text(`Gold`);
ec('th');
ec('tr');
ec('thead');
let elgelNO = eo('tbody');
for (let index in component.users) {
let user = component.users[index]; 
 let iiza7R = 'qHvdUMB' + index;
let elzTQF3 = eo('tr','DR09j8OMwySN' + index+iiza7R);
let elzsYMN = eo('td','6YFff'+iiza7R);
let elLbcIk = eo('span','EM8ff'+iiza7R,null,`class`,`mr-1`);
let elxxXPk = eo('span','8tdff'+iiza7R);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let elACRNA = ev('img','l9Lff'+iiza7R,null,`src`,`${userImage(user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(user)}`,`alt`,`${userName(user)}`);
let elV2A2W = eo('span','qVfff'+iiza7R,null,`class`,`bold mr-1`);
elV2A2W.cls = {'orange-text': user.id == component.user.id};

            for (let className in elV2A2W.cls) {
                elV2A2W.classList.toggle(className, elV2A2W.cls[className]);
            }  
            text(userName(user));
ec('span');
let cmpfr_v = this._lc('cLx8loWEa', {parent:component,parentTop:layout,props:{id:user.id},attrs:{id:`${user.id}`},state:'st3KWWh',insideLoop:true,index:"" +iiza7R});
ec('td');
let eliDtuk = eo('td','Yi1ff'+iiza7R,null,`class`,`total-reward`);
let cmprJAV = this._lc('cWcMYIN2J', {parent:component,parentTop:layout,props:{coins:user.gold},state:'st3KWWh',insideLoop:true,index:"" +iiza7R});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });