_Component({
                selector: 'resource-details-page',
                c: 'ResourceDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','resource'],
                children: {ciAj8Dbj8:'flk-spinner',c8xNP_Jji:'flk-time-ago',cuC6YyZbY:'markdown',cfA_sKD6x:'flk-youtube-video',cLiQf4FCG:'comments',c4XeV1qIP:'flk-time-ago',crAxkiebK:'layout'},
                render: function (component) {
                    let cmpbWIk = this._lc('crAxkiebK', {parent:component,content:(layout) => {let cndTYEw = component.isLoading;
this.setState('st07MDb', cndTYEw);
let cndVgi6 = !(cndTYEw);
this.setState('st4QSiu', cndVgi6);
if (cndTYEw) { 
let cmpGMxW = this._lc('ciAj8Dbj8', {parent:component,parentTop:layout,state:'st07MDb'});
}else { 
let el1c0fd = eo('div',null,null,`class`,`text-right`);
let elOcHHe = eo('a',null,null,`href`,`${URLS.project(component.resource.project)}`,`class`,`btn btn-green`);
text(component.resource.project.name);
ec('a');
ec('div');
let elXd6TP = eo('h1');
text(component.resource.title);
ec('h1');
let cndqBOc = component.resource.createdAt;
this.setState('stYxasW', cndqBOc);
if (cndqBOc) { 
let elvIC72 = eo('p','kFdf',null,`class`,`teal-text`);
let cmp3kgD = this._lc('c8xNP_Jji', {parent:component,parentTop:layout,props:{timestamp:component.resource.createdAt.timestamp},state:'stYxasW'});
ec('p');
}let cnd0_HH = component.resource.description;
this.setState('stN84fZ', cnd0_HH);
if (cnd0_HH) { 
let elhsfYZ = eo('p','RRRf',null,`class`,`description card p-1`);
let cmp8AYx = this._lc('cuC6YyZbY', {parent:component,parentTop:layout,props:{content:component.resource.description},state:'stN84fZ'});
ec('p');
}let elpTSRd = eo('main');
let cndmW6p = component.resource.type == 'link';
this.setState('stusq1C', cndmW6p);
let cndqArK = component.resource.type == 'image';
this.setState('st2n9ot', cndqArK);
let cndxNcZ = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('st6iuXk', cndxNcZ);
let cndHlAK = component.resource.type == 'youtube';
this.setState('stccWz4', cndHlAK);
let cndkQRw = component.resource.type == 'ftp';
this.setState('stlWDz7', cndkQRw);
let cnd7SXY = component.resource.type == 'website';
this.setState('stlMU4K', cnd7SXY);
let cndJ8NI = component.resource.type == 'email';
this.setState('stf_fbd', cndJ8NI);
if (cndmW6p) { 
let elz1OqP = eo('h2','jKwf');
text(`The link to open`);
ec('h2');
let elkyjyE = eo('p','a94f',null,`class`,`p-2`);
let elhP1Tg = eo('a','Emvf',null,`class`,`btn btn-red`,`href`,`${component.resource.settings.link}`);
text(Array.end(component.resource.settings.link.split('/')));
ec('a');
ec('p');
}else if (cndqArK) { 
let eljlmUo = eo('h2');
text(`The image attached`);
ec('h2');
let elSDpBY = eo('p',null,null,`class`,`p-2`);
let ela2UM5 = eo('a',null,null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let elnEAOa = ev('img',null,null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
ec('p');
}else if (cndxNcZ) { 
let els9hmb = eo('h2');
text(`The PDF attached`);
ec('h2');
let elBzeJW = eo('p',null,null,`class`,`p-2`);
let elnb7lW = eo('a',null,null,`class`,`btn btn-red`,`href`,`${component.resource.attachment}`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
ec('p');
}else if (cndHlAK) { 
let elnJo1X = eo('div',null,null,`class`,`text-center`);
let cmpNLyk = this._lc('cfA_sKD6x', {parent:component,parentTop:layout,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`,style:'width: 100%; height: 400px'},state:'stccWz4'});
ec('div');
}else if (cndkQRw) { 
let elqOt2d = eo('h2',null,null,`class`,`m-t-0`);
text(`FTP Account Info

                    (`);
let elTX5cg = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h2');
let elwg1tR = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let el1z3IX = eo('tbody');
let elw3Z0i = eo('tr');
let elcAyFJ = eo('th');
text(`FTP Host`);
ec('th');
let ellIcrM = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let eliaXUG = eo('tr');
let el37hdW = eo('th');
text(`FTP Username`);
ec('th');
let ellh07r = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elnHKf6 = eo('tr');
let elieM5q = eo('th');
text(`FTP password`);
ec('th');
let elkjgBY = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let elofKHY = eo('tr');
let elYrDoy = eo('th');
text(`FTP Port`);
ec('th');
let ela05mt = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cnd7SXY) { 
let elNXLYJ = eo('h1');
text(`${component.resource.settings.website.name} Website
                    (`);
let elzff8g = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elquX6A = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elRDcIj = eo('tbody');
let elGoP8P = eo('tr');
let elK5VnR = eo('th');
text(`Website`);
ec('th');
let eltIDlK = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let elY5r6f = eo('tr');
let elPIonY = eo('th');
text(`Website Url`);
ec('th');
let elBHJdu = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let elDjiPP = eo('tr');
let elTtn53 = eo('th');
text(`Username`);
ec('th');
let elLsuV7 = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let elpJVH5 = eo('tr');
let elaOh9P = eo('th');
text(`Password`);
ec('th');
let el_7r4M = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndJ8NI) { 
let elEn_bp = eo('h1');
text(`Email Account Info
                    (`);
let elVhxnA = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let eldODsD = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let el1VsM3 = eo('tbody');
let elqu800 = eo('tr');
let elsL0uC = eo('th');
text(`Webmail url`);
ec('th');
let elEL0ho = eo('th');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let el8hnzb = eo('tr');
let elkNEPR = eo('th');
text(`Email Address`);
ec('th');
let elec3x_ = eo('th');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let elDtDXQ = eo('tr');
let elW_DHp = eo('th');
text(`Password`);
ec('th');
let elX8ENH = eo('th');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}ec('main');
let cmpWDmc = this._lc('cLiQf4FCG', {parent:component,parentTop:layout,props:{comments:component.resource.comments,typeId:component.resource.id},attrs:{type:'resource'}});
let eljvFcT = eo('table',null,null,`class`,`table table-bordered mt-1`,`id`,`status-table`);
let elD0QTv = eo('thead');
let el6xDAE = eo('tr');
let elrbb64 = eo('th');
text(`Created By`);
ec('th');
let elgRvyG = eo('th');
text(`Created At`);
ec('th');
ec('tr');
ec('thead');
let el8XXo8 = eo('tbody');
let elI7hAA = eo('tr');
let elsbjtP = eo('td');
text(component.resource.createdBy.name);
ec('td');
let elf2wrl = eo('td');
let cmppbYz = this._lc('c4XeV1qIP', {parent:component,parentTop:layout,props:{timestamp:component.resource.createdAt.timestamp}});
ec('td');
ec('tr');
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });