_Component({
                selector: 'user-card',
                c: 'UserCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user'],
                children: {cm5NH9aHA:'flk-spinner'},
                render: function (component) {
                    let elilpSd = eo('div',null,null,`class`,`simple-card user-card`);
component.userCard = elilpSd;
let cndntdW = component.isLoading;
this.setState('stcGHfa', cndntdW);
let cndufLp = !(cndntdW);
this.setState('st5ABib', cndufLp);
if (cndntdW) { 
let cmpPHKx = this._lc('cm5NH9aHA', {parent:component,attrs:{theme:'black'},state:'stcGHfa'});
}else { 
let elZZjjd = eo('div');
let elm_aRW = ev('img',null,null,`src`,`${apiImageUrl(component.user.image)}`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elEJ2vm = eo('div',null,null,`class`,`meta`);
let elnSojq = eo('span',null,null,`class`,`name`);
text(component.user.name);
ec('span');
let cnd7Yr6 = component.user.username;
this.setState('stW7vCH', cnd7Yr6);
if (cnd7Yr6) { 
let elL5zKZ = eo('span','2AKf',null,`class`,`username`);
text('@' + component.user.username);
ec('span');
}ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });