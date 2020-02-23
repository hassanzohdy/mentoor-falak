_Component({
                selector: 'resource-details-page',
                c: 'ResourceDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','resource'],
                children: {caSkgEVbM:'flk-spinner',c4IH0IbFa:'flk-time-ago',cl4yQ8o9Y:'markdown',cXe3kB8Tk:'flk-youtube-video',chowL5_IS:'comments',cYS4H5EdK:'flk-time-ago',c170vl2tm:'layout'},
                render: function (component) {
                    let cmpGZ7a = this._lc('c170vl2tm', {parent:component,content:(layout) => {let cndofwK = component.isLoading;
this.setState('str0Thx', cndofwK);
let cnd4hR0 = !(cndofwK);
this.setState('st27t9K', cnd4hR0);
if (cndofwK) { 
let cmpSjDg = this._lc('caSkgEVbM', {parent:component,parentTop:layout,state:'str0Thx'});
}else { 
let el41hej = eo('div',null,null,`class`,`text-right`);
let elqJYGF = eo('a',null,null,`href`,`${URLS.project(component.resource.project)}`,`class`,`btn btn-green`);
text(component.resource.project.name);
ec('a');
ec('div');
let elmIqDB = eo('h1');
text(component.resource.title);
ec('h1');
let cndziuh = component.resource.createdAt;
this.setState('stzDVLe', cndziuh);
if (cndziuh) { 
let el1lRiz = eo('p','dQbf',null,`class`,`teal-text`);
let cmpJAgy = this._lc('c4IH0IbFa', {parent:component,parentTop:layout,props:{timestamp:component.resource.createdAt.timestamp},state:'stzDVLe'});
ec('p');
}let cndYBuh = component.resource.description;
this.setState('stz9kQo', cndYBuh);
if (cndYBuh) { 
let ely2J4T = eo('p','Ax7f',null,`class`,`description card p-1`);
let cmpE6FT = this._lc('cl4yQ8o9Y', {parent:component,parentTop:layout,props:{content:component.resource.description},state:'stz9kQo'});
ec('p');
}let elgV7Gl = eo('main');
let cndSQiU = component.resource.type == 'link';
this.setState('stkQJKp', cndSQiU);
let cndx2XE = component.resource.type == 'image';
this.setState('stvzkjU', cndx2XE);
let cndvuvT = ['attachment', 'pdf'].includes(component.resource.type);
this.setState('st4xZ0v', cndvuvT);
let cndH6df = component.resource.type == 'youtube';
this.setState('stalU44', cndH6df);
let cndRjBH = component.resource.type == 'ftp';
this.setState('stEQMBb', cndRjBH);
let cndp0YF = component.resource.type == 'website';
this.setState('stk1X8A', cndp0YF);
let cnd9hcu = component.resource.type == 'email';
this.setState('stGYbQP', cnd9hcu);
if (cndSQiU) { 
let eldjdb6 = eo('h2','baif');
text(`The link to open`);
ec('h2');
let elYEgKA = eo('p','NZxf',null,`class`,`p-2`);
let elEeOlX = eo('a','EFff',null,`class`,`btn btn-red`,`href`,`${component.resource.settings.link}`);
text(Array.end(component.resource.settings.link.split('/')));
ec('a');
ec('p');
}else if (cndx2XE) { 
let elxJpRN = eo('h2');
text(`The image attached`);
ec('h2');
let elT5706 = eo('p',null,null,`class`,`p-2`);
let elmqALX = eo('a',null,null,`href`,`${component.resource.attachment}`,`target`,`_blank`);
let el0VIBy = ev('img',null,null,`src`,`${component.resource.attachment}`,`class`,`img-thumbnail`,`title`,`${component.resource.title}`,`alt`,`${component.resource.title}`);
ec('a');
ec('p');
}else if (cndvuvT) { 
let el6qwKf = eo('h2');
text(`The PDF attached`);
ec('h2');
let elXrSxe = eo('p',null,null,`class`,`p-2`);
let elbqARp = eo('a',null,null,`class`,`btn btn-red`,`href`,`${component.resource.attachment}`,`target`,`_blank`);
text(Array.end(component.resource.attachment.split('/')));
ec('a');
ec('p');
}else if (cndH6df) { 
let elxqv1l = eo('div',null,null,`class`,`text-center`);
let cmpEEDV = this._lc('cXe3kB8Tk', {parent:component,parentTop:layout,props:{src:component.resource.settings.youtube},attrs:{src:`${component.resource.settings.youtube}`,style:'width: 100%; height: 400px'},state:'stalU44'});
ec('div');
}else if (cndRjBH) { 
let elCuNoq = eo('h2',null,null,`class`,`m-t-0`);
text(`FTP Account Info

                    (`);
let elJYAWi = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h2');
let elUb2Mv = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elhQPF_ = eo('tbody');
let elTomM_ = eo('tr');
let elQcAmA = eo('th');
text(`FTP Host`);
ec('th');
let elMXxqo = eo('th');
text(component.resource.settings.ftp.host);
ec('th');
ec('tr');
let elXk3MC = eo('tr');
let elPAbid = eo('th');
text(`FTP Username`);
ec('th');
let elEzz2V = eo('th');
text(component.resource.settings.ftp.username);
ec('th');
ec('tr');
let ellVYq6 = eo('tr');
let elR7Maa = eo('th');
text(`FTP password`);
ec('th');
let el4QRbV = eo('th');
text(component.resource.settings.ftp.password);
ec('th');
ec('tr');
let eleGGRP = eo('tr');
let elywLw5 = eo('th');
text(`FTP Port`);
ec('th');
let el4GNH3 = eo('th');
text(component.resource.settings.ftp.port);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cndp0YF) { 
let el8U5fv = eo('h1');
text(`${component.resource.settings.website.name} Website
                    (`);
let elUti56 = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let elz0aKY = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elgImt8 = eo('tbody');
let elczkix = eo('tr');
let elObH3r = eo('th');
text(`Website`);
ec('th');
let elPa_DW = eo('th');
text(component.resource.settings.website.name);
ec('th');
ec('tr');
let el6NiN3 = eo('tr');
let el_8kLt = eo('th');
text(`Website Url`);
ec('th');
let elgsSbB = eo('th');
text(component.resource.settings.website.url);
ec('th');
ec('tr');
let elo_OFa = eo('tr');
let elMvxkj = eo('th');
text(`Username`);
ec('th');
let elwaagf = eo('th');
text(component.resource.settings.website.username);
ec('th');
ec('tr');
let elOAmJY = eo('tr');
let elG0T0g = eo('th');
text(`Password`);
ec('th');
let elzLTo7 = eo('th');
text(component.resource.settings.website.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}else if (cnd9hcu) { 
let elBOCXI = eo('h1');
text(`Email Account Info
                    (`);
let elMooXE = eo('span');
text(component.resource.title);
ec('span');
text(`)`);
ec('h1');
let eli8Iti = eo('table',null,null,`class`,`table table-bordered table-striped resource-table`);
let elmdA8J = eo('tbody');
let elqM90U = eo('tr');
let elfRvxI = eo('th');
text(`Webmail url`);
ec('th');
let elqHryH = eo('th');
text(component.resource.settings.email.url);
ec('th');
ec('tr');
let elte8dg = eo('tr');
let el5hYcM = eo('th');
text(`Email Address`);
ec('th');
let elRcpqz = eo('th');
text(component.resource.settings.email.email);
ec('th');
ec('tr');
let elvLhdp = eo('tr');
let el118d9 = eo('th');
text(`Password`);
ec('th');
let elVizOR = eo('th');
text(component.resource.settings.email.password);
ec('th');
ec('tr');
ec('tbody');
ec('table');
}ec('main');
let cmpFiio = this._lc('chowL5_IS', {parent:component,parentTop:layout,props:{comments:component.resource.comments,typeId:component.resource.id},attrs:{type:'resource'}});
let elK56Br = eo('table',null,null,`class`,`table table-bordered mt-1`,`id`,`status-table`);
let elsNr7E = eo('thead');
let elnG8wh = eo('tr');
let el_flLB = eo('th');
text(`Created By`);
ec('th');
let elObTa2 = eo('th');
text(`Created At`);
ec('th');
ec('tr');
ec('thead');
let el1eIyH = eo('tbody');
let elTW2ep = eo('tr');
let elWUHF7 = eo('td');
text(component.resource.createdBy.name);
ec('td');
let elYbiyt = eo('td');
let cmp_GhZ = this._lc('cYS4H5EdK', {parent:component,parentTop:layout,props:{timestamp:component.resource.createdAt.timestamp}});
ec('td');
ec('tr');
ec('tbody');
ec('table');
}}});

                    this.isReadyToGo();
                }
        });