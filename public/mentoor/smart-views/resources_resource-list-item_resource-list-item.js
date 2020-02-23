_Component({
                selector: 'resource-list-item',
                c: 'ResourceListItem', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resource','parent','index','isAboutToRemove','resourceStyle','resourcesTypes','viewResource'],
                children: {cyCvFEtoT:'flk-time-ago',c7Rtd1EOD:'markdown',cEsmeMHoJ:'flk-youtube-video',cZ1CvuY6Y:'flk-alert',cDJvfHC8O:'flk-modal'},
                render: function (component) {
                    let elLSNxp = eo('div',null,null,`class`,`simple-card resource`);
let cndKURf = component.resource.pinned;
this.setState('st8FMCy', cndKURf);
let cnd2DbX = component.resource.type == 'link';
this.setState('stZ4pw3', cnd2DbX);
if (cndKURf) { 
let elY4pts = eo('i','6MHf',null,`class`,`${fas('bookmark') + ' pinned icon'}`);
ec('i');
}let elvJV29 = eo('div',null,null,`class`,`row`);
let elIz_Ot = eo('div',null,null,`class`,`col`);
let elIdf37 = eo('div',null,null,`class`,`float-right`);
let cnd4JSZ = component.resource.canBeModified;
this.setState('stHw_sh', cnd4JSZ);
if (cnd4JSZ) { 
let el89uKC = eo('button','YhUf',null, eventListeners, {onclick:[function(e) {var $el = this;component.parent.openModal(component.resource, component.index);}]},`type`,`button`,`class`,`gray-text bold`);
let elwZUEJ = eo('i','NY7f',null,`class`,`${fas('pen') + ' mr-2 icon'}`);
ec('i');
text(`Edit`);
ec('button');
}let cnd39n6 = component.resource.canBeModified;
this.setState('stSvEPo', cnd39n6);
if (cnd39n6) { 
let elRLLLG = eo('button','86lf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isAboutToRemove = true}]},`type`,`button`,`class`,`gray-text bold`);
let elQ_HJU = eo('i','rQ3f',null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}let elOmjJT = eo('div');
let elVtv2g = eo('button',null,null,`class`,`btn bold type`);
elVtv2g.cls = component.resourceStyle();

            for (let className in elVtv2g.cls) {
                elVtv2g.classList.toggle(className, elVtv2g.cls[className]);
            }  
            text(component.resourcesTypes[component.resource.type]);
ec('button');
ec('div');
ec('div');
let elHbZbg = ev('img',null,null,`src`,`${component.resource.createdBy.image}`,`class`,`img-thumbnail circle creator-image`,`title`,`${component.resource.createdBy.name}`,`alt`,`${component.resource.createdBy.name}`);
let ela2dvI = eo('div',null,null,`class`,`meta`);
let eldgfUT = eo('h3',null,null,`class`,`title`);
let el0nhva = eo('a',null,null,`href`,`${'resources/' + component.resource.id}`);
text(component.resource.title);
ec('a');
ec('h3');
let elV1Koq = eo('div',null,null,`class`,`created`);
let elBod2w = eo('span',null,null,`class`,`by`);
text(`By`);
let elEQS7B = eo('span');
text(component.resource.createdBy.name);
ec('span');
ec('span');
let cmpmMEW = this._lc('cyCvFEtoT', {parent:component,props:{timestamp:component.resource.createdAt.timestamp},attrs:{class:'at'}});
ec('div');
ec('div');
ec('div');
ec('div');
let cnd9bl6 = component.resource.description;
this.setState('sttO_zH', cnd9bl6);
let cndCRiV = cnd2DbX;
this.setState('stCDXYC', cndCRiV);
if (cnd9bl6) { 
let cmp38wc = this._lc('c7Rtd1EOD', {parent:component,props:{content:component.resource.description},attrs:{class:'description'},state:'sttO_zH'});
}let cnd45OY = component.resource.attachment;
this.setState('stGp4Uq', cnd45OY);
let cndk5Vk = cndCRiV;
this.setState('stWap1W', cndk5Vk);
if (cnd45OY) { 
let elRIEyU = eo('div','_TOf',null,`class`,`attachment`);
let elDDqjv = eo('h4','QJef',null,`class`,`attachment-heading`);
text(`Attachment`);
ec('h4');
let cnd2QPF = component.resource.type == 'image';
this.setState('st3qUOI', cnd2QPF);
if (cnd2QPF) { 
let elmqwlq = eo('a','w74f',null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let el8Ma_o = ev('img','RScf',null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
}let cndo9D1 = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('stw0tRY', cndo9D1);
if (cndo9D1) { 
let elAwHlp = eo('a','hDbf',null,`href`,`${component.resource.attachment}`,`class`,`btn btn-teal bold`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
}ec('div');
}else if (cndk5Vk) { 
let elEclTF = eo('a',null,null,`href`,`${component.resource.settings.link}`,`target`,`_blank`,`class`,`btn btn-cyan bold`);
text(`Open Link`);
ec('a');
}let cndDiNo = component.resource.type == 'youtube';
this.setState('staVWor', cndDiNo);
if (cndDiNo) { 
let el7DXZx = eo('div','Dhif',null,`class`,`text-center`);
let cmpS1oy = this._lc('cEsmeMHoJ', {parent:component,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`},style:{width:'100%',height:'400px'},state:'staVWor'});
ec('div');
}let cnd_S6T = ['ftp', 'website', 'email'].includes(component.resource.type);
this.setState('stTrUbL', cnd_S6T);
if (cnd_S6T) { 
let elxNDQI = eo('button','C_ef',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewResource = true;}]},`class`,`btn bold`);
elxNDQI.cls = component.resourceStyle();

            for (let className in elxNDQI.cls) {
                elxNDQI.classList.toggle(className, elxNDQI.cls[className]);
            }  
            text(`View Details`);
ec('button');
}ec('div');
let cndtVfi = component.isAboutToRemove;
this.setState('st_Fdu9', cndtVfi);
if (cndtVfi) { 
let cmpPlli = this._lc('cZ1CvuY6Y', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = false},onconfirm:function(e) {let $el = this; component.parent.remove(component.resource)}},attrs:{id:'view-resource-info'},state:'st_Fdu9'});
}let cndS9oo = component.viewResource;
this.setState('stdTP50', cndS9oo);
if (cndS9oo) { 
let cmpLl_c = this._lc('cDJvfHC8O', {parent:component,events:{onclose:function(e) {let $el = this; component.viewResource = null}},content:(flkModal) => {let cndcXbU = component.resource.type == 'email';
this.setState('stDl_Ts', cndcXbU);
let cndgHWB = component.resource.type == 'website';
this.setState('st4zAoX', cndgHWB);
let cndUm8B = component.resource.type == 'ftp';
this.setState('stPG6gl', cndUm8B);
if (cndcXbU) { 
let elG5mAH = eo('h1','TSEf');
text(`Email Account Info 
        (`);
let eleGo_E = eo('span','tDyf');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elx2LSy = eo('table','6lMf',null,`class`,`table table-bordered table-striped resource-table`);
let eluyRA3 = eo('tbody','gMsf');
let elvX0Np = eo('tr','o60f');
let el_BfCi = eo('th','0PLf');
text(`Webmail url`);
ec('th');
let elCwG7I = eo('th','hAWf');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elwjOTr = eo('tr','KXHf');
let elb1cmZ = eo('th','cEuf');
text(`Email Address`);
ec('th');
let elKgR8t = eo('th','eAcf');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let elpPyWU = eo('tr','yFpf');
let elqiHpo = eo('th','cYlf');
text(`Password`);
ec('th');
let elos5Tx = eo('th','UWif');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndgHWB) { 
let elnyScH = eo('h1');
text(`${component.resource.settings.website.name} Website
        (`);
let elCbN_c = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let eltQoq6 = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elvOB33 = eo('tbody');
let elCHsOe = eo('tr');
let el1hnW7 = eo('th');
text(`Website`);
ec('th');
let elImt25 = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let el_EJTx = eo('tr');
let elT5ypp = eo('th');
text(`Website Url`);
ec('th');
let elBf7vi = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let elgv6yC = eo('tr');
let elrxXwe = eo('th');
text(`Username`);
ec('th');
let elYoSlk = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let elZUBIo = eo('tr');
let elMWe3y = eo('th');
text(`Password`);
ec('th');
let ellC6St = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndUm8B) { 
let elV_25T = eo('h1',null,null,`class`,`m-t-0`);
text(`FTP Account Info

        (`);
let elcJhta = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elqWbyp = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elkekYC = eo('tbody');
let elFuIaP = eo('tr');
let el2HbVY = eo('th');
text(`FTP Host`);
ec('th');
let el6F9Tr = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let elwWLnF = eo('tr');
let ello3UT = eo('th');
text(`FTP Username`);
ec('th');
let elF9ovq = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elaOE0W = eo('tr');
let elRtO0d = eo('th');
text(`FTP password`);
ec('th');
let elBi6NV = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let el169Lx = eo('tr');
let elPKk4M = eo('th');
text(`FTP Port`);
ec('th');
let elX9MTf = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}},attrs:{size:'small',id:'view-resource-info'},state:'stdTP50'});
}
                    this.isReadyToGo();
                }
        });