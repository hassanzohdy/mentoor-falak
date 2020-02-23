_Component({
                selector: 'top-users-page',
                c: 'TopUsersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','isLoading','users','user'],
                children: {cb1od_Dwk:'flk-spinner',ciYjfrVZa:'user-online',cH9_0qNM3:'gold-icon',cApxuVqwc:'layout'},
                render: function (component) {
                    let cmptqW_ = this._lc('cApxuVqwc', {parent:component,content:(layout) => {let elbZTTe = eo('h1',null,null,`class`,`bold`);
text(trans(component.title));
ec('h1');
let cndnjKq = component.isLoading;
this.setState('stXe0cJ', cndnjKq);
let cndV5PQ = !(cndnjKq);
this.setState('stdod2y', cndV5PQ);
if (cndnjKq) { 
let cmprb4q = this._lc('cb1od_Dwk', {parent:component,parentTop:layout,state:'stXe0cJ'});
}else { 
let elnHsPY = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let elqXD53 = eo('thead');
let el54CxG = eo('tr');
let el1PxhL = eo('th',null,null,`class`,`text-left`);
text(`User`);
ec('th');
let elRxI5h = eo('th');
text(`Gold`);
ec('th');
ec('tr');
ec('thead');
let elVb4oY = eo('tbody');
for (let index in component.users) {
let user = component.users[index]; 
 let iiCSc_ = 'B9TkUgJ' + index;
let elJQnWj = eo('tr','XzSY61e54nMw' + index+iiCSc_);
let elaO8s7 = eo('td','jLoff'+iiCSc_);
let elIM7Wc = eo('span','FCwff'+iiCSc_,null,`class`,`mr-1`);
let elPi2sO = eo('span','EIWff'+iiCSc_);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let elbI7rB = ev('img','V_Qff'+iiCSc_,null,`src`,`${userImage(user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(user)}`,`alt`,`${userName(user)}`);
let el_CmEZ = eo('span','ZPBff'+iiCSc_,null,`class`,`bold mr-1`);
el_CmEZ.cls = {'orange-text': user.id == component.user.id};

            for (let className in el_CmEZ.cls) {
                el_CmEZ.classList.toggle(className, el_CmEZ.cls[className]);
            }  
            text(userName(user));
ec('span');
let cmpYz2l = this._lc('ciYjfrVZa', {parent:component,parentTop:layout,props:{id:user.id},attrs:{id:`${user.id}`},state:'stdod2y',insideLoop:true,index:"" +iiCSc_});
ec('td');
let eljjfin = eo('td','HgAff'+iiCSc_,null,`class`,`total-reward`);
let cmpwoDU = this._lc('cH9_0qNM3', {parent:component,parentTop:layout,props:{coins:user.gold},state:'stdod2y',insideLoop:true,index:"" +iiCSc_});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });