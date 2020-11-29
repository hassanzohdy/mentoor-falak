const PRIORITIES = [
    'low',
    'medium',
    'high',
];

function projectDeadline(project) {
    if (project.status === 'completed' || !project.endDate) return;

    let startDate = project.startDate ? moment(project.startDate, 'DD-MM-YYYY') : moment.unix(project.createdAt.timestamp);
    let endDate = moment(project.endDate, 'DD-MM-YYYY');
    let totalProjectDays = endDate.diff(startDate, 'days') + 1; // as the starting date will be counted as well, then we'll add one more day 
    let remainingDays = endDate.diff(moment(), 'days') + 1;

    project.deadline = {
        totalProjectDays,
        remainingDays,
        takenTIme: totalProjectDays - remainingDays,
        takenTimePercentage: Math.round((totalProjectDays - remainingDays) * 100 / totalProjectDays),
        remainingPercentage: Math.round(remainingDays * 100 / totalProjectDays),
    };
}