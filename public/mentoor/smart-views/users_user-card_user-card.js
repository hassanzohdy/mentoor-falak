_Component({
                selector: 'user-card',
                c: 'UserCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user'],
                children: {c2tLFPXzZ:'flk-spinner'},
                render: function (component) {
                    let elAFpFE = eo('div',null,null,`class`,`simple-card user-card`);
component.userCard = elAFpFE;
let cndRQH3 = component.isLoading;
this.setState('stoyDuN', cndRQH3);
let cndHO7a = !(cndRQH3);
this.setState('st4rKk4', cndHO7a);
if (cndRQH3) { 
let cmpT8q7 = this._lc('c2tLFPXzZ', {parent:component,attrs:{theme:'black'},state:'stoyDuN'});
}else { 
let el7vq77 = eo('div');
let elOctpI = ev('img',null,null,`src`,`${apiImageUrl(component.user.image)}`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elA1rXs = eo('div',null,null,`class`,`meta`);
let elDCzI7 = eo('span',null,null,`class`,`name`);
text(component.user.name);
ec('span');
let cndyvi0 = component.user.username;
this.setState('st2uLsY', cndyvi0);
if (cndyvi0) { 
let elMsakT = eo('span','zp1f',null,`class`,`username`);
text('@' + component.user.username);
ec('span');
}ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });