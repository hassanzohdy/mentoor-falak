_Component({
                selector: 'resource-list-item',
                c: 'ResourceListItem', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resource','parent','index','isAboutToRemove','resourceStyle','resourcesTypes','viewResource'],
                children: {cNevDNM42:'flk-time-ago',cD24mNIlH:'markdown',c7jZ0k6E6:'flk-youtube-video',cKyedAZSj:'flk-alert',cZqkpCgFT:'flk-modal'},
                render: function (component) {
                    let elASNzP = eo('div',null,null,`class`,`simple-card resource`);
let cndkKUk = component.resource.pinned;
this.setState('sth3kZf', cndkKUk);
let cndsrsw = component.resource.type == 'link';
this.setState('stNW4LN', cndsrsw);
if (cndkKUk) { 
let elbVFgA = eo('i','8_qf',null,`class`,`${fas('bookmark') + ' pinned icon'}`);
ec('i');
}let el7lftv = eo('div',null,null,`class`,`row`);
let elaq5UD = eo('div',null,null,`class`,`col`);
let elG_1Y4 = eo('div',null,null,`class`,`float-right`);
let cndon11 = component.resource.canBeModified;
this.setState('stmLBVq', cndon11);
if (cndon11) { 
let el6bKCq = eo('button','gduf',null, eventListeners, {onclick:[function(e) {var $el = this;component.parent.openModal(component.resource, component.index);}]},`type`,`button`,`class`,`gray-text bold`);
let elGDgGX = eo('i','Bzef',null,`class`,`${fas('pen') + ' mr-2 icon'}`);
ec('i');
text(`Edit`);
ec('button');
}let cndw1lO = component.resource.canBeModified;
this.setState('stYAZqM', cndw1lO);
if (cndw1lO) { 
let elJezkO = eo('button','dxuf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isAboutToRemove = true}]},`type`,`button`,`class`,`gray-text bold`);
let elszIqd = eo('i','Cxtf',null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}let elJq3zv = eo('div');
let eli1rF0 = eo('button',null,null,`class`,`btn bold type`);
eli1rF0.cls = component.resourceStyle();

            for (let className in eli1rF0.cls) {
                eli1rF0.classList.toggle(className, eli1rF0.cls[className]);
            }  
            text(component.resourcesTypes[component.resource.type]);
ec('button');
ec('div');
ec('div');
let elPAg4K = ev('img',null,null,`src`,`${component.resource.createdBy.image}`,`class`,`img-thumbnail circle creator-image`,`title`,`${component.resource.createdBy.name}`,`alt`,`${component.resource.createdBy.name}`);
let elT9GvV = eo('div',null,null,`class`,`meta`);
let eljquD0 = eo('h3',null,null,`class`,`title`);
let elGsipK = eo('a',null,null,`href`,`${'resources/' + component.resource.id}`);
text(component.resource.title);
ec('a');
ec('h3');
let elUBnuW = eo('div',null,null,`class`,`created`);
let el7Kbqe = eo('span',null,null,`class`,`by`);
text(`By`);
let elLQDVv = eo('span');
text(component.resource.createdBy.name);
ec('span');
ec('span');
let cmpUXPN = this._lc('cNevDNM42', {parent:component,props:{timestamp:component.resource.createdAt.timestamp},attrs:{class:'at'}});
ec('div');
ec('div');
ec('div');
ec('div');
let cnduujm = component.resource.description;
this.setState('stR1wRt', cnduujm);
let cndH2Qi = cndsrsw;
this.setState('stT2jfq', cndH2Qi);
if (cnduujm) { 
let cmppkjw = this._lc('cD24mNIlH', {parent:component,props:{content:component.resource.description},attrs:{class:'description'},state:'stR1wRt'});
}let cndZA8v = component.resource.attachment;
this.setState('stXhDu5', cndZA8v);
let cndc4Ed = cndH2Qi;
this.setState('stoukS_', cndc4Ed);
if (cndZA8v) { 
let ely7lmE = eo('div','Unhf',null,`class`,`attachment`);
let elKjTTe = eo('h4','vTNf',null,`class`,`attachment-heading`);
text(`Attachment`);
ec('h4');
let cndRGIu = component.resource.type == 'image';
this.setState('stnGkI3', cndRGIu);
if (cndRGIu) { 
let eloZZay = eo('a','CCyf',null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let el0HI4t = ev('img','CVif',null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
}let cndz0vl = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('stCZ7QX', cndz0vl);
if (cndz0vl) { 
let elJd7Yn = eo('a','8CKf',null,`href`,`${component.resource.attachment}`,`class`,`btn btn-teal bold`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
}ec('div');
}else if (cndc4Ed) { 
let el3isbe = eo('a',null,null,`href`,`${component.resource.settings.link}`,`target`,`_blank`,`class`,`btn btn-cyan bold`);
text(`Open Link`);
ec('a');
}let cnd8fR0 = component.resource.type == 'youtube';
this.setState('stNLKSN', cnd8fR0);
if (cnd8fR0) { 
let elJCEyf = eo('div','s62f',null,`class`,`text-center`);
let cmpcAGv = this._lc('c7jZ0k6E6', {parent:component,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`},style:{width:'100%',height:'400px'},state:'stNLKSN'});
ec('div');
}let cndIlBK = ['ftp', 'website', 'email'].includes(component.resource.type);
this.setState('sthFhiG', cndIlBK);
if (cndIlBK) { 
let elQJ9ru = eo('button','YDTf',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewResource = true;}]},`class`,`btn bold`);
elQJ9ru.cls = component.resourceStyle();

            for (let className in elQJ9ru.cls) {
                elQJ9ru.classList.toggle(className, elQJ9ru.cls[className]);
            }  
            text(`View Details`);
ec('button');
}ec('div');
let cndc8fj = component.isAboutToRemove;
this.setState('stExHDx', cndc8fj);
if (cndc8fj) { 
let cmpgDRJ = this._lc('cKyedAZSj', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = false},onconfirm:function(e) {let $el = this; component.parent.remove(component.resource)}},attrs:{id:'view-resource-info'},state:'stExHDx'});
}let cnddQJJ = component.viewResource;
this.setState('stIyfdn', cnddQJJ);
if (cnddQJJ) { 
let cmp14HD = this._lc('cZqkpCgFT', {parent:component,events:{onclose:function(e) {let $el = this; component.viewResource = null}},content:(flkModal) => {let cnd2h3B = component.resource.type == 'email';
this.setState('stoVb85', cnd2h3B);
let cndpbdE = component.resource.type == 'website';
this.setState('stuHSeL', cndpbdE);
let cnd0LDo = component.resource.type == 'ftp';
this.setState('stwCqAy', cnd0LDo);
if (cnd2h3B) { 
let elOY2FG = eo('h1','gGvf');
text(`Email Account Info 
        (`);
let elX22PV = eo('span','2uMf');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elOgvvm = eo('table','cb6f',null,`class`,`table table-bordered table-striped resource-table`);
let elwn7ba = eo('tbody','DmUf');
let elyKPYz = eo('tr','a8Yf');
let els6NCL = eo('th','Sywf');
text(`Webmail url`);
ec('th');
let elfwBZF = eo('th','WgZf');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elKBtR4 = eo('tr','qJOf');
let elsl3w0 = eo('th','xJSf');
text(`Email Address`);
ec('th');
let el1GtM5 = eo('th','Bm1f');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let elbwJxn = eo('tr','_43f');
let elSVV2h = eo('th','osVf');
text(`Password`);
ec('th');
let elym7kL = eo('th','DgEf');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndpbdE) { 
let elVIc4T = eo('h1');
text(`${component.resource.settings.website.name} Website
        (`);
let el0Kzwu = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let eluqEhN = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let eloqUqC = eo('tbody');
let elT9pz4 = eo('tr');
let elRxG9m = eo('th');
text(`Website`);
ec('th');
let elLq7rT = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let elpr8vx = eo('tr');
let elRpuHD = eo('th');
text(`Website Url`);
ec('th');
let eliLSny = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let elcfs6j = eo('tr');
let elxCXnU = eo('th');
text(`Username`);
ec('th');
let elRxGnl = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let el_tmb7 = eo('tr');
let elxxlaH = eo('th');
text(`Password`);
ec('th');
let el4Gm7p = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cnd0LDo) { 
let elzAh1p = eo('h1',null,null,`class`,`m-t-0`);
text(`FTP Account Info

        (`);
let el8YFQK = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elA4eQk = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elBY7f_ = eo('tbody');
let elb0b6p = eo('tr');
let elUP7mf = eo('th');
text(`FTP Host`);
ec('th');
let elZzKzj = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let elaPqNl = eo('tr');
let elkypBM = eo('th');
text(`FTP Username`);
ec('th');
let elF_6Oc = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elxItXB = eo('tr');
let elBBUqd = eo('th');
text(`FTP password`);
ec('th');
let elE5bJJ = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let el3YguO = eo('tr');
let el2dzA0 = eo('th');
text(`FTP Port`);
ec('th');
let elghGE1 = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}},attrs:{size:'small',id:'view-resource-info'},state:'stIyfdn'});
}
                    this.isReadyToGo();
                }
        });