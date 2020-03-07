_Component({
                selector: 'user-card',
                c: 'UserCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user'],
                children: {c0biLS5oc:'flk-spinner'},
                render: function (component) {
                    let elDJAYL = eo('div',null,null,`class`,`simple-card user-card`);
component.userCard = elDJAYL;
let cndByYC = component.isLoading;
this.setState('stg50w6', cndByYC);
let cndXcgY = !(cndByYC);
this.setState('stVyZCw', cndXcgY);
if (cndByYC) { 
let cmprjRU = this._lc('c0biLS5oc', {parent:component,attrs:{theme:'black'},state:'stg50w6'});
}else { 
let eld8zJp = eo('div');
let elsT1c2 = ev('img',null,null,`src`,`${apiImageUrl(component.user.image)}`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elhK4dh = eo('div',null,null,`class`,`meta`);
let elq0cYt = eo('span',null,null,`class`,`name`);
text(component.user.name);
ec('span');
let cndCOgi = component.user.username;
this.setState('stJUX6K', cndCOgi);
if (cndCOgi) { 
let elDisk9 = eo('span','G2Vf',null,`class`,`username`);
text('@' + component.user.username);
ec('span');
}ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });