_Component({
                selector: 'user-card',
                c: 'UserCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user'],
                children: {cAPiHLidU:'flk-spinner'},
                render: function (component) {
                    let eliw5K6 = eo('div',null,null,`class`,`simple-card user-card`);
component.userCard = eliw5K6;
let cndY4cz = component.isLoading;
this.setState('stZ4Nye', cndY4cz);
let cndvE60 = !(cndY4cz);
this.setState('st3l0cj', cndvE60);
if (cndY4cz) { 
let cmpf1UV = this._lc('cAPiHLidU', {parent:component,attrs:{theme:'black'},state:'stZ4Nye'});
}else { 
let elpNdwE = eo('div');
let elflCLi = ev('img',null,null,`src`,`${apiImageUrl(component.user.image)}`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elsSSv0 = eo('div',null,null,`class`,`meta`);
let elLrJ5c = eo('span',null,null,`class`,`name`);
text(component.user.name);
ec('span');
let cndo8jw = component.user.username;
this.setState('stTn4Gq', cndo8jw);
if (cndo8jw) { 
let elQE5E4 = eo('span','TaMf',null,`class`,`username`);
text('@' + component.user.username);
ec('span');
}ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });