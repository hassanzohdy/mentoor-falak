_Component({
                selector: 'resource-details-page',
                c: 'ResourceDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','resource'],
                children: {c2EonOIZZ:'flk-spinner',ct1oMH7X3:'flk-time-ago',c5lah_uLX:'markdown',cVz72KaPm:'flk-youtube-video',cEjf5pG2v:'comments',cFGEqbCd6:'flk-time-ago',cAMlVUUZX:'layout'},
                render: function (component) {
                    let cmpaCsh = this._lc('cAMlVUUZX', {parent:component,content:(layout) => {let cndzzCO = component.isLoading;
this.setState('stlwRAQ', cndzzCO);
let cndAd2x = !(cndzzCO);
this.setState('styYuOo', cndAd2x);
if (cndzzCO) { 
let cmpeVD9 = this._lc('c2EonOIZZ', {parent:component,parentTop:layout,state:'stlwRAQ'});
}else { 
let elWka4z = eo('div',null,null,`class`,`text-right`);
let eloeq0f = eo('a',null,null,`href`,`${URLS.project(component.resource.project)}`,`class`,`btn btn-green`);
text(component.resource.project.name);
ec('a');
ec('div');
let eluaXhl = eo('h1');
text(component.resource.title);
ec('h1');
let cndb7r2 = component.resource.createdAt;
this.setState('sthGDJ_', cndb7r2);
if (cndb7r2) { 
let elLFaSk = eo('p','M3af',null,`class`,`teal-text`);
let cmpQm8Q = this._lc('ct1oMH7X3', {parent:component,parentTop:layout,props:{timestamp:component.resource.createdAt.timestamp},state:'sthGDJ_'});
ec('p');
}let cnd_KCW = component.resource.description;
this.setState('steMgD4', cnd_KCW);
if (cnd_KCW) { 
let elGHmR2 = eo('p','tpdf',null,`class`,`description card p-1`);
let cmpD_dP = this._lc('c5lah_uLX', {parent:component,parentTop:layout,props:{content:component.resource.description},state:'steMgD4'});
ec('p');
}let el7sURC = eo('main');
let cndT5vv = component.resource.type == 'link';
this.setState('stLjDqY', cndT5vv);
let cndKiYQ = component.resource.type == 'image';
this.setState('stGXHUd', cndKiYQ);
let cnd4uqF = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('st2XCMr', cnd4uqF);
let cndxR8T = component.resource.type == 'youtube';
this.setState('stvhq0Q', cndxR8T);
let cndJRxg = component.resource.type == 'ftp';
this.setState('st6WXJM', cndJRxg);
let cndYpSk = component.resource.type == 'website';
this.setState('st8_DYI', cndYpSk);
let cndR0pj = component.resource.type == 'email';
this.setState('stXOwfm', cndR0pj);
if (cndT5vv) { 
let el33xtK = eo('h2','mtaf');
text(`The link to open`);
ec('h2');
let elvoebs = eo('p','eSZf',null,`class`,`p-2`);
let elRqj6K = eo('a','Xnvf',null,`class`,`btn btn-red`,`href`,`${component.resource.settings.link}`);
text(Array.end(component.resource.settings.link.split('/')));
ec('a');
ec('p');
}else if (cndKiYQ) { 
let elzV9AF = eo('h2');
text(`The image attached`);
ec('h2');
let el4ZIkW = eo('p',null,null,`class`,`p-2`);
let elv2Ekx = eo('a',null,null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let elYk6DY = ev('img',null,null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
ec('p');
}else if (cnd4uqF) { 
let el4l2NL = eo('h2');
text(`The PDF attached`);
ec('h2');
let elO6YqS = eo('p',null,null,`class`,`p-2`);
let elp2icA = eo('a',null,null,`class`,`btn btn-red`,`href`,`${component.resource.attachment}`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
ec('p');
}else if (cndxR8T) { 
let elW43GZ = eo('div',null,null,`class`,`text-center`);
let cmp3r_K = this._lc('cVz72KaPm', {parent:component,parentTop:layout,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`,style:'width: 100%; height: 400px'},state:'stvhq0Q'});
ec('div');
}else if (cndJRxg) { 
let elIFQNp = eo('h2',null,null,`class`,`m-t-0`);
text(`FTP Account Info

                    (`);
let elXJMj9 = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h2');
let eldAK0d = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elFRKGi = eo('tbody');
let el0ihWj = eo('tr');
let eld33TP = eo('th');
text(`FTP Host`);
ec('th');
let el5bXoL = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let elaQzL6 = eo('tr');
let el32mK3 = eo('th');
text(`FTP Username`);
ec('th');
let elSO9KE = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elGH0OT = eo('tr');
let el4hQ2B = eo('th');
text(`FTP password`);
ec('th');
let elNFQai = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let elxkxBL = eo('tr');
let elVUWLP = eo('th');
text(`FTP Port`);
ec('th');
let elziIo5 = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndYpSk) { 
let elA5LRS = eo('h1');
text(`${component.resource.settings.website.name} Website
                    (`);
let elh0isO = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elVSYFy = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let el3hdEU = eo('tbody');
let el3_k2m = eo('tr');
let elDS5om = eo('th');
text(`Website`);
ec('th');
let elPSLU6 = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let eltOYa2 = eo('tr');
let elKLRjX = eo('th');
text(`Website Url`);
ec('th');
let ela0rci = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let ellHCMR = eo('tr');
let elAKLHX = eo('th');
text(`Username`);
ec('th');
let eldgTKd = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let elorq7b = eo('tr');
let elusniJ = eo('th');
text(`Password`);
ec('th');
let elKI30A = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndR0pj) { 
let el9Bwig = eo('h1');
text(`Email Account Info
                    (`);
let elzL9bF = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let el1TSAA = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let el24MrP = eo('tbody');
let elIuDrQ = eo('tr');
let elNJBa7 = eo('th');
text(`Webmail url`);
ec('th');
let elJdLus = eo('th');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elis6OF = eo('tr');
let el0Xb_H = eo('th');
text(`Email Address`);
ec('th');
let eluko9_ = eo('th');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let elGTYqo = eo('tr');
let elLVA7s = eo('th');
text(`Password`);
ec('th');
let el80L1j = eo('th');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}ec('main');
let cmpSY92 = this._lc('cEjf5pG2v', {parent:component,parentTop:layout,props:{comments:component.resource.comments,typeId:component.resource.id},attrs:{type:'resource'}});
let elnVcSB = eo('table',null,null,`class`,`table table-bordered mt-1`,`id`,`status-table`);
let elGxFjQ = eo('thead');
let el9bquh = eo('tr');
let elWrSBv = eo('th');
text(`Created By`);
ec('th');
let elOXVaD = eo('th');
text(`Created At`);
ec('th');
ec('tr');
ec('thead');
let el3up1L = eo('tbody');
let elicXdC = eo('tr');
let eljgtzP = eo('td');
text(component.resource.createdBy.name);
ec('td');
let el_hOHL = eo('td');
let cmpdDnM = this._lc('cFGEqbCd6', {parent:component,parentTop:layout,props:{timestamp:component.resource.createdAt.timestamp}});
ec('td');
ec('tr');
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });