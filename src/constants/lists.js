export const navigation = {
    icon: "icon-park:right",
    links: [
        {
            label: "Type",
            showLeftIcon: false,
            showRightIcon: true
        },
        {
            label: "Design",
            showLeftIcon: false,
            showRightIcon: true
        },
        {
            label: "Content",
            showLeftIcon: false,
            showRightIcon: true
        },
        {
            label: "Targeting",
            showLeftIcon: false,
            showRightIcon: true
        },
        {
            label: "Behaviour",
            showLeftIcon: false,
            showRightIcon: true
        },
        {
            label: "Success",
            showLeftIcon: false,
            showRightIcon: false
        }

    ]
}

export const navbar_content = [
    {
        label: "Dashboard",
        showIcon: false
    },
    {
        label: "Campaigns",
        showIcon: true,
        icon: "mingcute:down-fill"
    },
    {
        label: "Audience",
        showIcon: true,
        icon: "mingcute:down-fill"
    },
    {
        label: "Automations",
        showIcon: true,
        icon: "mingcute:down-fill"
    },
]

export const types = [
    {
        label: "Embedded Form",
        content: "Create a form to embed on your website",
        src: "../src/assets/embedded.png",
        id: "embeded_form"
    },
    {
        label: "Landing Page",
        content: "Create a landing page with a form",
        src: "../src/assets/landing.png",
        id: "landing_page"
    },
    {
        label: "Popup Form",
        content: "Add a form that pops up as a box",
        src: "../src/assets/pop_up.png",
        id:"popup_form"
    }
]

export const views = {
    'Type' : 0,
    'Design' : 1,
    'Content' : 2,
    'Targeting' : 3,
    'Behaviour' : 4,
    'Success' : 5
}