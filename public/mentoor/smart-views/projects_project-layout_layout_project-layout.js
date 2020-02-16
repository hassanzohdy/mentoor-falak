_Component({
                selector: 'project-layout',
                c: 'ProjectLayout', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['sidebarIsVisible','project'],
                children: {cSBRxsceV:'project-sidebar',ckcAA2RV3:'flk-spinner',cNIp1_oHo:'layout'},
                render: function (component) {
                    let cmphc47 = this._lc('cNIp1_oHo', {parent:component,content:(layout) => {let elQplm8 = eo('div',null,null,`class`,`row`);
let cndgUmT = component.sidebarIsVisible;
this.setState('st7xMd8', cndgUmT);
if (cndgUmT) { 
let cmplMdo = this._lc('cSBRxsceV', {parent:component,parentTop:layout,props:{project:component.project},state:'st7xMd8'});
}let elRPEPx = eo('div',null,null,`class`,`col-12`);
elRPEPx.cls = {'offset-md-2': component.sidebarIsVisible, 'col-md-10': component.sidebarIsVisible};

            for (let className in elRPEPx.cls) {
                elRPEPx.classList.toggle(className, elRPEPx.cls[className]);
            }  
            let cndskUt = ! component.project;
this.setState('stCiKb5', cndskUt);
let cndEYIw = !(cndskUt);
this.setState('stHzunb', cndEYIw);
if (cndskUt) { 
let elCVbqc = eo('div','cPRf',null,`class`,`m-t-5`);
let cmpA_W9 = this._lc('ckcAA2RV3', {parent:component,parentTop:layout,state:'stCiKb5'});
ec('div');
}else { 

        if (this.hasContent()) {
            this.content();
        }}ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });