_Component({
                selector: 'resource-details-page',
                c: 'ResourceDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','resource'],
                children: {cj3AJI4Ks:'flk-spinner',cYOwRObm6:'flk-time-ago',cu8A8oXBU:'markdown',cu0IgWXDU:'flk-youtube-video',c5dnqq9B8:'comments',coVfoce8m:'flk-time-ago',cdDJ967w6:'layout'},
                render: function (component) {
                    let cmpxkIW = this._lc('cdDJ967w6', {parent:component,content:(layout) => {let cndlmEr = component.isLoading;
this.setState('stPishN', cndlmEr);
let cndj9S9 = !(cndlmEr);
this.setState('st43Zt1', cndj9S9);
if (cndlmEr) { 
let cmpxRhC = this._lc('cj3AJI4Ks', {parent:component,parentTop:layout,state:'stPishN'});
}else { 
let eltvLJU = eo('div',null,null,`class`,`text-right`);
let elEpPio = eo('a',null,null,`href`,`${URLS.project(component.resource.project)}`,`class`,`btn btn-green`);
text(component.resource.project.name);
ec('a');
ec('div');
let el1VS_y = eo('h1');
text(component.resource.title);
ec('h1');
let cndclrB = component.resource.createdAt;
this.setState('stA9qKs', cndclrB);
if (cndclrB) { 
let elPKPIh = eo('p','jHrf',null,`class`,`teal-text`);
let cmpRaRC = this._lc('cYOwRObm6', {parent:component,parentTop:layout,props:{timestamp:component.resource.createdAt.timestamp},state:'stA9qKs'});
ec('p');
}let cndjSNC = component.resource.description;
this.setState('stZ_BcZ', cndjSNC);
if (cndjSNC) { 
let eli_Zbz = eo('p','Ztdf',null,`class`,`description card p-1`);
let cmpDJg_ = this._lc('cu8A8oXBU', {parent:component,parentTop:layout,props:{content:component.resource.description},state:'stZ_BcZ'});
ec('p');
}let el3ZV65 = eo('main');
let cndlUt5 = component.resource.type == 'link';
this.setState('stqHSvf', cndlUt5);
let cndoXBZ = component.resource.type == 'image';
this.setState('stc90cn', cndoXBZ);
let cnd7H_0 = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('st6HMcj', cnd7H_0);
let cndtMOw = component.resource.type == 'youtube';
this.setState('stdB1xj', cndtMOw);
let cndnHrX = component.resource.type == 'ftp';
this.setState('stpa4HV', cndnHrX);
let cndYHCU = component.resource.type == 'website';
this.setState('stQ2yBd', cndYHCU);
let cndW9QO = component.resource.type == 'email';
this.setState('staSJ9v', cndW9QO);
if (cndlUt5) { 
let elJckip = eo('h2','PQDf');
text(`The link to open`);
ec('h2');
let elldno2 = eo('p','mxHf',null,`class`,`p-2`);
let elHNY8l = eo('a','LCbf',null,`class`,`btn btn-red`,`href`,`${component.resource.settings.link}`);
text(Array.end(component.resource.settings.link.split('/')));
ec('a');
ec('p');
}else if (cndoXBZ) { 
let elUDLS_ = eo('h2');
text(`The image attached`);
ec('h2');
let elZkpOB = eo('p',null,null,`class`,`p-2`);
let elPg2X3 = eo('a',null,null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let elyj9QA = ev('img',null,null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
ec('p');
}else if (cnd7H_0) { 
let elgw4tC = eo('h2');
text(`The PDF attached`);
ec('h2');
let elYZE1l = eo('p',null,null,`class`,`p-2`);
let elkEeAi = eo('a',null,null,`class`,`btn btn-red`,`href`,`${component.resource.attachment}`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
ec('p');
}else if (cndtMOw) { 
let elZxChI = eo('div',null,null,`class`,`text-center`);
let cmpzZhk = this._lc('cu0IgWXDU', {parent:component,parentTop:layout,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`,style:'width: 100%; height: 400px'},state:'stdB1xj'});
ec('div');
}else if (cndnHrX) { 
let el9kij9 = eo('h2',null,null,`class`,`m-t-0`);
text(`FTP Account Info

                    (`);
let elnsV2E = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h2');
let elEI4QP = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let eltE2yg = eo('tbody');
let elwkc9X = eo('tr');
let elgR2XK = eo('th');
text(`FTP Host`);
ec('th');
let elqzAE9 = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let el61QDD = eo('tr');
let elwmUY5 = eo('th');
text(`FTP Username`);
ec('th');
let elgbUme = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elq3N6O = eo('tr');
let elkgUGa = eo('th');
text(`FTP password`);
ec('th');
let el1GrqV = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let el3w4ig = eo('tr');
let elCo9xH = eo('th');
text(`FTP Port`);
ec('th');
let elmjfxW = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndYHCU) { 
let elemTQ7 = eo('h1');
text(`${component.resource.settings.website.name} Website
                    (`);
let elYT8Iz = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elMPhnC = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elJv8ly = eo('tbody');
let elwRY7a = eo('tr');
let elhvU_7 = eo('th');
text(`Website`);
ec('th');
let elJ4fZ0 = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let elsVuAK = eo('tr');
let elcz_an = eo('th');
text(`Website Url`);
ec('th');
let elBTQK_ = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let ellTPVI = eo('tr');
let eloAy8a = eo('th');
text(`Username`);
ec('th');
let el5jxby = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let elTSruH = eo('tr');
let elo8xm3 = eo('th');
text(`Password`);
ec('th');
let elPjYg8 = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndW9QO) { 
let elQIHji = eo('h1');
text(`Email Account Info
                    (`);
let elDjv2P = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elu2xxe = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elRTBfH = eo('tbody');
let elpdAzN = eo('tr');
let el40xmj = eo('th');
text(`Webmail url`);
ec('th');
let elUfkvr = eo('th');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elwQG1Z = eo('tr');
let elUiOKg = eo('th');
text(`Email Address`);
ec('th');
let elnOpnZ = eo('th');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let el2voOd = eo('tr');
let elpWh3T = eo('th');
text(`Password`);
ec('th');
let el25p0e = eo('th');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}ec('main');
let cmplwg_ = this._lc('c5dnqq9B8', {parent:component,parentTop:layout,props:{comments:component.resource.comments,typeId:component.resource.id},attrs:{type:'resource'}});
let el4yMeU = eo('table',null,null,`class`,`table table-bordered mt-1`,`id`,`status-table`);
let eliQJy5 = eo('thead');
let el5FiES = eo('tr');
let el5rgo0 = eo('th');
text(`Created By`);
ec('th');
let eli2pTq = eo('th');
text(`Created At`);
ec('th');
ec('tr');
ec('thead');
let elVGtnS = eo('tbody');
let elfg0gG = eo('tr');
let elEKrfF = eo('td');
text(component.resource.createdBy.name);
ec('td');
let el_jkA7 = eo('td');
let cmpvI_V = this._lc('coVfoce8m', {parent:component,parentTop:layout,props:{timestamp:component.resource.createdAt.timestamp}});
ec('td');
ec('tr');
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });