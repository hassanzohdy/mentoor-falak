_Component({
                selector: 'resource-details-page',
                c: 'ResourceDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','resource'],
                children: {cD9eGSsdu:'flk-spinner',cOd0qq2ND:'flk-time-ago',cYyLU19GD:'markdown',c8Wrp0aer:'flk-youtube-video',czdwO1xOp:'comments',cLDRjHgNy:'flk-time-ago',c4SVeTel2:'layout'},
                render: function (component) {
                    let cmpifsX = this._lc('c4SVeTel2', {parent:component,content:(layout) => {let cndxVqp = component.isLoading;
this.setState('stfSXPT', cndxVqp);
let cndZXH3 = !(cndxVqp);
this.setState('stXCXg2', cndZXH3);
if (cndxVqp) { 
let cmpo2Ai = this._lc('cD9eGSsdu', {parent:component,parentTop:layout,state:'stfSXPT'});
}else { 
let eld7w5g = eo('div',null,null,`class`,`text-right`);
let elR6JOi = eo('a',null,null,`href`,`${URLS.project(component.resource.project)}`,`class`,`btn btn-green`);
text(component.resource.project.name);
ec('a');
ec('div');
let elOL8E8 = eo('h1');
text(component.resource.title);
ec('h1');
let cndLktM = component.resource.createdAt;
this.setState('stQTF7l', cndLktM);
if (cndLktM) { 
let elk2Cgm = eo('p','Ooff',null,`class`,`teal-text`);
let cmpIyiR = this._lc('cOd0qq2ND', {parent:component,parentTop:layout,props:{timestamp:component.resource.createdAt.timestamp},state:'stQTF7l'});
ec('p');
}let cndmh3i = component.resource.description;
this.setState('stOOrtp', cndmh3i);
if (cndmh3i) { 
let elIwFdb = eo('p','ePjf',null,`class`,`description card p-1`);
let cmpEktX = this._lc('cYyLU19GD', {parent:component,parentTop:layout,props:{content:component.resource.description},state:'stOOrtp'});
ec('p');
}let eltob7j = eo('main');
let cndWKf9 = component.resource.type == 'link';
this.setState('stK8sQD', cndWKf9);
let cnd2kqk = component.resource.type == 'image';
this.setState('styPSb0', cnd2kqk);
let cndFriP = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('stpZtaf', cndFriP);
let cndMkIZ = component.resource.type == 'youtube';
this.setState('stCy6Y7', cndMkIZ);
let cndiU2D = component.resource.type == 'ftp';
this.setState('st0ySfZ', cndiU2D);
let cndZHpi = component.resource.type == 'website';
this.setState('sthz2dy', cndZHpi);
let cndvkwM = component.resource.type == 'email';
this.setState('stE3aCc', cndvkwM);
if (cndWKf9) { 
let elPs3e_ = eo('h2','7Bhf');
text(`The link to open`);
ec('h2');
let el7jHvD = eo('p','Uvpf',null,`class`,`p-2`);
let el1KhSa = eo('a','jq9f',null,`class`,`btn btn-red`,`href`,`${component.resource.settings.link}`);
text(Array.end(component.resource.settings.link.split('/')));
ec('a');
ec('p');
}else if (cnd2kqk) { 
let elSQJMu = eo('h2');
text(`The image attached`);
ec('h2');
let elI0AfN = eo('p',null,null,`class`,`p-2`);
let elMd4kR = eo('a',null,null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let elhONRP = ev('img',null,null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
ec('p');
}else if (cndFriP) { 
let el8AnZt = eo('h2');
text(`The PDF attached`);
ec('h2');
let elhR9He = eo('p',null,null,`class`,`p-2`);
let el8MSI7 = eo('a',null,null,`class`,`btn btn-red`,`href`,`${component.resource.attachment}`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
ec('p');
}else if (cndMkIZ) { 
let elkftTu = eo('div',null,null,`class`,`text-center`);
let cmpfG_W = this._lc('c8Wrp0aer', {parent:component,parentTop:layout,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`,style:'width: 100%; height: 400px'},state:'stCy6Y7'});
ec('div');
}else if (cndiU2D) { 
let elM4fST = eo('h2',null,null,`class`,`m-t-0`);
text(`FTP Account Info

                    (`);
let elJpZev = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h2');
let elIOpZ1 = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elF5_IU = eo('tbody');
let elQnJPk = eo('tr');
let elI5Ao8 = eo('th');
text(`FTP Host`);
ec('th');
let elD3aaT = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let eleqSeO = eo('tr');
let elcIDVB = eo('th');
text(`FTP Username`);
ec('th');
let el2iJkd = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let elkAxQ3 = eo('tr');
let elYZxOc = eo('th');
text(`FTP password`);
ec('th');
let elqVAIS = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let elkWZBl = eo('tr');
let elnsupR = eo('th');
text(`FTP Port`);
ec('th');
let elrpDse = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndZHpi) { 
let elhUqdJ = eo('h1');
text(`${component.resource.settings.website.name} Website
                    (`);
let elZb96u = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elyvNWe = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let eldFkQb = eo('tbody');
let elFBEL0 = eo('tr');
let elVLj_V = eo('th');
text(`Website`);
ec('th');
let el2vwrh = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let elxbR58 = eo('tr');
let elA9VtK = eo('th');
text(`Website Url`);
ec('th');
let elO2PjK = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let elUR8RB = eo('tr');
let elKvIOO = eo('th');
text(`Username`);
ec('th');
let elyK7l8 = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let elwOwrp = eo('tr');
let elIdas_ = eo('th');
text(`Password`);
ec('th');
let el0stMH = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndvkwM) { 
let elfiQt9 = eo('h1');
text(`Email Account Info
                    (`);
let elkeyvc = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elRnVjT = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let el4sB7q = eo('tbody');
let elGRmcy = eo('tr');
let elbabwT = eo('th');
text(`Webmail url`);
ec('th');
let el6ikfE = eo('th');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elMen4b = eo('tr');
let eliOF7c = eo('th');
text(`Email Address`);
ec('th');
let eltSRnV = eo('th');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let elA8oF0 = eo('tr');
let el93Kgy = eo('th');
text(`Password`);
ec('th');
let el8ELUS = eo('th');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}ec('main');
let cmpwRlP = this._lc('czdwO1xOp', {parent:component,parentTop:layout,props:{comments:component.resource.comments,typeId:component.resource.id},attrs:{type:'resource'}});
let el3I7dk = eo('table',null,null,`class`,`table table-bordered mt-1`,`id`,`status-table`);
let elzElff = eo('thead');
let elwUUA8 = eo('tr');
let eli9PXC = eo('th');
text(`Created By`);
ec('th');
let elGYQ9H = eo('th');
text(`Created At`);
ec('th');
ec('tr');
ec('thead');
let elz5ykI = eo('tbody');
let elsWJFJ = eo('tr');
let elNSKU8 = eo('td');
text(component.resource.createdBy.name);
ec('td');
let eluBwYD = eo('td');
let cmpIDGc = this._lc('cLDRjHgNy', {parent:component,parentTop:layout,props:{timestamp:component.resource.createdAt.timestamp}});
ec('td');
ec('tr');
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });