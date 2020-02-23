_Component({
                selector: 'user-card',
                c: 'UserCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user'],
                children: {c73Ij3OAu:'flk-spinner'},
                render: function (component) {
                    let elQqKZt = eo('div',null,null,`class`,`simple-card user-card`);
component.userCard = elQqKZt;
let cndDs2d = component.isLoading;
this.setState('stI5fjh', cndDs2d);
let cndTLEF = !(cndDs2d);
this.setState('stF41Ab', cndTLEF);
if (cndDs2d) { 
let cmp8Bcm = this._lc('c73Ij3OAu', {parent:component,attrs:{theme:'black'},state:'stI5fjh'});
}else { 
let eliRdHa = eo('div');
let elFXTf8 = ev('img',null,null,`src`,`${apiImageUrl(component.user.image)}`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elRdY09 = eo('div',null,null,`class`,`meta`);
let eladooN = eo('span',null,null,`class`,`name`);
text(component.user.name);
ec('span');
let cndvsA4 = component.user.username;
this.setState('stpE_QG', cndvsA4);
if (cndvsA4) { 
let elqUR3o = eo('span','kNwf',null,`class`,`username`);
text('@' + component.user.username);
ec('span');
}ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });