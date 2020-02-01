const TASK_STATUSES = [
    'notStarted',
    'inProgress',
    'inReview',
    'completed',
    'failed',
    'autoFailed',
];
function taskStatus(task) {
    return {
        'btn-gray': task.status == 'archived',
        'btn-cyan': task.status == 'notStarted',
        'btn-purple': task.status == 'inProgress',
        'btn-warning': task.status == 'inReview',
        'btn-success': task.status == 'completed',
        'btn-danger': task.status == 'failed',
        'btn-red': task.status == 'autoFailed',
    };
}

let currentUser;

function getAllowedTaskStatuses(task) {
    if (!currentUser) {
        currentUser = DI.resolve('user');
    }

    const isParticipant = (user = currentUser) => {
        return task.participant.id == user.id;
    };

    const isSupervisor = () => {
        return Array.get(task.supervisors, supervisor => supervisor.id == currentUser.id) !== null;
    };

    if (isSupervisor() || task.project && task.project.is.higherAuthority) {
        // get all task statuses except the auto failed
        let statusesList = [];

        for (let status of TASK_STATUSES) {
            if (status == 'autoFailed') continue;

            statusesList.push(status);
        }

        return statusesList;
    }

    if (isParticipant()) {
        if (task.status == 'notStarted') {
            return ['inProgress'];
        } else if (task.status == 'inProgress') {
            return ['inReview'];
        } else if (task.status == 'inReview') {
            return ['inProgress'];
        }
    }
}