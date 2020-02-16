_Component({
                selector: 'top-users-page',
                c: 'TopUsersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','isLoading','users','user'],
                children: {cXVEtUulu:'flk-spinner',c0IycCNvJ:'user-online',c86BKCQlO:'gold-icon',c4_QrM8dj:'layout'},
                render: function (component) {
                    let cmpYaDK = this._lc('c4_QrM8dj', {parent:component,content:(layout) => {let elKzkvg = eo('h1',null,null,`class`,`bold`);
text(trans(component.title));
ec('h1');
let cndwbVK = component.isLoading;
this.setState('stMPTYi', cndwbVK);
let cndhqZy = !(cndwbVK);
this.setState('stDFQVc', cndhqZy);
if (cndwbVK) { 
let cmpxwIf = this._lc('cXVEtUulu', {parent:component,parentTop:layout,state:'stMPTYi'});
}else { 
let elHYsWu = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let el9n70n = eo('thead');
let eloSqrJ = eo('tr');
let el1V4bQ = eo('th',null,null,`class`,`text-left`);
text(`User`);
ec('th');
let elYtIi8 = eo('th');
text(`Gold`);
ec('th');
ec('tr');
ec('thead');
let eluBouR = eo('tbody');
for (let index in component.users) {
let user = component.users[index]; 
 let iiLenK = 'Vrbcb_y' + index;
let eljvpMG = eo('tr','K2rEyaPeGeZJ' + index+iiLenK);
let el7v1di = eo('td','xgOff'+iiLenK);
let elRFpaD = eo('span','nRfff'+iiLenK,null,`class`,`mr-1`);
let elHx4Ag = eo('span','PwWff'+iiLenK);
text(Number(Number(index) + 1).format());
ec('span');
text(`-`);
ec('span');
let eld53tR = ev('img','_Apff'+iiLenK,null,`src`,`${userImage(user)}`,`class`,`u-image img-thumbnail`,`title`,`${userName(user)}`,`alt`,`${userName(user)}`);
let elHXYhq = eo('span','zeMff'+iiLenK,null,`class`,`bold mr-1`);
elHXYhq.cls = {'orange-text': user.id == component.user.id};

            for (let className in elHXYhq.cls) {
                elHXYhq.classList.toggle(className, elHXYhq.cls[className]);
            }  
            text(userName(user));
ec('span');
let cmpXbhU = this._lc('c0IycCNvJ', {parent:component,parentTop:layout,props:{id:user.id},attrs:{id:`${user.id}`},state:'stDFQVc',insideLoop:true,index:"" +iiLenK});
ec('td');
let elpqBEQ = eo('td','uUPff'+iiLenK,null,`class`,`total-reward`);
let cmpcxj1 = this._lc('c86BKCQlO', {parent:component,parentTop:layout,props:{coins:user.gold},state:'stDFQVc',insideLoop:true,index:"" +iiLenK});
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });