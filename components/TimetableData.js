// sourceMan
// wasteMan
// peopleCult
// disMarks
// break

export const ttData = [
    {
        id: '123',
        timeStart: '09:00',
        timeEnd: '11:00',
        theme: 'sourceMan',
        title: 'Keynote',
        host: { name: 'Erin Meezan', title: 'Director and global head of climate business', org: 'Capitals Coalition' },

        speakers: [
            { name: 'Erin Meezan', title: 'Director and global head of climate business', org: 'Capitals Coalition' },
            { name: 'James Smith', title: 'Praesent sapien massa, convallis', org: 'Sed porttitor' },
            { name: 'Greg Bloothe', title: ' egestas non nisi. Pellentesque in ipsum', org: 'dui posuere blandit' },
        ],

        overview:
            'Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.',
        sponsors: ['static/brands/5.png'],
        supporters: ['static/brands/10.png'],
    },

    {
        id: '456',
        timeStart: '1:00',
        timeEnd: '12:15',
        theme: 'disMarks',
        title: 'Emergency Response: Re-writing the action plan',
        host: { name: 'Annika Ramsköld', title: 'Vice president corporate sustainability', org: 'VATTENFALL AB' },
        overview:
            'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.',
        sponsors: ['static/brands/3.png', 'static/brands/4.png', 'static/brands/5.png', 'static/brands/6.png', 'static/brands/7.png'],
        supporters: ['static/brands/11.png', 'static/brands/12.png', 'static/brands/13.png'],
    },

    {
        id: '789',
        timeStart: '1:00',
        timeEnd: '12:15',
        theme: 'break',
        title: 'Mid Morning Matters',
    },

    {
        id: '101112',
        timeStart: '1230',
        timeEnd: '1600',
        theme: 'peopleCult',
        title: 'The road to, and beyond, nut-zero',
        host: { name: 'Schnitzel Von Crumb', title: 'The Big Boss', org: 'Splicknel Artifacts' },

        speakers: [
            { name: 'Erin Meezan', title: 'Director and global head of climate business', org: 'Capitals Coalition' },
            { name: 'James Smith', title: 'Praesent sapien massa, convallis', org: 'Sed porttitor' },
            { name: 'Greg Bloothe', title: ' egestas non nisi. Pellentesque in ipsum', org: 'dui posuere blandit' },
        ],
        overview:
            'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
        sponsors: ['static/brands/18.png', 'static/brands/17.png'],
        supporters: ['static/brands/10.png', 'static/brands/19.png'],
    },
]
