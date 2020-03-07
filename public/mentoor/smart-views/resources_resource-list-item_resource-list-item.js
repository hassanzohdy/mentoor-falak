_Component({
                selector: 'resource-list-item',
                c: 'ResourceListItem', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resource','parent','index','isAboutToRemove','resourceStyle','resourcesTypes','viewResource'],
                children: {c2uOVPszx:'flk-time-ago',cyxUaFnkY:'markdown',c7aEqqNiy:'flk-youtube-video',c8gBlw_q4:'flk-alert',c97Qw5Z2I:'flk-modal'},
                render: function (component) {
                    let elRD_bW = eo('div',null,null,`class`,`simple-card resource`);
let cndlIFs = component.resource.pinned;
this.setState('stXCjrk', cndlIFs);
let cndH5Zq = component.resource.type == 'link';
this.setState('steHq_X', cndH5Zq);
if (cndlIFs) { 
let elj3fKZ = eo('i','kQNf',null,`class`,`${fas('bookmark')} pinned icon`);
ec('i');
}let elbNO_t = eo('div',null,null,`class`,`row`);
let elPo88Q = eo('div',null,null,`class`,`col`);
let elNjaVP = eo('div',null,null,`class`,`float-right`);
let cndxqhh = component.resource.canBeModified;
this.setState('st_WI1P', cndxqhh);
if (cndxqhh) { 
let el9KA5K = eo('button','Ejtf',null, eventListeners, {onclick:[function(e) {var $el = this;component.parent.openModal(component.resource, component.index);}]},`type`,`button`,`class`,`gray-text bold`);
let elN8nHt = eo('i','9zTf',null,`class`,`${fas('pen')} mr-2 icon`);
ec('i');
text(`Edit`);
ec('button');
}let cndx_iH = component.resource.canBeModified;
this.setState('stRaKnJ', cndx_iH);
if (cndx_iH) { 
let elw2NOs = eo('button','XImf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isAboutToRemove = true}]},`type`,`button`,`class`,`gray-text bold`);
let el2Htd8 = eo('i','SWhf',null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
}let eleO3qt = eo('div');
let elSodmk = eo('button',null,null,`class`,`btn bold type ${cls(component.resourceStyle())}`);
text(component.resourcesTypes[component.resource.type]);
ec('button');
ec('div');
ec('div');
let elbjBud = ev('img',null,null,`src`,`${component.resource.createdBy.image}`,`class`,`img-thumbnail circle creator-image`,`title`,`${component.resource.createdBy.name}`,`alt`,`${component.resource.createdBy.name}`);
let elEzYAp = eo('div',null,null,`class`,`meta`);
let eli4vcE = eo('h3',null,null,`class`,`title`);
let el46_Ad = eo('a',null,null,`href`,`${'resources/' + component.resource.id}`);
text(component.resource.title);
ec('a');
ec('h3');
let eltS98J = eo('div',null,null,`class`,`created`);
let elEJN8v = eo('span',null,null,`class`,`by`);
text(`By`);
let elTx_cR = eo('span');
text(component.resource.createdBy.name);
ec('span');
ec('span');
let cmpxqmz = this._lc('c2uOVPszx', {parent:component,props:{timestamp:component.resource.createdAt.timestamp},attrs:{class:'at'}});
ec('div');
ec('div');
ec('div');
ec('div');
let cndBjo4 = component.resource.description;
this.setState('stH8odj', cndBjo4);
let cndHCYL = cndH5Zq;
this.setState('stz02x5', cndHCYL);
if (cndBjo4) { 
let cmpwcBe = this._lc('cyxUaFnkY', {parent:component,props:{content:component.resource.description},attrs:{class:'description'},state:'stH8odj'});
}let cndjWq2 = component.resource.attachment;
this.setState('sthdflJ', cndjWq2);
let cnd_ahO = cndHCYL;
this.setState('stNKFR4', cnd_ahO);
if (cndjWq2) { 
let elQXFGI = eo('div','lRQf',null,`class`,`attachment`);
let elnlCu5 = eo('h4','azxf',null,`class`,`attachment-heading`);
text(`Attachment`);
ec('h4');
let cndkp5R = component.resource.type == 'image';
this.setState('stbsd5x', cndkp5R);
if (cndkp5R) { 
let elSFuFW = eo('a','GyLf',null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let elauwaq = ev('img','C5Jf',null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
}let cndflFv = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('stN5CpZ', cndflFv);
if (cndflFv) { 
let el3IRam = eo('a','QCzf',null,`href`,`${component.resource.attachment}`,`class`,`btn btn-teal bold`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
}ec('div');
}else if (cnd_ahO) { 
let elcd4E_ = eo('a',null,null,`href`,`${component.resource.settings.link}`,`target`,`_blank`,`class`,`btn btn-cyan bold`);
text(`Open Link`);
ec('a');
}let cndCc1F = component.resource.type == 'youtube';
this.setState('stqMpbG', cndCc1F);
if (cndCc1F) { 
let eljKYmj = eo('div','KBGf',null,`class`,`text-center`);
let cmp5Cua = this._lc('c7aEqqNiy', {parent:component,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`,width:'100%',height:'400px'},state:'stqMpbG'});
ec('div');
}let cndceAd = ['ftp', 'website', 'email'].includes(component.resource.type);
this.setState('stKWDYh', cndceAd);
if (cndceAd) { 
let elEOMYx = eo('button','Hxff',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewResource = true;}]},`class`,`btn bold ${cls(component.resourceStyle())}`);
text(`View Details`);
ec('button');
}ec('div');
let cndM5fn = component.isAboutToRemove;
this.setState('stERPA6', cndM5fn);
if (cndM5fn) { 
let cmpteb7 = this._lc('c8gBlw_q4', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = false},onconfirm:function(e) {let $el = this; component.parent.remove(component.resource)}},attrs:{id:'view-resource-info'},state:'stERPA6'});
}let cndzuhe = component.viewResource;
this.setState('stiqNfm', cndzuhe);
if (cndzuhe) { 
let cmpWtdy = this._lc('c97Qw5Z2I', {parent:component,events:{onclose:function(e) {let $el = this; component.viewResource = null}},content:(flkModal) => {let cndqH59 = component.resource.type == 'email';
this.setState('stJNPyO', cndqH59);
let cndMwBa = component.resource.type == 'website';
this.setState('stp1CyH', cndMwBa);
let cndlUNU = component.resource.type == 'ftp';
this.setState('stRYzNG', cndlUNU);
if (cndqH59) { 
let elufJE9 = eo('h1','bzIf');
text(`Email Account Info 
        (`);
let elFuGB3 = eo('span','xGof');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elGL9EW = eo('table','ApAf',null,`class`,`table table-bordered table-striped resource-table`);
let elfwUYG = eo('tbody','I6Yf');
let el6dHHB = eo('tr','wSPf');
let el8oGwG = eo('th','4XNf');
text(`Webmail url`);
ec('th');
let el8kZkd = eo('th','RTof');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elPQWQg = eo('tr','0ISf');
let elkxJuu = eo('th','uzDf');
text(`Email Address`);
ec('th');
let elMEd0Y = eo('th','uklf');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let el3AGNI = eo('tr','vduf');
let eludV2o = eo('th','PjGf');
text(`Password`);
ec('th');
let elikcP6 = eo('th','Fs3f');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndMwBa) { 
let elUhhSF = eo('h1');
text(`${component.resource.settings.website.name} Website
        (`);
let elUYC9d = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let el0Wrhe = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let el96Gkf = eo('tbody');
let ele0FZ7 = eo('tr');
let elfgjpJ = eo('th');
text(`Website`);
ec('th');
let elew3rl = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let elldCp7 = eo('tr');
let elTvmTi = eo('th');
text(`Website Url`);
ec('th');
let eldpbDr = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let el0YBr4 = eo('tr');
let elLNRX6 = eo('th');
text(`Username`);
ec('th');
let elfecZg = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let elkS400 = eo('tr');
let elyX6fx = eo('th');
text(`Password`);
ec('th');
let elu6dxr = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndlUNU) { 
let elF7_ez = eo('h1',null,null,`class`,`m-t-0`);
text(`FTP Account Info

        (`);
let elXUOB7 = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let el6ami_ = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let el3akyv = eo('tbody');
let elzFBdw = eo('tr');
let elQiyPr = eo('th');
text(`FTP Host`);
ec('th');
let elvROPl = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let el05Mrj = eo('tr');
let elbK7OB = eo('th');
text(`FTP Username`);
ec('th');
let elydTot = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elES5WT = eo('tr');
let elGiS1c = eo('th');
text(`FTP password`);
ec('th');
let el8l3yR = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let elkKH_l = eo('tr');
let elwHMfd = eo('th');
text(`FTP Port`);
ec('th');
let eldNLAk = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}},attrs:{size:'small',id:'view-resource-info'},state:'stiqNfm'});
}
                    this.isReadyToGo();
                }
        });