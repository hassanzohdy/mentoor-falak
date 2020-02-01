_Component({
                selector: 'resource-list-item',
                c: 'ResourceListItem', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resource','parent','index','isAboutToRemove','resourceStyle','resourcesTypes','viewResource'],
                children: {cRGxYr8RS:'flk-time-ago',cNp5ivp2B:'markdown',cLHubYDcj:'flk-youtube-video',cnpJfXnUs:'flk-alert',cajkAbTpc:'flk-modal'},
                render: function (component) {
                    let el7MeUE = eo('div',null,null,`class`,`simple-card resource`);
let cndcvOC = component.resource.pinned;
this.setState('stutvqG', cndcvOC);
let cndAqhe = component.resource.type == 'link';
this.setState('stNhFCH', cndAqhe);
if (cndcvOC) { 
let el__Jfy = eo('i','m9Wf',null,`class`,`${fas('bookmark') + ' pinned icon'}`);
ec('i');
}let eloNDTm = eo('div',null,null,`class`,`row`);
let elDobxm = eo('div',null,null,`class`,`col`);
let el9moNZ = eo('div',null,null,`class`,`float-right`);
let cndQGFu = component.resource.canBeModified;
this.setState('st6Lkjh', cndQGFu);
if (cndQGFu) { 
let elQRYI9 = eo('button','CyFf',null, eventListeners, {onclick:[function(e) {var $el = this;component.parent.openModal(component.resource, component.index);}]},`type`,`button`,`class`,`gray-text bold`);
let elskxKJ = eo('i','N0mf',null,`class`,`${fas('pen') + ' mr-2 icon'}`);
ec('i');
text(`Edit`);
ec('button');
}let cndqdYS = component.resource.canBeModified;
this.setState('stSKcTI', cndqdYS);
if (cndqdYS) { 
let elxkQ6c = eo('button','mxYf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isAboutToRemove = true}]},`type`,`button`,`class`,`gray-text bold`);
let elJOsYI = eo('i','v4lf',null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}let elpBXtI = eo('div');
let elgFJa7 = eo('button',null,null,`class`,`btn bold type`);
elgFJa7.cls = component.resourceStyle();

            for (let className in elgFJa7.cls) {
                elgFJa7.classList.toggle(className, elgFJa7.cls[className]);
            }  
            text(component.resourcesTypes[component.resource.type]);
ec('button');
ec('div');
ec('div');
let eliSV1Z = ev('img',null,null,`src`,`${component.resource.createdBy.image}`,`class`,`img-thumbnail circle creator-image`,`title`,`${component.resource.createdBy.name}`,`alt`,`${component.resource.createdBy.name}`);
let elvluqM = eo('div',null,null,`class`,`meta`);
let el3XNJc = eo('h3',null,null,`class`,`title`);
let eljHDvf = eo('a',null,null,`href`,`${'resources/' + component.resource.id}`);
text(component.resource.title);
ec('a');
ec('h3');
let elor0ME = eo('div',null,null,`class`,`created`);
let elt10LI = eo('span',null,null,`class`,`by`);
text(`By`);
let elEXjd8 = eo('span');
text(component.resource.createdBy.name);
ec('span');
ec('span');
let cmpiZaG = this._lc('cRGxYr8RS', {parent:component,props:{timestamp:component.resource.createdAt.timestamp},attrs:{class:'at'}});
ec('div');
ec('div');
ec('div');
ec('div');
let cnda6X4 = component.resource.description;
this.setState('stsL8zp', cnda6X4);
let cndV_kS = cndAqhe;
this.setState('stuyF6P', cndV_kS);
if (cnda6X4) { 
let cmpiPuq = this._lc('cNp5ivp2B', {parent:component,props:{content:component.resource.description},attrs:{class:'description'},state:'stsL8zp'});
}let cndJzIb = component.resource.attachment;
this.setState('st7e35E', cndJzIb);
let cndlRqB = cndV_kS;
this.setState('stI23FV', cndlRqB);
if (cndJzIb) { 
let elPe2Xm = eo('div','LzWf',null,`class`,`attachment`);
let el6UHYk = eo('h4','vvRf',null,`class`,`attachment-heading`);
text(`Attachment`);
ec('h4');
let cnd9JlW = component.resource.type == 'image';
this.setState('stjkXJB', cnd9JlW);
if (cnd9JlW) { 
let elrCLYS = eo('a','Ejlf',null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let el87UIZ = ev('img','9Uyf',null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
}let cndjbR4 = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('stezAdl', cndjbR4);
if (cndjbR4) { 
let el1V1t9 = eo('a','310f',null,`href`,`${component.resource.attachment}`,`class`,`btn btn-teal bold`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
}ec('div');
}else if (cndlRqB) { 
let elR9jBh = eo('a',null,null,`href`,`${component.resource.settings.link}`,`target`,`_blank`,`class`,`btn btn-cyan bold`);
text(`Open Link`);
ec('a');
}let cndQ4PW = component.resource.type == 'youtube';
this.setState('sttkZVf', cndQ4PW);
if (cndQ4PW) { 
let el6iQPr = eo('div','vpqf',null,`class`,`text-center`);
let cmpeD5U = this._lc('cLHubYDcj', {parent:component,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`},style:{width:'100%',height:'400px'},state:'sttkZVf'});
ec('div');
}let cndSyVM = ['ftp', 'website', 'email'].includes(component.resource.type);
this.setState('st_nqqa', cndSyVM);
if (cndSyVM) { 
let elpZfeR = eo('button','2a1f',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewResource = true;}]},`class`,`btn bold`);
elpZfeR.cls = component.resourceStyle();

            for (let className in elpZfeR.cls) {
                elpZfeR.classList.toggle(className, elpZfeR.cls[className]);
            }  
            text(`View Details`);
ec('button');
}ec('div');
let cndpQf6 = component.isAboutToRemove;
this.setState('stVcnHN', cndpQf6);
if (cndpQf6) { 
let cmptuzf = this._lc('cnpJfXnUs', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = false},onconfirm:function(e) {let $el = this; component.parent.remove(component.resource)}},attrs:{id:'view-resource-info'},state:'stVcnHN'});
}let cndKAyY = component.viewResource;
this.setState('stKZNHa', cndKAyY);
if (cndKAyY) { 
let cmp_HXS = this._lc('cajkAbTpc', {parent:component,events:{onclose:function(e) {let $el = this; component.viewResource = null}},content:(flkModal) => {let cnd08Tp = component.resource.type == 'email';
this.setState('st28w0O', cnd08Tp);
let cndgXgv = component.resource.type == 'website';
this.setState('stpHMzv', cndgXgv);
let cndI0ig = component.resource.type == 'ftp';
this.setState('sta5Fag', cndI0ig);
if (cnd08Tp) { 
let el7lqhs = eo('h1','VGnf');
text(`Email Account Info 
        (`);
let ele5nF9 = eo('span','kS4f');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let eljur0f = eo('table','5_cf',null,`class`,`table table-bordered table-striped resource-table`);
let elWFgDI = eo('tbody','Gruf');
let el8iNXa = eo('tr','I1Af');
let elFG1g_ = eo('th','rQjf');
text(`Webmail url`);
ec('th');
let el_2Adv = eo('th','YZhf');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elVnmX8 = eo('tr','8I3f');
let el0Mwga = eo('th','X3sf');
text(`Email Address`);
ec('th');
let elPLGXb = eo('th','yN_f');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let eluw8BK = eo('tr','Bpjf');
let eldPHN6 = eo('th','RZUf');
text(`Password`);
ec('th');
let elYCssB = eo('th','wsFf');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndgXgv) { 
let elMj6dW = eo('h1');
text(`${component.resource.settings.website.name} Website
        (`);
let eljEMX0 = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elMzpow = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elNtn7X = eo('tbody');
let elUaeHK = eo('tr');
let eluoG4r = eo('th');
text(`Website`);
ec('th');
let eltCMil = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let el57XaU = eo('tr');
let elbrFZ2 = eo('th');
text(`Website Url`);
ec('th');
let elL7JnG = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let elzWUs7 = eo('tr');
let elIULYq = eo('th');
text(`Username`);
ec('th');
let eln2pjE = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let eltJTjO = eo('tr');
let elmOFuG = eo('th');
text(`Password`);
ec('th');
let elWnXoa = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndI0ig) { 
let el68yjM = eo('h1',null,null,`class`,`m-t-0`);
text(`FTP Account Info

        (`);
let el5A3EO = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elVBPEe = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elD20Mi = eo('tbody');
let elEQzVs = eo('tr');
let elZVKBP = eo('th');
text(`FTP Host`);
ec('th');
let elxdjha = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let elqOJkw = eo('tr');
let elaTo12 = eo('th');
text(`FTP Username`);
ec('th');
let elwMhIj = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elWGbWB = eo('tr');
let eln1bbc = eo('th');
text(`FTP password`);
ec('th');
let eleshlc = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let elonc_W = eo('tr');
let elhf9Ly = eo('th');
text(`FTP Port`);
ec('th');
let el5UA_t = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}},attrs:{size:'small',id:'view-resource-info'},state:'stKZNHa'});
}
                    this.isReadyToGo();
                }
        });