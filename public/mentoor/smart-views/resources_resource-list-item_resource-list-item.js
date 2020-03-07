_Component({
                selector: 'resource-list-item',
                c: 'ResourceListItem', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resource','parent','index','isAboutToRemove','resourceStyle','resourcesTypes','viewResource'],
                children: {csDQpemtf:'flk-time-ago',cvzuONsWq:'markdown',c7dBH3ey2:'flk-youtube-video',cS8mYgPGE:'flk-alert',c9g7ERmxP:'flk-modal'},
                render: function (component) {
                    let elvR_7i = eo('div',null,null,`class`,`simple-card resource`);
let cndP5cD = component.resource.pinned;
this.setState('stQ6zFt', cndP5cD);
let cndPTrD = component.resource.type == 'link';
this.setState('st4BJo8', cndPTrD);
if (cndP5cD) { 
let elXnep_ = eo('i','6WMf',null,`class`,`${fas('bookmark')} pinned icon`);
ec('i');
}let elWIqSW = eo('div',null,null,`class`,`row`);
let elgMv5n = eo('div',null,null,`class`,`col`);
let elFXCpE = eo('div',null,null,`class`,`float-right`);
let cndNcQk = component.resource.canBeModified;
this.setState('stbOwgZ', cndNcQk);
if (cndNcQk) { 
let elDyAtt = eo('button','SGYf',null, eventListeners, {onclick:[function(e) {var $el = this;component.parent.openModal(component.resource, component.index);}]},`type`,`button`,`class`,`gray-text bold`);
let elPbo61 = eo('i','Hj9f',null,`class`,`${fas('pen')} mr-2 icon`);
ec('i');
text(`Edit`);
ec('button');
}let cnd08Lz = component.resource.canBeModified;
this.setState('stJQhfn', cnd08Lz);
if (cnd08Lz) { 
let elEVNLF = eo('button','wwVf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isAboutToRemove = true}]},`type`,`button`,`class`,`gray-text bold`);
let el7stkt = eo('i','8xcf',null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
}let el8GQES = eo('div');
let elxtEtY = eo('button',null,null,`class`,`btn bold type ${cls(component.resourceStyle())}`);
text(component.resourcesTypes[component.resource.type]);
ec('button');
ec('div');
ec('div');
let elyxWrf = ev('img',null,null,`src`,`${component.resource.createdBy.image}`,`class`,`img-thumbnail circle creator-image`,`title`,`${component.resource.createdBy.name}`,`alt`,`${component.resource.createdBy.name}`);
let el6CQqz = eo('div',null,null,`class`,`meta`);
let eldfism = eo('h3',null,null,`class`,`title`);
let el7gNdm = eo('a',null,null,`href`,`${'resources/' + component.resource.id}`);
text(component.resource.title);
ec('a');
ec('h3');
let elqUjEE = eo('div',null,null,`class`,`created`);
let elBqTqp = eo('span',null,null,`class`,`by`);
text(`By`);
let elCAbSs = eo('span');
text(component.resource.createdBy.name);
ec('span');
ec('span');
let cmpJFfG = this._lc('csDQpemtf', {parent:component,props:{timestamp:component.resource.createdAt.timestamp},attrs:{class:'at'}});
ec('div');
ec('div');
ec('div');
ec('div');
let cnd9bvq = component.resource.description;
this.setState('strZZwJ', cnd9bvq);
let cndcYJl = cndPTrD;
this.setState('stWH3df', cndcYJl);
if (cnd9bvq) { 
let cmpNxE2 = this._lc('cvzuONsWq', {parent:component,props:{content:component.resource.description},attrs:{class:'description'},state:'strZZwJ'});
}let cnd4AE0 = component.resource.attachment;
this.setState('stbo1bs', cnd4AE0);
let cndC3Vu = cndcYJl;
this.setState('st0omcJ', cndC3Vu);
if (cnd4AE0) { 
let elPAGyT = eo('div','W6Yf',null,`class`,`attachment`);
let elo1g84 = eo('h4','lJHf',null,`class`,`attachment-heading`);
text(`Attachment`);
ec('h4');
let cndRIzN = component.resource.type == 'image';
this.setState('stNdRSS', cndRIzN);
if (cndRIzN) { 
let el5KfER = eo('a','1bUf',null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let elTMBFO = ev('img','thaf',null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
}let cndgGyF = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('sts17fK', cndgGyF);
if (cndgGyF) { 
let el6kG0g = eo('a','AcFf',null,`href`,`${component.resource.attachment}`,`class`,`btn btn-teal bold`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
}ec('div');
}else if (cndC3Vu) { 
let elkLiMi = eo('a',null,null,`href`,`${component.resource.settings.link}`,`target`,`_blank`,`class`,`btn btn-cyan bold`);
text(`Open Link`);
ec('a');
}let cndaTOt = component.resource.type == 'youtube';
this.setState('stLM67h', cndaTOt);
if (cndaTOt) { 
let els7TGw = eo('div','d_Tf',null,`class`,`text-center`);
let cmpKy5G = this._lc('c7dBH3ey2', {parent:component,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`,width:'100%',height:'400px'},state:'stLM67h'});
ec('div');
}let cndNYcT = ['ftp', 'website', 'email'].includes(component.resource.type);
this.setState('stHFeFV', cndNYcT);
if (cndNYcT) { 
let elcTNoh = eo('button','5zif',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewResource = true;}]},`class`,`btn bold ${cls(component.resourceStyle())}`);
text(`View Details`);
ec('button');
}ec('div');
let cndcL2y = component.isAboutToRemove;
this.setState('stSMY27', cndcL2y);
if (cndcL2y) { 
let cmpA93b = this._lc('cS8mYgPGE', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = false},onconfirm:function(e) {let $el = this; component.parent.remove(component.resource)}},attrs:{id:'view-resource-info'},state:'stSMY27'});
}let cndamwO = component.viewResource;
this.setState('styhUL3', cndamwO);
if (cndamwO) { 
let cmppgRn = this._lc('c9g7ERmxP', {parent:component,events:{onclose:function(e) {let $el = this; component.viewResource = null}},content:(flkModal) => {let cnd4xHY = component.resource.type == 'email';
this.setState('stIvg3w', cnd4xHY);
let cndlvAN = component.resource.type == 'website';
this.setState('stvXLk7', cndlvAN);
let cndsIA8 = component.resource.type == 'ftp';
this.setState('stOBUNV', cndsIA8);
if (cnd4xHY) { 
let eleGEIg = eo('h1','p47f');
text(`Email Account Info 
        (`);
let elDjUFe = eo('span','JMUf');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elhNv4m = eo('table','8gCf',null,`class`,`table table-bordered table-striped resource-table`);
let elC6xnk = eo('tbody','yzxf');
let eltAjZf = eo('tr','WH6f');
let elM_7dz = eo('th','o_mf');
text(`Webmail url`);
ec('th');
let el2Dom0 = eo('th','XHlf');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let eluEhMj = eo('tr','fxMf');
let el6zD3H = eo('th','M9bf');
text(`Email Address`);
ec('th');
let elPdxXy = eo('th','n9sf');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let el7oZ8N = eo('tr','rcqf');
let elZBVm3 = eo('th','mlAf');
text(`Password`);
ec('th');
let elSDm3a = eo('th','3IWf');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndlvAN) { 
let elG4j6x = eo('h1');
text(`${component.resource.settings.website.name} Website
        (`);
let elFseCJ = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elLSxRP = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elRgAwF = eo('tbody');
let elC4V4N = eo('tr');
let elrdvgr = eo('th');
text(`Website`);
ec('th');
let el6JKXc = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let elsySrm = eo('tr');
let ely0pwI = eo('th');
text(`Website Url`);
ec('th');
let elTLGx1 = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let elzG5r0 = eo('tr');
let elfcAMw = eo('th');
text(`Username`);
ec('th');
let eloSA1D = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let elPjhSW = eo('tr');
let elX2lfH = eo('th');
text(`Password`);
ec('th');
let el9P8Fd = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndsIA8) { 
let elHexzB = eo('h1',null,null,`class`,`m-t-0`);
text(`FTP Account Info

        (`);
let elUILVd = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elKFXOk = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let el45Z0y = eo('tbody');
let elbFBHo = eo('tr');
let el6dxjJ = eo('th');
text(`FTP Host`);
ec('th');
let eleZC76 = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let elGb5zL = eo('tr');
let elk5MWR = eo('th');
text(`FTP Username`);
ec('th');
let elcHb7F = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elimZjU = eo('tr');
let el12Sax = eo('th');
text(`FTP password`);
ec('th');
let el8KNKT = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let elbVucL = eo('tr');
let elWzYCT = eo('th');
text(`FTP Port`);
ec('th');
let el4l2P9 = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}},attrs:{size:'small',id:'view-resource-info'},state:'styhUL3'});
}
                    this.isReadyToGo();
                }
        });