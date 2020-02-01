_Component({
                selector: 'resource-list-item',
                c: 'ResourceListItem', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['resource','parent','index','isAboutToRemove','resourceStyle','resourcesTypes','viewResource'],
                children: {cJ2QXWJvM:'flk-time-ago',chTLVGakU:'markdown',cZA5hSUOK:'flk-youtube-video',cwglQ0c4B:'flk-alert',crKRtV3Sn:'flk-modal'},
                render: function (component) {
                    let elj6d4z = eo('div',null,null,`class`,`simple-card resource`);
let cnd51LC = component.resource.pinned;
this.setState('stsKBFO', cnd51LC);
let cndJjQ0 = component.resource.type == 'link';
this.setState('stjgDZ7', cndJjQ0);
if (cnd51LC) { 
let elj8h09 = eo('i','h2of',null,`class`,`${fas('bookmark') + ' pinned icon'}`);
ec('i');
}let elqox5V = eo('div',null,null,`class`,`row`);
let elW6FlH = eo('div',null,null,`class`,`col`);
let elF199G = eo('div',null,null,`class`,`float-right`);
let cndjiXV = component.resource.canBeModified;
this.setState('stOXOLB', cndjiXV);
if (cndjiXV) { 
let elK9skp = eo('button','y8sf',null, eventListeners, {onclick:[function(e) {var $el = this;component.parent.openModal(component.resource, component.index);}]},`type`,`button`,`class`,`gray-text bold`);
let elgfSET = eo('i','kFAf',null,`class`,`${fas('pen') + ' mr-2 icon'}`);
ec('i');
text(`Edit`);
ec('button');
}let cndJZNY = component.resource.canBeModified;
this.setState('stfQC05', cndJZNY);
if (cndJZNY) { 
let elzszpf = eo('button','2hlf',null, eventListeners, {onclick:[function(e) {var $el = this;component.isAboutToRemove = true}]},`type`,`button`,`class`,`gray-text bold`);
let eljxRTL = eo('i','PSFf',null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}let el43EGo = eo('div');
let elOGwm9 = eo('button',null,null,`class`,`btn bold type`);
elOGwm9.cls = component.resourceStyle();

            for (let className in elOGwm9.cls) {
                elOGwm9.classList.toggle(className, elOGwm9.cls[className]);
            }  
            text(component.resourcesTypes[component.resource.type]);
ec('button');
ec('div');
ec('div');
let elK8573 = ev('img',null,null,`src`,`${component.resource.createdBy.image}`,`class`,`img-thumbnail circle creator-image`,`title`,`${component.resource.createdBy.name}`,`alt`,`${component.resource.createdBy.name}`);
let elip7bV = eo('div',null,null,`class`,`meta`);
let elKtEnD = eo('h3',null,null,`class`,`title`);
let elNc67V = eo('a',null,null,`href`,`${'resources/' + component.resource.id}`);
text(component.resource.title);
ec('a');
ec('h3');
let elDBuZn = eo('div',null,null,`class`,`created`);
let elIv2tL = eo('span',null,null,`class`,`by`);
text(`By`);
let elMM7yU = eo('span');
text(component.resource.createdBy.name);
ec('span');
ec('span');
let cmphv1H = this._lc('cJ2QXWJvM', {parent:component,props:{timestamp:component.resource.createdAt.timestamp},attrs:{class:'at'}});
ec('div');
ec('div');
ec('div');
ec('div');
let cndx929 = component.resource.description;
this.setState('st3UaRn', cndx929);
let cnd1Wup = cndJjQ0;
this.setState('stFSkiI', cnd1Wup);
if (cndx929) { 
let cmpY0_y = this._lc('chTLVGakU', {parent:component,props:{content:component.resource.description},attrs:{class:'description'},state:'st3UaRn'});
}let cndODxW = component.resource.attachment;
this.setState('stXS1ar', cndODxW);
let cndSagG = cnd1Wup;
this.setState('stS5jdK', cndSagG);
if (cndODxW) { 
let el3EtMu = eo('div','QUyf',null,`class`,`attachment`);
let el8Gac5 = eo('h4','2Axf',null,`class`,`attachment-heading`);
text(`Attachment`);
ec('h4');
let cndbZXQ = component.resource.type == 'image';
this.setState('stDQBgi', cndbZXQ);
if (cndbZXQ) { 
let elS8FKW = eo('a','oRBf',null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let elsz4vv = ev('img','iMaf',null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
}let cndwAS2 = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('stph8Nr', cndwAS2);
if (cndwAS2) { 
let elN9LJD = eo('a','oa6f',null,`href`,`${component.resource.attachment}`,`class`,`btn btn-teal bold`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
}ec('div');
}else if (cndSagG) { 
let elOcqfX = eo('a',null,null,`href`,`${component.resource.settings.link}`,`target`,`_blank`,`class`,`btn btn-cyan bold`);
text(`Open Link`);
ec('a');
}let cndE1Vz = component.resource.type == 'youtube';
this.setState('stqN5zR', cndE1Vz);
if (cndE1Vz) { 
let els83Et = eo('div','nWbf',null,`class`,`text-center`);
let cmpZCYd = this._lc('cZA5hSUOK', {parent:component,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`},style:{width:'100%',height:'400px'},state:'stqN5zR'});
ec('div');
}let cndrmVZ = ['ftp', 'website', 'email'].includes(component.resource.type);
this.setState('stltGUr', cndrmVZ);
if (cndrmVZ) { 
let elhlXpY = eo('button','Iwzf',null, eventListeners, {onclick:[function(e) {var $el = this;component.viewResource = true;}]},`class`,`btn bold`);
elhlXpY.cls = component.resourceStyle();

            for (let className in elhlXpY.cls) {
                elhlXpY.classList.toggle(className, elhlXpY.cls[className]);
            }  
            text(`View Details`);
ec('button');
}ec('div');
let cndulfi = component.isAboutToRemove;
this.setState('stP_ZQz', cndulfi);
if (cndulfi) { 
let cmptqzt = this._lc('cwglQ0c4B', {parent:component,events:{onclose:function(e) {let $el = this; component.isAboutToRemove = false},onconfirm:function(e) {let $el = this; component.parent.remove(component.resource)}},attrs:{id:'view-resource-info'},state:'stP_ZQz'});
}let cndSzUn = component.viewResource;
this.setState('stKLjLA', cndSzUn);
if (cndSzUn) { 
let cmpTJQg = this._lc('crKRtV3Sn', {parent:component,events:{onclose:function(e) {let $el = this; component.viewResource = null}},content:(flkModal) => {let cndtBrB = component.resource.type == 'email';
this.setState('stZQapF', cndtBrB);
let cnd8Got = component.resource.type == 'website';
this.setState('stNdJQb', cnd8Got);
let cndXI_l = component.resource.type == 'ftp';
this.setState('stZG8y1', cndXI_l);
if (cndtBrB) { 
let el7C15g = eo('h1','z_af');
text(`Email Account Info 
        (`);
let el522zs = eo('span','EUWf');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let eljwCFb = eo('table','zgff',null,`class`,`table table-bordered table-striped resource-table`);
let eluWC1P = eo('tbody','A_Nf');
let elfGuI3 = eo('tr','4zVf');
let elItrby = eo('th','NX9f');
text(`Webmail url`);
ec('th');
let elVFpUJ = eo('th','cK_f');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elqNjal = eo('tr','l_5f');
let elr7vgm = eo('th','nW8f');
text(`Email Address`);
ec('th');
let elqqpbE = eo('th','ex1f');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let elIKq6w = eo('tr','mA7f');
let elIlksz = eo('th','fyBf');
text(`Password`);
ec('th');
let elpl1It = eo('th','yZQf');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cnd8Got) { 
let eluqRGN = eo('h1');
text(`${component.resource.settings.website.name} Website
        (`);
let elfPJLF = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elxz7dC = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elOwrJF = eo('tbody');
let elTpPkl = eo('tr');
let elxjgWv = eo('th');
text(`Website`);
ec('th');
let elr2wkT = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let elNr4U7 = eo('tr');
let elj89Uo = eo('th');
text(`Website Url`);
ec('th');
let elV5j5b = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let el9cBzg = eo('tr');
let elb9q8L = eo('th');
text(`Username`);
ec('th');
let elAWdZm = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let elnw2RG = eo('tr');
let elrvNDt = eo('th');
text(`Password`);
ec('th');
let elmXkmQ = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndXI_l) { 
let eld2l_a = eo('h1',null,null,`class`,`m-t-0`);
text(`FTP Account Info

        (`);
let el_yGQJ = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elZVx1g = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let el1OswA = eo('tbody');
let eljAwkm = eo('tr');
let elhdXmi = eo('th');
text(`FTP Host`);
ec('th');
let elg0TPW = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let elHYT3j = eo('tr');
let el5QoIX = eo('th');
text(`FTP Username`);
ec('th');
let elf_UU0 = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elnXUNZ = eo('tr');
let elk14De = eo('th');
text(`FTP password`);
ec('th');
let el3S6AN = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let elyzVGL = eo('tr');
let elD6TPN = eo('th');
text(`FTP Port`);
ec('th');
let eliii7a = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}},attrs:{size:'small',id:'view-resource-info'},state:'stKLjLA'});
}
                    this.isReadyToGo();
                }
        });