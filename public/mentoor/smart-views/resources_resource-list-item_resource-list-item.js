_Component({
                selector: 'resource-list-item',
                c: 'ResourceListItem', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resource','parent','index','isAboutToRemove','resourceStyle','resourcesTypes','viewResource'],
                children: {cGytFPugP:'flk-time-ago',c1SzDGgj9:'markdown',cgZgZxZLG:'flk-youtube-video',c4buQeFR0:'flk-alert',cYyfvMRCW:'flk-modal'},
                render: function (component) {
                    let elBG0Sb = eo('div',null,null,`class`,`simple-card resource`);
let cndGfcS = component.resource.pinned;
this.setState('stnAeUX', cndGfcS);
let cnd98eG = component.resource.type == 'link';
this.setState('st45YJf', cnd98eG);
if (cndGfcS) { 
let elEpSk_ = eo('i','o9Df',null,`class`,`${fas('bookmark')} pinned icon`);
ec('i');
}let elZVsNu = eo('div',null,null,`class`,`row`);
let el6wiYn = eo('div',null,null,`class`,`col`);
let elRvr6e = eo('div',null,null,`class`,`float-right`);
let cnds0V6 = component.resource.canBeModified;
this.setState('stP3xk2', cnds0V6);
if (cnds0V6) { 
let elBcPWi = eo('button','ri2f',null, eventListeners, {onclick:[function(e) {var $el = this;component.parent.openModal(component.resource, component.index);}]},`type`,`button`,`class`,`gray-text bold`);
let ell2hOT = eo('i','f2Wf',null,`class`,`${fas('pen')} mr-2 icon`);
ec('i');
text(`Edit`);
ec('button');
}let cndm8Iw = component.resource.canBeModified;
this.setState('st_ipiW', cndm8Iw);
if (cndm8Iw) { 
let elpsVtB = eo('button','CwCf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isAboutToRemove = true}]},`type`,`button`,`class`,`gray-text bold`);
let el4h6WK = eo('i','jErf',null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
}let elr7XPr = eo('div');
let el1SPaO = eo('button',null,null,`class`,`btn bold type ${cls(component.resourceStyle())}`);
text(component.resourcesTypes[component.resource.type]);
ec('button');
ec('div');
ec('div');
let elQJRk8 = ev('img',null,null,`src`,`${component.resource.createdBy.image}`,`class`,`img-thumbnail circle creator-image`,`title`,`${component.resource.createdBy.name}`,`alt`,`${component.resource.createdBy.name}`);
let elrz3Qa = eo('div',null,null,`class`,`meta`);
let elpA8K4 = eo('h3',null,null,`class`,`title`);
let elOXMJN = eo('a',null,null,`href`,`${'resources/' + component.resource.id}`);
text(component.resource.title);
ec('a');
ec('h3');
let elsPDxI = eo('div',null,null,`class`,`created`);
let elJYWZH = eo('span',null,null,`class`,`by`);
text(`By`);
let el_A71x = eo('span');
text(component.resource.createdBy.name);
ec('span');
ec('span');
let cmpS_r_ = this._lc('cGytFPugP', {parent:component,props:{timestamp:component.resource.createdAt.timestamp},attrs:{class:'at'}});
ec('div');
ec('div');
ec('div');
ec('div');
let cnd2hh0 = component.resource.description;
this.setState('stg2CK6', cnd2hh0);
let cndyvNJ = cnd98eG;
this.setState('stBE1il', cndyvNJ);
if (cnd2hh0) { 
let cmpVRMy = this._lc('c1SzDGgj9', {parent:component,props:{content:component.resource.description},attrs:{class:'description'},state:'stg2CK6'});
}let cnd1KTB = component.resource.attachment;
this.setState('stH_uKW', cnd1KTB);
let cndGIS8 = cndyvNJ;
this.setState('stBVztG', cndGIS8);
if (cnd1KTB) { 
let elpLFiP = eo('div','b20f',null,`class`,`attachment`);
let elEaUqd = eo('h4','fUhf',null,`class`,`attachment-heading`);
text(`Attachment`);
ec('h4');
let cndxKHJ = component.resource.type == 'image';
this.setState('stnwb0z', cndxKHJ);
if (cndxKHJ) { 
let elHBY6l = eo('a','B31f',null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let elDwKqx = ev('img','L79f',null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
}let cndKpDq = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('stJRFEd', cndKpDq);
if (cndKpDq) { 
let elKcXvE = eo('a','tjnf',null,`href`,`${component.resource.attachment}`,`class`,`btn btn-teal bold`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
}ec('div');
}else if (cndGIS8) { 
let elNmqYB = eo('a',null,null,`href`,`${component.resource.settings.link}`,`target`,`_blank`,`class`,`btn btn-cyan bold`);
text(`Open Link`);
ec('a');
}let cnd9APq = component.resource.type == 'youtube';
this.setState('stln5Wo', cnd9APq);
if (cnd9APq) { 
let elJbLwH = eo('div','Fq1f',null,`class`,`text-center`);
let cmpW5PY = this._lc('cgZgZxZLG', {parent:component,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`},style:{width:'100%',height:'400px'},state:'stln5Wo'});
ec('div');
}let cnd5TFE = ['ftp', 'website', 'email'].includes(component.resource.type);
this.setState('stA3qmk', cnd5TFE);
if (cnd5TFE) { 
let elpwgsA = eo('button','uMyf',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewResource = true;}]},`class`,`btn bold ${cls(component.resourceStyle())}`);
text(`View Details`);
ec('button');
}ec('div');
let cndbQlg = component.isAboutToRemove;
this.setState('st6Bi3z', cndbQlg);
if (cndbQlg) { 
let cmpQ_KJ = this._lc('c4buQeFR0', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = false},onconfirm:function(e) {let $el = this; component.parent.remove(component.resource)}},attrs:{id:'view-resource-info'},state:'st6Bi3z'});
}let cndT3Gt = component.viewResource;
this.setState('stmliFZ', cndT3Gt);
if (cndT3Gt) { 
let cmp8VBv = this._lc('cYyfvMRCW', {parent:component,events:{onclose:function(e) {let $el = this; component.viewResource = null}},content:(flkModal) => {let cndYozb = component.resource.type == 'email';
this.setState('stnvgsK', cndYozb);
let cndHH0L = component.resource.type == 'website';
this.setState('stA5Srh', cndHH0L);
let cndzwGy = component.resource.type == 'ftp';
this.setState('st69v5c', cndzwGy);
if (cndYozb) { 
let el1Am3F = eo('h1','rIzf');
text(`Email Account Info 
        (`);
let elXqG5m = eo('span','tkNf');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elCjBEd = eo('table','wRCf',null,`class`,`table table-bordered table-striped resource-table`);
let elmyolP = eo('tbody','lEXf');
let elA0JdW = eo('tr','HOaf');
let elEsXw9 = eo('th','qDwf');
text(`Webmail url`);
ec('th');
let eluLQCu = eo('th','L_Bf');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elXf5W4 = eo('tr','SvYf');
let elc8mJA = eo('th','PRsf');
text(`Email Address`);
ec('th');
let el1QOYV = eo('th','S1Uf');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let elWtMnL = eo('tr','S1lf');
let elCGGMQ = eo('th','Trnf');
text(`Password`);
ec('th');
let elIxswa = eo('th','l8Qf');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndHH0L) { 
let elUA4h2 = eo('h1');
text(`${component.resource.settings.website.name} Website
        (`);
let el3NAca = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elOnq8V = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elR9GEZ = eo('tbody');
let elzDtKC = eo('tr');
let elxu3gU = eo('th');
text(`Website`);
ec('th');
let elQro0E = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let elOyHzu = eo('tr');
let el7Vou8 = eo('th');
text(`Website Url`);
ec('th');
let elabDfx = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let eletyos = eo('tr');
let elQjrz1 = eo('th');
text(`Username`);
ec('th');
let elZTN6i = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let el_VWkw = eo('tr');
let elB9Ot_ = eo('th');
text(`Password`);
ec('th');
let elmicvI = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndzwGy) { 
let elY7xKg = eo('h1',null,null,`class`,`m-t-0`);
text(`FTP Account Info

        (`);
let elgg7mb = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let el1dyzk = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let el5vTXY = eo('tbody');
let elMDGRP = eo('tr');
let elw7_MC = eo('th');
text(`FTP Host`);
ec('th');
let elWjdQ1 = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let elrDlN3 = eo('tr');
let elgzRi7 = eo('th');
text(`FTP Username`);
ec('th');
let elwubUn = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elVXXPb = eo('tr');
let eln0c0k = eo('th');
text(`FTP password`);
ec('th');
let elbWXJf = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let elxQrnl = eo('tr');
let el2UwdK = eo('th');
text(`FTP Port`);
ec('th');
let elq0SZp = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}},attrs:{size:'small',id:'view-resource-info'},state:'stmliFZ'});
}
                    this.isReadyToGo();
                }
        });