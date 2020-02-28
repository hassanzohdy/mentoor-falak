_Component({
                selector: 'user-card',
                c: 'UserCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user'],
                children: {c1lupaMac:'flk-spinner'},
                render: function (component) {
                    let elAq1xY = eo('div',null,null,`class`,`simple-card user-card`);
component.userCard = elAq1xY;
let cndgcOD = component.isLoading;
this.setState('stCvMW9', cndgcOD);
let cnd0XcR = !(cndgcOD);
this.setState('styXBNi', cnd0XcR);
if (cndgcOD) { 
let cmpeZ8f = this._lc('c1lupaMac', {parent:component,attrs:{theme:'black'},state:'stCvMW9'});
}else { 
let elo6c3F = eo('div');
let elUeqFl = ev('img',null,null,`src`,`${apiImageUrl(component.user.image)}`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elmFPkT = eo('div',null,null,`class`,`meta`);
let elv8E1a = eo('span',null,null,`class`,`name`);
text(component.user.name);
ec('span');
let cndPyXU = component.user.username;
this.setState('stcdbs9', cndPyXU);
if (cndPyXU) { 
let elNaPWv = eo('span','Etkf',null,`class`,`username`);
text('@' + component.user.username);
ec('span');
}ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });