_Component({
                selector: 'resource-details-page',
                c: 'ResourceDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','resource'],
                children: {coD6twcvj:'flk-spinner',crLR8SHoK:'flk-time-ago',cvr1FZHcI:'markdown',c8q_1OepU:'flk-youtube-video',cN869I9a1:'comments',ctPLaw4qy:'flk-time-ago',coo4UwsVL:'layout'},
                render: function (component) {
                    let cmpsVRd = this._lc('coo4UwsVL', {parent:component,content:(layout) => {let cndEKL7 = component.isLoading;
this.setState('stt60NY', cndEKL7);
let cndZQLx = !(cndEKL7);
this.setState('stA0M6E', cndZQLx);
if (cndEKL7) { 
let cmpgGtX = this._lc('coD6twcvj', {parent:component,parentTop:layout,state:'stt60NY'});
}else { 
let elP0h4V = eo('div',null,null,`class`,`text-right`);
let elw0SOS = eo('a',null,null,`href`,`${URLS.project(component.resource.project)}`,`class`,`btn btn-green`);
text(component.resource.project.name);
ec('a');
ec('div');
let eljDhGb = eo('h1');
text(component.resource.title);
ec('h1');
let cnd6rPS = component.resource.createdAt;
this.setState('stYFBEX', cnd6rPS);
if (cnd6rPS) { 
let elCWtea = eo('p','7kef',null,`class`,`teal-text`);
let cmpc6UF = this._lc('crLR8SHoK', {parent:component,parentTop:layout,props:{timestamp:component.resource.createdAt.timestamp},state:'stYFBEX'});
ec('p');
}let cndOWB2 = component.resource.description;
this.setState('stVOzfD', cndOWB2);
if (cndOWB2) { 
let elYJuod = eo('p','q7If',null,`class`,`description card p-1`);
let cmp5RUH = this._lc('cvr1FZHcI', {parent:component,parentTop:layout,props:{content:component.resource.description},state:'stVOzfD'});
ec('p');
}let el28EfI = eo('main');
let cndtkKo = component.resource.type == 'link';
this.setState('stEssUp', cndtkKo);
let cnd3N7J = component.resource.type == 'image';
this.setState('statM_R', cnd3N7J);
let cndYCZh = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('stvwALD', cndYCZh);
let cndpOMP = component.resource.type == 'youtube';
this.setState('st00wAg', cndpOMP);
let cndl9VR = component.resource.type == 'ftp';
this.setState('st8vM7Z', cndl9VR);
let cndaYvb = component.resource.type == 'website';
this.setState('stqu7ZX', cndaYvb);
let cndvoRM = component.resource.type == 'email';
this.setState('stxwQ1F', cndvoRM);
if (cndtkKo) { 
let ellR_Gb = eo('h2','bXmf');
text(`The link to open`);
ec('h2');
let elVnhmS = eo('p','mGef',null,`class`,`p-2`);
let elfq8Eb = eo('a','7cqf',null,`class`,`btn btn-red`,`href`,`${component.resource.settings.link}`);
text(Array.end(component.resource.settings.link.split('/')));
ec('a');
ec('p');
}else if (cnd3N7J) { 
let elWTJtT = eo('h2');
text(`The image attached`);
ec('h2');
let elXhU3s = eo('p',null,null,`class`,`p-2`);
let elUUKwK = eo('a',null,null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let elag2iA = ev('img',null,null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
ec('p');
}else if (cndYCZh) { 
let elZu4di = eo('h2');
text(`The PDF attached`);
ec('h2');
let el20hV4 = eo('p',null,null,`class`,`p-2`);
let el30Kg8 = eo('a',null,null,`class`,`btn btn-red`,`href`,`${component.resource.attachment}`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
ec('p');
}else if (cndpOMP) { 
let el53sau = eo('div',null,null,`class`,`text-center`);
let cmpWrp6 = this._lc('c8q_1OepU', {parent:component,parentTop:layout,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`,style:'width: 100%; height: 400px'},state:'st00wAg'});
ec('div');
}else if (cndl9VR) { 
let elFqNLi = eo('h2',null,null,`class`,`m-t-0`);
text(`FTP Account Info

                    (`);
let el1v632 = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h2');
let elG72bM = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let eloaOt7 = eo('tbody');
let el2mEh4 = eo('tr');
let eljhWAa = eo('th');
text(`FTP Host`);
ec('th');
let elDcZ70 = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let elnAkiK = eo('tr');
let elvCxyC = eo('th');
text(`FTP Username`);
ec('th');
let elWGpdE = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elQhyPh = eo('tr');
let elA6y6h = eo('th');
text(`FTP password`);
ec('th');
let elkkEYE = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let elkSAys = eo('tr');
let elRQ8OF = eo('th');
text(`FTP Port`);
ec('th');
let elkJfXy = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndaYvb) { 
let elirtIL = eo('h1');
text(`${component.resource.settings.website.name} Website
                    (`);
let el3xIMN = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elO8rF8 = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let ele2NMr = eo('tbody');
let elQO0bl = eo('tr');
let elNs3f5 = eo('th');
text(`Website`);
ec('th');
let elRxbgH = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let eluGCjQ = eo('tr');
let el3ii5J = eo('th');
text(`Website Url`);
ec('th');
let elnCZB9 = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let elU2v_f = eo('tr');
let elfTiAn = eo('th');
text(`Username`);
ec('th');
let elmYLzT = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let elY2V1N = eo('tr');
let elpqMHS = eo('th');
text(`Password`);
ec('th');
let elzvurH = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndvoRM) { 
let elzQcrG = eo('h1');
text(`Email Account Info
                    (`);
let elhMEhp = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elxU78O = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elaepzJ = eo('tbody');
let el1gZT8 = eo('tr');
let elYFZ9c = eo('th');
text(`Webmail url`);
ec('th');
let elPgHH2 = eo('th');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elPcp3l = eo('tr');
let el46dL4 = eo('th');
text(`Email Address`);
ec('th');
let elt9Ymb = eo('th');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let elxy2Ge = eo('tr');
let elBo_fI = eo('th');
text(`Password`);
ec('th');
let elablVK = eo('th');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}ec('main');
let cmp8jo5 = this._lc('cN869I9a1', {parent:component,parentTop:layout,props:{comments:component.resource.comments,typeId:component.resource.id},attrs:{type:'resource'}});
let elXz7W6 = eo('table',null,null,`class`,`table table-bordered mt-1`,`id`,`status-table`);
let elYz_Pe = eo('thead');
let el6rHRm = eo('tr');
let elOCfRJ = eo('th');
text(`Created By`);
ec('th');
let elfTWwo = eo('th');
text(`Created At`);
ec('th');
ec('tr');
ec('thead');
let elRv7or = eo('tbody');
let elqkiA_ = eo('tr');
let elNfRPg = eo('td');
text(component.resource.createdBy.name);
ec('td');
let elPo95g = eo('td');
let cmpTGzY = this._lc('ctPLaw4qy', {parent:component,parentTop:layout,props:{timestamp:component.resource.createdAt.timestamp}});
ec('td');
ec('tr');
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });