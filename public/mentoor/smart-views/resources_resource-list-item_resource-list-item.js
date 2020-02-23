_Component({
                selector: 'resource-list-item',
                c: 'ResourceListItem', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resource','parent','index','isAboutToRemove','resourceStyle','resourcesTypes','viewResource'],
                children: {crNZg6FPu:'flk-time-ago',c1Q5npA1K:'markdown',cfx24Q2Zt:'flk-youtube-video',cJp6auVhi:'flk-alert',cVdYKx091:'flk-modal'},
                render: function (component) {
                    let elPgVW7 = eo('div',null,null,`class`,`simple-card resource`);
let cndhOTv = component.resource.pinned;
this.setState('stnlmp2', cndhOTv);
let cnd_OVh = component.resource.type == 'link';
this.setState('stQz1hQ', cnd_OVh);
if (cndhOTv) { 
let elP6A0H = eo('i','kXpf',null,`class`,`${fas('bookmark') + ' pinned icon'}`);
ec('i');
}let eljvvpH = eo('div',null,null,`class`,`row`);
let elJ7brz = eo('div',null,null,`class`,`col`);
let eltmI_G = eo('div',null,null,`class`,`float-right`);
let cndktIn = component.resource.canBeModified;
this.setState('stpJAb3', cndktIn);
if (cndktIn) { 
let elJHE2x = eo('button','r6gf',null, eventListeners, {onclick:[function(e) {var $el = this;component.parent.openModal(component.resource, component.index);}]},`type`,`button`,`class`,`gray-text bold`);
let elgJmr1 = eo('i','swof',null,`class`,`${fas('pen') + ' mr-2 icon'}`);
ec('i');
text(`Edit`);
ec('button');
}let cndwcIO = component.resource.canBeModified;
this.setState('stPfTz5', cndwcIO);
if (cndwcIO) { 
let eljVuHi = eo('button','Sgmf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isAboutToRemove = true}]},`type`,`button`,`class`,`gray-text bold`);
let ellM5lh = eo('i','eTof',null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}let el5kmJG = eo('div');
let el1rBAb = eo('button',null,null,`class`,`btn bold type`);
el1rBAb.cls = component.resourceStyle();

            for (let className in el1rBAb.cls) {
                el1rBAb.classList.toggle(className, el1rBAb.cls[className]);
            }  
            text(component.resourcesTypes[component.resource.type]);
ec('button');
ec('div');
ec('div');
let elJYTxa = ev('img',null,null,`src`,`${component.resource.createdBy.image}`,`class`,`img-thumbnail circle creator-image`,`title`,`${component.resource.createdBy.name}`,`alt`,`${component.resource.createdBy.name}`);
let ele2cAn = eo('div',null,null,`class`,`meta`);
let elPqG7T = eo('h3',null,null,`class`,`title`);
let elifTlC = eo('a',null,null,`href`,`${'resources/' + component.resource.id}`);
text(component.resource.title);
ec('a');
ec('h3');
let elyCYCi = eo('div',null,null,`class`,`created`);
let elr9hwa = eo('span',null,null,`class`,`by`);
text(`By`);
let ellwXR3 = eo('span');
text(component.resource.createdBy.name);
ec('span');
ec('span');
let cmpjFpr = this._lc('crNZg6FPu', {parent:component,props:{timestamp:component.resource.createdAt.timestamp},attrs:{class:'at'}});
ec('div');
ec('div');
ec('div');
ec('div');
let cndqxFJ = component.resource.description;
this.setState('st7_4Vf', cndqxFJ);
let cndKYUe = cnd_OVh;
this.setState('stNrw1Q', cndKYUe);
if (cndqxFJ) { 
let cmpRYw1 = this._lc('c1Q5npA1K', {parent:component,props:{content:component.resource.description},attrs:{class:'description'},state:'st7_4Vf'});
}let cndw8xH = component.resource.attachment;
this.setState('stMSGTX', cndw8xH);
let cndsXFb = cndKYUe;
this.setState('stTENHn', cndsXFb);
if (cndw8xH) { 
let elnlnSl = eo('div','PVKf',null,`class`,`attachment`);
let elwmsN_ = eo('h4','rtlf',null,`class`,`attachment-heading`);
text(`Attachment`);
ec('h4');
let cnd7S3M = component.resource.type == 'image';
this.setState('stBazmJ', cnd7S3M);
if (cnd7S3M) { 
let elZKEIo = eo('a','Gp6f',null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let elFCHHC = ev('img','tWTf',null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
}let cndVQFm = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('stnQYz8', cndVQFm);
if (cndVQFm) { 
let eltZwWZ = eo('a','BuAf',null,`href`,`${component.resource.attachment}`,`class`,`btn btn-teal bold`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
}ec('div');
}else if (cndsXFb) { 
let elInZ7W = eo('a',null,null,`href`,`${component.resource.settings.link}`,`target`,`_blank`,`class`,`btn btn-cyan bold`);
text(`Open Link`);
ec('a');
}let cndCX64 = component.resource.type == 'youtube';
this.setState('stbwmtf', cndCX64);
if (cndCX64) { 
let elpsulZ = eo('div','kauf',null,`class`,`text-center`);
let cmp58c_ = this._lc('cfx24Q2Zt', {parent:component,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`},style:{width:'100%',height:'400px'},state:'stbwmtf'});
ec('div');
}let cndcK0q = ['ftp', 'website', 'email'].includes(component.resource.type);
this.setState('stHyuku', cndcK0q);
if (cndcK0q) { 
let eliYEAJ = eo('button','nxzf',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewResource = true;}]},`class`,`btn bold`);
eliYEAJ.cls = component.resourceStyle();

            for (let className in eliYEAJ.cls) {
                eliYEAJ.classList.toggle(className, eliYEAJ.cls[className]);
            }  
            text(`View Details`);
ec('button');
}ec('div');
let cndoWe6 = component.isAboutToRemove;
this.setState('stLK6tT', cndoWe6);
if (cndoWe6) { 
let cmpWhY7 = this._lc('cJp6auVhi', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = false},onconfirm:function(e) {let $el = this; component.parent.remove(component.resource)}},attrs:{id:'view-resource-info'},state:'stLK6tT'});
}let cndw9Fo = component.viewResource;
this.setState('stQF6Jc', cndw9Fo);
if (cndw9Fo) { 
let cmpq9hP = this._lc('cVdYKx091', {parent:component,events:{onclose:function(e) {let $el = this; component.viewResource = null}},content:(flkModal) => {let cndffUD = component.resource.type == 'email';
this.setState('stJAjZU', cndffUD);
let cndmItL = component.resource.type == 'website';
this.setState('stimFo2', cndmItL);
let cnd6yvj = component.resource.type == 'ftp';
this.setState('stwRhfd', cnd6yvj);
if (cndffUD) { 
let elWFXFz = eo('h1','gpBf');
text(`Email Account Info 
        (`);
let elA6g7s = eo('span','nrvf');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elJLdob = eo('table','uSJf',null,`class`,`table table-bordered table-striped resource-table`);
let elZc5xj = eo('tbody','Kwif');
let el0TS5e = eo('tr','zeJf');
let elAIDFk = eo('th','fdsf');
text(`Webmail url`);
ec('th');
let elEvBjM = eo('th','MxIf');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elLqY7n = eo('tr','bv5f');
let el5oimx = eo('th','zJif');
text(`Email Address`);
ec('th');
let eldRv5v = eo('th','JiJf');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let elhbZq6 = eo('tr','cPhf');
let elylwMk = eo('th','zRsf');
text(`Password`);
ec('th');
let elxE3rZ = eo('th','ePmf');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndmItL) { 
let ellUxnM = eo('h1');
text(`${component.resource.settings.website.name} Website
        (`);
let eliUmZr = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let eljGiM3 = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elp50DX = eo('tbody');
let elBPmiw = eo('tr');
let elRdQTS = eo('th');
text(`Website`);
ec('th');
let eleaJ4n = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let elUP78S = eo('tr');
let elzei50 = eo('th');
text(`Website Url`);
ec('th');
let elQgukn = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let elB01Qo = eo('tr');
let elkOZ4t = eo('th');
text(`Username`);
ec('th');
let elUgM2d = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let elNWNwl = eo('tr');
let elGDjtr = eo('th');
text(`Password`);
ec('th');
let elCoeaM = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cnd6yvj) { 
let elgRKnF = eo('h1',null,null,`class`,`m-t-0`);
text(`FTP Account Info

        (`);
let el8d_nc = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elhsyy0 = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elsGY6f = eo('tbody');
let el2BGqd = eo('tr');
let elFg_PM = eo('th');
text(`FTP Host`);
ec('th');
let elXDOQU = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let elNXwYd = eo('tr');
let el39UUX = eo('th');
text(`FTP Username`);
ec('th');
let elOkLYv = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let el_NzOo = eo('tr');
let eljMG3N = eo('th');
text(`FTP password`);
ec('th');
let elkROcc = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let el5G89L = eo('tr');
let elVZkP_ = eo('th');
text(`FTP Port`);
ec('th');
let elOHZVX = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}},attrs:{size:'small',id:'view-resource-info'},state:'stQF6Jc'});
}
                    this.isReadyToGo();
                }
        });