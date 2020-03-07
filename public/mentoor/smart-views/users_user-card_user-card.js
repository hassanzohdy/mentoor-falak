_Component({
                selector: 'user-card',
                c: 'UserCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user'],
                children: {cljyDUwCl:'flk-spinner'},
                render: function (component) {
                    let elfENTB = eo('div',null,null,`class`,`simple-card user-card`);
component.userCard = elfENTB;
let cndINUb = component.isLoading;
this.setState('stBxhcw', cndINUb);
let cndLNiy = !(cndINUb);
this.setState('st5MUe8', cndLNiy);
if (cndINUb) { 
let cmpFumr = this._lc('cljyDUwCl', {parent:component,attrs:{theme:'black'},state:'stBxhcw'});
}else { 
let eldDt4u = eo('div');
let elTzC0t = ev('img',null,null,`src`,`${apiImageUrl(component.user.image)}`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elzDIVW = eo('div',null,null,`class`,`meta`);
let elc1vEi = eo('span',null,null,`class`,`name`);
text(component.user.name);
ec('span');
let cnd1U1E = component.user.username;
this.setState('stjqmNX', cnd1U1E);
if (cnd1U1E) { 
let elnlaOH = eo('span','_d_f',null,`class`,`username`);
text('@' + component.user.username);
ec('span');
}ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });