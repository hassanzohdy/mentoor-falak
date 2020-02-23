_Component({
                selector: 'user-card',
                c: 'UserCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user'],
                children: {cfz_gC5AG:'flk-spinner'},
                render: function (component) {
                    let elcdKlF = eo('div',null,null,`class`,`simple-card user-card`);
component.userCard = elcdKlF;
let cndKif7 = component.isLoading;
this.setState('stFuUuc', cndKif7);
let cnd2FY3 = !(cndKif7);
this.setState('stLsWq7', cnd2FY3);
if (cndKif7) { 
let cmptXkQ = this._lc('cfz_gC5AG', {parent:component,attrs:{theme:'black'},state:'stFuUuc'});
}else { 
let elGqp77 = eo('div');
let el4iPIz = ev('img',null,null,`src`,`${apiImageUrl(component.user.image)}`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elgf9Yl = eo('div',null,null,`class`,`meta`);
let elr527g = eo('span',null,null,`class`,`name`);
text(component.user.name);
ec('span');
let cnd1Zul = component.user.username;
this.setState('st_zACv', cnd1Zul);
if (cnd1Zul) { 
let elRbewS = eo('span','CYtf',null,`class`,`username`);
text('@' + component.user.username);
ec('span');
}ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });