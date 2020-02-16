_Component({
                selector: 'resource-list-item',
                c: 'ResourceListItem', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resource','parent','index','isAboutToRemove','resourceStyle','resourcesTypes','viewResource'],
                children: {cswtsaijR:'flk-time-ago',c2Ohspiwo:'markdown',cSfgjbb7V:'flk-youtube-video',cn0Xa5Gfy:'flk-alert',cAL1_i4hE:'flk-modal'},
                render: function (component) {
                    let eluGIhs = eo('div',null,null,`class`,`simple-card resource`);
let cndDDcG = component.resource.pinned;
this.setState('st3VOnN', cndDDcG);
let cndJaEV = component.resource.type == 'link';
this.setState('sth8Aqr', cndJaEV);
if (cndDDcG) { 
let elFgKel = eo('i','nMdf',null,`class`,`${fas('bookmark') + ' pinned icon'}`);
ec('i');
}let elrkkkw = eo('div',null,null,`class`,`row`);
let elwk1_T = eo('div',null,null,`class`,`col`);
let eleOO7O = eo('div',null,null,`class`,`float-right`);
let cndK1oI = component.resource.canBeModified;
this.setState('stYW2qh', cndK1oI);
if (cndK1oI) { 
let elmUZUh = eo('button','0LHf',null, eventListeners, {onclick:[function(e) {var $el = this;component.parent.openModal(component.resource, component.index);}]},`type`,`button`,`class`,`gray-text bold`);
let el_4_fo = eo('i','Ubof',null,`class`,`${fas('pen') + ' mr-2 icon'}`);
ec('i');
text(`Edit`);
ec('button');
}let cndGsIG = component.resource.canBeModified;
this.setState('st4pK7m', cndGsIG);
if (cndGsIG) { 
let el6L1Qv = eo('button','Xo9f',null, eventListeners, {onclick:[function(e) {var $el = this;component.isAboutToRemove = true}]},`type`,`button`,`class`,`gray-text bold`);
let el1TyA8 = eo('i','WlPf',null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}let elnKr1Y = eo('div');
let elGbEsj = eo('button',null,null,`class`,`btn bold type`);
elGbEsj.cls = component.resourceStyle();

            for (let className in elGbEsj.cls) {
                elGbEsj.classList.toggle(className, elGbEsj.cls[className]);
            }  
            text(component.resourcesTypes[component.resource.type]);
ec('button');
ec('div');
ec('div');
let elWOjUU = ev('img',null,null,`src`,`${component.resource.createdBy.image}`,`class`,`img-thumbnail circle creator-image`,`title`,`${component.resource.createdBy.name}`,`alt`,`${component.resource.createdBy.name}`);
let elPn_s2 = eo('div',null,null,`class`,`meta`);
let eldeKRg = eo('h3',null,null,`class`,`title`);
let elxup5x = eo('a',null,null,`href`,`${'resources/' + component.resource.id}`);
text(component.resource.title);
ec('a');
ec('h3');
let elEcnKg = eo('div',null,null,`class`,`created`);
let elwmm7T = eo('span',null,null,`class`,`by`);
text(`By`);
let elCf3NS = eo('span');
text(component.resource.createdBy.name);
ec('span');
ec('span');
let cmpqDU9 = this._lc('cswtsaijR', {parent:component,props:{timestamp:component.resource.createdAt.timestamp},attrs:{class:'at'}});
ec('div');
ec('div');
ec('div');
ec('div');
let cndIqJ_ = component.resource.description;
this.setState('st22dbG', cndIqJ_);
let cndWFRs = cndJaEV;
this.setState('stw_GPa', cndWFRs);
if (cndIqJ_) { 
let cmp0jy6 = this._lc('c2Ohspiwo', {parent:component,props:{content:component.resource.description},attrs:{class:'description'},state:'st22dbG'});
}let cndsAXs = component.resource.attachment;
this.setState('stFp5rW', cndsAXs);
let cndi0YH = cndWFRs;
this.setState('stj9RQq', cndi0YH);
if (cndsAXs) { 
let elCvsG3 = eo('div','7xZf',null,`class`,`attachment`);
let el0gY7U = eo('h4','rNsf',null,`class`,`attachment-heading`);
text(`Attachment`);
ec('h4');
let cndoMPs = component.resource.type == 'image';
this.setState('stf7Jq2', cndoMPs);
if (cndoMPs) { 
let elH1mSz = eo('a','Q6tf',null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let elDzYku = ev('img','E25f',null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
}let cndQ8VX = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('stgQkNU', cndQ8VX);
if (cndQ8VX) { 
let elT0K1W = eo('a','zVjf',null,`href`,`${component.resource.attachment}`,`class`,`btn btn-teal bold`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
}ec('div');
}else if (cndi0YH) { 
let elbkFzM = eo('a',null,null,`href`,`${component.resource.settings.link}`,`target`,`_blank`,`class`,`btn btn-cyan bold`);
text(`Open Link`);
ec('a');
}let cnd0MZj = component.resource.type == 'youtube';
this.setState('stexfz_', cnd0MZj);
if (cnd0MZj) { 
let elCXRvc = eo('div','RhXf',null,`class`,`text-center`);
let cmpQrxx = this._lc('cSfgjbb7V', {parent:component,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`},style:{width:'100%',height:'400px'},state:'stexfz_'});
ec('div');
}let cnd1XIi = ['ftp', 'website', 'email'].includes(component.resource.type);
this.setState('stpb7Ex', cnd1XIi);
if (cnd1XIi) { 
let el56E5X = eo('button','fyif',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewResource = true;}]},`class`,`btn bold`);
el56E5X.cls = component.resourceStyle();

            for (let className in el56E5X.cls) {
                el56E5X.classList.toggle(className, el56E5X.cls[className]);
            }  
            text(`View Details`);
ec('button');
}ec('div');
let cnd8cXS = component.isAboutToRemove;
this.setState('st3XGHB', cnd8cXS);
if (cnd8cXS) { 
let cmpqxPT = this._lc('cn0Xa5Gfy', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = false},onconfirm:function(e) {let $el = this; component.parent.remove(component.resource)}},attrs:{id:'view-resource-info'},state:'st3XGHB'});
}let cndFHX2 = component.viewResource;
this.setState('stU9bFs', cndFHX2);
if (cndFHX2) { 
let cmpJ54V = this._lc('cAL1_i4hE', {parent:component,events:{onclose:function(e) {let $el = this; component.viewResource = null}},content:(flkModal) => {let cndmSRx = component.resource.type == 'email';
this.setState('stuo1m9', cndmSRx);
let cnddqqL = component.resource.type == 'website';
this.setState('stDmMSP', cnddqqL);
let cndD3_N = component.resource.type == 'ftp';
this.setState('stUjenh', cndD3_N);
if (cndmSRx) { 
let eloyd4i = eo('h1','cgMf');
text(`Email Account Info 
        (`);
let elWrEZ7 = eo('span','sJaf');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elL_hze = eo('table','99_f',null,`class`,`table table-bordered table-striped resource-table`);
let elszSTW = eo('tbody','YMcf');
let elmAc1w = eo('tr','FJLf');
let elnJ_7I = eo('th','rFUf');
text(`Webmail url`);
ec('th');
let eltDVx8 = eo('th','IPaf');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elx3zjD = eo('tr','RHNf');
let elR6rfR = eo('th','0FWf');
text(`Email Address`);
ec('th');
let el1Zj6g = eo('th','WEDf');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let elEK4Vf = eo('tr','75Ff');
let el7PZEl = eo('th','lPcf');
text(`Password`);
ec('th');
let el33ogg = eo('th','I0_f');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cnddqqL) { 
let elAPQEZ = eo('h1');
text(`${component.resource.settings.website.name} Website
        (`);
let el1d6w3 = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elPqmG0 = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elRgLzW = eo('tbody');
let el8LSf5 = eo('tr');
let eluy5CF = eo('th');
text(`Website`);
ec('th');
let elzx3p_ = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let elR5aPD = eo('tr');
let elkIJhL = eo('th');
text(`Website Url`);
ec('th');
let elstqeI = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let elnmCjs = eo('tr');
let elxQwPy = eo('th');
text(`Username`);
ec('th');
let elmXXnh = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let elCEc6M = eo('tr');
let el6ssro = eo('th');
text(`Password`);
ec('th');
let elO8qa5 = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndD3_N) { 
let elkVzxu = eo('h1',null,null,`class`,`m-t-0`);
text(`FTP Account Info

        (`);
let elLE4pd = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elWKSXw = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let el_ZMVw = eo('tbody');
let eleGSOK = eo('tr');
let el1yxc0 = eo('th');
text(`FTP Host`);
ec('th');
let elY2uVj = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let elr8jEY = eo('tr');
let elMIh8O = eo('th');
text(`FTP Username`);
ec('th');
let elWtZe_ = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elVe2fy = eo('tr');
let elr1tEb = eo('th');
text(`FTP password`);
ec('th');
let elxj7kl = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let el2SU68 = eo('tr');
let eldvtZa = eo('th');
text(`FTP Port`);
ec('th');
let elD_VAy = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}},attrs:{size:'small',id:'view-resource-info'},state:'stU9bFs'});
}
                    this.isReadyToGo();
                }
        });