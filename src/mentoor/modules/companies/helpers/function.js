function userHasCompany() {
    const user = DI.resolve('user'),
        companies = user.get('companies');

    return user.isLoggedIn() && !Is.empty(companies);
}

function sendCompanyInHeader(options) {
    if (!userHasCompany()) return;

    const currentCompany = currentUserCompany();

    if (currentCompany) {
        options.headers.COMPANY = currentCompany.id;
    }
}

function updateUserCompany() {
    if (userHasCompany()) {
        cacheUserCompany();
    }
}

function userCompanies() {
    const user = DI.resolve('user'),
        companies = user.get('companies', []);

    return companies;
}

function setCurrentCompanyProjects(projects) {
    let company = currentUserCompany();

    company.projects = projects;

    DI.resolve('cache').set('cc', company);
}

function companyStaffThatCanJoinAnyProject() {
    return (currentUserCompany().staff || []).filter(staff => staff.canJoinAnyProject);
}

function userCanJoinAnyProjectIn(company) {
    const user = DI.resolve('user');

    if (!user.isLoggedIn() || !company) return false;

    let userAsStaff = company.staff.find(staff => staff.user.id === user.get('id'));

    if (!userAsStaff) return false;

    return userAsStaff.canJoinAnyProject;
}

function firstCompany() {
    return userCompanies()[0];
}


function getCurrentProjectsCompany() {
    const company = currentUserCompany();
    if (!company) return [];
    return company.projects || [];
}

function currentUserCompany() {
    return DI.resolve('cache').get('cc', firstCompany());
}

function cacheUserCompany() {
    const user = DI.resolve('user'),
        cache = DI.resolve('cache'),
        endpoint = DI.resolve('endpoint'),
        companies = user.get('companies');

    let currentCompany = currentUserCompany();

    let companyId = cache.get('cc', {}).id || companies[0].id;

    endpoint.get(`/companies/${companyId}`).then(response => {
        let company = response.record;

        if (currentCompany && currentCompany.projects) {
            company.projects = currentCompany.projects;
        }

        cache.set('cc', company);
    });
}