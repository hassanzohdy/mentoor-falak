_Component({
                selector: 'top-users-page',
                c: 'TopUsersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','isLoading','users','user'],
                children: {cWeesMTGS:'flk-spinner',cbSRQEq8Y:'user-online',cKq4wOfQ6:'gold-icon',cLB1Rsq48:'layout'},
                render: function (component) {
                    let cmpYBru = this._lc('cLB1Rsq48', {parent:component,content:(layout) => {let elRDY3q = eo('h1',null,null,`class`,`bold`);
text(trans(component.title));
ec('h1');
let cndHq_z = component.isLoading;
this.setState('stC3e4b', cndHq_z);
let cndZKxY = !(cndHq_z);
this.setState('stQ5k2j', cndZKxY);
if (cndHq_z) { 
let cmpJCMZ = this._lc('cWeesMTGS', {parent:component,parentTop:layout,state:'stC3e4b'});
}else { 
let elMDPu2 = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let eljhz40 = eo('thead');
let eltQVHV = eo('tr');
let elhVhnb = eo('th',null,null,`class`,`text-left`);
text(`User`);
ec('th');
let elZtVFO = eo('th');
text(`Gold`);
ec('th');
ec('tr');
ec('thead');
let elMkMto = eo('tbody');
for (let index in component.users) {
let user = component.users[index]; 
 let ii3_oZ = 'hdbRjEL' + index;
let elGz9rL = eo('tr','nuoMJ6Abg1K1' + index+ii3_oZ);
let el5x3yU = eo('td','rm_ff'+ii3_oZ);
let elh3yDj = eo('span','HkYff'+ii3_oZ,null,`class`,`mr-1`);
let elhWbyl = eo('span','T6Yff'+ii3_oZ);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let elBB2uV = ev('img','9vPff'+ii3_oZ,null,`src`,`${userImage(user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(user)}`,`alt`,`${userName(user)}`);
let el6eqsh = eo('span','vzBff'+ii3_oZ,null,`class`,`bold mr-1 ${cls({'orange-text': user.id == component.user.id})}`);
text(userName(user));
ec('span');
let cmpKrfJ = this._lc('cbSRQEq8Y', {parent:component,parentTop:layout,props:{id:user.id},attrs:{id:`${user.id}`},state:'stQ5k2j',insideLoop:true,index:"" +ii3_oZ});
ec('td');
let elOJ1by = eo('td','Benff'+ii3_oZ,null,`class`,`total-reward`);
let cmpR_Gn = this._lc('cKq4wOfQ6', {parent:component,parentTop:layout,props:{coins:user.gold},state:'stQ5k2j',insideLoop:true,index:"" +ii3_oZ});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });