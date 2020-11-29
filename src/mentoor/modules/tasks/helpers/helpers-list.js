const TASK_STATUSES = [
    'notStarted',
    'analyzing',
    'inProgress',
    'hold',
    'inReview',
    'testing',
    'completed',
    'failed',
    'autoFailed',
    'archived',
];

function taskStatus(task) {
    return {
        'btn-lime': ['active', 'opened'].includes(task.status),
        'btn-brown': task.status == 'notBug',
        'btn-analyzing': task.status == 'analyzing',
        'btn-pink': task.status == 'retesting',
        'btn-orange': task.status == 'hold',
        'btn-gray': task.status == 'archived',
        'btn-cyan': ['notStarted', 'reopened'].includes(task.status),
        'btn-purple': task.status == 'inProgress',
        'btn-warning': ['inReview', 'deferred'].includes(task.status),
        'btn-success': ['completed', 'fixed'].includes(task.status),
        'btn-danger': ['failed', 'closed', 'rejected'].includes(task.status),
        'btn-red': task.status == 'autoFailed',
        'btn-teal': task.status == 'testing',
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
            return ['inProgress', 'analyzing'];
        } else if (task.status == 'analyzing') {
            return ['inProgress'];
        } else if (task.status == 'inProgress') {
            return ['inReview'];
        } else if (task.status == 'inReview') {
            return ['inProgress'];
        }
    }
}

function displayTaskScore(task) {
    return (task.rating * 20) + '%';
}

function getTaskScoreStyle(task) {
    return {
        'dark-red-text': task.rating == 1,
        'red-text': task.rating == 2,
        'orange-text': task.rating == 3,
        'blue-text': task.rating == 4,
        'green-text': task.rating == 5,
    };
}

function isUserMemberOfProject(project, user) {
    return Boolean(project.members.find(member => member.member.id == user.id));
}

function prepareTask(task) {
    task.dropdown = false;
    if (!currentUser) {
        currentUser = DI.resolve('user');
    }

    task.isSupervisor = Boolean(
        Array.get(task.supervisors, supervisor => supervisor.id == currentUser.id)
    );

    task.isParticipant = task.participant && task.participant.id == currentUser.id;

    task.openStatusChanger = false;

    task.canUserControl = canUserControl(task);

    task.currentUserIsSupervisor = task.supervisors.find(supervisor => supervisor.id == currentUser.id);

    // task.openStatusChanger = task.canUserControl;

    task.progress = {
        total: 1,
        completed: task.status == 'completed' ? 1 : 0,
        percentage: (task.status == 'completed' ? 1 : 0) * 100,
    };

    if (!Is.empty(task.checklists)) {
        let totalChecklistItems = 0,
            totalCompletedChecklistItems = 0;

        for (let checklist of task.checklists) {
            totalChecklistItems += checklist.items.length;
            totalCompletedChecklistItems += checklist.items.filter(item => item.done).length;
        }

        task.progress = {
            total: totalChecklistItems,
            completed: totalCompletedChecklistItems,
            percentage: totalCompletedChecklistItems * 100 / totalChecklistItems,
        };
    }

    return task;
}

function canUserControl(task) {
    if (!currentUser) {
        currentUser = DI.resolve('user');
    }

    return (
        currentUser && currentUser.id == 1 ||
        task.isParticipant ||
        task.isSupervisor ||
        task.createdBy.id == currentUser.id ||
        // userCanJoinAnyProjectIn(currentUserCompany()) ||
        task.project && isUserMemberOfProject(task.project, currentUser) &&
        (
            task.project.is.higherAuthority || projectMemberIs(task.project, 'softwareTester')
        )
    );
}

function projectMemberIs(project, role) {
    if (!currentUser) {
        currentUser = DI.resolve('user');
    }

    return project.members.find(member => member.role == role && member.member.id == currentUser.id) != undefined;
}