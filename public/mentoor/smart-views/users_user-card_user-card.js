_Component({
                selector: 'user-card',
                c: 'UserCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user'],
                children: {cp8VqsSoo:'flk-spinner'},
                render: function (component) {
                    let ellQR0q = eo('div',null,null,`class`,`simple-card user-card`);
component.userCard = ellQR0q;
let cndaCwM = component.isLoading;
this.setState('stNfonl', cndaCwM);
let cndIOh8 = !(cndaCwM);
this.setState('stHu5Jc', cndIOh8);
if (cndaCwM) { 
let cmp8SS1 = this._lc('cp8VqsSoo', {parent:component,attrs:{theme:'black'},state:'stNfonl'});
}else { 
let elv5s60 = eo('div');
let el_cdes = ev('img',null,null,`src`,`${apiImageUrl(component.user.image)}`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let eljS9YH = eo('div',null,null,`class`,`meta`);
let el3znai = eo('span',null,null,`class`,`name`);
text(component.user.name);
ec('span');
let cndSSWF = component.user.username;
this.setState('styk50P', cndSSWF);
if (cndSSWF) { 
let elgP3DX = eo('span','3Bmf',null,`class`,`username`);
text('@' + component.user.username);
ec('span');
}ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });