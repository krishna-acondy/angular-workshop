var moment = require('moment');

const stories = [
    {
        id: 1,
        title: 'Case self-assignment for Pathologists',
        description: 'As a pathologist, I would like to assign a case to myself from the worklist',
        status: 'To Do',
        createdAt: moment().subtract(1, 'day')
    },
    {
        id: 2,
        title: 'Approve annotations from the viewer',
        description: 'As a pathologist, I would like to approve annotations while viewing a slide',
        status: 'In Progress',
        createdAt: moment().subtract(3, 'days')
    },
    {
        id: 3,
        title: 'Reject annotations from the viewer',
        description: 'As a pathologist, I would like to reject annotations while viewing a slide',
        status: 'In Progress',
        createdAt: moment().subtract(3, 'days')
    },
    {
        id: 4,
        title: 'Tumor boundaries on thumbnails',
        description: 'As a pathologist, I would like to see the tumor boundaries on slide thumbnails',
        status: 'In Progress',
        createdAt: moment().subtract(2, 'days')
    },
    {
        id: 5,
        title: 'Filter cases by tumor percentage',
        description: 'As a lab manager, I would like to filter cases by tumor percentage',
        status: 'Done',
        createdAt: moment().subtract(6, 'days')
    },
    {
        id: 6,
        title: 'Manual Case Creation',
        description: 'As a lab manager, I would like to create cases from the worklist',
        status: 'Done',
        createdAt: moment().subtract(5, 'days')
    },
    {
        id: 7,
        title: 'Authentication and Session Management',
        description: 'As a user, I would like to log in to the application',
        status: 'Flagged',
        createdAt: moment()
    },
    {
        id: 8,
        title: 'IMS Integration',
        description: 'As a lab manager, I would like cases pushed from IMS to automatically show in my worklist',
        status: 'To Do',
        createdAt: moment()
    }
]

module.exports = {
    stories: stories
};
