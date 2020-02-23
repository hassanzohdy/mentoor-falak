_Component({
                selector: 'top-users-page',
                c: 'TopUsersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','isLoading','users','user'],
                children: {caP7pi7zA:'flk-spinner',ci7T73i2t:'user-online',cax1cEsZc:'gold-icon',cKDC5LxAH:'layout'},
                render: function (component) {
                    let cmpgvTs = this._lc('cKDC5LxAH', {parent:component,content:(layout) => {let el7J3dC = eo('h1',null,null,`class`,`bold`);
text(trans(component.title));
ec('h1');
let cndgYqj = component.isLoading;
this.setState('sthmley', cndgYqj);
let cndip_n = !(cndgYqj);
this.setState('stxIVZo', cndip_n);
if (cndgYqj) { 
let cmpcC0R = this._lc('caP7pi7zA', {parent:component,parentTop:layout,state:'sthmley'});
}else { 
let el5Px_W = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let el2j1ng = eo('thead');
let elnBXqL = eo('tr');
let elhUrdB = eo('th',null,null,`class`,`text-left`);
text(`User`);
ec('th');
let elQ5HGY = eo('th');
text(`Gold`);
ec('th');
ec('tr');
ec('thead');
let elWIQ68 = eo('tbody');
for (let index in component.users) {
let user = component.users[index]; 
 let ii0ntS = 'slC48_i' + index;
let elPnNFs = eo('tr','z1v77MizU4WJ' + index+ii0ntS);
let elSvCn0 = eo('td','PNAff'+ii0ntS);
let elKg538 = eo('span','vcWff'+ii0ntS,null,`class`,`mr-1`);
let elNJb6P = eo('span','l1pff'+ii0ntS);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let elxUF40 = ev('img','Dloff'+ii0ntS,null,`src`,`${userImage(user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(user)}`,`alt`,`${userName(user)}`);
let elbZO6Q = eo('span','4eUff'+ii0ntS,null,`class`,`bold mr-1`);
elbZO6Q.cls = {'orange-text': user.id == component.user.id};

            for (let className in elbZO6Q.cls) {
                elbZO6Q.classList.toggle(className, elbZO6Q.cls[className]);
            }  
            text(userName(user));
ec('span');
let cmpcmd4 = this._lc('ci7T73i2t', {parent:component,parentTop:layout,props:{id:user.id},attrs:{id:`${user.id}`},state:'stxIVZo',insideLoop:true,index:"" +ii0ntS});
ec('td');
let elz74nO = eo('td','tihff'+ii0ntS,null,`class`,`total-reward`);
let cmpIBiu = this._lc('cax1cEsZc', {parent:component,parentTop:layout,props:{coins:user.gold},state:'stxIVZo',insideLoop:true,index:"" +ii0ntS});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });