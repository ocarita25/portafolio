const path = 'images/tecnologias'

interface TecnologiasType {
    id: string,
    categoria: string,
    tecnologias: {
        src: string,
        alt: string,
        name: string,
    }[]
}

export const frontend: TecnologiasType = {
    id: '1',
    categoria: 'Frontend',
    tecnologias: [
        {
            src: `${path}/typescript.webp`,
            alt: 'typescript',
            name: 'TypeScript',
        },
        {
            src: `${path}/js.png`,
            alt: 'javascript.png',
            name: 'Javascript',
        },
        {
            src: `${path}/css.png`,
            alt: 'css',
            name: 'CCS 3',
        },
        {
            src: `${path}/html.png`,
            alt: 'html',
            name: 'HTML5',
        },
        {
            src: `${path}/reactjs.png`,
            alt: 'reactjs',
            name: 'React JS',
        },
        {
            src: `${path}/bootstrap.png`,
            alt: 'bootstrap',
            name: 'Bootstrap',
        },
        {
            src: `${path}/tailwind.png`,
            alt: 'tailwind',
            name: 'Tailwind',
        },
    ]
}

export const backend: TecnologiasType = {
    id: '2',
    categoria: 'Backend',
    tecnologias: [
        {
            src: `${path}/nodejs.png`,
            alt: 'node js',
            name: 'Node.js',
        },
        {
            src: `${path}/mysql.png`,
            alt: 'mysql',
            name: 'MySQL',
        },
        {
            src: `${path}/expressjs.webp`,
            alt: 'express js',
            name: 'Express JS',
        },
    ]
}

export const tecnologias: TecnologiasType[] = [
    {
        id: '1',
        categoria: 'Frontend',
        tecnologias: [
            {
                src: `${path}/typescript.webp`,
                alt: 'typescript',
                name: 'TypeScript',
            },
            {
                src: `${path}/js.png`,
                alt: 'javascript.png',
                name: 'Javascript',
            },
            {
                src: `${path}/css.png`,
                alt: 'css',
                name: 'CCS 3',
            },
            {
                src: `${path}/html.png`,
                alt: 'html',
                name: 'HTML5',
            },
            {
                src: `${path}/reactjs.png`,
                alt: 'reactjs',
                name: 'React JS',
            },
            {
                src: `${path}/bootstrap.png`,
                alt: 'bootstrap',
                name: 'Bootstrap',
            },
            {
                src: `${path}/tailwind.png`,
                alt: 'tailwind',
                name: 'Tailwind',
            },
        ]
    },
    {
        id: '2',
        categoria: 'Backend',
        tecnologias: [
            {
                src: `${path}/nodejs.png`,
                alt: 'node js',
                name: 'Node.js',
            },
            {
                src: `${path}/mysql.png`,
                alt: 'mysql',
                name: 'MySQL',
            },
            {
                src: `${path}/expressjs.webp`,
                alt: 'express js',
                name: 'Express JS',
            },
        ]
    },
]